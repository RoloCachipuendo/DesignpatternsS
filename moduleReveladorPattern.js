/**
 * This Pattern is definite with ifis
 * @author Rolando Cachipuendo
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

/**
 * Example 
 * @author Rolando Cachipuendo
 */

const user=(()=>{
    const resource='https://jsonplaceholder.typicode.com/users';

    return {
        list:async()=>{
            return await fetch(resource).then(data=> data.json());
        },
        create:async(data)=>{
            return await fetch(resource,{
                type:'POST',
                body:JSON.stringify(data)
            }).then(dat=>dat.json())
        }
    }

})()