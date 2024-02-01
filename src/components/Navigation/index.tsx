//Author: Erik Rodriguez
import { Fragment } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const style = {
    alignItems: "left",
  };

  return (
    <Fragment>
      <ul style={style}>
        <li>Listen Now</li>
        <li key={"1"}>
          <Link to={"/browse"}>Browse</Link>
        </li>
        <li>Radio</li>
      </ul>
    </Fragment>
  );
}

export default Navigation;
