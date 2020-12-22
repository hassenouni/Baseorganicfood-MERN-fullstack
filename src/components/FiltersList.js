import React, { Component } from "react";
import { List, ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";
import Checkbox from "material-ui/Checkbox";
import "../styles/FiltersList.css";

class FiltersList extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleNestedListToggle = (item) => {
    this.setState({ open: item.state.open });
  };

  render() {
    return (
      <div className="flitersList">
        <List>
          {/* <ListItem onClick ={this.handleClick}>
      {this.state.open ? <ExpandLess /> : <ExpandMore/>}
      </ListItem>
      <ListItem primaryText="Nos Marques"></ListItem>
      <ListItem primaryText="Cosmetique Bio"></ListItem>
      <ListItem primaryText="Alimentation Bio"></ListItem>
      <ListItem primaryText="Boisson Bio"></ListItem>
      <ListItem primaryText="Bébé & Enfant"></ListItem>
      <ListItem primaryText="Maison Ecologique"></ListItem>
      <ListItem primaryText="Huile essentielle"></ListItem>
      <ListItem primaryText="Soins Bio"></ListItem>
      <ListItem primaryText="Santé Vitalité"></ListItem> */}
          <Subheader style={{ fontSize: "16px", fontWeight: "bold" }}>
            Recherché par:
          </Subheader>
          <ListItem
            primaryText="Prix"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem
                key={1}
                primaryText="< 10 € "
                leftCheckbox={<Checkbox />}
              />,
              <ListItem
                key={1}
                primaryText="< 10 €-25 € "
                leftCheckbox={<Checkbox />}
              />,
              <ListItem
                key={1}
                primaryText="< 25 €-y50 € "
                leftCheckbox={<Checkbox />}
              />,
              <ListItem
                key={1}
                primaryText="> 100 € "
                leftCheckbox={<Checkbox />}
              />,
            ]}
          />

          <ListItem
            primaryText="Nos Marques"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem
                key={1}
                primaryText="123 Nous Irons au Bois "
                leftCheckbox={<Checkbox />}
              />,
              <ListItem
                key={1}
                primaryText="Aagaard"
                leftCheckbox={<Checkbox />}
              />,
              <ListItem
                key={1}
                primaryText="Beliflor"
                leftCheckbox={<Checkbox />}
              />,
              <ListItem
                key={1}
                primaryText="Bio Idea"
                leftCheckbox={<Checkbox />}
              />,
              <ListItem
                key={1}
                primaryText="Florame"
                leftCheckbox={<Checkbox />}
              />,
            ]}
          />

          <ListItem
            primaryText="Color"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem
                key={1}
                primaryText="Black"
                leftCheckbox={<Checkbox />}
              />,
              <ListItem
                key={1}
                primaryText="White"
                leftCheckbox={<Checkbox />}
              />,
              <ListItem
                key={1}
                primaryText="Grey"
                leftCheckbox={<Checkbox />}
              />,
            ]}
          />

          <ListItem
            primaryText="Cosmetique Bio"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem
                key={1}
                primaryText="Beauté Visage Naturel"
                leftCheckbox={<Checkbox />}
              />,
              <ListItem
                key={1}
                primaryText="Beauté Bio Corps"
                leftCheckbox={<Checkbox />}
              />,
            ]}
          />

          <ListItem
            primaryText="Alimentation Bio"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem
                key={1}
                primaryText="Epicerie sucrée"
                leftCheckbox={<Checkbox />}
              />,
              <ListItem
                key={1}
                primaryText="Epicerie salée"
                leftCheckbox={<Checkbox />}
              />,
              <ListItem
                key={1}
                primaryText="Cuisine du monde"
                leftCheckbox={<Checkbox />}
              />,
            ]}
          />

          <ListItem
            primaryText="Bébé & Enfant"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem
                key={1}
                primaryText="Alimentation Bébé Bio"
                leftCheckbox={<Checkbox />}
              />,
              <ListItem
                key={1}
                primaryText="Lait Infantile"
                leftCheckbox={<Checkbox />}
              />,
              <ListItem
                key={1}
                primaryText="toilette Bébé Bio"
                leftCheckbox={<Checkbox />}
              />,
              <ListItem
                key={1}
                primaryText="couche bio jetable"
                leftCheckbox={<Checkbox />}
              />,
            ]}
          />

          <ListItem
            primaryText="Boisson Bio"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem
                key={1}
                primaryText="Jus de fruit Bio"
                leftCheckbox={<Checkbox />}
              />,
              <ListItem
                key={1}
                primaryText="Jus de légumes Bio"
                leftCheckbox={<Checkbox />}
              />,
              <ListItem
                key={1}
                primaryText="café bio"
                leftCheckbox={<Checkbox />}
              />,
            ]}
          />

          <ListItem
            primaryText="Huile essentielle"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem
                key={1}
                primaryText="Huile essentielle Bio"
                leftCheckbox={<Checkbox />}
              />,
              <ListItem
                key={1}
                primaryText="Peaux & Cheveux"
                leftCheckbox={<Checkbox />}
              />,
              <ListItem
                key={1}
                primaryText="Antiviral"
                leftCheckbox={<Checkbox />}
              />,
            ]}
          />

          <ListItem
            primaryText="Santé Vitalité"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem
                key={1}
                primaryText="Articulation Bio"
                leftCheckbox={<Checkbox />}
              />,
              <ListItem
                key={1}
                primaryText="Cardio-vasculaire Bio"
                leftCheckbox={<Checkbox />}
              />,
              <ListItem
                key={1}
                primaryText="Minceur"
                leftCheckbox={<Checkbox />}
              />,
            ]}
          />

          <ListItem
            primaryText="Maison Ecologique"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem
                key={1}
                primaryText="Produit d'entretien écologique"
                leftCheckbox={<Checkbox />}
              />,
              <ListItem
                key={1}
                primaryText="Droguerie écologique"
                leftCheckbox={<Checkbox />}
              />,
              <ListItem
                key={1}
                primaryText="Entretien linge écologique"
                leftCheckbox={<Checkbox />}
              />,
            ]}
          />
        </List>
      </div>
    );
  }
}

export default FiltersList;
