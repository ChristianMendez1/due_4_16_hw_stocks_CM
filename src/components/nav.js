import { Link } from "react-router-dom";

export default function Nav (){
  return (
    <div className="nav">
      <Link to="/">
        <div id= 'istocks'>iStocks</div>
      </Link>
      <Link to="/About">
        <div>About</div>
      </Link>
      <Link to="/Stocks">
        <div>Stocks</div>
      </Link>
    </div>
  );
};