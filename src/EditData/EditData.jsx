import { useFormik } from "formik";
import React, { useEffect } from "react";
import "./EditData.css";
import { useNavigate, useParams } from "react-router-dom";

const EditData = ({ bookData, validationSchema, onSubmit }) => {
  const navigate = useNavigate();
  const params = useParams();
  let index = -1;
  const initialValues = bookData.find((bookInfo, idx) => {
    if (bookInfo.bookId === params.id) {
      index = idx;
      return bookInfo.bookId === params.id;
    }
  });

  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit(index),
  });

  useEffect(() => {
    if (!initialValues) {
      navigate("/");
    }
  });

  if (!initialValues) {
    return <>Loading...</>;
  }
  return (
    <form onSubmit={Formik.handleSubmit}>
      <h2>Book Info</h2>
      <br />
      <div>
        <label>Book Title</label>
        <div>
          <input
            name='bookTitle'
            value={Formik.values.bookTitle}
            onChange={Formik.handleChange}
            type='text'
          />
          <span name='bookTitle'> {Formik.errors.bookTitle}</span>
        </div>
      </div>
      <br />
      <div>
        <label>Book Author</label>
        <div>
          <input
            name='bookAuthor'
            value={Formik.values.bookAuthor}
            onChange={Formik.handleChange}
            type='text'
          />
          <span name='bookAuthor'> {Formik.errors.bookAuthor}</span>
        </div>
      </div>
      <br />
      <div>
        <label>Book ID</label>
        <div>
          <input
            name='bookId'
            value={Formik.values.bookId}
            onChange={Formik.handleChange}
            type='text'
          />
          <span name='bookId'> {Formik.errors.bookId}</span>
        </div>
      </div>
      <br />
      <div>
        <label>Book Published Date</label>
        <div>
          <input
            name='bookPublishedDate'
            value={Formik.values.bookPublishedDate}
            type='date'
            onChange={Formik.handleChange}
          />
          <span name='bookPublishedDate'>
            {Formik.errors.bookPublishedDate}
          </span>
        </div>
      </div>
      <br />
      <h2>Author Info</h2>
      <div>
        <label>Author Name</label>
        <div>
          <input
            name='authorName'
            value={Formik.values.authorName}
            onChange={Formik.handleChange}
            type='text'
          />
          <span name='authorName'> {Formik.errors.authorName}</span>
        </div>
      </div>
      <br />
      <div>
        <label>Birth Date</label>
        <div>
          <input
            name='birthDate'
            value={Formik.values.birthDate}
            onChange={Formik.handleChange}
            type='date'
          />
          <span name='birthDate'> {Formik.errors.birthDate}</span>
        </div>
      </div>
      <br />
      <div>
        <label>Biography</label>
        <div>
          <input
            name='biography'
            value={Formik.values.biography}
            onChange={Formik.handleChange}
            type='text'
          />
          <span name='biography'> {Formik.errors.biography}</span>
        </div>
      </div>
      <br />
      <button type='submit'>Update</button>
    </form>
  );
};

export default EditData;
