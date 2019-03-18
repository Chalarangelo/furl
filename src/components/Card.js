import React from "react";
import CardSection from "./CardSection";

const Card = ({
  width = 'auto',
  children
}) => {
  if (!Array.isArray(children)) children = [children];
  const sections = children.filter(item => CardSection.name == item.type.name);
  return (<div className="card" style={{width: width}}>
    {sections}
  </div>)
}

export { Card, CardSection };