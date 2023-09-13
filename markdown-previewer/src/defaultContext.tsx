import React, { createContext, SetStateAction, useState, Dispatch } from 'react';

interface DefaultContext {
  markdownText: string;
  setMarkdownText: Dispatch<SetStateAction<string>>;
}

const defaultContext = {
  markdownText: "",
  setMarkdownText: () => { }
};

export default React.createContext<DefaultContext>(defaultContext);