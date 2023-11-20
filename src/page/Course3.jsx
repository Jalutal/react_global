import { Link } from "react-router-dom";
import Header from "../component/header/Header";
import ProductCard from "../component/ProductCard";


function Course3() {

    return (
        <>
        <Header pageTitle="Cours sur les props avec le 06 de ta mère. No shit." isUserAuthenticated={true} />
        <h2>Cours 3 : les Props</h2>
        <p>Le concept: on prend un bout de code (bien souvent une fonction) et on va la mettre de côté pour faire un appel dessus.</p>
        <strong>Le but ?</strong>
        <p>Simplifier le code, éviter les redondances. On passe en variable le code dur pour que tout se simplifie à l'écriture.</p>
        <p>Pour cela, on fait dans l'ordre (on reprend l'exemple de l'électroménager, que j'ai oublié de récupérer parce que je suis nul mais va falloir le faire...) :</p>
        <ol>
            <li>
                On crée un répertoire "utils" dans le répertoire src. Il va stocker tous nos "bouts" de code.
            </li>
            <li>
                On crée un fichier "products-utils.js" dans ce répertoire. 
            </li>
            <li>
                Dans ce répertoire on met l'intégralité du tableau de l'électroménager.
            </li>
            <li>
                ATTENTION GARS ! On ajoute <strong>export</strong> devant const. Cela précise que le bout de code va pouvoir s'exporter sur d'autres pages.
            </li>
            <li>
                Je le redis : <strong>export const products = ....</strong>
            </li>
            <li>
                En bas on rajoute un autre export de variable mais cette fois pour le <strong>sort</strong>.
            </li>
            <li>
                Le concept de ce props va être de faire appel à lui pour effectuer un tri via le sort sans se limiter à la nature du tri (trier par prix, date, ...). On met donc l'intégralité en variable.
            </li>
            <li>
                En gros, si je suis capable de quote, ça devrait donner un truc du genre :
            </li>
            <li>
            <em>export const productSortedByPrice = products.sort((product1, product2) => product1.price - product2.price);</em>
            </li>
            <li>
                Je prends une bière pour me féliciter de ce quote du seigneur.
            </li>
            <li>
                Bien évidement, on fait l'import sur les pages qui auront besoin de cette fonction. on va commencer par HomePage.
            </li>
            <li>
                pour link le props, on fait <strong>import accolade productSortedByPrice, products  from "../utils/products-utils";</strong>
            </li>
            <li>
                Vu que je suis une bille en JS mais qu'un jour je ferai amazon 2.0, explication pour les nuls :
            </li>
            <li>
                On importe du fichier products-utils les variables products (le tableau) et productSortedByPrice (la fonction du sort).
            </li>
            <li>
                Maintenant, on test :
            </li>
        </ol>
        <p>Et return : fuck pour une raison inconnue qui me gaaaaaaaave... Bon, pas grave, je suis têtu, on fait plus simple et on attend la correction de David demain pour comprendre pourquoi on a un chromosome en trop ce soir.</p>
        <p>Donc deuxième props, vachement plus simple à faire et à comprendre : On va aller modifier le Header de telle sorte qu'il affiche un nom de catégorie différent en fonction de chaque page.</p>
        <p>On aura alors un "HomePage" pour la HomePage, "Page de liste des produits" pour Products et "Page de produit" pour... La page du produit. Essaie de suivre, merde.</p>
        <p>Voilà comment on va faire. Concentre toi et ne te ridiculise plus devant toi même, c'est moche :</p>
        <ol>
            <li>
                On va aller jouer dans le Header. Déjà on va lui préciser un nom qui va nous permettre de récupérer 2 choses : le nom de la page et si l'utilisateur est déjà connecté (BOOM TU L'AVAIS PAS VU VENIR CELLE-LA ! CLIFFHANGER MADAFAKA !). Bon évidemment on va adapter parce que j'ai pas ces pages. Je viens de m'en rendre compte. Facepalm à moi-même.
            </li>
            <li>
                On va donc partir sur du function Header( pageTitle, isUserAuthenticated ) et on met des accolades dans les parenthèses. Si je suis obligé de t'expliquer le sens des variables tu peux changer de voie et prendre des cours de tricot.
            </li>
            <li>
                <p>En fait, si t'as pas été trop con en relisant ce mini cours, t'auras remarqué que le taff est déjà fait. Genre d'auto-spoil. Voilà l'explication :</p>
            </li>
            <li>
                On a précisé dans le Header <strong><p>pageTitle</p></strong>. C'est là que tout se joue en fait.
            </li>
            <li>
                Quand on passe sur les pages concernées, on modifie la balise Header comme suit : <strong>pageTitle="Cours sur les props avec le 06 de ta mère. No shit." isUserAuthenticated={true} </strong>. 
            </li>
            <li>
                En gros on lui dit "désormais pageTitle prends la valeur X et l'utilisateur est connecté".
            </li>
            <li>
                On se retrouve donc avec écrit en haut de la page "Cours sur les props" et "Bienvenue" en dessous. Ben oui, on a marqué <strong>isUserAuthenticated ? Bonjour</strong> dans le Header donc si l'utilisateur est <em>true</em>, il nous renvoie ça. Si on est en <em>false</em> il va renvoyer "connexion". 
            </li>
            <li>
                Vu que je suis fûté pour moi il suffit de regarder les 2 autres pages : le titre change et sur le Home on a du false pour tester.
            </li>
        </ol>
        <p>En gros les props (bon allez fin du suspens: props = propriétés) c'est ça. Mettre une fonction "à gauche", tout en variables, pour la ressortir quand ça nous arrange. On évite les redondances et le code est plus clair.</p>
        <p>Ca me fait penser que ça manque de CSS dégueu sur ces cours... Pour le prochain.</p>
        </>
    )

}

export default Course3;