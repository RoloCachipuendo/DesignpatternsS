const dog = {
  race: "Kilterrier",
  bark: function () {
    console.log(`Guau!, I'm a dog ${this.race}`);
  },
};

const solin = Object.create(dog);

solin.bark();
solin.race = "Super dog!";
solin.bark();
 