import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import CreateData from "./CreateData/CreateData";
import EditData from "./EditData/EditData";
import ListScreen from "./ListScreen/ListScreen";
import { dataSet } from "./dataSet";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import RouterPage from "./RouterPage";

function App() {
  return (
    <>
      <div className='main'>
        <BrowserRouter>
          <RouterPage />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
