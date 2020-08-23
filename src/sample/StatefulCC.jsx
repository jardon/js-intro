import React, { Component } from 'react';

class StatefulCC extends Component {
    state = { 
        title: ''
    }

    componentDidMount() {
        this.setState({title: 'StatefulCC'})
    }

    render() { 
        return ( 
            <div>{this.state.title}</div>
         );
    }
}
 
export default StatefulCC;