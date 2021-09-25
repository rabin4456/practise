import "../components/NavBar.css";
import { BiSun } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
// import { Button } from "react-bootstrap";

const NavBar = ({ getQuery, query, searchUser }) => {
  return (
    <div className="NavBar">
      <div className="label">
        <p className="label-1">Devfinder</p>
        <p className="label-2">
          Light <BiSun className="light" />
        </p>
      </div>
      <form onSubmit={searchUser}>
        <div className="searchBar">
          <span className="icon-span">
            <FiSearch />
          </span>
          <input
            className="search-input"
            type="text"
            placeholder="Search Github Username"
            value={query}
            onChange={getQuery}
          />
          <button className='botton' variant="primary">Search</button>
        </div>
      </form>
    </div>
  );
};

export default NavBar;
