import Header from "../component/header/Header";

function Course2() {
    const pokemons = [
        {
          id: 1,
          name: "bulbasaur",
          types: ["poison", "grass"],
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
          isInTeam: true,
        },
        {
          id: 2,
          name: "ivysaur",
          types: ["poison", "grass"],
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
          isInTeam: true,
        },
        {
          id: 3,
          name: "venusaur",
          types: ["poison", "grass"],
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
          isInTeam: false,
        },
        {
          id: 4,
          name: "charmander",
          types: ["fire"],
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
          isInTeam: true,
        },
        {
          id: 5,
          name: "charmeleon",
          types: ["fire"],
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
          isInTeam: false,
        },
        {
          id: 6,
          name: "charizard",
          types: ["flying", "fire"],
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
          isInTeam: true,
        },
        {
          id: 7,
          name: "squirtle",
          types: ["water"],
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
          isInTeam: true,
        },
        {
          id: 8,
          name: "wartortle",
          types: ["water"],
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
          isInTeam: false,
        },
        {
          id: 9,
          name: "blastoise",
          types: ["water"],
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
          isInTeam: true,
        },
      ];
    
      const pokemonIsInTeam = pokemons.filter((pokemon) => {
        return pokemon.isInTeam == true;
      })


    return (
        <>
        <Header pageTitle="Cours sur les tableaux avec des pokemons" isUserAuthenticated={true} />
        <h1>Ici nous allons nous pencher sur les tableaux.</h1>
        <p>Dans le function Course 2 j'ai repris le tableau de données des Pokémons (nommé pokemons).</p>
        <p>Ce tableau contient les noms, types, images des pokémons mais également une id et une équipe (ou non).</p>
        <p>Ca ressemble à ça (snippet de la première entrée du tableau):</p>
        <p>const pokemons =</p>       
        <p className="quotePok">id: 1,</p>
        <p className="quotePok">name: "bulbasaur",</p>
        <p className="quotePok">types: ["poison", "grass"],</p>
        <p className="quotePok">img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",</p>
        <p className="quotePok">isInTeam: true,</p>
        <p>Dans un premier temps, nous allons récupérer l'intégralité des noms des pokémons de la liste.</p>
        <p>Pour cela, on se sert de la méthode map qui va "scanner" tout le tableau et retourner l'élément demandé (ici le nom et
            l'image du pokémon).</p>
        {pokemons.map((pokemon) => {
        return (
          <article>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.img} alt={pokemon.name} />
          </article>
        );
      })}     
        <h2>Maintenant, petite variante : on va récupéré uniquement les Pokémons présents dans une équipe.</h2>
        <p>Pour se faire, il faut utiliser la méthode filter afin de trierles pokémons que nous voulons.</p>
        <p>La logique de préparation est différent et comporte plusieurs étapes :</p>
        <ol>
            <li>On filtre les articles recherchés dans une variable à part qui va stocker le résultat.</li>
            <li>On map ensuite cette variable (donc les pokémons choisis) afin de sélectionner uniquement ceux qui nous intéressent.</li>
        </ol>
        <p>On va donc écrire au dessus du return dans la fonction la variable de stockage puis on map dans le corps du texte.</p>
        <p>Le résultat est le suivant :</p>
        {pokemonIsInTeam.map((pokemon) => 
        <> 
        <p>{pokemon.name}</p>
        <p>{pokemon.types}</p>
        </>
        )}
        <p>Nous voyons que la liste est plus courte car seuls les pokémons en team on été sélectionnés.</p>
        </>
    )
}

export default Course2;