import React from "react";

const Next = ({ currentPage, numberOfPage, setCurrentPage }) => {
  return (
    <li
      className={
        currentPage === numberOfPage ? "page-item disabled" : "page-item"
      }
    >
      <a
        className="page-link"
        href="#"
        onClick={() => {
          setCurrentPage(currentPage + 1);
        }}
      >
        Next
      </a>
    </li>
  );
};

export default Next;
