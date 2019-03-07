import React from 'react';

var Button = function Button(props) {
  return React.createElement("button", null, props.label);
};

export { Button };
