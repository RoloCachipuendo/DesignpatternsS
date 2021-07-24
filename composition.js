const users = [
  { edad: 17, nombre: "Nicolas", apellido: "Soto" },
  { edad: 18, nombre: "Chanchito", apellido: "Feliz" },
  { edad: 12, nombre: "Loreto", apellido: "Fernandez" },
  { edad: 1, nombre: "Sofía", apellido: "Zapata" },
];
const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((y, f) => f(y), x);

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

/**
 * Composition of funtion
 * @param {*} data
 * @returns {*} String
 */
/* este es una primera forma, pero no funciona bien, la última función no devuelve nada
const getFirstInfante = (data) => {
  compose(format, formating, firstInfante, (xs) =>
    xs.filter((x) => x.edad < 2)
  )(data);
};*/

/*Esto con point free funciona bien*/
 
const getFirstInfante = compose(
  format,
  formating,
  firstInfante,
  filter((x) => x.edad < 2)
);
console.log(getFirstInfante(users));
