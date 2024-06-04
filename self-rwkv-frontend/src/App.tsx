import { useState } from "react";
// import "./App.css";

import Demo from "./views/demo.tsx";
import Demo1 from "./components/demo.tsx";
import { ThemeProvider } from "antd-style";
import Controller from "./Controller.tsx";

function App() {
  return (
    <>
      <ThemeProvider defaultThemeMode={"auto"}>
        <Demo extra={<Controller />}/>
      </ThemeProvider>
      {/* <ThemeProvider defaultThemeMode={"auto"}>
        <Demo1 extra={<Controller />}/>
      </ThemeProvider> */}
    </>
  );
}

export default App;
