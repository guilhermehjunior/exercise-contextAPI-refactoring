import React from 'react';
import MyContext from './MyContext';
import PropTypes from 'prop-types';

class Provider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      red: false,
      blue: false,
      yellow: false,
    };

    this.carHandle = this.carHandle.bind(this);
  }

  carHandle(car, side) {
    this.setState({ ...this.state, [car]: side, } );
  }

  render() {
    const { red, blue, yellow } = this.state;
    const { children } = this.props;
    return (
      <MyContext.Provider value={{ red, blue, yellow, moveCar: this.carHandle }}>
        { children }
      </MyContext.Provider>
    )
  }
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;