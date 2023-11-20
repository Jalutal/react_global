
/* 
On importe le link afin de pouvoir créer les routes react.
Les routes permettent basiquement des sauts de pages en ne modifiant que la partie ciblée 
et en maintenant le reste à l'affichage sans recharge.
La balise Link doit s'écrire Link et non link (idem sur l'import)
*/
import { Link } from "react-router-dom";

function Header({ pageTitle, isUserAuthenticated }) {

    return (
        <header>
            <p>{pageTitle}</p>
            <nav>
        <ul>
          <li>
            <Link to="/">{pageTitle === "HomePage" ? <strong>Home</strong> : <p>Home</p>}</Link>
          </li>
          <li>
            <Link to="/course2">
              {pageTitle === "Page de liste de produits" ? <strong>Cours 2 - Les tableaux</strong> : <p>Cours 2</p>}
            </Link>
          </li>
          <li>
            <Link to="/course3">
              {pageTitle === "Page en rapport avec les props" ? <strong>Cours 3 - Les props</strong> : <p>Cours 3</p>}
            </Link>
          </li>
        </ul>
      </nav>
      {isUserAuthenticated ? <p>Bonjour</p> : <p>Connectez-vous </p>}
        </header>
    )
}

export default Header;