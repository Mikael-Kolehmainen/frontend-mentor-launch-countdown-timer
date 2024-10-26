import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Error from "./routes/error/error.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="*"
        element={<Error title="404 Not Found" message="The page you're looking for doesn't exist." url="/" />}
      />
    </Routes>
  );
};

export default App;
