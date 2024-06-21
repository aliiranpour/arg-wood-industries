import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import Webroutes from "../../router/router";

const AppContainer = () => {
  return (
    <div className="app-container">
      <Container fluid>
        <BrowserRouter>
          <Webroutes />
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default AppContainer;
