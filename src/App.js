import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Course from "./page/Course";
import Course2 from "./page/Course2";
import Course3 from "./page/Course3";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Course />} />
        <Route path="/course2" element={<Course2 />} />
        <Route path="/course3" element={<Course3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;