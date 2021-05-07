import React from "react";

const Pages = ({ currentPage, numberOfPage, setCurrentPage }) => {
  let elements = [];
  for (let i = 0; i < numberOfPage; i++) {
    elements.push(
      <li
        className={currentPage === i ? "page-item active" : "page-item"}
        onClick={() => {
          setCurrentPage(i);
        }}
      >
        <a className="page-link" href="#">
          {i + 1}
        </a>
      </li>
    );
  }
  return elements;
};

export default Pages;
