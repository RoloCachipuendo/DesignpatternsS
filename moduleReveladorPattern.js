/**
 * This Pattern is definite with ifis
 */
const result = (() => {
  const x = {};

  return {
    a: () => console.log(x),
    b: (key, value) => x[key] = value,
  };
})();

result.a();
result.b("queso", "cabra");
result.a();
