import { Divider } from "@mui/material";

const Header = () =>{
     return(
          <div className="header">
          <h2>Best Website Builders in the US</h2>
                <Divider/>
               <div className="update">
                    <div>
                         <img src={require('./last updated.png')} alt="update"/>
                         <a href="#">Last Updated - February 22, 2020</a>
                    </div>
                    <div>
                         <img src={require('./advertising.png')} alt="advertise"/>
                        <a href="#"> Advertising Disclosure</a>
                    </div>
                    <div className="relavant">
                         <a href="#">Top Relevant</a>
                         <img src={require('./relavant.png')} alt="relavant" />
                    </div> 
               </div>
                <Divider/>
                <div className="breadcrumb-header">
                         <a href="#">Tools</a>
                         <a href="#">AWS Builder</a>
                         <a href="#">Start Build</a>
                         <a href="#">Build Supplies</a>
                         <a href="#">Tooling</a>
                         <a href="#">BlueHosting</a>
                    </div>
                <div className="breadcrumbs">
                    <a href="#">Home</a>
                    <img src={require('./Vector.png')} alt="arrow"/>
                    <a href="#">Hosting for all</a>
                    <img src={require('./Vector.png')} alt="arrow"/>
                    <a href="#">Hosting</a>
                    <img src={require('./Vector.png')} alt="arrow"/>
                    <a href="#">Hosting 6</a>
                    <img src={require('./Vector.png')} alt="arrow"/>
                    <a href="#">Hosting 5</a>
                </div>
          </div>
     )
}

export default Header;