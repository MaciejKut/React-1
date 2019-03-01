// var element = React.createElement('div', {}, 'Hello world!');

var movies = [{
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        img: 'https://www.sklepmartes.pl/46509-large_default/pilka-zine-cdamdjayn3f-huari.jpg'
    },
    {
        id: 2,
        title: '22Harry Potter',
        desc: 'film o czarodzieju',
        img: 'https://www.decathlon.pl/media/835/8351330/big_695930.jpg'
    },
    {
        id: 3,
        title: '33Harry Potter',
        desc: 'film o czarodzieju',
        img: 'https://ecsmedia.pl/c/intex-pilka-plazowa-w-iext35221918.jpg'
    }
];

// var element =
//     React.createElement('div', {},
//         React.createElement('h1', {}, "Lista filmów"),
//         React.createElement('ul', {},
//             React.createElement('li', {},
//                 React.createElement('h2', {}, 'Harry Potter'),
//                 React.createElement('p', {}, 'Film o czarodzieju')
//             ),
//             React.createElement('li', {},
//                 React.createElement('h2', {}, 'Drugi Potter'),
//                 React.createElement('p', {}, 'Drugi Film o czarodzieju')
//             )

//         ),
//     )

var moviesElements = movies.map(function (movie) {
    return React.createElement('li', {
            key: movie.id
        },
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {
            src: movie.img,
        })
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista Filmów'),
        React.createElement('ul', {}, moviesElements)
    );
ReactDOM.render(element, document.getElementById('app'));