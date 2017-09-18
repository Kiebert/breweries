import React from 'react';
import './list.css';
import ListItem from './../containers/listitem';

class List extends React.Component {

    render() {
        const items = this.props.items;
        return (
            <div className="List">
                {items !== null && items.map(item => {
                    return (
                        <ListItem item={item} key={item.name} />
                    );
                })}
            </div>
        )
    }
}

export default List;