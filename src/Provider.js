import React from 'react';
import MyContext from './MyContext';
import Proptypes from 'prop-types';

class Provider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      red: false,
      blue: false,
      yellow: false,
      color: 'red',
    };

    this.carHandle = this.carHandle.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }

  changeSignal(color) {
    this.setState({color});
  }

  carHandle(car, side) {
    this.setState({ ...this.state, [car]: side, } );
  }

  render() {
    const contextObj = {
      ...this.state,
      moveCar: this.carHandle,
      changeSignal: this.changeSignal,
    };
    const { children } = this.props;
    return (
      <MyContext.Provider value={ contextObj }>
        { children }
      </MyContext.Provider>
    );
  }
}

Provider.propTypes = {
  children: Proptypes.node.isRequired,
};

export default Provider;