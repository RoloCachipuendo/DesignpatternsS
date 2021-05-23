const module = {
  prop: "mi prop",
  config: {
    lenguaje: "es",
    cache: true,
  },
  setConfig: (config) => {
    module.config = conf;
  },
  isCacheEnabled: () => {
    console.log(module.config.cache ? "Sí" : "No");
  },
};
