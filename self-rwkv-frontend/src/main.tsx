import ReactDOM from "react-dom/client";
// import './index.css'

import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import router from "./router";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import "antd/dist/reset.css";
import zhCN from "antd/locale/zh_CN";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider locale={zhCN}>
    <RouterProvider router={router} />
  </ConfigProvider>
);
