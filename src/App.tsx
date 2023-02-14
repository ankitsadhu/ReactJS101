import React, { useEffect} from "react";
import styled from "styled-components";
import { Header } from "./components/Header/Header";
import './App.css'

function App() {

  // Create a Title component that'll render an <h1> tag with some styles
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  // Create a Wrapper component that'll render a <section> tag with some styles
  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;

  useEffect(() => {
    console.log("re render");
  });


  

  return (
    <>
    <Header/>
      <Wrapper>
        <Title>
          Hello World!
        </Title>
      </Wrapper>
    </>
  );
}

export default App;



