import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import "../EditData/EditData.css";

const CreateData = ({
  initialValues,
  validationSchema,
  onSubmit,
  setBookData,
}) => {
  let index = -1;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit(index)}
    >
      <Form>
        <h2>Book Info</h2>
        <div>
          <label>Book Title</label>
          <div>
            <Field name='bookTitle' type='text' />

            <span>
              <ErrorMessage name='bookTitle' />
            </span>
          </div>
        </div>
        <br />
        <div>
          <label>Book Author</label>
          <div>
            <Field name='bookAuthor' type='text' />
            <span>
              <ErrorMessage name='bookAuthor' />
            </span>
          </div>
        </div>
        <br />
        <div>
          <label>Book ID</label>
          <div>
            <Field name='bookId' type='text' />
            <span>
              <ErrorMessage name='bookId' />
            </span>
          </div>
        </div>
        <br />
        <div>
          <label>Book Published Date</label>
          <div>
            <Field name='bookPublishedDate' type='date' />
            <span>
              <ErrorMessage name='bookPublishedDate' />
            </span>
          </div>
        </div>
        <br />
        <h2>Author Info</h2>
        <div>
          <label>Author Name</label>
          <div>
            <Field name='authorName' type='text' />
            <span>
              <ErrorMessage name='authorName' />
            </span>
          </div>
        </div>
        <br />
        <div>
          <label>Birth Date</label>
          <div>
            <Field name='birthDate' type='date' />
            <span>
              <ErrorMessage name='birthDate' />
            </span>
          </div>
        </div>
        <br />
        <div>
          <label>Biography</label>
          <div>
            <Field name='biography' type='textarea' />
            <span>
              <ErrorMessage name='biography' />
            </span>
          </div>
        </div>
        <br />
        <button type='submit'>Create</button>
      </Form>
    </Formik>
  );
};

export default CreateData;
