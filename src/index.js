import React from "react";
import ReactDOM from "react-dom";

import Type from "./docs/Type";

import Button from "./components/Button";
import Image from "./components/Image";
import { Layout, Header, Sidebar, Content } from "./components/Layout";
import { Grid, Row, Column as Col } from "./components/Grid";
import { Menu, MenuItem } from "./components/Menu";
import Dropdown from "./components/Dropdown";
import Card from "./components/Card";

import "./styles/index.scss";
import "./index.scss";

ReactDOM.render(<Layout>
  <Header>
    
    <Grid>
      <Row>
        <Col size={[0,32,48,64]} className="borderBottom">&nbsp;</Col>
        <Col size={48} className="borderBottom">
          <Image width={48} height={48} src={process.env.PUBLIC_URL + '/logo.png'} className="margin-ls-50p" />
        </Col>
        <Col size={'fluid'} className="borderBottom"><h2>Furl</h2></Col>
        <Col size={128}>
          <Menu type="horizontal">
            <MenuItem href="https://github.com/Chalarangelo/react-component-library" openIn="external">Github</MenuItem>
          </Menu>
        </Col>
        <Col size={[0, 32, 48, 64]} className="borderBottom">&nbsp;</Col>
      </Row>
    </Grid>
    </Header>
  <Sidebar>
    <Menu type="vertical">
      <MenuItem>Getting Started</MenuItem>
      <MenuItem>
        <Dropdown text="Design Philosophy">
          <MenuItem>CSS Baseline</MenuItem>
          <MenuItem>Typography</MenuItem>
          <MenuItem>Layout</MenuItem>
        </Dropdown>
      </MenuItem>
      <MenuItem>
        <Dropdown text="Components">
          <MenuItem>Button</MenuItem>
          <MenuItem>Card</MenuItem>
          <MenuItem>Dropdown</MenuItem>
          <MenuItem>Grid</MenuItem>
          <MenuItem>Hyperlink</MenuItem>
          <MenuItem>Image</MenuItem>
          <MenuItem>Layout</MenuItem>
          <MenuItem>List</MenuItem>
          <MenuItem>Menu</MenuItem>
          <MenuItem>Table</MenuItem>
        </Dropdown>
      </MenuItem>
    </Menu>
    </Sidebar>
  <Content>
    <Type></Type>
  </Content>
</Layout>, document.getElementById("root"));