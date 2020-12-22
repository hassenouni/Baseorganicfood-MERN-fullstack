import React, { Component } from "react";
import { connect } from 'react-redux';
import { List, ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";
import Checkbox from "material-ui/Checkbox";
import { setFilter } from "../actions/filterActions";
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

  handleCheck =(e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    this.props.setFilter(e.target.name, e.target.value);

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
                primaryText="0 €-10 € "
                leftCheckbox={<Checkbox name="prix" value="0 €-10 €" onCheck ={this.handleCheck} />}
              />,
              <ListItem
                key={1}
                primaryText="10 €-25 € "
                leftCheckbox={<Checkbox name="prix" value="10 €-25 €" onCheck ={this.handleCheck} />}
              />,
              <ListItem
                key={1}
                primaryText="25 €-50 € "
                leftCheckbox={<Checkbox name="prix" value="25 €-50 €" onCheck ={this.handleCheck} />}
              />,
              <ListItem
                key={1}
                primaryText="> 100 € "
                leftCheckbox={<Checkbox name="prix" value="> 100 €" onCheck ={this.handleCheck} />}
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
                leftCheckbox={<Checkbox name="Nos Marques" value="123 Nous Irons au Bois" onCheck={this.handleCheck} />}
              />,
              <ListItem
                key={1}
                primaryText="Aagaard"
                leftCheckbox={<Checkbox name="Nos Marques" value="Aagaard" onCheck={this.handleCheck} />}
              />,
              <ListItem
                key={1}
                primaryText="Beliflor"
                leftCheckbox={<Checkbox name="Nos Marques" value="Beliflor" onCheck={this.handleCheck} />}
              />,
              <ListItem
                key={1}
                primaryText="Bio Idea"
                leftCheckbox={<Checkbox name="Nos Marques" value="Bio Idea" onCheck={this.handleCheck} />}
              />,
              <ListItem
                key={1}
                primaryText="FloBébé & Enfante"
                leftCheckbox={<Checkbox name="Nos Marques" value="FloBébé & Enfante" onCheck={this.handleCheck} />}
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
                leftCheckbox={<Checkbox name="color" value="Black" onCheck={this.handleCheck} />}
              />,
              <ListItem
                key={1}
                primaryText="White"
                leftCheckbox={<Checkbox name="color" value="White" onCheck={this.handleCheck} />}
              />,
              <ListItem
                key={1}
                primaryText="Grey"
                leftCheckbox={<Checkbox name="color" value="Grey" onCheck={this.handleCheck} />}
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
                leftCheckbox={<Checkbox name="Cosmetique Bio" value="Beauté Visage Naturel" onCheck={this.handleCheck} />}
              />,
              <ListItem
                key={1}
                primaryText="Beauté Bio Corps"
                leftCheckbox={<Checkbox name="Cosmetique Bio" value="Beauté Bio Corps" onCheck={this.handleCheck} />}
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
                leftCheckbox={<Checkbox name="Alimentation Bio" value="Epicerie sucrée" onCheck={this.handleCheck} />}
              />,
              <ListItem
                key={1}
                primaryText="Epicerie salée"
                leftCheckbox={<Checkbox name="Alimentation Bio" value="Epicerie salée" onCheck={this.handleCheck} />}
              />,
              <ListItem
                key={1}
                primaryText="Cuisine du monde"
                leftCheckbox={<Checkbox name="Alimentation Bio" value="Cuisine du monde" onCheck={this.handleCheck} />}
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
                leftCheckbox={<Checkbox name="Bébé & Enfant" value="Alimentation Bébé Bio" onCheck={this.handleCheck} />}
              />,
              <ListItem
                key={1}
                primaryText="Lait Infantile"
                leftCheckbox={<Checkbox name="Bébé & Enfant" value="Lait Infantile" onCheck={this.handleCheck} />}
              />,
              <ListItem
                key={1}
                primaryText="toilette Bébé Bio"
                leftCheckbox={<Checkbox name="Bébé & Enfant" value="toilette Bébé Bio" onCheck={this.handleCheck} />}
              />,
              <ListItem
                key={1}
                primaryText="couche bio jetable"
                leftCheckbox={<Checkbox name="Bébé & Enfant" value="couche bio jetable" onCheck={this.handleCheck} />}
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
                leftCheckbox={<Checkbox name="Boisson Bio" value="Jus de fruit Bio" onCheck={this.handleCheck} />}
              />,
              <ListItem
                key={1}
                primaryText="Jus de légumes Bio"
                leftCheckbox={<Checkbox name="Boisson Bio" value="Jus de légumes Bio" onCheck={this.handleCheck} />}
              />,
              <ListItem
                key={1}
                primaryText="café bio"
                leftCheckbox={<Checkbox name="Boisson Bio" value="café bio" onCheck={this.handleCheck} />}
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
                leftCheckbox={<Checkbox name="Huile essentielle" value="Huile essentielle Bio" onCheck={this.handleCheck} />}
              />,
              <ListItem
                key={1}
                primaryText="Peaux & Cheveux"
                leftCheckbox={<Checkbox name="Huile essentielle" value="Peaux & Cheveux" onCheck={this.handleCheck} />}
              />,
              <ListItem
                key={1}
                primaryText="Antiviral"
                leftCheckbox={<Checkbox name="Huile essentielle" value="Antiviral" onCheck={this.handleCheck} />}
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
                leftCheckbox={<Checkbox name="Santé Vitalité" value="Articulation Bio" onCheck={this.handleCheck} />}
              />,
              <ListItem
                key={1}
                primaryText="Cardio-vasculaire Bio"
                leftCheckbox={<Checkbox name="Santé Vitalité" value="Cardio-vasculaire Bio" onCheck={this.handleCheck} />}
              />,
              <ListItem
                key={1}
                primaryText="Minceur"
                leftCheckbox={<Checkbox name="Santé Vitalité" value="Minceur" onCheck={this.handleCheck} />}
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
                leftCheckbox={<Checkbox name="Maison Ecologique" value="Produit d'entretien écologique" onCheck={this.handleCheck} />}
              />,
              <ListItem
                key={1}
                primaryText="Droguerie écologique"
                leftCheckbox={<Checkbox name="Maison Ecologique" value="Droguerie écologique" onCheck={this.handleCheck} />}
              />,
              <ListItem
                key={1}
                primaryText="Entretien linge écologique"
                leftCheckbox={<Checkbox name="Maison Ecologique" value="Entretien linge écologique" onCheck={this.handleCheck} />}
              />,
            ]}
          />
        </List>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setFilter : (fliterType, filter) => dispatch (setFilter(filterType, filter))


});

export default connect (null, mapDispatchToProps) (FiltersList);
