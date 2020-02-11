import React, { useState, useEffect, Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import './animation.css'

const S1E = 1.6;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const Loading = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const Right = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`
const Down = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`
const Up = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`
const Left = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`

const Down2 = keyframes`
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(100%);
  }
`

const ScaleSway = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`

const RotateSimple = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(720deg);
  }
`

const UpMotion = keyframes`
  from {
    transform: translateY(20vh);
  }
  to {
    transform: translateY(-120vh);
  }
`

const Sway = keyframes`
  0% {
    transform: translateX(0px);
  }
  25%{
    transform: translateX(30px);
  }
  50% {
    transform: translateX(0px);
  }
  75%{
    transform: translateX(-30px);
  }
  100% {
    transform: translateX(0px);
  }
`

const Rotation = keyframes`
  0% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  /* 25%{
    transform: rotateX(0deg) rotateY(180deg) rotateZ(60deg);
  }
  50% {
    transform: rotateX(60deg) rotateY(360deg) rotateZ(180deg);
  }
  75%{
    transform: rotateX(120deg) rotateY(540deg) rotateZ(270deg);
  } */
  100% {
    transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
  }
`

const RPast = keyframes`
  0% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  /* 25%{
    transform: rotateX(0deg) rotateY(180deg) rotateZ(60deg);
  }
  50% {
    transform: rotateX(60deg) rotateY(360deg) rotateZ(180deg);
  }
  75%{
    transform: rotateX(120deg) rotateY(540deg) rotateZ(270deg);
  } */
  100% {
    transform: rotateX(360deg) rotateY(270deg) rotateZ(360deg);
  }
`
const RNow = keyframes`
  0% {
    transform: rotateX(180deg) rotateY(90deg) rotateZ(180deg);
  }
  /* 25%{
    transform: rotateX(0deg) rotateY(180deg) rotateZ(60deg);
  }
  50% {
    transform: rotateX(60deg) rotateY(360deg) rotateZ(180deg);
  }
  75%{
    transform: rotateX(120deg) rotateY(540deg) rotateZ(270deg);
  } */
  100% {
    transform: rotateX(450deg) rotateY(360deg) rotateZ(540deg);
  }
`


const RFuture = keyframes`
  0% {
    transform: rotateX(180deg) rotateY(0deg) rotateZ(180deg);
  }
  /* 25%{
    transform: rotateX(0deg) rotateY(180deg) rotateZ(60deg);
  }
  50% {
    transform: rotateX(60deg) rotateY(360deg) rotateZ(180deg);
  }
  75%{
    transform: rotateX(120deg) rotateY(540deg) rotateZ(270deg);
  } */
  100% {
    transform: rotateX(270deg) rotateY(360deg) rotateZ(540deg);
  }
`

const Background = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`

const Title = styled.div`
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  font-size: 2rem;
  padding: 20px 0 0 0;
`

const DescriptionWrapper = styled.div`
  position: relative;
  margin: 10px 0 0;
`

const Description = styled.div`
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
`

const IconWrapper = styled.div`
  position: relative;
  width: 220px;
  height: 220px;
  margin: auto auto;
  background-image: linear-gradient(to left top, #051937, #272a65, #5e348e, #a132ac, #eb12bc);
  box-sizing: border-box;
  border-radius: 50%;
`

const Icon = styled.div`
  position: relative;
  top: calc(50% - 100px);
  left: calc(50% - 100px);
  width: 200px;
  height: 200px;
  background-image: url('./icon.png');
  background-size: cover;
  border-radius: 50%;
  box-sizing: border-box;
`

const CardWrapper = styled.div`
  position: relative;
  top: 48px;
  width: 300px;
  padding: 32px 0 32px;
  margin: 0 auto 48px auto;
  overflow: hidden;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  background-color: #fffbf1;
  animation: ${Loading} 1s 0s ease forwards;
`
const CardWrapperDummy = styled.div`
  position: relative;
  top: 48px;
  width: 300px;
  height: 481px;
  padding: 32px 0 32px;
  margin: 0 auto 48px auto;
  overflow: hidden;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  background-color: #fffbf1;
`

const ToScene_1_Base = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  transform: translateX(-100%);
  animation: ${Right} 0.3s 0s cubic-bezier(1, 0.09, 0.09, 1) forwards;
`
const ToScene_1_1 = styled(ToScene_1_Base)`
  background-color: #e9e2d0;
  animation-delay: 0.4s;
`
const ToScene_1_2 = styled(ToScene_1_Base)`
  background-color: #ea9085;
  animation-delay: 0.5s;
`
const ToScene_1_3 = styled(ToScene_1_Base)`
  background-color: #d45d79;
  animation-delay: 0.6s;
`
const ToScene_1_4 = styled(ToScene_1_Base)`
  background-color: #6e5773;
  animation-delay: 0.7s;
`

const Flake = styled(
  ({ width, time, ...props }: { width: number, time: number }) => (
    <div {...props} />
  )
)`
  position: absolute;
  height: 30px;
  width: 30px;
  background-color: #0375b4;
  top: 100vh;
  left: ${props => props.width}px;
  opacity: 0.3;
  border-radius: 50%;
  animation:
    ${UpMotion} 3s ${props => props.time}s linear infinite;
`

const FlakeWrapper = styled.div<{ 'data-time': number }>`
  animation: ${Sway} 5s ${props => props['data-time']}s ease infinite;
`

const Flakes = () => {
  const { height, width } = useWindowDimensions();
  return (
    <>
      {
        Array(30).fill(0).map(_ => [Math.random(), Math.random(), Math.random()]).map(arr => {
          return (
            <FlakeWrapper data-time={arr[2] * 5}>
              <Flake width={arr[0] * width} time={arr[1] * 3}></Flake>
            </FlakeWrapper>
          )
        })
      }
    </>
  )
}

const FlakesWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  overflow: hidden;
`

const Scene_1_1_W = styled.div`
  top: ${(481 + 64 - 524) / 2}px;
  left: 10px;
  position: absolute;
  width: 10px;
  height: 524px;
  background-color: #6e5773;
  opacity: 0;
  overflow: hidden;
  animation:
    ${Loading} 0s 1.0s ease forwards;
`
const Scene_1_1 = styled(Scene_1_1_W)`
  top: 0;
  left: 0;
  background-color: #ffb6b9;
  transform: translateY(-100%);
  opacity: 0;
  animation:
    ${Loading} 0s 1.0s ease forwards, 
    ${Down} 1.0s 1.0s cubic-bezier(1,.1,.01,.92) forwards;
`
const Scene_1_2_W = styled.div`
  bottom: 10px;
  left: 10px;
  position: absolute;
  width: 280px;
  height: 10px;
  background-color: #6e5773;
  opacity: 0;
  overflow: hidden;
  animation:
    ${Loading} 0s 1.0s ease forwards;
`
const Scene_1_2 = styled(Scene_1_2_W)`
  top: 0;
  left: 0;
  background-color: #ffb6b9;
  transform: translateX(-100%);
  opacity: 0;
  animation:
    ${Loading} 0s 1.0s ease forwards, 
    ${Right} 1.0s 1.0s cubic-bezier(1,.1,.01,.92) forwards;
`
const Scene_1_3_W = styled.div`
  top: ${(481 + 64 - 524) / 2}px;
  right: 10px;
  position: absolute;
  width: 10px;
  height: 524px;
  background-color: #6e5773;
  opacity: 0;
  overflow: hidden;
  animation:
    ${Loading} 0s 1.0s ease forwards;
`
const Scene_1_3 = styled(Scene_1_3_W)`
  top: 0;
  left: 0;
  background-color: #ffb6b9;
  transform: translateY(100%);
  opacity: 0;
  animation:
    ${Loading} 0s 1.0s ease forwards, 
    ${Up} 1.0s 1.0s cubic-bezier(1,.1,.01,.92) forwards;
`
const Scene_1_4_W = styled.div`
  top: 10px;
  left: 10px;
  position: absolute;
  width: 280px;
  height: 10px;
  background-color: #6e5773;
  opacity: 0;
  overflow: hidden;
  animation:
    ${Loading} 0s 1.0s ease forwards;
`
const Scene_1_4 = styled(Scene_1_4_W)`
  top: 0;
  left: 0;
  background-color: #ffb6b9;
  transform: translateX(100%);
  opacity: 0;
  animation:
    ${Loading} 0s 1.0s ease forwards, 
    ${Left} 1.0s 1.0s cubic-bezier(1,.1,.01,.92) forwards;
`
const ChipContainer = styled.div`
  position: relative;
  display: flex;
  margin: 20px 0 0;
`

const ChipWrapper = styled.a`
  position: relative;
  height: 70px;
  width: 100px;
  text-align: center;
  &:hover {
    /* background-color: blue; */
  }
`

const Chip = styled(FontAwesomeIcon)`
  position: relative;
  color: #051937;
`

const ToLink = styled(Link)`
  color: #000;
  text-decoration: none;
`

const ToProfileWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 50px;
  margin: auto auto;
  background-color: #242861;
  border-radius: 10px;
`

const ToProfile = styled.div`
  position: relative;
  width: 180px;
  height: 30px;
  top: calc(50% - 15px);
  left: calc(50% - 90px);
  border-radius: 5px;
  background-color: #fffbf1;
  box-sizing: border-box;
  text-align: center;
  font-size: 1.2rem;
  font-family: 'Open Sans', sans-serif;
`
const SquareWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
    opacity: 0;
    transform: translateY(-100%);
    animation: 
      ${Down} 0.5s ${S1E + 3.3}s ease forwards,
      ${Loading} 1s ${S1E + 3.3}s ease forwards;
`

const SquareWrap = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform-origin: 50px 50px;
`

const SquareWrap1 = styled(SquareWrap)`
  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  animation: 
    ${RPast} 2.0s ${S1E + 3.3 + 0.5}s ease forwards;
`
const SquareWrap2 = styled(SquareWrap)`
  transform: rotateX(180deg) rotateY(90deg) rotateZ(180deg);
  animation: 
    ${RNow} 2.0s ${S1E + 3.3 + 0.5}s ease forwards;
`
const SquareWrap3 = styled(SquareWrap)`
  transform: rotateX(180deg) rotateY(0deg) rotateZ(180deg);
  animation: 
    ${RFuture} 2.0s ${S1E + 3.3 + 0.5}s ease forwards;
`

const Square = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border: 5px solid #FFF6F6;
  box-sizing: border-box;
  background-color: #FFF6F6;
`
const SquareTop = styled(Square)`
  transform: scaleX(-1) translateY(-50px) rotateX(-90deg);
  background-image: url('./zai.png');
  background-size: cover;
  background-color: #C32F27;
`
const SquareFront = styled(Square)`
  transform: translateZ(50px);
  background-image: url('./ka.png');
  background-size: cover;
  background-color: #FB6107;
`
const SquareBack = styled(Square)`
  transform: scaleX(-1) translateZ(-50px);
  background-image: url('./mi.png');
  background-size: cover;
  background-color: #E6C229;
`
const SquareUnder = styled(Square)`
  transform: scaleX(-1) translateY(50px) rotateX(90deg);
  background-image: url('./rai.png');
  background-size: cover;
  background-color: #20BF55;
`
const SquareLeft = styled(Square)`
  transform: translate(-50px) rotateY(-90deg);
  background-image: url('./gen.png');
  background-size: cover;
  background-color: #00A6FB;
`
const SquareRight = styled(Square)`
  transform: translate(50px) rotateY(90deg);
  background-image: url('./ko.png');
  background-size: cover;
  background-color: #fcba03;
`

const Cubic1 = () => {
  return (
    <SquareWrapper>
      <SquareWrap1>
        <SquareTop />
        <SquareFront />
        <SquareBack />
        <SquareUnder />
        <SquareLeft />
        <SquareRight />
      </SquareWrap1>
    </SquareWrapper>
  )
}
const Cubic2 = () => {
  return (
    <SquareWrapper>
      <SquareWrap2>
        <SquareTop />
        <SquareFront />
        <SquareBack />
        <SquareUnder />
        <SquareLeft />
        <SquareRight />
      </SquareWrap2>
    </SquareWrapper>
  )
}
const Cubic3 = () => {
  return (
    <SquareWrapper>
      <SquareWrap3>
        <SquareTop />
        <SquareFront />
        <SquareBack />
        <SquareUnder />
        <SquareLeft />
        <SquareRight />
      </SquareWrap3>
    </SquareWrapper>
  )
}

const CBWrapper = styled.div`
  position: absolute;
  top: calc(50% - 75px);
  left: calc(50% - 75px);
  width: 150px;
  height: 150px;
  background-color: #FFF6F6;
  overflow: hidden;
  border-radius: 10px;
  opacity: 0;
  animation: 
    ${Loading} 0.2s ${S1E}s ease forwards,
    ${ScaleSway} 1.0s ${S1E}s cubic-bezier(1,.01,0,.99) forwards 3;
`
const CBW_T = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-size: cover;
  overflow: hidden;
`
const CB = styled(CBW_T)`
  animation: 
    ${RotateSimple} 0.6s ${S1E + 2.8}s cubic-bezier(0,1.03,.43,.79) forwards,
    ${Loading} 0.7s ${S1E + 2.7}s ease forwards reverse;
`
const CBW_T1 = styled(CBW_T)`
  animation: 
    ${Loading} 0.5s ${S1E + 2.5}s  cubic-bezier(1,.02,.22,1.58) forwards reverse;
`
const CBW_T2 = styled(CBW_T)`
  animation: 
    ${Loading} 0.5s ${S1E + 1.5}s  cubic-bezier(1,.02,.22,1.58) forwards reverse;
`
const CBW_T3 = styled(CBW_T)`
  animation: 
    ${Loading} 0.5s ${S1E + 0.5}s  cubic-bezier(1,.02,.22,1.58) forwards reverse;
`
const C1 = styled(CBW_T)`
  background-image: url('./1.png');
  transform: translateY(-100%);
  animation: 
    ${Down} 0.5s ${S1E + 2.0}s cubic-bezier(1,.02,.22,1.58) forwards;
`
const C2 = styled(CBW_T)`
  transform: translateY(-100%);
  background-image: url('./2.png');
  animation: 
    ${Down} 0.5s ${S1E + 1.0}s cubic-bezier(1,.02,.22,1.58) forwards;
`
const C3 = styled(CBW_T)`
  transform: translateY(-100%);
  background-image: url('./3.png');
  animation: 
    ${Down} 0.5s ${S1E + 0}s cubic-bezier(1,.02,.22,1.58) forwards;
`

const CountdownBox = () => {
  return (
    <CB>
      <CBWrapper>
        <CBW_T3>
          <C3></C3>
        </CBW_T3>
        <CBW_T2>
          <C2></C2>
        </CBW_T2>
        <CBW_T1>
          <C1></C1>
        </CBW_T1>
      </CBWrapper>
    </CB>
  )
}


const About = () => {
  return (
    <Background>
      <FlakesWrapper>
        <Flakes />
      </FlakesWrapper>
      <CardWrapperDummy>
        <IconWrapper>
          <Icon></Icon>
        </IconWrapper>
        <Title>kaito_tateyama</Title>
        <DescriptionWrapper>
          <Description>ソフトウェアエンジニアを</Description>
          <Description>目指す学生です</Description>
        </DescriptionWrapper>
        <ChipContainer>
          <ChipWrapper href="https://www.twitter.com/kaito_tateyama">
            <Chip icon={["fab", "twitter"]} size="3x"></Chip>
          </ChipWrapper>
          <ChipWrapper href="https://www.github.com/uta8a">
            <Chip icon={["fab", "github"]} size="3x"></Chip>
          </ChipWrapper>
          <ChipWrapper href="https://www.blog.uta8a.net/posts/">
            <Chip icon={["fas", "pencil-alt"]} size="3x"></Chip>
          </ChipWrapper>
        </ChipContainer>
        <ToProfileWrapper>
          <ToProfile>Go</ToProfile>
        </ToProfileWrapper>
        <ToScene_1_1 />
        <ToScene_1_2 />
        <ToScene_1_3 />
        <ToScene_1_4 />
        <Scene_1_1_W>
          <Scene_1_1></Scene_1_1>
        </Scene_1_1_W>
        <Scene_1_2_W>
          <Scene_1_2></Scene_1_2>
        </Scene_1_2_W>
        <Scene_1_3_W>
          <Scene_1_3></Scene_1_3>
        </Scene_1_3_W>
        <Scene_1_4_W>
          <Scene_1_4></Scene_1_4>
        </Scene_1_4_W>
        <CountdownBox></CountdownBox>
        <Cubic1 />
      </CardWrapperDummy>
    </Background>
  )
}

const Main = () => {
  return (
    <Background>
      <CardWrapper>
        <IconWrapper>
          <Icon></Icon>
        </IconWrapper>
        <Title>kaito_tateyama</Title>
        <DescriptionWrapper>
          <Description>ソフトウェアエンジニアを</Description>
          <Description>目指す学生です</Description>
        </DescriptionWrapper>
        <ChipContainer>
          <ChipWrapper href="https://www.twitter.com/kaito_tateyama">
            <Chip icon={["fab", "twitter"]} size="3x"></Chip>
          </ChipWrapper>
          <ChipWrapper href="https://www.github.com/uta8a">
            <Chip icon={["fab", "github"]} size="3x"></Chip>
          </ChipWrapper>
          <ChipWrapper href="https://www.blog.uta8a.net/posts/">
            <Chip icon={["fas", "pencil-alt"]} size="3x"></Chip>
          </ChipWrapper>
        </ChipContainer>
        <ToLink to="/anime">
          <ToProfileWrapper>
            <ToProfile>Go</ToProfile>
          </ToProfileWrapper>
        </ToLink>
      </CardWrapper>
    </Background>
  )
}

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/anime" exact component={About} />
    </Router>
  );
}

export default App;
