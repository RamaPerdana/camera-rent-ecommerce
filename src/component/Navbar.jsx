import React from 'react'
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import styled from 'styled-components'
import { Badge } from '@material-ui/core';

const Container = styled.div`
    height:60px;
    background-color: #eee;
`;

const Wrapper = styled.div`
  padding:10px 20px;
  display:flex;
  align-items: center;
  justify-content:space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const Seacrhcon = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 30px;
    padding: 3px;
    border-radius: 10px;
`;

const Input = styled.input`
border: none;
`;

//-------------------------------------------------- END LEFT SIDE /-------------/


const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;
//-------------------------------------------------- END CENTER /-------------/
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Menuitem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        EN
                    </Language>
                    <Seacrhcon>
                        <Input  />
                        <Search style={{ color:"gray", fontSize:"16px"}} />
                    </Seacrhcon>
                </Left>
                <Center>
                    <Logo>Whatever</Logo>
                </Center>
                <Right>
                    <Menuitem style={{ padding:"5px 10px 5px 10px", backgroundColor:"black", color:"white"}}>SIGN IN</Menuitem>
                    <Menuitem style={{ padding:"5px 10px 5px 10px", backgroundColor:"black", color:"white"}}>REGISTER</Menuitem>
                    <Menuitem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </Menuitem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
