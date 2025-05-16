
import React,{Component} from "react";
import Loading from "./loading";
import { Link } from "react-router-dom";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'


export class AboutNews extends Component {

      static defaultProps = {
        country: 'us',
        PageSize: 3,
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

      constructor(props){

        super(props);
        this.state={
            articles:[],
            Loading:false,
            page:1
        }
        document.title='About-NewsRat'
   
    }


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
    
    
        let parsedData = await data.json();
        console.log(parsedData);
    
        this.props.setProgress(100);
    
        this.setState(
          {
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


  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.setState({ page: 1 }, () => {
        this.updateNews();
      });
    }
  }


render(){


    return(
<>

   <div className="container">
          <h1 className="md-1 " style={{ textAlign: 'center', marginBottom: '1.5rem', marginTop: '0.5rem' }}>NewsRat - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>


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

          <div id="page_navigation" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.5rem', marginTop: '0.8rem' }}>
          <Link to="/"> <button type="button"  className="btn btn-info"><i class="fa-solid fa-circle-chevron-down fa-beat" style={{color: "#0a64a9"}}></i>Explore More</button></Link> 

            </div>

          </div>



</>





    )
}





}
export default AboutNews;