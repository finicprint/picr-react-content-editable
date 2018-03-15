# Picr react content editable
A simple implementation of content editable that autosizes input/textarea with minimum Javascript.

## Installation
`npm install picr-react-content-editable`

## The idea
The idea is pretty simple. Input field/textarea renders as absolute positioned element in a wrapper with height and width set to 100%. Input/Textarea value renders in the wrapper with transparent color that makes the text invisible and stretches the wrapper.
Since the field has the same font style with the exception of the color, it has the same dynamic dimensions.


## How to use

[Demo on Codesandbox](https://codesandbox.io/s/kk84o6r9pr)

```javascript

import React, { Component } from 'react';
import ContentEditable from 'picr-react-content-editable';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  onInputChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <ContentEditable
        onChange={this.onInputChange}
        value={this.state.value}
      />
    );
  }
}

export default App;

```
## Props


| Prop          | Description                  | Type   | Default |
|:--------------|:-----------------------------|:-------|:--------|
|className      | component wrapper class name | string | '' |
|fieldClassName | input/textarea class name | string | '' |
|customElement  | custom element that renders instead of default input/textarea | React component, DOM | null
|type           | type of field element | string ('input\|textarea') | 'input'
|onChange       | input/textarea onchange callback | function | `Required`
| value         | input/textarea value | string | `Required`
