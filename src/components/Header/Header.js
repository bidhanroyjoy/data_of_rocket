import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSearch } from "../../Redux/Action";
export default function Header() {
  const dispatch = useDispatch();

  const [searchTextt, setsearchTextt] = useState("");
  useEffect(() => {
    dispatch(handleSearch(searchTextt));
  }, [searchTextt]);

  const handlesearchName = (e) => {
    setsearchTextt(e.target.value);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark text-dark bg-dark">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto d-flex justify-content-around">
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => handlesearchName(e)}
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>{" "}
    </div>
  );
}
