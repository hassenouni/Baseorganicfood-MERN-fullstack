import React, { Component } from "react";
import { AppBar, Tabs, Tab } from "material-ui";

class Header extends React.Component {
  render() {
    return (
      <AppBar title="Base Organic Food">
        <Tabs>
          <Tab label="Item1" />
          <Tab label="Item2" />
          <Tab label="Item3" />
          <Tab label="Item4" />
        </Tabs>
      </AppBar>
    );
  }
}

export default Header;
