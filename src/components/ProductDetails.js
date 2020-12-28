import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import RaisedButton from "material-ui/RaisedButton";
import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';


const ProductDetails = ({ product }) => (
  
    <div>
      <h1>{product.info.name}</h1>
      <div className="product-details">
        <div className="product-image">
        <img src={product.info.photo} />
        </div>
        <div className="product-info">
          <table>
            <tr>
              <th>Nom de Produit</th>
              <td>{product.info.name}</td>
            </tr>

            <tr>
              <th>Prix</th>
              <td>{product.info.prix}</td>
            </tr>

            <tr>
              <th>Ingrédients</th>
              <td>{product.info.Ingrédients}</td>
            </tr>

            <tr>
              <th>Spécificité</th>
              <td>{product.info.Spécificité}</td>
            </tr>
            <tr>
              <th>Usage</th>
              <td>{product.info.Usage}</td>
            </tr>
          </table>

          <span className="price-text">Prix : </span>
          <span className="price-num">{product.info.price}</span>
          <span className="price-text">Montant : </span>
        <span><input type ="number" name ="Montant"/></span>
        <RaisedButton
         containerElement={<Link to="/" />}
         className="btn"
         label="Add to cart"
         labelPosition="before"
        primary={true}
        icon={<AddShoppingCart />}
        />
        </div>
    </div>
    </div>
  );


const mapStateToProps = (state, props) => ({
  product: state.catalog.find((item) => item.id == props.match.params.id),
});

export default connect(mapStateToProps)(ProductDetails);
