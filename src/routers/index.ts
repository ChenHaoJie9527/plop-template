import { createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "../pages/Home";

// 添加模板占位符 - 引入组件
import SuTestBlock from '../pages/SuTestBlock';
// -- ADD ROUTE COMPONENTS HERE --

const routes: RouteObject[] = [
  {
    path: "/",
    Component: Home,
  },
  // 添加模板占位符 - 导入组件信息
{ path: '/SuTestBlock', Component: SuTestBlock },
// -- ADD ROUTES HERE --
];

export default createBrowserRouter(routes);
