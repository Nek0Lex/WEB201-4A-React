import { useState } from 'react'
import './App.css'
import DefaultContext from "./defaultContext";
import styled from "styled-components";
import { MarkdownInput } from './components/MarkdownInput';
import { MarkdownOutput } from './components/MarkdownOutput';
import { Header } from './components/Header';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EditorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;


function App() {
  const [markdownText, setMarkdownText] = useState("");

  const contextValue = {
    markdownText,
    setMarkdownText
  };

  return (
    <DefaultContext.Provider value={contextValue}>
      <AppContainer>
        <Header />
        <EditorContainer>
          <MarkdownInput />
          <MarkdownOutput />
        </EditorContainer>
      </AppContainer>
    </DefaultContext.Provider>
  )
}

export default App
