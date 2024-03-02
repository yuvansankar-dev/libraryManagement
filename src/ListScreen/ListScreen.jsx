import React from "react";
import { useNavigate } from "react-router-dom";

const ListScreen = ({ bookList, setBookData }) => {
  const navigate = useNavigate();

  const createClick = () => {
    navigate("/create");
  };

  const deleteClick = (id) => {
    setBookData((pre) => pre.filter((book) => !(book.bookId === id)));
    // navigate("/create");
  };

  const editClick = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <>
      <div className='headerProperty'>
        <h2 style={{ margin: "0px" }}>Book List</h2>
        <button style={{ margin: "0px" }} onClick={createClick}>
          Create
        </button>
      </div>
      <div>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Book Title</th>
              <th scope='col'>Book Author</th>
              <th scope='col'>Book ID</th>
              <th scope='col'>Book Published Date</th>
              <th scope='col'>Book Author Name</th>
              <th scope='col'>Author Birth Date</th>
              <th scope='col' style={{ width: "600px" }}>
                Biography
              </th>
              <th scope='col'>Edit</th>
              <th scope='col'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {bookList.map((bookData, idx) => {
              return (
                <tr key={idx}>
                  <th scope='row'>{idx + 1}</th>
                  <td>{bookData.bookTitle}</td>
                  <td>{bookData.bookAuthor}</td>
                  <td>{bookData.bookId}</td>
                  <td>{bookData.bookPublishedDate}</td>
                  <td>{bookData.authorName}</td>
                  <td>{bookData.birthDate}</td>
                  <td style={{ textAlign: "left" }}>{bookData.biography}</td>
                  <td>
                    <button onClick={() => editClick(bookData.bookId)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button onClick={() => deleteClick(bookData.bookId)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListScreen;
