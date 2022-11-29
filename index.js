

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

    let pokeUno = ''

    for(let i=0; i<data.abilities.length;i++)
    {
      pokeUno += `<div class="badge badge-secondary badge-outline" id="abl-2-2">${data.abilities[i].ability.name}</div><br>`
    }
    console.log(pokeUno);
    card.getElementsByTagName(`span`)[0].innerHTML = pokeUno;
}

const boton = document.getElementById('seleccionar');

boton.addEventListener('click', function () {
    btnSelecionar();
})

