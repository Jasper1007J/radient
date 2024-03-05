import { Divider } from "@mui/material";

const Header = () =>{
     return(
          <div className="header">
          <h2>Best Website Builders in the US</h2>
                <Divider/>
               <div className="update">
                    <div>
                         <img src={require('./last updated.png')} alt="update"/>
                         <label>Last Updated - February 22, 2020</label>
                    </div>
                    <div>
                         <img src={require('./advertising.png')} alt="advertise"/>
                        <label> Advertising Disclosure</label>
                    </div>
                    <div className="relavant">
                         <label>Top Relevant</label>
                         <img src={require('./relavant.png')} alt="relavant" />
                    </div> 
               </div>
                <Divider/>
                <div className="breadcrumb-header">
                         <label>Tools</label>
                         <label>AWS Builder</label>
                         <label>Start Build</label>
                         <label>Build Supplies</label>
                         <label>Tooling</label>
                         <label>BlueHosting</label>
                    </div>
                <div className="breadcrumbs">
                    <label>Home</label>
                    <img src={require('./Vector.png')} alt="arrow"/>
                    <label>Hosting for all</label>
                    <img src={require('./Vector.png')} alt="arrow"/>
                    <label>Hosting</label>
                    <img src={require('./Vector.png')} alt="arrow"/>
                    <label>Hosting 6</label>
                    <img src={require('./Vector.png')} alt="arrow"/>
                    <label>Hosting 5</label>
                </div>
          </div>
     )
}

export default Header;