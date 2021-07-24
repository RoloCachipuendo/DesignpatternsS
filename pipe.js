const users = [
  { edad: 17, nombre: "Nicolas", apellido: "Soto" },
  { edad: 18, nombre: "Chanchito", apellido: "Feliz" },
  { edad: 12, nombre: "Loreto", apellido: "Fernandez" },
  { edad: 1, nombre: "Sofía", apellido: "Zapata" },
];
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((y, f) => f(y), x);

const trace = (x) => (y) => console.log(x, y);

const filter = (f) => (xs) => xs.filter(f);

const firstInfante = (data) => data[0];

const formating = (data) => {
  console.log(data);
  return {
    allName: `${data.nombre} ${data.apellido}`,
    edad: data.edad,
  };
};

const format = (data) => `${data.allName} tiene ${data.edad}`;

/*Esto con point free funciona bien, también con pipe es de orden cambiado*/

const getFirstInfante = pipe(
  filter((x) => x.edad < 2),
  trace("lalalal"),
  firstInfante,
  formating,
  format
);
console.log(getFirstInfante(users));
