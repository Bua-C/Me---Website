import React, { Component } from "react";
import { Container, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <Container>
        <Button variant="contained" color="primary">
          Open Dialog
        </Button>
        <Link exact to="/about">
          <Button>Go To About</Button>
        </Link>
      </Container>
    );
  }
}

export default Home;