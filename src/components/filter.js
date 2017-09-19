import React from 'react';
import PropTypes from 'prop-types';
import './filter.css';

class Filter extends React.Component {

    clearInput = () => {
        this.input.value = '';
        this.props.onChange();
    }
    render() {

        const showClearBtn = this.input && this.input.value.length > 0;
        return (
            <div className="Filter">
                <div className="Filter-Introduction">Fill in a name, zipcode, address or city to find your brewery:</div>
                <input className="Filter-Input" type="text" onChange={this.props.onChange} placeholder="Type here.." ref={i => this.input = i} />

                { showClearBtn && 
                    <div className="Filter-Clear" onClick={this.clearInput}>X</div>
                }
            </div>
        )
    }
}

Filter.propTypes = {
    onChange: PropTypes.func
}

Filter.defaultProps = {
    onChange: null
}

export default Filter;