import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import './index.css'
import { ConfigProvider } from "antd";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import "antd/dist/reset.css";
import zhCN from "antd/locale/zh_CN";

import { Route, HashRouter as Router, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <ConfigProvider locale={zhCN}>
      <Routes>
        <Route path="" element={<App />} />
      </Routes>
    </ConfigProvider>
  </Router>
);
