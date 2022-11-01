var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    centerslide: 'true',
    fade: 'true',
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        540: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});
fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(
        function (response) {
            if (response.status != 200) {
                console.log('success' + response.status);
                return
            }
            response.json().then(function (data) {
                const pokemons = data.results;
                pokemons.forEach(pokemon => {
                    display(pokemon);
                })
            })
        }

    )

function detail(url) {
    fetch(url).then(function (response) {
        response.json().then(function (pokemon) {
            clearDetails();
            const container = document.getElementById('details')

            const card = document.createElement('div');
            card.setAttribute('class', 'card detail displaY-detail');

            const cardTitle = document.createElement('h3');
            cardTitle.innerHTML = `${pokemon.name}`;
            cardTitle.setAttribute('class', 'card-title text-center text-uppercase bodycard');

            const cardBody = document.createElement('img');
            cardBody.setAttribute('src', `${pokemon.sprites.front_default}`);

            card.append(cardTitle, cardBody);
            container.append(card);

        })
    })
}

function clearDetails() {
    const clearUi = document.getElementById('details');
    clearUi.innerHTML = ''
}

function display(pokemon) {
    const container = document.getElementById("pokemonList")
    const judul = document.createElement('h3');
    judul.innerHTML = `${pokemon.name}`;
    // const test = `${pokemon.sprites.front_default}`

    const card = document.createElement('div');


    card.append(judul);
    container.append(card);
    judul.setAttribute('onClick', `detail("${pokemon.url}")`);
    card.setAttribute('class', 'swiper-slide card ');
}