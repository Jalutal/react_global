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
        <Header />
        <p>Voici un test de page.</p>
        </>
    )
}

/* Toujours faire l'export default afin que la page soit utilisable */

export default Course;

