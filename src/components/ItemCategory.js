import React, { Component } from 'react';
import { MDBBtnGroup, MDBBtn, MDBIcon, Fa } from "mdbreact";
import Item from './Item';

class ItemCategory extends Component{
    state = {
        isCollapsed: false, 
        isEditable: false
    }

    render (){
        const {rowHeight, itemCategory} = this.props;

        const itemElementList = this.state.isCollapsed && itemCategory.items.map(item => 
            <li key = {item.id} className="list-group-item">
                <Item Item={item} rowHeight={rowHeight}></Item>
            </li>
        )
        const categoryTitle = this.state.isEditable ? 
            <div className="justify-content-between d-flex align-items-center"> 
                <input ref="newCategoryValue" defaultValue={itemCategory.title} style={{height:rowHeight}}/> 
                <MDBBtn outline color="default" className="board-item-btn"  onClick={this.saveCategory}>
                    <MDBIcon icon="save" className="mr-0 cursor-pointer"/>
                </MDBBtn>
            </div> :
            <div className="justify-content-between d-flex align-items-center">
                <div className="d-flex cursor-pointer" onClick = {this.setCollapsed}>
                    <Fa className = "pt-1 mr-1" icon={ this.state.isCollapsed ? "angle-double-right" : "angle-double-down"} />
                    {itemCategory.title}
                </div>
                <MDBBtnGroup>
                    <MDBBtn outline color="primary" className="board-item-btn">
                        <MDBIcon id = "addCategoryIcon" icon="plus" className="mr-0 cursor-pointer"/>
                    </MDBBtn>
                    <MDBBtn outline color="primary" className="board-item-btn" onClick={this.setEditable}>
                        <MDBIcon icon="edit" className="mr-0 cursor-pointer"/>
                    </MDBBtn>
                </MDBBtnGroup>
            </div>;

        return (
            <div className="card">
                <div className="card-header board-item" style={{height:rowHeight}}>
                    {categoryTitle}
                </div>
            
                <div className="board-item">
                    <ul className="list-group list-group-flush">
                        {itemElementList}
                    </ul>
                </div>
            </div>
        );
    }

    saveCategory = () => {
        var value = this.refs.newCategoryValue.value;
        if(this.props.saveCategory){
            this.props.saveCategory(value, this.props.itemCategory);
        }

        this.setState({
            isEditable: false
        })
    }

    setEditable = () => {
        this.setState({
            isEditable: true
        })
    }

    setCollapsed = () => {
        this.setState({
            isCollapsed: !this.state.isCollapsed
        })
    }
}

export default ItemCategory;