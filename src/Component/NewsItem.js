import React,{Component} from "react";

export default class NewsItem extends Component{


    render(){
        let {Title,Description,imgUrl,newsUrl,author,date,source}=this.props;
        return(
            <>
            <div className="card my-2" style={{width: 'fit-content'}}>
            <div style={   {display: 'flex',justifyContent: 'flex-end', alignItems: 'center',position: 'absolute',right: '5px'}}> 
            
            <span className=" badge  bg-danger" style={{width: 'fit-content', height:'23px'}}>{source}</span>

            </div>
            <img
  src={imgUrl}
  className="card-img-top"
  alt="News"
  onError={(e) => {
    e.target.onerror = null; // Prevent infinite loop
    e.target.src = "https://static.files.bbci.co.uk/ws/simorgh-assets/public/news/images/metadata/poster-1024x576.png"; // Default image
  }}
/>

  <div className="card-body">
    <h5 className="card-title">{Title}</h5>
    <p className="card-text" style={{textOverflow:"ellipsis"}} >{Description} </p>
    <p className="card-text"><small className="text-body-secondary">By {author} on {(new Date(date)).toUTCString()}</small></p>
    <a href={newsUrl} target="_" className="btn btn-sm btn-dark">ReadMore</a>
{/* <h6 className="card-title" style={{marginTop: '0.7rem'}}><span>Author:</span>{Author}</h6>     */}
  </div>
</div>


            </>
        );



    }
}