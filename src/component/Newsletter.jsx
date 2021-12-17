import { Send } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
height: 60vh;
flex-direction: column;
`;
const Title = styled.h1`
   font-size: 70px;
   margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 50px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid #eee;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding: 20px;
  font-size: 16px;
`;
const Button = styled.button`
  flex: 0.75;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description> Get timely update from your favorite products</Description>
            <InputContainer>
                <Input placeholder='Your email'/>
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
