import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="App-footer">
      <h4>Thank you for visiting Do This!</h4>
        <div className="flexboxHorizontal">
          <Link to="/about" className="App-link">About Us</Link>
          <Link to="/terms" className="App-link">Terms & Conditions</Link>
        </div>
    </div>
  );
}

export default Footer;