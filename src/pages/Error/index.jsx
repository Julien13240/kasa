import { NavLink } from "react-router-dom";

import "./error.scss"
export default function Error() {
  return (
    <>

      <div className="errorContainer">
        <p className="errorContainer__Number">404</p>
        <p className="errorContainer__Text">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <NavLink to="/" className="errorContainer__Link">
          Retourner sur la page d'accueil
        </NavLink>
      </div>

    </>
  );
}