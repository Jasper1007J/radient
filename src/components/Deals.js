import { NavLink } from 'react-router-dom';

export default function Deals() {
     return (
         <div className="deals">
             {/* Header for related deals */}
             <h1>Related deals you might like for</h1>
             {/* Container for the list of deals */}
             <div className="deals-list">
                 {/* Individual deal component */}
                 <div className='deal1'>
                     {/* Image section of the deal */}
                     <div className='img'>
                         <img src={require('./Builder.png')} alt='builder'/>
                     </div>
                     {/* Content section of the deal */}
                     <div className='deal-content'>
                         {/* Links for offers and deal duration */}
                         <div className='offer-links'>
                             <NavLink to='/'>20% Off</NavLink>
                             <NavLink to='/'>Limited time</NavLink>
                         </div>
                         {/* Title of the deal */}
                         <div className='deal-head'>
                             Webbuilder 1
                         </div>
                         {/* Description of the deal */}
                         <div className='deal-body'>
                             Computer Modern classic with Wix support
                         </div>
                         {/* Pricing details of the deal */}
                         <div className='deal-price'>
                             {/* Final discounted price */}
                             <div className='final-price'>$39.96</div>
                             {/* Original price */}
                             <div className='main-price'>$49.96</div>
                             {/* Discount percentage */}
                             <div className='discount'>(20% Off)</div>
                         </div>
                     </div>
                     {/* Button to view the deal */}
                     <div className='deal-btn'>
                         <button className='button'>View Deal</button>
                     </div>
                 </div>

                 <div className='deal1'>
                     {/* Image section of the deal */}
                     <div className='img'>
                         <img src={require('./Builder.png')} alt='builder'/>
                     </div>
                     {/* Content section of the deal */}
                     <div className='deal-content'>
                         {/* Links for offers and deal duration */}
                         <div className='offer-links'>
                             <NavLink to='/'>20% Off</NavLink>
                             <NavLink to='/'>Limited time</NavLink>
                         </div>
                         {/* Title of the deal */}
                         <div className='deal-head'>
                             Webbuilder 1
                         </div>
                         {/* Description of the deal */}
                         <div className='deal-body'>
                             Computer Modern classic with Wix support
                         </div>
                         {/* Pricing details of the deal */}
                         <div className='deal-price'>
                             {/* Final discounted price */}
                             <div className='final-price'>$39.96</div>
                             {/* Original price */}
                             <div className='main-price'>$49.96</div>
                             {/* Discount percentage */}
                             <div className='discount'>(20% Off)</div>
                         </div>
                     </div>
                     {/* Button to view the deal */}
                     <div className='deal-btn'>
                         <button className='button'>View Deal</button>
                     </div>
                 </div>

                 <div className='deal1'>
                     {/* Image section of the deal */}
                     <div className='img'>
                         <img src={require('./Builder.png')} alt='builder'/>
                     </div>
                     {/* Content section of the deal */}
                     <div className='deal-content'>
                         {/* Links for offers and deal duration */}
                         <div className='offer-links'>
                             <NavLink to='/'>20% Off</NavLink>
                             <NavLink to='/'>Limited time</NavLink>
                         </div>
                         {/* Title of the deal */}
                         <div className='deal-head'>
                             Webbuilder 1
                         </div>
                         {/* Description of the deal */}
                         <div className='deal-body'>
                             Computer Modern classic with Wix support
                         </div>
                         {/* Pricing details of the deal */}
                         <div className='deal-price'>
                             {/* Final discounted price */}
                             <div className='final-price'>$39.96</div>
                             {/* Original price */}
                             <div className='main-price'>$49.96</div>
                             {/* Discount percentage */}
                             <div className='discount'>(20% Off)</div>
                         </div>
                     </div>
                     {/* Button to view the deal */}
                     <div className='deal-btn'>
                         <button className='button'>View Deal</button>
                     </div>
                 </div>
                 
                 
             </div>
         </div>
     );
 }
 