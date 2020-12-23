import React, { Component } from "react";
import { connect } from 'react-redux';
import { List, ListItem } from "material-ui/List";
import Subheader from "material-ui/Subheader";
import Checkbox from "material-ui/Checkbox";
import { setFilter } from "../actions/filterActions";
import "../styles/FiltersList.css";


const styles = {
  checkbox : {
    marginLeft: 20
  }
}



class FiltersList extends React.Component {
  
  handleCheck = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    this.props.setFilter(e.target.name, e.target.value);

  };

  render() {
    return (
      <div className="flitersList">
        <List>
          {/* <ListItem onClick ={this.handleClick}>
      {this.state.open ? <ExpandLess /> : <ExpandMore
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
            hoverColor={'#ee7330'}
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox style={styles.checkbox} label="0 €-10 € "
                 name="prix" value="0 €-10 €" onCheck ={this.handleCheck} 
              />,
              <Checkbox style = {styles.checkbox} label="10 €-25 € "
                 name="prix" value="10 €-25 €" onCheck ={this.handleCheck} 
              />,
              <Checkbox style = {styles.checkbox} label="25 €-50 € "
                 name="prix" value="25 €-50 €" onCheck ={this.handleCheck} 
              />,
              <Checkbox style = {styles.checkbox} label="> 100 € "
                 name="prix" value="> 100 €" onCheck ={this.handleCheck} 
              />,
            ]}
          />

          <ListItem
            primaryText="Nos Marques"
            hoverColor={'#ee7330'}
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox style = {styles.checkbox} label="123 Nous Irons au Bois "
                 name="Nos Marques" value="123 Nous Irons au Bois" onCheck={this.handleCheck} 
              />,
              <Checkbox style = {styles.checkbox} label="Aagaard"
                 name="Nos Marques" value="Aagaard" onCheck={this.handleCheck} 
              />,
              <Checkbox style = {styles.checkbox} label="Beliflor"
                 name="Nos Marques" value="Beliflor" onCheck={this.handleCheck} 
              />,
              <Checkbox style = {styles.checkbox} label="Bio Idea"
                 name="Nos Marques" value="Bio Idea" onCheck={this.handleCheck} 
              />,
              <Checkbox style = {styles.checkbox} label="FloBébé & Enfante"
                 name="Nos Marques" value="FloBébé & Enfante" onCheck={this.handleCheck} 
              />,
            ]}
          />

          <ListItem
            primaryText="Color"
            hoverColor={'#ee7330'}
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox style = {styles.checkbox} label="Black"
                 name="color" value="Black" onCheck={this.handleCheck} 
              />,
              <Checkbox style = {styles.checkbox} label="White"
                 name="color" value="White" onCheck={this.handleCheck} 
              />,
              <Checkbox style = {styles.checkbox} label="Grey"
                 name="color" value="Grey" onCheck={this.handleCheck} 
              />,
            ]}
          />

          <ListItem
            primaryText="Cosmetique Bio"
            hoverColor={'#ee7330'}
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox style = {styles.checkbox} label="Beauté Visage Naturel"
                 name="Cosmetique Bio" value="Beauté Visage Naturel" onCheck={this.handleCheck} 
              />,
              <Checkbox style = {styles.checkbox} label="Beauté Bio Corps"
                 name="Cosmetique Bio" value="Beauté Bio Corps" onCheck={this.handleCheck} 
              />,
            ]}
          />

          <ListItem
            primaryText="Alimentation Bio"
            hoverColor={'#ee7330'}
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox style = {styles.checkbox} label="Epicerie sucrée"
                 name="Alimentation Bio" value="Epicerie sucrée" onCheck={this.handleCheck} 
              />,
              <Checkbox style = {styles.checkbox} label="Epicerie salée"
                 name="Alimentation Bio" value="Epicerie salée" onCheck={this.handleCheck} 
              />,
              <Checkbox style = {styles.checkbox} label="Cuisine du monde"
                 name="Alimentation Bio" value="Cuisine du monde" onCheck={this.handleCheck} 
              />,
            ]}
          />

          <ListItem
            primaryText="Bébé & Enfant"
            hoverColor={'#ee7330'}
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox style = {styles.checkbox} label="Alimentation Bébé Bio"
                 name="Bébé & Enfant" value="Alimentation Bébé Bio" onCheck={this.handleCheck} 
              />,
              <Checkbox style = {styles.checkbox} label="Lait Infantile"
                 name="Bébé & Enfant" value="Lait Infantile" onCheck={this.handleCheck} 
              />,
              <Checkbox style = {styles.checkbox} label="toilette Bébé Bio"
                 name="Bébé & Enfant" value="toilette Bébé Bio" onCheck={this.handleCheck} 
              />,
              <Checkbox style = {styles.checkbox} label="couche bio jetable"
                 name="Bébé & Enfant" value="couche bio jetable" onCheck={this.handleCheck} 
              />,
            ]}
          />
          <ListItem
            primaryText="Boisson Bio"
            hoverColor={'#ee7330'}
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox style = {styles.checkbox} label="Jus de fruit Bio"
                 name="Boisson Bio" value="Jus de fruit Bio" onCheck={this.handleCheck} 
              />,
              <Checkbox style = {styles.checkbox} label="Jus de légumes Bio"
                 name="Boisson Bio" value="Jus de légumes Bio" onCheck={this.handleCheck} 
              />,
              <Checkbox style = {styles.checkbox} label="café bio"
                 name="Boisson Bio" value="café bio" onCheck={this.handleCheck} 
              />,
            ]}
          />

          <ListItem
            primaryText="Huile essentielle"
            hoverColor={'#ee7330'}
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox style = {styles.checkbox} label="Huile essentielle Bio"
                 name="Huile essentielle" value="Huile essentielle Bio" onCheck={this.handleCheck} 
              />,
              <Checkbox style = {styles.checkbox} label="Peaux & Cheveux"
                 name="Huile essentielle" value="Peaux & Cheveux" onCheck={this.handleCheck} 
              />,
              <Checkbox style = {styles.checkbox} label="Antiviral"
                 name="Huile essentielle" value="Antiviral" onCheck={this.handleCheck} 
              />,
            ]}
          />

          <ListItem
            primaryText="Santé Vitalité"
            hoverColor={'#ee7330'}
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox style = {styles.checkbox} label="Articulation Bio"
                 name="Santé Vitalité" value="Articulation Bio" onCheck={this.handleCheck} 
              />,
              <Checkbox style = {styles.checkbox} label="Cardio-vasculaire Bio"
                 name="Santé Vitalité" value="Cardio-vasculaire Bio" onCheck={this.handleCheck} 
              />,
              <Checkbox style = {styles.checkbox} label="Minceur"
                 name="Santé Vitalité" value="Minceur" onCheck={this.handleCheck} 
              />,
            ]}
          />

          <ListItem
            primaryText="Maison Ecologique"
            hoverColor={'#ee7330'}
            initiallyOpen={false}
            primaryTogglesNestedList={true}
            nestedItems={[
              <Checkbox style = {styles.checkbox} label="Produit d'entretien écologique"
                 name="Maison Ecologique" value="Produit d'entretien écologique" onCheck={this.handleCheck} 
              />,
              <Checkbox style = {styles.checkbox} label="Droguerie écologique"
                 name="Maison Ecologique" value="Droguerie écologique" onCheck={this.handleCheck} 
              />,
              <Checkbox style = {styles.checkbox} label="Entretien linge écologique"
                 name="Maison Ecologique" value="Entretien linge écologique" onCheck={this.handleCheck} 
              />,
            ]}
          />
        </List>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setFilter : (filterType, filter) => dispatch (setFilter(filterType, filter))


});

export default connect (null, mapDispatchToProps) (FiltersList);
