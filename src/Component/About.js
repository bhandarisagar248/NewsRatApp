import React ,{Component} from 'react'
import LoadingBar from "react-top-loading-bar"; 
import { AboutNews } from './AboutNews';


export class About extends Component{
    apikey=process.env.REACT_APP_NEWS_API

    state={
        progress:0
      }
    setProgress=(progresses)=>{
      this.setState({progress:progresses});
    }

    render(){

        
        return(

            <>
            <div style={{display:'flex',alignItems: 'flex-start',flexDirection: 'row',justifyContent: 'flex-start', width:'auto'}}>


                <div id='' style={{marginRight:'2rem' ,marginLeft:'5rem'}}>


            <div className="card text-bg-info mb-3" style={{maxWidth: '18rem', marginTop:'5rem'}}>
  <div className="card-header text-center">NewsRat</div>
  <div className="card-body">
    <h5 className="card-title text-center">1. Bold & Impactful</h5>
    <p className="card-text">"In a world full of noise, NewsRat gives you clarity. Fresh headlines, sharp categories, and real-time updates— built to inform and empower."</p>
  </div>
</div>
<div className="card text-bg-warning mb-3" style={{maxWidth: '18rem'}}>
  <div className="card-header text-center">NewsRat</div>
  <div className="card-body">
    <h5 className="card-title text-center">2. Quirky & Catchy</h5>
    <p className="card-text">"NewsRat sniffs out the hottest stories so you don’t have to. From Wall Street to space missions — we’re on it, 24/7."</p>
  </div>
</div>
<div className="card text-bg-danger mb-3" style={{maxWidth: '18rem'}}>
  <div className="card-header text-center">NewsRat</div>
  <div className="card-body">
    <h5 className="card-title text-center">3. Sharp & Direct</h5>
    <p className="card-text">"Cut through the clutter. NewsRat delivers fast, factual, and focused updates on everything from politics to tech — so you can stay sharp, always."</p>
  </div>
</div>
                </div>





            <div className="accordion accordion-flush" id="accordionFlushExample" style={{marginTop:'5rem' ,width:'50%', marginLeft: 'rem'}}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed text-bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      4. Clean & Professional
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body bg-body-tertiary">"NewsRat delivers the latest and most relevant news from around the world — fast. Whether it’s politics, business, science, or technology, <code>.accordion-flush</code>  we’ve got every headline that matters, right at your fingertips."</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed text-bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      5. Tech-Savvy & Modern
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body bg-body-tertiary">"Your one-stop digital newsstand. NewsRat combines real-time updates and smart categorization to keep you informed across business, health, politics, and beyond <code>.accordion-flush</code>  — powered by the speed of NewsAPI."</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed text-bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      6. Friendly & Approachable
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body bg-body-tertiary">"Welcome to NewsRat — where staying updated doesn’t feel overwhelming. We bring the buzz from every corner of the world,  <code>.accordion-flush</code>  from business deals to scientific breakthroughs, all in one smooth scroll."</div>
    </div>
  </div>
  <LoadingBar
    color="#f11946"
    progress={this.state.progress}
    />

  <div id='news'>

    <AboutNews ApiKey={this.apikey} setProgress={this.setProgress} key="general" PageSize={3} category="general"/>

  </div>
</div>
            
            
            
            
            
            

  </div>
            
            
            </>
            
            
            
            
            
        );
        
        
        
        
        
    }











}

export default About;
