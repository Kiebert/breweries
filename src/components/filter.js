import React from 'react';
import './filter.css';

class Filter extends React.Component {

    render() {
        return (
            <div className="Filter">
                <div className="Filter-Introduction">Fill in a name, zipcode, address or city to find your brewery:</div>
                <input className="Filter-Input" type="text" onChange={this.props.onChange} placeholder="Type here.." />
            </div>
        )
    }
}

export default Filter;