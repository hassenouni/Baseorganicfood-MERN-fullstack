import React, { Component } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Collapse,
  Subheader,
} from "material-ui";
import ExpandLess from "material-ui-icons/ExpandLess";
import ExpandMore from "material-ui-icons/ExpandMore";
import "../styles/FiltersList.css";

class FiltersList extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {

    return (
    <div className="flitersList">
      <List>
      <ListItem onClick ={this.handleClick}>
      {this.state.open ? <ExpandLess /> : <ExpandMore/>}
      </ListItem>
      <ListItem primarytext="Nos Marques"></ListItem>
      <ListItem primarytext="Cosmetique Bio"></ListItem>
      <ListItem primarytext="Alimentation Bio"></ListItem>
      <ListItem primarytext="Boisson Bio"></ListItem>
      <ListItem primarytext="Bébé & Enfant"></ListItem>
      <ListItem primarytext="Maison Ecologique"></ListItem>
      <ListItem primarytext="Huile essentielle"></ListItem>
      <ListItem primarytext="Soins Bio"></ListItem>
      <ListItem primarytext="Santé Vitalité"></ListItem>

     
  
  

      </List>
     
    
    
    </div>

    
    )
  }
}

export default FiltersList;
