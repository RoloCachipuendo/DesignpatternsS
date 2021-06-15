const sum = a => b => a + b;

const result = sum(1)

console.log(sum(5)(3))

//Composition

const users = [
    { edad: 17, nombre: 'Nicolas', apellido: 'Soto' },
    { edad: 18, nombre: 'Chanchito', apellido: 'Feliz' },
    { edad: 12, nombre: 'Loreto', apellido: 'Fernandez' },
    { edad: 1, nombre: 'Sofía', apellido: 'Zapata' },
]


/*sin composition
const getFirstInfante = data => {
    const infantes = data.filter(d => d.edad < 2);
    const firstInfante = infantes[0];
    const infante = {
        allName: `${firstInfante.nombre} ${firstInfante.apellido}`,
        edad: firstInfante.edad,
    }
    return `${infante.allName} tiene ${infante.edad}`
}
*/


const firstInfante = data => data[0];

const formating = data => ({
    allName: `${data.nombre} ${data.apellido}`,
    edad: data.edad,
})

const format = data => `${data.allName} tiene ${data.edad}`

/**
 * Composition of funtion
 * @param {*} data 
 * @returns {*} String
 */
const getFirstInfante = data => {
    return format(formating(firstInfante(data.filter(d => d.edad < 2))))
}

console.log(getFirstInfante(users))