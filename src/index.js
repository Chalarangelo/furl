import React from "react";
import ReactDOM from "react-dom";

import Type from "./docs/Type";

import Button from "./components/Button";
import {Layout, Header, Sidebar, Content} from "./components/Layout";
import Card from "./components/Card";

import "./styles/index.scss";
import "./index.scss";

ReactDOM.render(<Layout>
  <Header>Header</Header>
  <Sidebar>Sidebar</Sidebar>
  <Content>
    <Type></Type>
  </Content>
</Layout>, document.getElementById("root"));