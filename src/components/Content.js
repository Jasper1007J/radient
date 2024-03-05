import { NavLink } from 'react-router-dom';

const Content = () =>{
     return(
          <div className='Cont'>
               <div className="content">
              <div className="tag">
              <img  src={require('./trophy.png')} alt="trophy" />
              <label>Best Choice</label>
              </div>
               <div className="context">
               <article className="image">
               <img img src={require('./Builder.png')} alt="builder" />
               <p>Builder 1</p>
               </article>

               <article className='data'>
               <a>
                    <b>WixPro 72-Inch Responsive Website Builder-</b> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)    
               </a>
               <h4>Main highlights</h4>
               <label>
               <p>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
               <NavLink to='/' style={{textDecoration:'none',color:'#1B88F4'}}>Show more <img src={require('./arrow.png')} alt='arrow' /> </NavLink>
               </label>
               </article>

               <article className='RHS'>
                    <div className='rating'>
                         <label className='score'>9.8</label>
                         <label className='rating-score'>Exceptional</label>
                         <img className='stars' src={require('./5star.png')} alt='stars'/>
                    </div>
                    <button type='submit' className='button'>view</button>
               </article>
               </div>
          </div>
          <div className="content">
              <div className="tag">
              <img src={require('./trophy.png')} alt="trophy" />
              <label>Best Choice</label>
              </div>
               <div className='context'>
               <article className='image'>
               <img img src={require('./Builder.png')} alt="builder" />
               <p>Builder</p>
               </article>

               <article className='data'>
               <a>
               <b>SiteCraft 68-Inch Ultimate Web Design Studio-</b> Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)               </a>
               <h4>Main highlights</h4>
               <label>
               <p>[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.</p>
               <NavLink to='/' style={{textDecoration:'none',color:'#1B88F4'}}>Show more <img src={require('./arrow.png')} alt='arrow' /> </NavLink>
               </label>
               </article>

               <article className='RHS'>
                    <div className='rating'>
                         <label className='score'>9.5</label>
                         <label className='rating-score'>Excellent</label>
                         <img className='stars' src={require('./stars.png')} alt='stars'/>
                    </div>
                    <button type='submit' className='button'>view</button>
               </article>
               </div>
          </div>
          <div className="content">
              
               <div className='context'>
               <article className='image'>
               <img img src={require('./Builder.png')} alt="builder" />
               <p>Builder 1</p>
               </article>

               <article className='data'>
               <a>
                    <b>WixPro 72-Inch Responsive Website Builder-</b> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)    
               </a>
               <h4>Main highlights</h4>
               <label>
               <p>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
               <NavLink to='/' style={{textDecoration:'none',color:'#1B88F4'}}>Show more <img src={require('./arrow.png')} alt='arrow' /> </NavLink>
               </label>
               </article>

               <article className='RHS'>
                    <div className='rating' style={{marginTop:'0'}}>
                         <label className='score'>9.3</label>
                         <label className='rating-score'>Exceptional</label>
                         <img className='stars' src={require('./5star.png')} alt='stars'/>
                    </div>
                    <button type='submit' className='button'>view</button>
               </article>
               </div>
          </div>
          <div className="content content4" >
             
               <div className='context'>
               <article className='image'>
               <img img src={require('./Builder.png')} alt="builder" />
               <p style={{marginLeft:'35%'}}>CDK</p>
               </article>

               <article className='data'>
               <a>
               <b>CDK Resposive Builder:</b> An extensive library of widgets and apps, and detailed step-by-step guides
               </a>
               <p style={{color:'#074786'}}>26% off</p>
               <h4>Main highlights</h4>
               <label>
               <p className='highlights'>
                    <div className='points'>
                         <label className='index'>9.9</label>
                         <label className='index-name'>building responsive</label>
                    </div>
                    <div>
                         <label className='index'>8.9</label>
                         <label className='index-name'>Cool</label>
                    </div>
                    <div>
                         <label className='index'>8.9</label>
                         <label className='index-name'>Docs</label>
                    </div>
               </p>
               <label>Why we love it</label>
               <div className='checkbox'>
                    <p><img src={require('./checkbox.png')}alt='checkbox'/> Documentation </p>
                    <p><img src={require('./checkbox.png')}alt='checkbox'/> Easy Use </p>
                    <p><img src={require('./checkbox.png')}alt='checkbox'/> Out of box </p>
               </div>
               <NavLink to='/' style={{textDecoration:'none',color:'#1B88F4'}}>Show more <img src={require('./arrow.png')} alt='arrow' /> </NavLink>
               
               </label>
               </article>

               <article className='RHS'>
                    <div className='rating' style={{marginTop:'0'}}>
                         <label className='score'>9.1</label>
                         <label className='rating-score'>Very Good</label>
                         <img className='stars' src={require('./4star.png')} alt='stars'/>
                    </div>
                    <button type='submit' className='button'>view</button>
               </article>
               </div>
          </div>
          </div>
     )
}

export default Content;