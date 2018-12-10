import React, { Component } from 'react'
import { MDBBtn, MDBIcon } from "mdbreact";
import moment from 'moment'

class MonthPicker extends Component{
    state = {
        selectedDate: moment().locale('ru')
    }

    render (){
        return (
            <div className="clearfix">
                <MDBBtn outline color="primary" className="float-left" onClick = {this.subtractMonth}>
                    <MDBIcon  icon="angle-double-left" className="mr-0 cursor-pointer"/>
                 </MDBBtn>
                                {this.state.selectedDate.format('MMM YYYY')}
                <MDBBtn outline color="primary" className="float-right" onClick = {this.addMonth}>
                    <MDBIcon  icon="angle-double-right" className="mr-0 cursor-pointer"/>
                 </MDBBtn>
            </div>
        );
    }

    subtractMonth = () => {
        this.setState({
            selectedDate: this.state.selectedDate.subtract(1, 'months')
        })
    }

    addMonth = () => {
        this.setState({
            selectedDate: this.state.selectedDate.add(1, 'months')
        })
    }
}



export default MonthPicker
