import React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import NextWeekIcon from '@material-ui/icons/NextWeek';
import "../styles/Product.css";

const Product = () => {
  return (
    <div className="product">
      <img src="./img/huile.jpg" />
      <div className="content">
        <div className="content-left">
        <h3> Huile de Rose Musquée du Chili</h3>
        <div>
          <b>Poids: </b>
          <span>30ml</span>
        </div>
        <div>
          <b>Spécificité: </b>
          <span>Huile</span>
        </div>
        <div>
          <b>Usage: </b>
          <span>Peau sèche, Peau normale à mixte, Peau mature</span>
        </div>
        <div>
          <b>Composition: </b>
          <span>
            Acide Alphalinolénique :35%,Vitamines E, Caroténoîdes :
            anti-oxydants
          </span>
          </div>
        </div>
        <div className="content-right">
          <h2>25 €</h2>
          <RaisedButton
          className="btn"
          label="see more"
          labelPosition="before"
          primary={true}
          icon={<NextWeekIcon style ={{color: '#ee7330',fontSize:50 }} /> }
             />
        </div>
      </div>
    </div>
  );
};
export default Product;
