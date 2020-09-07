import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const pagination = pageNumbers.map((number) => (
    <li className="page-item page-link">
      <a onClick={() => paginate(number)} href>
        {number}
      </a>
    </li>
  ));

  return (
    <nav>
      <ul className="pagination ">{pagination}</ul>
    </nav>
  );
};
export default Pagination;
