
/* 
On importe le link afin de pouvoir créer les routes react.
Les routes permettent basiquement des sauts de pages en ne modifiant que la partie ciblée 
et en maintenant le reste à l'affichage sans recharge.
La balise Link doit s'écrire Link et non link (idem sur l'import)
*/
import { Link } from "react-router-dom";

function Header() {

    return (
        <header>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/course2">Cours 2 - Tableau</Link>
                </li>
            </ul>
        </nav>
        </header>
    )
}

export default Header;