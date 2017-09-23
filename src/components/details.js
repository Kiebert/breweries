import React from 'react';
import PropTypes from 'prop-types';
import './details.css';

const Details = (props) => {

    if (props.item === null) {
        return null;
    }

    return (
        <div className="Popup" onClick={props.onClick}>
            <div className="Details">
                <div className="Details-Name">{props.item.name}</div>
                <div>{props.item.address} </div>
                <div>{props.item.zipcode} </div>
                <div>{props.item.city} </div>
                <br />
                <div>Open:<br />
                    {props.item.open.map(day => {
                        return <div key={day}>{day}</div>
                    })}
                </div>
                <div className="Button-Close Button">X</div>
            </div>
        </div>
    )
}

Details.propTypes = {
    onClick: PropTypes.func,
    item: PropTypes.object
}

Details.defaultProps = {
    onClick: null,
    item: null
}

export default Details;

