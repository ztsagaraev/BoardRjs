import React, { Component } from 'react';

class Item extends Component{
    render (){
        return (
            <div className="card-body  board-item" style={{height:this.props.rowHeight}}>
                {this.props.Item.title}
            </div>
        );
    }
}

export default Item;

