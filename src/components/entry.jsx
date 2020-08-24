import React, { Component } from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';


class Entry extends Component {
    constructor(props){
        super(props)
        this.state = { 
            data: null,
            caught: this.props.caught ? this.props.caught : false
        }
    }

    getData = async () => await axios.get('https://pokeapi.co/api/v2/pokemon/' + this.props.number);

    catch = () => this.setState({caught: true})

    componentDidMount() {
        this.getData()
        .then(data => this.setState({data}))

    }

    render() { 
        console.log(this.state)

        return ( 
        <Paper elevation={3} style={{padding: 20, margin: 20, width: '120px'}}>
            {this.state.data !== null && 
            <div>
                <Typography>{this.state.data.data.name}</Typography>
                <Divider/>
                {this.props.shiny ? 
                <img src={this.state.data.data.sprites.front_shiny}/> : 
                <img src={this.state.data.data.sprites.front_default}/>}
                
                <div>
                    {this.state.data.data.types.map(type => <Chip size="small" label={type.type.name}/>)}
                    {this.state.caught ? 
                    <Chip size='small' label='owned'/> :
                    <Button variant="outlined" color="primary" size='small' onClick={() => this.catch()}>catch!</Button>}
                </div>
            </div>}
        </Paper>
         );
    }
}
 
export default Entry;