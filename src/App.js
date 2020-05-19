import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from "react-redux";

import Routes from './routes';
import { Template } from './components/MainComponents';
import Header from './components/partials/Header'
import Footer from './components/partials/Footer';
import GlobalStyle from './style';

function App(props) {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Template>
        <Header />

        <Routes/>

        <Footer/>
      </Template>
    </BrowserRouter>
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
