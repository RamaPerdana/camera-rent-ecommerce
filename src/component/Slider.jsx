import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import styled from 'styled-components';
import { sliderItems } from '../data';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #eee;
    border-radius:50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:0;
    cursor: pointer;
    z-index: 3;
    bottom: 0;
    margin: auto;
    left: ${props=> props.direction === "left" && "20px"};
    right: ${props=> props.direction === "right" && "20px"};
    opacity: 0.5;

`;

const Wrapper = styled.div`
  height: 100%;
  display:flex;
  transition: all 1s ease;
  transform: translateX(${(props)=> props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${props=> props.bg};
`;

const Imgcontainer = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
`;

const Image = styled.img`
  height:80%;
  width:70%;
  right:5%;
  top: 10%;
  position: absolute;
`;

const Infocontainer = styled.div`
    flex: 1; 
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight:400;
`;

const Desc = styled.p`
  margin:50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
  width: 80%;
  text-align: justify;
`;

const Button = styled.button`
    padding: 5px 10px;
    border: 3px solid black;
    background-color: #fff;
    cursor: pointer;
    font-size: 20px;
    margin-left:35%;
`;

const Slider = () => {
    const [slideIndex, setslideIndex] = useState (0);
    const handleClick = (direction) => {
        if (direction === "left"){
            setslideIndex( slideIndex > 0 ? slideIndex -1 : 2)
        } else {
            setslideIndex( slideIndex < 2 ? slideIndex +1 : 0)
        }
    };
    return (
        <Container>
            <Arrow direction="left" onClick={()=> handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex = {slideIndex}>
                {sliderItems.map((item) => (
                <Slide bg={item.bg} key={item.id}>
                    <Imgcontainer>
                        <Image src={item.img} />
                    </Imgcontainer>
                    <Infocontainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>Klik Disini</Button>
                    </Infocontainer>
                </Slide>
                ))};
            </Wrapper>
            <Arrow direction="right" onClick={()=> handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}


export default Slider
