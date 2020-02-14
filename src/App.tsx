import React, { useState, useEffect, Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import './animation.css'

const S1E = 1.6
const S2E = S1E +3.4
// const S2E = 0
const S3E = S2E + 7.4
// const S3E = 1000
const S4E = S3E + 3.0
const S5E = S4E + 3.0

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
const Right2 = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
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
const Left2 = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
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
const Down3 = keyframes`
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(200%);
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
  100% {
    transform: rotateX(450deg) rotateY(720deg) rotateZ(540deg);
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
    transform: rotateX(630deg) rotateY(360deg) rotateZ(540deg);
  }
`
const Op2 = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.2;
  }
`
const Background = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`

const Size05 = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(7);
  }
`
const Size15 = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(7);
  }
`

const LittleRight = keyframes`
 from {
   transform: translateX(-10px);
 }
 to {
   transform: translateX(0);
 }
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
  font-family: 'Open Sans', sans-serif;
  animation: 
    ${Right} 0.3s 0s cubic-bezier(1, 0.09, 0.09, 1) forwards;
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
  background: #ffb6b9;
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
`

const SQW1 = styled(SquareWrapper)`
  animation: 
      ${Down} 0.6s ${S2E + 0.7}s ease forwards,
      ${Loading} 0.8s ${S2E + 0.7}s ease forwards,
      ${Loading} 0.2s ${S2E + 3.4}s ease forwards reverse;
`
const SQW2 = styled(SquareWrapper)`
  animation: 
      ${Down} 0.6s ${S3E + 0.3}s ease forwards,
      ${Loading} 0.8s ${S3E + 0.3}s ease forwards,
      ${Loading} 0.2s ${S3E + 3.0}s ease forwards reverse;
`
const SQW3 = styled(SquareWrapper)`
  animation: 
      ${Down} 0.6s ${S4E + 0.6}s ease forwards,
      ${Loading} 0.8s ${S4E + 0.9}s ease forwards,
      ${Loading} 0.2s ${S4E + 3.3}s ease forwards reverse;
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
    ${RPast} 2.0s ${S2E + 1.3}s cubic-bezier(.61,-0.52,.39,1.04) forwards;
`
const SquareWrap2 = styled(SquareWrap)`
  transform: rotateX(180deg) rotateY(90deg) rotateZ(180deg);
  animation: 
    ${RNow} 2.0s ${S3E + 0.9}s cubic-bezier(.61,-0.52,.39,1.04) forwards;
`
const SquareWrap3 = styled(SquareWrap)`
  transform: rotateX(180deg) rotateY(0deg) rotateZ(180deg);
  animation: 
    ${RFuture} 2.0s ${S4E + 1.2}s cubic-bezier(.61,-0.52,.39,1.04) forwards;
`

const Square = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border: 5px solid #020082;
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
    <SQW1>
      <SquareWrap1>
        <SquareTop />
        <SquareFront />
        <SquareBack />
        <SquareUnder />
        <SquareLeft />
        <SquareRight />
      </SquareWrap1>
    </SQW1>
  )
}

const Cubic2 = () => {
  return (
    <SQW2>
      <SquareWrap2>
        <SquareTop />
        <SquareFront />
        <SquareBack />
        <SquareUnder />
        <SquareLeft />
        <SquareRight />
      </SquareWrap2>
    </SQW2>
  )
}
const Cubic3 = () => {
  return (
    <SQW3>
      <SquareWrap3>
        <SquareTop />
        <SquareFront />
        <SquareBack />
        <SquareUnder />
        <SquareLeft />
        <SquareRight />
      </SquareWrap3>
    </SQW3>
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

const TWWrapper = styled.div`
  position: absolute;
  top: calc(50% - 225px);
  left: calc(50% - 45px);
  width: 90px;
  height: 450px;
  background-color: #FFF6F6;
  overflow: hidden;
  border-radius: 5px;
  opacity: 0;
  animation: 
    ${Loading} 0.2s ${S5E + 2.6}s cubic-bezier(0,.65,0,.99) forwards;
`

const TW = styled.div`
position: absolute;
width: 90px;
height: 90px;
top: 0;
left: 0;
background-size: cover;
overflow: hidden;
`

const TW1 = styled(TW)`
  top: 0;
  background-image: url('./coi-1.png');
`
const TW2 = styled(TW)`
  top: 90px;
  background-image: url('./coi-2.png');
`
const TW3 = styled(TW)`
  top: 180px;
  background-image: url('./coi-3.png');
`
const TW4 = styled(TW)`
  top: 270px;
  background-image: url('./coi-4.png');
`
const TW5 = styled(TW)`
  top: 360px;
  background-image: url('./coi-5.png');
`

const Text = () => {
  return (
    <TWWrapper>
      <TW1></TW1>
      <TW2></TW2>
      <TW3></TW3>
      <TW4></TW4>
      <TW5></TW5>
    </TWWrapper>
  )
}

const SW = styled.div`
  position: absolute;
  top: calc(50% - 225px);
  left: calc(50% - 125px);
  height: 450px;
  width: 250px;
  /* background-color: #FFF6F6; */
  overflow: hidden;
  border-radius: 5px;
  /* opacity: 0; */
  /* background-image: url('./sc1.png'); */
  background-size: contain;
`

const S = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 250px;
  height: 150px;
  /* background-color: #FFF6F6; */
  overflow: hidden;
  /* border-radius: 5px; */
  opacity: 0;
  /* background-image: url('./sc1.png'); */
  background-size: contain;
  box-sizing: border-box;
  border: 15px solid #FFF6F6;
`
const SWW = styled(S)`
  height: 450px;
  opacity: 1;
  border: none;
  animation:
  ${Loading} 1s ${S1E + 9.5}s ease forwards reverse,
  ${Down2} 1s ${S1E + 9.5}s ease forwards;
`

const S1 = styled(S)`
  top: 0px;
  background-image: url('./sc6.png');
  animation: 
    ${Loading} 1s ${S1E + 6.0}s ease forwards,
    ${Down3} 1s ${S1E + 6 + 2 + 1}s ease forwards;
`
const S2 = styled(S)`
  top: 150px;
  background-image: url('./sc7.png');
  animation: 
    ${Loading} 1s ${S1E + 6 + 1}s ease forwards,
    ${Down2} 1s ${S1E + 6 + 2 + 1}s ease forwards;
`
const S3 = styled(S)`
  top: 300px;
  background-image: url('./sc8.png');
  animation: ${Loading} 1s ${S1E + 6 + 2}s ease forwards;
`

const Story = () => {
  return (
    <SW>
      <SWW>
        <S1 />
        <S2 />
        <S3 />
      </SWW>
    </SW>
  )
}


const PW = styled.div`
  position: absolute;
  top: calc(50% - 250px);
  left: calc(50% - 140px);
  height: 500px;
  width: 280px;
  overflow: hidden;
  opacity: 0;
  background-image: url('./img-1.png');
  background-size: contain;
  transform: translateX(-10px);
  animation: 
    ${LittleRight} 1s ${S2E + 3.6}s ease forwards,
    ${Loading} 1s ${S2E + 3.6}s ease forwards,
    ${Op2} 1s ${S2E + 4.6}s ease forwards;
`
const PW1 = styled(PW)`
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('./sc4.png');
  animation: 
  ${LittleRight} 0s ${S2E + 4.6}s ease forwards,
    ${Loading} 1s ${S2E + 4.6}s ease forwards;
`
const Pose = () => {
  return (
    <PW></PW>
  )
}

const VW = styled.div`
  position: absolute;
  width: 300px;
  height: 90px;
  overflow: hidden;
`
const V = styled.div`
  position: absolute;
  top: 0;
  width: 300px;
  height: 90px;
  background-color: #1c0116;
`
const VW1 = styled(VW)`
  top: 0;
  animation: ${Left2} 1.0s 2.0s cubic-bezier(1,.1,.01,.92) forwards;
`
const V1 = styled(V)`
  transform: translateX(-100%);
  opacity: 0.9;
  animation: ${Left} 1.0s 1.0s cubic-bezier(1,.1,.01,.92) forwards;
`
const V11 = styled(V)`
  background-image: url('./t1.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`
const VW2 = styled(VW)`
  bottom: 0;
  animation: ${Right2} 1.0s 2.0s cubic-bezier(1,.1,.01,.92) forwards;
`
const V2 = styled(V)`
  transform: translateX(100%);
  opacity: 0.9;
  animation: ${Right} 1.0s 1.0s cubic-bezier(1,.1,.01,.92) forwards;
`
const V22 = styled(V)`
  background-image: url('./t2.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`
const TL1 = () => {
  return (
    <VW1>
      <V1>
        <V11 />
      </V1>
    </VW1>
  )
}
const TL2 = () => {
  return (
    <VW2>
      <V2>
        <V22 />
      </V2>
    </VW2>
  )
}

const InStage = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  transform: translateX(100%);
  /* background-color: #fff7fd; */
`
const BS = styled(InStage)`
  transform: translateX(0);
`

const St1 = styled(InStage)`
  background-color: #8A5EA3;
  animation: 
    ${Left} 0.3s ${S2E}s cubic-bezier(1, 0.09, 0.09, 1) forwards;
`
const St2 = styled(InStage)`
  background-color: #a278b5;
  
  animation: 
    ${Left} 0.3s ${S2E + 0.15}s cubic-bezier(1, 0.09, 0.09, 1) forwards;
`
const St3 = styled(InStage)`
  background-color: #F6C3E5;
  animation: 
    ${Left} 0.3s ${S2E + 0.30}s cubic-bezier(1, 0.09, 0.09, 1) forwards;
`
const St4 = styled(InStage)`
  background-color: #fff2fa;
  animation: 
    ${Left} 0.3s ${S2E + 0.4}s cubic-bezier(1, 0.09, 0.09, 1) forwards;
`
const TextOrigin = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`
const Tri = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  border-width: 0 100px 173.2px 100px;
  border-color: transparent transparent #007bff transparent;
`
const TriBack = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  transform: translateY(-100%);
  animation: ${Down} 0.5s ${S2E + 5.6}s cubic-bezier(.43,.91,.7,1.27) forwards;
`
const TriBackW = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  transform-origin: center;
  animation: ${RotateSimple} 1.1s ${S2E + 6.0}s linear infinite;
`
const TriBackW21 = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  opacity: 0.9;
  transform-origin: center;
  animation: ${Size15} 1s ${S2E + 6.0}s ease forwards;
`
const TriBackW22 = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  opacity: 0.9;
  transform: scale(0);
  transform-origin: center;
  animation: ${Size05} 1s ${S2E + 6.3}s ease forwards;
`
const TriBackW23 = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  transform: scale(0);
  transform-origin: center;
  animation: ${Size05} 1s ${S2E + 6.6}s ease forwards;
`
const Tri1 = styled(Tri)`
  top: calc(50% - 2*57.7px);
  left: calc(50% - 100px);
  border-color: transparent transparent #F6C3E5 transparent;
`
const Tri2 = styled(Tri)`
  top: calc(50% - 2*57.7px);
  left: calc(50% - 100px);
  border-color: transparent transparent #8A5EA3 transparent;
`
const Tri3 = styled(Tri)`
  top: calc(50% - 2*57.7px);
  left: calc(50% - 100px);
  border-color: transparent transparent #FFF2FA transparent;
`
const Scene1 = () => {
  return (
    <BS>
      <St1 />
      <St2 />
      <St3 />
      <St4>
        <Pose />
        <PW1 />
        <Cubic1 />
        <TriBack>
        <TriBackW>
            <TriBackW21>
              <Tri1></Tri1>
            </TriBackW21>
            <TriBackW22>
              <Tri2></Tri2>
            </TriBackW22>
            <TriBackW23>
              <Tri3></Tri3>
            </TriBackW23>
          </TriBackW>
        </TriBack>
      </St4>
    </BS>
  )
}


const Stage2 = styled(InStage)`
 background-color: #FFF2FA;
 animation: 
    ${Left} 0.3s ${S3E}s cubic-bezier(1, 0.09, 0.09, 1) forwards;
`
const S21 = styled(S)`
  top: 0px;
  background-image: url('./sc10.png');
  animation: 
    ${Loading} 1s ${S2E + 3.4 + 2.8}s ease forwards,
    ${Down3} 1s ${S2E + 3.4 + 3 + 2.8}s ease forwards;
`
const S22 = styled(S)`
  top: 150px;
  background-image: url('./sc11.png');
  animation: 
    ${Loading} 1s ${S2E + 3.4 + 1 + 2.8}s ease forwards,
    ${Down2} 1s ${S2E + 3.4 + 3 + 2.8}s ease forwards;
`
const S23 = styled(S)`
  top: 300px;
  background-image: url('./sc12.png');
  animation: ${Loading} 1s ${S2E + 3.4 + 2 + 2.8}s ease forwards;
`
const SWW2 = styled(S)`
  height: 450px;
  opacity: 1;
  border: none;
  animation:
  ${Loading} 1s ${S2E + 3.4 + 4 + 2.8}s ease forwards reverse,
  ${Down2} 1s ${S2E + 3.4 + 4 + 2.8}s ease forwards;
`

const Scene2 = () => {
  return (
    <Stage2>
      {/* Textいれる */}
      <Cubic2 />
    </Stage2>
  )
}
const Stage3 = styled(InStage)`
 background-color: #81f5ff;
 transform: translateY(100%);
 animation: 
    ${Up} 0.3s ${S4E}s cubic-bezier(1, 0.09, 0.09, 1) forwards;
`
const St31 = styled(InStage)`
 transform: translateY(100%);
  background-color: #a0ffe6;
  animation: 
    ${Up} 0.3s ${S4E + 0.15}s cubic-bezier(1, 0.09, 0.09, 1) forwards;
`
const St32 = styled(InStage)`
 transform: translateY(100%);
  background-color: #ffffdd;
  
  animation: 
    ${Up} 0.3s ${S4E + 0.3}s cubic-bezier(1, 0.09, 0.09, 1) forwards;
`
const St33 = styled(InStage)`
 transform: translateY(100%);
  background-color: #FFF2FA;
  animation: 
    ${Up} 0.3s ${S4E + 0.45}s cubic-bezier(1, 0.09, 0.09, 1) forwards;
`

const Scene3 = () => {
  return (
    <Stage3>
      <St31 />
      <St32 />
      <St33 />
      <Cubic3 />
    </Stage3>
  )
}

const Stage4 = styled(InStage)`
  background-color: #fff7fd;
  animation: 
    ${Left} 0.3s ${S5E}s cubic-bezier(1, 0.09, 0.09, 1) forwards;
`
const Scene_4_1_W = styled.div`
  top: ${(481 + 64 - 524) / 2}px;
  left: 10px;
  position: absolute;
  width: 10px;
  height: 524px;
  background-color: #fff7fd;
  /* opacity: 0; */
  overflow: hidden;
  /* animation:
    ${Loading} 0s 1.0s ease forwards; */
`
const Scene_4_1 = styled(Scene_1_1_W)`
  top: 0;
  left: 0;
  background-color: #ffb6b9;
  /* transform: translateY(-100%);
  opacity: 0;
  animation:
    ${Loading} 0s 1.0s ease forwards, 
    ${Down} 1.0s 1.0s cubic-bezier(1,.1,.01,.92) forwards; */
`
const Scene_4_2_W = styled.div`
  bottom: 10px;
  left: 10px;
  position: absolute;
  width: 280px;
  height: 10px;
  background-color: #fff7fd;
  /* opacity: 0; */
  overflow: hidden;
  /* animation:
    ${Loading} 0s 1.0s ease forwards; */
`
const Scene_4_2 = styled(Scene_1_2_W)`
  top: 0;
  left: 0;
  background-color: #ffb6b9;
  /* transform: translateX(-100%);
  opacity: 0;
  animation:
    ${Loading} 0s 1.0s ease forwards, 
    ${Right} 1.0s 1.0s cubic-bezier(1,.1,.01,.92) forwards; */
`
const Scene_4_3_W = styled.div`
  top: ${(481 + 64 - 524) / 2}px;
  right: 10px;
  position: absolute;
  width: 10px;
  height: 524px;
  background-color: #fff7fd;
  /* opacity: 0; */
  overflow: hidden;
  /* animation:
    ${Loading} 0s 1.0s ease forwards; */
`
const Scene_4_3 = styled(Scene_1_3_W)`
  top: 0;
  left: 0;
  background-color: #ffb6b9;
  /* transform: translateY(100%);
  opacity: 0;
  animation:
    ${Loading} 0s 1.0s ease forwards, 
    ${Up} 1.0s 1.0s cubic-bezier(1,.1,.01,.92) forwards; */
`
const Scene_4_4_W = styled.div`
  top: 10px;
  left: 10px;
  position: absolute;
  width: 280px;
  height: 10px;
  background-color: #fff7fd;
  /* opacity: 0; */
  overflow: hidden;
  /* animation:
    ${Loading} 0s 1.0s ease forwards; */
`
const Scene_4_4 = styled(Scene_1_4_W)`
  top: 0;
  left: 0;
  background: #ffb6b9;
  /* transform: translateX(100%);
  opacity: 0;
  animation:
    ${Loading} 0s 1.0s ease forwards, 
    ${Left} 1.0s 1.0s cubic-bezier(1,.1,.01,.92) forwards; */
`
const PW2 = styled(PW)`
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('./img-2.png');
  animation: 
  ${LittleRight} 0s ${S5E}s ease forwards,
    ${Loading} 1s ${S5E}s ease forwards;
`
const Pose4 = () => {
  return (
    <PW2></PW2>
  )
}
const Banner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`
const B1 = styled(Banner)`
  transform: translateY(-100%);
  background-image: linear-gradient(to right top, #ff0091, #f300a3, #e000b6, #c600cb, #a100e0, #7850f5, #4870ff, #0087ff, #00b2ff, #00d3f8, #00ecb2, #73fb5f);
  animation: ${Down} 0.3s ${S5E + 0.5}s cubic-bezier(1, 0.09, 0.09, 1) forwards;
`
const B2 = styled(Banner)`
  transform: translateY(-100%);
  background-image: linear-gradient(to left top, #ff3a6e, #ec67cb, #a69bff, #3cc1ff, #00daff, #00e2ef, #41e9d9, #6fedc2, #97e193, #bed16d, #e2bd59, #ffa45d);
  animation: ${Down} 0.3s ${S5E + 0.8}s cubic-bezier(1, 0.09, 0.09, 1) forwards;
`
const B3 = styled(Banner)`
  transform: translateY(-100%);
  background-image: linear-gradient(to right top, #ffb049, #ffbc48, #ffc847, #ffd448, #ffe04b, #eada43, #d5d43c, #c0cd37, #94b327, #699818, #407e0a, #0d6400);;
  animation: ${Down} 0.3s ${S5E + 1.1}s cubic-bezier(1, 0.09, 0.09, 1) forwards;
`
const B4 = styled(Banner)`
  transform: translateY(-100%);
  background-color: #6e5773;
  /* border: 20px double #ffb6b9;
  box-sizing: border-box; */
  animation: ${Down} 0.5s ${S5E + 1.4}s cubic-bezier(1, 0.09, 0.09, 1) forwards;
`
const Scene4 = () => {
  return (
    <Stage4>
      <Pose4 />
      <B1 />
      <B2 />
      <B3 />
      <B4>
        <Scene_4_1_W>
          <Scene_4_1/>
        </Scene_4_1_W>
        <Scene_4_2_W>
          <Scene_4_2/>
        </Scene_4_2_W>
        <Scene_4_3_W>
          <Scene_4_3/>
        </Scene_4_3_W>
        <Scene_4_4_W>
          <Scene_4_4/>
        </Scene_4_4_W>
      </B4>
      <Text />
    </Stage4>
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
          <ToProfile>推し</ToProfile>
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
        {/* <Story /> */}
        <TL1 />
        <TL2 />
        <Scene1 />
        <Scene2 />
        <Scene3 />
        <Scene4 />
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
            <ToProfile>推し</ToProfile>
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
