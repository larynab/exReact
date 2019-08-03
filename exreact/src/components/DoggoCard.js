import React from "react";
import { Button, Image, Container, Icon } from "semantic-ui-react";
import styled from "styled-components";

const AnotherButton = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const CardDiv = styled.div`
  padding: 0.25em 1em;
  margin: 0 auto;
`;

// const ButtonExampleButton = () => <Button>Click Here</Button>

export default function DoggoCard({ imgUrl, dogNumber, doggosstatus }) {
  return (
    <CardDiv>
      <p>{doggosstatus}</p>
      {/* <img src={imgUrl} /> */}
      {/* <Button>Semantic</Button> */}
      <Image src={imgUrl} size="small" bordered />
      <Container textAlign="center">
        <Button>Semantic-UI</Button>
      </Container>
      <p>This is suppose to be centered</p>
      <AnotherButton>styled-components</AnotherButton>
      <Button animated="vertical">
        <Button.Content hidden><p>{dogNumber}</p></Button.Content>
        <Button.Content visible>
          <Icon name="shop" />
        </Button.Content>
      </Button>
    </CardDiv>
  );
}
