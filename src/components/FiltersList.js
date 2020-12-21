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
    this.setState ({open: item.state.open } );
  };

  render() {

    return (
    <div className="flitersList">
      <List>
      {/* <ListItem onClick ={this.handleClick}>
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
      <ListItem primarytext="Santé Vitalité"></ListItem> */}
     <Subheader style={{fontSize:'16px', fontWeight: 'bold'}}>
     Recherché par:
     </Subheader>
     <ListItem 
     primarytext="Prix"
     open={this.state.open}
     onClick={this.handleClick}
     onNestedListToggle = {this.handleNestedListToggle}
     nestedItems ={[
       <ListItem key={1} primarytext="< 10 € " leftCheckbox={<Checkbox />} />,
       <ListItem key={1} primarytext="< 10 € - 25 € " leftCheckbox={<Checkbox />} />,
       <ListItem key={1} primarytext="< 25 € - 50 € " leftCheckbox={<Checkbox />} />,
       <ListItem key={1} primarytext="> 100 € " leftCheckbox={<Checkbox />} />

     ]}
      />

      <ListItem 
     primarytext="Nos Marques"
     open={this.state.open}
     onClick={this.handleClick}
     onNestedListToggle = {this.handleNestedListToggle}
     nestedItems ={[
       <ListItem key={1} primarytext="123 Nous Irons au Bois " leftCheckbox={<Checkbox />} />,
       <ListItem key={1} primarytext="Aagaard" leftCheckbox={<Checkbox />} />,
       <ListItem key={1} primarytext="Beliflor" leftCheckbox={<Checkbox />} />,
       <ListItem key={1} primarytext="Bio Idea" leftCheckbox={<Checkbox />} />,
       <ListItem key={1} primarytext="Florame" leftCheckbox={<Checkbox />} />

     ]}
      />
      
      <ListItem 
            primaryText="Color"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem key={1} primaryText="Black" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="White" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="Grey" leftCheckbox={<Checkbox />} />
            ]}
          />

            <ListItem 
            primaryText="Cosmetique Bio"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem key={1} primaryText="Beauté Visage Naturel" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="Beauté Bio Corps" leftCheckbox={<Checkbox />} />
            ]}
          />

          <ListItem 
            primaryText="Alimentation Bio"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem key={1} primaryText="Epicerie sucrée" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="Epicerie salée" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="Cuisine du monde" leftCheckbox={<Checkbox />} />
            ]}
          />

           <ListItem 
            primaryText="Bébé & Enfant"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem key={1} primaryText="Alimentation Bébé Bio" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="Lait Infantile" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="toilette Bébé Bio" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="couche bio jetable" leftCheckbox={<Checkbox />} />
            ]}
          />

          <ListItem 
            primaryText="Boisson Bio"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem key={1} primaryText="Jus de fruit Bio" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="Jus de légumes Bio" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="café bio" leftCheckbox={<Checkbox />} />
            ]}
          />

            <ListItem 
            primaryText="Huile essentielle"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem key={1} primaryText="Huile essentielle Bio" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="Peaux & Cheveux" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="Antiviral" leftCheckbox={<Checkbox />} />
            ]}
          />

          <ListItem 
            primaryText="Santé Vitalité"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem key={1} primaryText="Articulation Bio" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="Cardio-vasculaire Bio" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="Minceur" leftCheckbox={<Checkbox />} />
            ]}
          />


           <ListItem 
            primaryText="Maison Ecologique"
            open={this.state.open}
            onClick={this.handleClick}
            onNestedListToggle={this.handleNestedListToggle}
            nestedItems={[
              <ListItem key={1} primaryText="Produit d'entretien écologique" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="Droguerie écologique" leftCheckbox={<Checkbox />} />,
              <ListItem key={1} primaryText="Entretien linge écologique" leftCheckbox={<Checkbox />} />
            ]}
          />

     
  
  

      </List>
     
    
    
    </div>

    
    )
  }
}

export default FiltersList;
