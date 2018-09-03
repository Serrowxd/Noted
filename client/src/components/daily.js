import React from 'react';
import { Column, CardContainer, Row } from '../reducer';

const ContainedView = props => {
  return (
    <Column width="100%">
      <Row styledcolor padall="1rem">
        <h1> Daily </h1>
      </Row>
      <CardContainer styledcolor styledtemp>
        <Row innercard>
          <h3> Daily! </h3>
        </Row>
      </CardContainer>
    </Column>
  );
};

export default ContainedView;
