import React from "react";
import { Link } from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";
import NextWeekIcon from "@material-ui/icons/NextWeek";
import "../styles/Product.css";

const Product = ({ item }) => {
  return (
    <div className="product">
      <img src={item.info.photo} />
      <div className="content">
        <div className="content-left">
          <h3>{item.info.name}</h3>
          <div>
            <b>Poids: </b>
            <span>{item.info.Poids}</span>
          </div>
          <div>
            <b>Spécificité: </b>
            <span>{item.info.Spécificité} </span>
          </div>
          <div>
            <b>Usage: </b>
            <span>{item.info.Usage} </span>
          </div>
          <div>
            <b>Ingrédients: </b>
            <span>{item.info.Ingrédients}</span>
          </div>
        </div>
        <div className="content-right">
          <h2>{item.info.prix}</h2>
          <RaisedButton
            containerElement={<Link to={`/products/${item.id}`} />}
            className="btn"
            label="see more"
            labelPosition="before"
            primary={true}
            icon={<NextWeekIcon style={{ color: "#ee7330", fontSize: 50 }} />}
          />
        </div>
      </div>
    </div>
  );
};
export default Product;
