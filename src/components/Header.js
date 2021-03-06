import React from "react";
import { connect } from "react-redux";
import { toggleLogged } from "../actions/testActions";
import { AppBar, FlatButton } from "material-ui";

class Header extends React.Component {
  render() {
    return (
      <AppBar
        style={{ backgroundColor: "#ee7330" }}
        title="Base Organic Food"
        iconElementRight={
          <FlatButton
            label={this.props.isLogged ? "Deconnexion " : "Connexion "}
            onClick={this.props.login}
          />
        }
      />
    );
  }
}

const mapStateToProps = (state) => ({
  isLogged: state.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(toggleLogged()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
