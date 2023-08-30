const Peliculas = [
  {
    name: "Harry Potter y el prisionero de Azkaban",
    Estreno: "3 / 6 / 2004",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BZjZlZDBkYzgtY2VmNi00OWI3LTk3ZjktZTk1MTliYWMxMWQxXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg",
  },
  {
    name: "Shrek",
    Estreno: "19 / 7 / 2001",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMTk2NTE1NTE0M15BMl5BanBnXkFtZTgwNjY4NTYxMTE@._V1_.jpg",
  },
  {
    name: "Avengers Infinity War",
    Estreno: "26 / 4 / 2018",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",
  },
  {
    name: "Iron Man",
    Estreno: "30 / 4 / 2008",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
  },
  {
    name: "Toy Story",
    Estreno: "14 / 3 / 1996",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_.jpg",
  },
  {
    name: "La Naranja Mecanica",
    Estreno: "25 / 7 / 1985",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_FMjpg_UX1000_.jpg",
  },
  {
    name: "Spiderman Into The Spider-Verse",
    Estreno: "10 / 1 / 2019",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_FMjpg_UX1000_.jpg",
  },
  {
    name: "It",
    Estreno: "21 / 9 / 2017",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_.jpg",
  },
];
function onLoad() {
  const list = document.getElementById("Peliculas");
  Peliculas.map((item) => {
    const imagen = document.createElement("img");
    const name = document.createElement("h1");
    const Estreno = document.createElement("p");
    const listelement = document.createElement("li");

    name.textContent = item.name;
    imagen.src = item.imagen;
    Estreno.textContent = `Fecha_de_Estreno ${item.Estreno}`;

    listelement.appendChild(imagen);
    listelement.appendChild(name);
    listelement.appendChild(Estreno); //li
    list.appendChild(listelement); //ul
  });
}
