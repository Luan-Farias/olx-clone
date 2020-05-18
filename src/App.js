import React from 'react';
import { connect } from "react-redux";
import Routes from './routes';

function App(props) {
  return (
    <Routes />
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
