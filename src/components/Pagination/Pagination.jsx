import React from "react";
import Next from "./Next";
import Pages from "./Pages";
import Previous from "./Previous";

const Pagination = ({ currentPage, numberOfPage, setCurrentPage }) => {
  return (
    <nav aria-label="...">
      <ul className="pagination">
        <Previous
          currentPage={currentPage}
          numberOfPage={numberOfPage}
          setCurrentPage={setCurrentPage}
        />
        <Pages
          currentPage={currentPage}
          numberOfPage={numberOfPage}
          setCurrentPage={setCurrentPage}
        />
        <Next
          currentPage={currentPage}
          numberOfPage={numberOfPage}
          setCurrentPage={setCurrentPage}
        />
      </ul>
    </nav>
  );
};

export default Pagination;
