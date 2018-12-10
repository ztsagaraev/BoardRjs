import React, { Component } from 'react';
import { MDBBtnGroup, MDBBtn, MDBIcon } from "mdbreact";
import ItemCategory from './ItemCategory';


class ItemPanel extends Component{
    state = {
        itemCategories: this.props.itemCategories, 
        isEditable: false
    }

    render (){
        const rowHeight = Math.max(this.props.rowHeight, 24);
  
        const categoryElementList = this.state.itemCategories.map(category=> 
            <li key = {category.id} className="list-group-item">
                <ItemCategory itemCategory={category} rowHeight={rowHeight} saveCategory={this.saveCategoryText}></ItemCategory>
            </li>
        )

        return (
            <div className="box">
                <ul className="list-group list-group-flush">
                    <li key = '0' className="list-group-item">
                        <div className="card-header board-item">
                            <div className="justify-content-between d-flex align-items-center">
                                {this.props.panelTitle}
                                <MDBBtnGroup>
                                    <MDBBtn outline color="primary" className="board-item-btn">
                                        <MDBIcon id = "addCategoryIcon" icon="plus" className="mr-0 cursor-pointer"/>
                                    </MDBBtn>
                                </MDBBtnGroup>
                            </div>
                        </div>
                    </li>
                    {categoryElementList}
                </ul>

            </div>
        );
    }

    saveCategoryText = (newText, category) => {
        var categories = this.state.itemCategories
        var categoryToSave = categories.find(cat=> cat.id === category.id);
        if(categoryToSave){
            categoryToSave.title = newText;
            this.setState({itemCategories: categories});

            if(this.props.saveCategoryText){
                this.props.saveCategoryText(newText, categoryToSave);
            }
        }
    }
}

export default ItemPanel;