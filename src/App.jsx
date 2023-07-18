import React,{Fragment} from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './AdminPages/HomePage';
function App() {
  return (
  <Fragment>
<Routes>
        <Route exact  path="/" element={<HomePage />}>
          {/* <Route index element={<Home />} /> */}
        </Route>
      </Routes>
  </Fragment>
  );
}

export default App;
