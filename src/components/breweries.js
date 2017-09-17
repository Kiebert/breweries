import React from 'react';
import './breweries.css';

class Breweries extends React.Component {

    render() {
        const items = this.props.items;
        return (
            <div className="Brewery-List">
                {items !== null && items.map(item => {
                    return (
                        <div className="Brewery-Item"
                            data={item}
                            key={item.name}
                            onClick={() => this.props.onClick(item)}
                        >{item.name}</div>
                    );
                })}
            </div>
        )
    }
}

export default Breweries;