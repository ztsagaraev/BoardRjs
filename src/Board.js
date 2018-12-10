import React, { Component } from 'react';
/*import logo from './logo.svg';*/
/*import 'bootstrap/dist/css/bootstrap.css';*/
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './Board.css';

import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
  CardHeader,
  CardFooter,
  Button,
  Col,
  Row,
  Nav,
  NavItem,
  NavLink,
  CardGroup,
  Jumbotron,
  Container
} from "mdbreact";

import ItemPanel from './components/ItemPanel'
import itemCategories from './StaticItemList'
import MonthPicker from './components/MonthPicker'

class Board extends Component {
  render() {
    return (
      <div className="Board">
            <Row>
                <Col size="2" className="border pr-0">
                  <ItemPanel itemCategories={itemCategories} panelTitle ="Category List" rowHeight={40}></ItemPanel>
                </Col>
                <Col size="10" className="border pr-0">
                  Right Panel
                  <MonthPicker> </MonthPicker>
                </Col>
            </Row>
      </div>
    );
  }
}

export default Board;
