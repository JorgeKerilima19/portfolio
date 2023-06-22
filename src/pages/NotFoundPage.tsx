import { Link } from "react-router-dom";
import "../index.css";
import "./styles/404.css"

import img from "../../public/404.svg";

export const NotFoundPage = () => {
  return (
    <main className="main container gap-2 section__404">
      <h2>404 Error</h2>
      <h3>Requested page does not exists</h3>
      <img style={{ width: "50%" }} src={img} alt="" />
      <Link to="./">
        <button className="contact__form__button">Go Back to Page</button>
      </Link>
    </main>
  );
};
