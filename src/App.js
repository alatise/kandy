import { Route, Routes } from "react-router-dom";
import { router } from "./routes";

const App = () => {
  return (
    <Routes>
      {router.map((item) => {
        const { path, Component } = item;
        return <Route path={path} element={<Component />}></Route>;
      })}
    </Routes>
  );
};

export default App;
