import React, { Component } from 'react';
import {
  Container,
  Column,
  Row,
  Cards,
  CardContainer,
  Button,
} from './reducer';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Column
            background="lightblue"
            justify="space-around"
            pad="2rem"
            textalign="center"
          >
            <h1 class="headertext"> Notes </h1>
            <Column>
              <Button margin="2rem"> New Note </Button>
              <Button> View Notes </Button>
            </Column>
            <Button> Login / Logout </Button>
          </Column>

          <Column width="100%">
            <Row background="lightgray" padall="1rem">
              <h1> Cards: </h1>
            </Row>
            <CardContainer>
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </CardContainer>
          </Column>
        </Row>
      </Container>
    );
  }
}

export default App;
