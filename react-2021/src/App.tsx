import React from "react";
import "./App.css";
import { Global, css } from "@emotion/react";
import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Layout>
        <Layout.Side>
          <Sidebar />
        </Layout.Side>
        <Layout.Main>TEST</Layout.Main>
      </Layout>
      <Global styles={globalStyle} />
    </>
  );
}

const globalStyle = css`
  html {
    box-sizing: border-box;
  }
  * {
    box-sizing: inherit;
  }
`;

export default App;
