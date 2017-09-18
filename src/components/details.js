import React from 'react';
import './details.css';

class Brewery extends React.Component {

    render() {

        if (this.props.item === null) {
            return null;
        }

        const data = this.props.item;

        return (
            <div className="Popup" onClick={this.props.onClick}>
                <div className="Details">
                    <div className="Details-Name">{data.name} </div>
                    <div>{data.address} </div>
                    <div>{data.zipcode} </div>
                    <div>{data.city} </div>
                    <br />
                    <div>Open:<br />
                        {data.open.map(day => {
                            return <div key={day}>{day}</div>
                        })}
                    </div>
                    <div className="btnClose">X</div>
                </div>
            </div>
        )
    }
}

export default Brewery;

