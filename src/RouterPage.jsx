import React from "react";
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

const RouterPage = () => {
  const [bookData, setBookData] = useState(dataSet);
  const navigate = useNavigate();
  const initialValues = {
    bookTitle: "",
    bookAuthor: "",
    bookId: "",
    bookPublishedDate: "",
    authorName: "",
    birthDate: "",
    biography: "",
  };

  const validationSchema = yup.object().shape({
    bookTitle: yup.string().required("Book Title required"),
    bookAuthor: yup.string().required("Book author required"),
    bookId: yup.string().required("Book Id required"),
    bookPublishedDate: yup.string().required("Book Published Date required"),
    authorName: yup.string().required("Author Name required"),
    birthDate: yup.string().required("DOB required"),
    biography: yup.string().required("Biography required"),
  });

  const onSubmit = (index) => (values) => {
    setBookData((pre) => {
      const data = JSON.parse(JSON.stringify(pre));
      if (index !== -1) {
        data[index] = values;
      } else {
        data.push(values);
      }
      return data;
    });
    console.log(values);
    navigate("/");
  };
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={<ListScreen bookList={bookData} setBookData={setBookData} />}
        />
        <Route
          path='*'
          element={<ListScreen bookList={bookData} setBookData={setBookData} />}
        />
        <Route
          path='/create'
          element={
            <CreateData
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              setBookData={setBookData}
            />
          }
        />
        <Route
          path='/edit/:id'
          element={
            <EditData
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              bookData={bookData}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default RouterPage;
