const Peliculas = [
  {
    name: "Harry Potter y el prisionero de Azkaban",
    Estreno: 3 / 6 / 2004,
    imagen:
      "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/9cd51c348b06fc970bcd7c55dc7920aef2a5b43c8f5e0050d39b4d3fc54bdb7e._RI_TTW_.jpg:",
  },
  {
    name: "Shrek",
    Estreno: 19 / 7 / 2001,
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMTk2NTE1NTE0M15BMl5BanBnXkFtZTgwNjY4NTYxMTE@._V1_.jpg",
  },
  {
    name: "Avengers Infinity War",
    Estreno: 26 / 4 / 2018,
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",
  },
  {
    name: "Iron Man",
    Estreno: 30 / 4 / 2008,
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
  },
  {
    name: "Toy Story",
    Estreno: 14 / 3 / 1996,
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_.jpg",
  },
  {
    name: "La Naranja Mecanica",
    Estreno: 25 / 7 / 1985,
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_FMjpg_UX1000_.jpg",
  },
  {
    name: "Spiderman Into The Spider-Verse",
    Estreno: 10 / 1 / 2019,
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_FMjpg_UX1000_.jpg",
  },
  {
    name: "It",
    Estreno: 21 / 9 / 2017,
    imagen:
      "https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_.jpg",
  },
];

array.map((item) => {
  const img = document.createElement("img");
  const nombre = document.createElement("Nombre");
  const anio = document.createElement("anio");
  const listelement = document.createElement("elemento");

  (nombre.textContent = item), nombre;
  img.src = item.img;
  anio.textContent = `Fecha_de_Estreno ${item.anio}`;

  listelement.appendChild("imagen");
  listelement.appendChild("name");
  listelement.appendChild("Estreno");
  list.appendChild(listelement);
});
