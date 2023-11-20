/* On fait les imports des modules qui seront concernés par la page.
Ici on importe Header car on souhaite maintenir le header sur chaque page.
*/


import Header from "../component/header/Header"; 


/* Chaque page contient une fonction avec variables, contenu js, etc... 
elle commence toujours par function name().
Les variables doivent être placées avant le return(). Idem toutes les fonctions javascript.
On ajoute un fragment (ou une balise qui a du sens) en dessous du return si deux balises de même niveau
y sont situées.
on met la balise <Header /> pour appeler le composant à cet endroit.
On ajoute le contenu de la page dessous.
*/

function Course() {
    console.log(`Voici un test de page.`)
    return (
        <>
        <Header pageTitle="Home de l'apprentissage. Je cherche toujours un meilleur je de mots." isUserAuthenticated={false} />
        <p>Voici un test de page.</p>
        <p className="pCourse">Comme toute page web il est possible de la modifier via css.</p>
        <p>On peut mettre aussi des images. Bref, c'est une page web.</p>
        <img src="https://faq.o2switch.fr/_media/tuto-rapide/o2switch-deployer-react.js.png" alt="logo react" />
        </>
    )
}

/* Toujours faire l'export default afin que la page soit utilisable */

export default Course;

