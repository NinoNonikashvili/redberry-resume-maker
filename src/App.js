import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Main from "./components/Main";
import FormsAndCv from "./components/FormsAndCv";
import Form2 from "./components/Form2";
import Form1 from "./components/Form1";
import Form3 from "./components/Form3";
import FinalCv from "./components/FinalCv";
import { useState } from "react";

function App() {
  const [data, setData] = useState({});
  console.log("data in app: " + data);
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          element={
            <>
              <FormsAndCv data={data} />
              <Outlet />
            </>
          }
        >
          <Route
            path="/form1"
            element={<Form1 setData={(prev) => setData(prev)} />}
          />
          <Route
            path="/form2"
            element={<Form2 setData={(prev) => setData(prev)} />}
          />
          <Route
            path="/form3"
            element={<Form3 setData={(prev) => setData(prev)} />}
          />
          <Route path="/result" element={<FinalCv />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
