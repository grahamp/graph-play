import React from 'react';

require('./App.css');
const vis = require('vis');
import Graph from './graph';

//export default () => (<Graph graph={data}/>, document.body);

/* React.render(<Graph graph={data}/>, document.body);*/

export default class App extends React.Component {

  constructor(props) {
    super(props);
      var dot = 'dinetwork {node[shape=circle]; 1 -> 1 -> 2; 2 -> 3; 2 -- 4; 2 -> 1;7->1;9->1 }';
      this.data = vis.network.convertDot(dot);
  }

  render() {
    return (
      <div>
      <h1 onClick={this.handleClick}> Export </h1>
      <a href="#" className="button" onClick={this.handleClick}>Request Invite</a>
      <Graph graph={this.data}/>
      </div>
    );
  }
   handleClick=()=> {
     console.log("data: ");

    // This probably where you would have an `ajax` call
   this.exportNetwork();
    setTimeout(() => {
      // Completed of async action, set loading state back
      this.setState({isLoading: false});
    }, 2000);
  }
   
     destroyNetwork=() =>{
                network.destroy();
            }

     clearOutputArea=() => {
                //exportArea.value = "";
            }

     addContextualInformation=(elem, index, array) =>{
                this.addId(elem, index);
                this.addConnections(elem, index);
            }
addConnections=(elem, index)=> {
                // need to replace this with a tree of the network, then get child direct children of the element
                elem.connections = this.data.edges[index];
            }
     addId=  (elem, index)=> {
                elem.id = index;
                elem.label = "lab "+index;
            }

       exportNetwork= () => {
              //  let localnetwork = new vis.Network(container, data, {manipulation:{enabled:true}});

               // this.clearOutputArea();

                var nodes = this.objectToArray(this.data.nodes);

                nodes.forEach(this.addContextualInformation);

                // pretty print node data
                var exportValue = JSON.stringify(nodes, undefined, 2);
                console.log("data: "+exportValue);
                //exportArea.value = exportValue;

               // resizeExportArea();
            }
              objectToArray=(obj)=> {
                return Object.keys(obj).map(function (key) { return obj[key]; });
            }

             resizeExportArea=() =>{
                exportArea.style.height = (1 + exportArea.scrollHeight) + "px";
            }


}
