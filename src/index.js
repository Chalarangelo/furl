import React from "react";
import ReactDOM from "react-dom";

import Type from "./docs/Type";
import ButtonDocs from "./docs/Button";
import CardDocs from "./docs/Card";
import DropdownDocs from "./docs/Dropdown";
import HyperlinkDocs from "./docs/Hyperlink";
import TableDocs from "./docs/Table";
import ImageDocs from "./docs/Image";
import ListDocs from "./docs/List";
import LayoutDocs from "./docs/Layout";

import Button from "./components/Button";
import Image from "./components/Image";
import { Layout, Header, Sidebar, Content } from "./components/Layout";
import { Grid, Row, Column as Col } from "./components/Grid";
import { Menu, MenuItem } from "./components/Menu";
import Dropdown from "./components/Dropdown";
import Card from "./components/Card";

import "./styles/index.scss";
import "./index.scss";
import "prismjs/themes/prism.css";

ReactDOM.render(<Layout>
  <Header outline="shadow">
    <Grid>
      <Row>
        <Col size={['0px', '32px', '48px', '64px']}>&nbsp;</Col>
        <Col size={'48px'}>
          <Image width={40} height={40} src={process.env.PUBLIC_URL + '/logo.png'} className="margin-v-ls-25p"/>
        </Col>
        <Col size={'fluid'} ><h2 className="margin-v-ls-0p">Furl</h2></Col>
        <Col size={'128px'}>
          <Menu type="horizontal">
            <MenuItem href="https://github.com/Chalarangelo/react-component-library" openIn="external">Github</MenuItem>
          </Menu>
        </Col>
        <Col size={['0px', '32px', '48px', '64px']}>&nbsp;</Col>
      </Row>
    </Grid>
    </Header>
  <Sidebar outline="border-right">
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
    <Grid>
      <Row>
        <Col size={["var(--ls-25p)", "var(--ls-75p)", "fluid", "fluid"]}>&nbsp;</Col>
        <Col size={["fluid", "fluid", "var(--ls-800p)", "var(--ls-900p)"]}>
          <Type />
          <LayoutDocs />
          <ButtonDocs />
          <CardDocs />
          <DropdownDocs />
          <HyperlinkDocs />
          <ImageDocs />
          <ListDocs />
          <TableDocs />
        </Col>
        <Col size={["var(--ls-25p)", "var(--ls-70p)", "fluid", "fluid"]}>&nbsp;</Col>
      </Row>
    </Grid>
  </Content>
</Layout>, document.getElementById("root"));