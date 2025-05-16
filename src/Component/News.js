import React from "react";
import { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./loading";
import PropTypes from 'prop-types'


export default class news extends Component {

  // articles= []


  static defaultProps = {
    country: 'us',
    PageSize: 9,
    category: "general",
  }

  static propTypes = {
    country: PropTypes.string,
    PageSize: PropTypes.number,
    category: PropTypes.string,
    setProgress:PropTypes.func

  }
  //arrow function to  capital first letter
  capitalizeFirstLetter = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  }



  constructor(props) {

    console.log("The constructor runs first of all");

    super(props);
    this.state = {

      articles: [],
      loading: false,
      page: 1,
      next_result: null
    }

    document.title = `${this.capitalizeFirstLetter(this.props.category)}-NewsRat`;

  }

  // //function to handle the click according to the category 
  // async handlecategory(props) {
  //   console.log("Hand Category Click");
  //   this.setState(
  //     {
  //       loading: true

  //     }
  //   );

  //   let url = ` `;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData);

  //   this.setState(
  //     {
  //       category: this.props.category,
  //       articles: parsedData.articles,
  //       loading: false
  //     }
  //   );

  // }

  async updateNews(page = this.state.page) {

    //setting the progress bar at 10% initially
   this.props.setProgress(10);
    //setting loading scanner
    this.setState({
      loading: true
    })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.ApiKey}&page=${page}&pagesize=${this.props.PageSize}`;
    

    //setting progress to 30 %
    this.props.setProgress(30);
    
    let data = await fetch(url);
    
    this.props.setProgress(70);
    console.log(this.props.setProgress);


    let parsedData = await data.json();
    console.log(parsedData);

    this.props.setProgress(100);

    this.setState(
      {
        page: page,
        articles: parsedData.articles,
        loading: false,
        category: this.props.category
      }
    );

  }

  // console.log("Component Did Mount is a part of lifeCycle");
  componentDidMount() {
    this.updateNews();
  }

  //to handle route and change in category
  // componentDidUpdate(prevProps){
  //   //to check if the category changed or not
  //    if(prevProps.category!==this.props.category){
  //    this.updateNews();// re Run the components
  //    }

  // }

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.setState({ page: 1 }, () => {
        this.updateNews();
      });
    }
  }



  //handling previous click
  Previous = async () => {
    //
    //setting loading scanner
    //      this.setState({
    //       loading:true
    //     });


    //  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.ApiKey}&page=${this.state.page-1}&pagesize=${this.props.PageSize}`;
    //  let data= await fetch(url);
    //  let parsedData=await data.json();
    //  console.log(parsedData);

    //  this.setState(
    //   {
    //     page:(this.state.page-1),
    //    articles:parsedData.articles,
    //    loading:false
    //  }
    //  );

    const newpage = this.state.page - 1



    //for checking for next article result and disabling the next button
    let url1 = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.ApiKey}&page=${this.state.page + 2}&pagesize=${this.props.PageSize}`;
    let data1 = await fetch(url1);
    let parsedData1 = await data1.json();
    console.log("next article");
    console.log(parsedData1);


    //to store next page article length and if pagelength=0 then disabling the next button
    this.setState(
      {
        next_result: parsedData1.articles.length

      }
    );
    this.updateNews(newpage);

  };


  //handling next click
  Next = async () => {

    //setting loading scanner
    //   this.setState({
    //     loading:true
    //   });

    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.ApiKey}&page=${this.state.page+1}&pagesize=${this.props.PageSize}`
    // let data= await fetch(url);
    // let parsedData=await data.json();
    // console.log(parsedData);
    // console.log(this.state.articles.length);

    // this.setState(
    //  {
    //   page:(this.state.page+1),
    //   articles:parsedData.articles,
    //   loading:false
    // }
    // );
    // console.log(this.state.page);


    const newpage = this.state.page + 1



    //for checking for next article result and disabling the next button
    let url1 = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.ApiKey}&page=${this.state.page + 2}&pagesize=${this.props.PageSize}`;
    let data1 = await fetch(url1);
    let parsedData1 = await data1.json();
    console.log(parsedData1);


    //to store next page article length and if pagelength=0 then disabling the next button
    this.setState(
      {
        next_result: parsedData1.articles.length

      }
    );

    this.updateNews(newpage);
  };


  render() {

    console.log("Render is running");


    return (

      <>
        <div className="container">
          <h1 className="md-1 " style={{ textAlign: 'center', marginBottom: '1.5rem', marginTop: '5rem' }}>NewsRat - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>


          {/* check if the loading is true the display load image */}
          {this.state.loading && <Loading />}


          <div className="row">
            {this.state.articles.map((element) => {
              return (

                <div className="col-md-4" key={element.url}>
                  <NewsItem Title={element.title ? element.title : ""} Description={element.description ? element.description : ""} imgUrl={element.urlToImage ? element.urlToImage : "https://static.files.bbci.co.uk/ws/simorgh-assets/public/news/images/metadata/poster-1024x576.png"} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt ? element.publishedAt : "Unknown"} source={element.source.name} />

                </div>
              )
            })}

          </div>

          <div id="page_navigation" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '60vw', marginBottom: '0.5rem', marginTop: '0.8rem' }}>
            <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.Previous}>&larr; Previous</button>
            <button type="button" disabled={this.state.next_result === 0} className="btn btn-dark" onClick={this.Next}>Next &rarr;</button>
          </div>

        </div>

      </>
    )
  }








}