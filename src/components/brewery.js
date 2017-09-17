import React from 'react';
import './brewery.css';

class Brewery extends React.Component {

    render() {
        const data = this.props.data;
        return (
            <div className="Popup" onClick={this.props.onCloseBrewery}>
                <div className="Brewery">
                    <div className="Brewery-Name">{data.name} </div>
                    <div>{data.address} </div>
                    <div>{data.zipcode} </div>
                    <div>{data.city} </div>
                    <br/>
                    <div>Open:<br/>
                        {data.open.map(day => {
                            return <div key={day}>{day}</div>
                        })}
                    </div>
                    <div className="btnClose" >X</div>
                </div>
            </div>
        )
    }
}

export default Brewery;

