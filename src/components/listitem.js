import React from 'react';
import './list.css';

class ListItem extends React.Component {

    render() {
        const item = this.props.item;
        return (
            <div
                className="List-Item"
                onClick={() => this.props.onClick(item)}
            >
                {item.name}
            </div>
        );
    }
}

export default ListItem;