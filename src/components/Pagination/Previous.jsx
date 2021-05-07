import React from "react";

const Previous = ({ currentPage, numberOfPage, setCurrentPage }) => {
  return (
    <li className={currentPage === 0 ? "page-item disabled" : "page-item"}>
      <a
        className="page-link"
        href="#"
        tabindex="-1"
        onClick={() => {
          setCurrentPage(currentPage - 1);
        }}
      >
        Previous
      </a>
    </li>
  );
};

export default Previous;
