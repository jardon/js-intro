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
            <span>{this.state.title}</span>
         );
    }
}
 
export default StatefulCC;