import { ThemeProvider } from '@ui5/webcomponents-react';
import React, { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import "./style.css";
import reportWebVitals from './reportWebVitals';
import * as XLSX from 'xlsx/xlsx.mjs';
const container = document.getElementById('root');
const root = createRoot(container);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

root.render(
 
   <React.StrictMode>
   <App />
 </React.StrictMode>
  
  
);

/*import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
*/