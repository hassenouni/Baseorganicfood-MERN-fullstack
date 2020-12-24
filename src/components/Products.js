import React from "react";
import {connect } from "react-redux";
import { initialCatalog } from "../actions/catalogActions";
import Product from "./Product";
import filterProducts from "../selectors/filterProducts";
import "../styles/Products.css";


class Products extends React.Component {
  componentWillMount () {
    this.props.initialCatalog();
  }

 render () {
   return (
     <div className="products">
     {this.props.catalog.map((item) => {
       return <Product item={item} />
     })}
     </div>
     
     
        )
 }
 }

const mapStateToProps = (state) => ({
  catalog : filterProducts (state.catalog, state.filters)
});

const mapDispatchToProps = (dispatch) => ({
  initialCatalog: (dispatch) => initialCatalog
});

export default connect(mapStateToProps,mapDispatchToProps)(Products);
