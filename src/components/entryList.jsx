import React, { Component } from 'react';
import Entry from './entry';

class EntryList extends Component {
    
    render() { 
        return ( 
            <div style={{boxSizing: 'border-box'}}>
                {this.props.pokemon.map(pokemon => 
                    <Entry
                        number={pokemon.number}
                        shiny={pokemon.shiny}
                        caught={pokemon.owned}
                    />
                )}
            </div>
         );
    }
}
 
export default EntryList;