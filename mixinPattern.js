/**
 * mixin
 */
let mixin = {
  greet() {
    console.log(`Hello ${this.nombre}`);
  },
  goodBye(){
      console.log(`Goodbye ${this.nombres}`)
  }
};

class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

/**
 * Aumentamos el prototype
 */
Object.assign(Usuario.prototype, mixin);

const usuario=new Usuario('Fernando');
usuario.greet();
