import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routers";
function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
