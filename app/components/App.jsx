import React from 'react';

require('./App.css');

import Graph from './graph';

//export default () => (<Graph graph={data}/>, document.body);

/* React.render(<Graph graph={data}/>, document.body);*/

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

 data = {
  nodes: [
      {id: 1, label: 'Node 1'},
      {id: 2, label: 'Node 2'},
      {id: 3, label: 'Node 3'},
      {id: 4, label: 'Node 4'},
      {id: 5, label: 'Node 5'}
    ],
  edges: [
      {from: 1, to: 2},
      {from: 1, to: 3},
      {from: 2, to: 4},
      {from: 2, to: 5}
    ]
};
  render() {
    return (
      <Graph graph={this.data}/>
    );
  }
}
