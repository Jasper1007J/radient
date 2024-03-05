import { Divider } from "@mui/material";
import { NavLink } from 'react-router-dom';

const Header = () =>{
     return(
          <div className="header">
          <h2>Best Website Builders in the US</h2>
                <Divider/>
               <div className="update">
                    <div>
                         <img src={require('./last updated.png')} alt="update"/>
                         <NavLink to='/'>Last Updated - February 22, 2020</NavLink>
                    </div>
                    <div>
                         <img src={require('./advertising.png')} alt="advertise"/>
                        <NavLink to='/'> Advertising Disclosure</NavLink>
                    </div>
                    <div className="relavant">
                         <NavLink to='/'>Top Relevant</NavLink>
                         <img src={require('./relavant.png')} alt="relavant" />
                    </div> 
               </div>
                <Divider/>
                <div className="breadcrumb-header">
                         <NavLink to='/'>Tools</NavLink>
                         <NavLink to='/'>AWS Builder</NavLink>
                         <NavLink to='/'>Start Build</NavLink>
                         <NavLink to='/'>Build Supplies</NavLink>
                         <NavLink to='/'>Tooling</NavLink>
                         <NavLink to='/'>BlueHosting</NavLink>
                    </div>
                <div className="breadcrumbs">
                    <NavLink to='/'>Home</NavLink>
                    <img src={require('./Vector.png')} alt="arrow"/>
                    <NavLink to='/'>Hosting for all</NavLink>
                    <img src={require('./Vector.png')} alt="arrow"/>
                    <NavLink to='/'>Hosting</NavLink>
                    <img src={require('./Vector.png')} alt="arrow"/>
                    <NavLink to='/'>Hosting 6</NavLink>
                    <img src={require('./Vector.png')} alt="arrow"/>
                    <NavLink to='/'>Hosting 5</NavLink>
                </div>
          </div>
     )
}

export default Header;