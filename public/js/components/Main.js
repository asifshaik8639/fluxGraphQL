import React from "react";
import API from '../API';
import LinkStore from "../stores/LinkStore";


let _getAppState = () => {
    return { links: LinkStore.getAll()};
};

class Main extends React.Component {
    
  constructor(props) {
        super(props);
        this.state = _getAppState();
        this.onChange = this.onChange.bind(this);
       // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
  }     
 
 componentDidMount() {
   
     
 } 
    
 componentWillUnmount() {     
    LinkStore.removeListener("change", this.onChange); 
 }    
    
 onChange() {
     console.log('In main onChange');
     this.setState(_getAppState());     
 }
 
  handleClick() {
    console.log('Clicked on handleClick ');
    API.fetchLinks();
    console.log('Main class fetch links data',API.fetchLinks());
    LinkStore.on("change", this.onChange);
  }
    
 
  render() {
      
      let tableStyle = {          
          borderCollapse: "collapse",
          width: "100%",
          border: "1px solid #333"
          
      };
      
  
    let data =  {        
        textAlign: "left",
        padding: "8px",
        border: "1px solid #ddd"
    };
      
      
   let buttonStyle =  {
       backgroundColor: "#FFC200",
       border : "none",
       color: "black",
       padding: "7px 23px",
       textAlign: "center",
       textDecoration: "none",
       display: "inline-block",
       fontSize: "16px",
       margin: "4px 2px",
       cursor: "pointer",
       
    }
      
    let header = {
        textAlign : "centre",
        padding: "8px",        
        color: "black",
        borderBottom: "2px solid black"
    }   
    
    let rootContainer = {
        width: "100%",
        display: "table",
        marginBottom: "15px"
    }
    
    let containerBox = {        
        padding: "10px",
        backgroundColor: "#eee",
        color: "white",
        border: "1px solid #ddd",
        float: "left",
        width: "98%",
        marginBottom: "10px",
        boxShadow:"0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)"
        
    }   
    
    let tableborder = {
        border: "1px solid #333",
        display: "table",
        width: "100%",
        boxShadow:"0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)"
    }
    
    let rootHeaderStyle = {
        textAlign: "center",
        fontSize: "30px"
    }
    
    let dataLinks = this.state.links;
    console.log('dataLinks.length =>',dataLinks.length);  

let content = this.state.links.map(link => {
        
     return  <tr key={link._id}>
                <td style={data}>{link._id}</td>
                <td style={data}>{link.title}</td>
                <td style={data}><a target="_blank" href={link.url}>{link.url}</a></td>
              </tr>           
          
    });  
                   
    return (
        <div>
         <h1 style={rootHeaderStyle}>Technologies and Tools being used along with GraphQL</h1>
        
        <div style={rootContainer}>        
            <div style={containerBox}>
                <h1> Client side </h1>
                <ul>
                    <li><b> React </b>- A Javascript library for building User Interfaces</li>
                    <li><b> Flux </b>- An application architecture for building User Interfaces</li>
                    <li><b> GraphQL </b>- A query language for your API</li>
                    <li><b> Webpack  </b>- A module bundler which is capable of transforming, bundling or packaging, others,.</li>
                    <li><b> Npm </b>- A package manager comes as part of Node for Javascript and the world’s largest sotware registry.</li>
                </ul>
            </div>

            <div style={containerBox}>
                <h1> Server side </h1>
                <ul>
                    <li><b> Node.js </b>- is a platform for building server-side event-driven i/o application using javascript</li>
                    <li><b>Express.js </b>- is a framework based on node.js for building web-application using principles and approaches of node.js</li>                    
                    <li><b> GraphQl Server </b>- This server transpiles the GraphQL sent by the Client </li>
                </ul>
            </div>
            <div style={containerBox}>
                <h1> Database </h1>
                <ul>
                    <li><b> MongoDB </b>- is a document database with the scalability and flexibility that you want with the querying and indexing that you need</li>                
                </ul>
            </div>

            <div style={containerBox}>
                <h1> Unit testing </h1>
                <ul>
                    <li><b> Jasmine </b>- is an open source testing framework for JavaScript</li>
                    <li><b> Karma </b>- Spectacular test runner for Javascript</li>                
                </ul>
            </div>

        </div>
        
        {dataLinks && dataLinks.length === 0 &&
                <button style={buttonStyle} onClick={this.handleClick}>
                            Load Data
                </button>
        }
             {dataLinks && dataLinks.length > 0 &&
                <div style={tableborder}> 
                     <table style={tableStyle}>
                      <tr>
                        <th style={header}>Id</th>
                        <th style={header}>Title</th>                
                        <th style={header}>URL</th>
                      </tr>
                        {content}
                     </table>
                </div>
            }
               
        </div>
    );
  }
}

export default Main;