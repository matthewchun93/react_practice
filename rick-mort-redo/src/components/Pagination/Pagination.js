import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = (props) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      pageCount={props.info?.pages}
      forcePage={props.pageNumber === 1 ? 0 : props.pageNumber - 1}
      //activeClass highlights current page
      activeClassName="active"
      onPageChange={(data) => {
        props.setPageNumber(data.selected + 1);
      }}
      //pageClass and pageLink styles numbers between buttons
      pageClassName="page-item"
      pageLinkClassName="page-link"
      //prevLink styles anchor; prevClass styles button
      previousLabel="Prev"
      previousLinkClassName="text-decoration-none text-white"
      previousClassName="btn btn-primary"
      //nextLink styles anchor; nextClass styles button
      nextLabel="Next"
      nextLinkClassName="text-decoration-none text-white"
      nextClassName="btn btn-primary"
    />
  );
};

export default Pagination;
