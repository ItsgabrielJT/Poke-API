

async function obetnerDatos(id, number) {
    const datos = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemons = await datos.json();
    console.log(pokemons)
    mostrarPokemon(pokemons, number);
};

const btnSelecionar = () => {
    let primer_pokemon = Math.round(Math.random()*150);
    let segundo_pokemon = Math.round(Math.random()*150);
    obetnerDatos(primer_pokemon, 1);
    obetnerDatos(segundo_pokemon, 2);
};

btnSelecionar();

const lista = document.getElementById('mostrarPokemon');

const mostrarPokemon = (data, number) => {
    let card = lista.querySelector(`#pok-${number}`);
    card.getElementsByTagName('img')[0].setAttribute('src', data.sprites.front_default);
    card.getElementsByTagName('h2')[0].innerHTML = data.name;
}

const boton = document.getElementById('seleccionar');

boton.addEventListener('click', function () {
    btnSelecionar();
})

