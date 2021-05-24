const usersFollowing = [
  { user: "userA", Following: ["userB", "userD", "userE", "userG"] },
  { user: "userB", Following: ["userC", "userJ", "userI", "userE"] },
  { user: "userC", Following: ["userM", "userN", "userJ", "userI", "userE"] },
];
var cont = 0;

/**
 * Método para calcular la distancia entre dos usuarios
 * @author Rolando Cachiuendo
 * @param {* startUser} Usuario inicial de partida para calcular la distancia
 * @param {* finalUser} Usuario final para calcular la distancia
 */
function getDistance(startUser, finalUser) {
  const startUserObj = usersFollowing.find((user) => user.user === startUser);
  const listUserNoStart = usersFollowing.filter(
    (user) => user.user !== startUser
  );

  if (isFollowingUser(startUserObj, finalUser)) {
    cont++;
  } else {
      cont++;
    for (let index = 0; index < listUserNoStart.length; index++) {
      const userAux = isFollowingUser(listUserNoStart[index], finalUser);
      if (userAux) {
        cont++;
        if (userAux===finalUser) {
            return cont;
        }
      } else {
        cont++;
      }
    }
  }
  return 'No es posible calcular la distancia entre los usuario ya que no existe un laso entre sus seguidores';
}

/**
 *
 * @param {*dataUser} Usuario inicial de partida para calcular la distancia
 * @param {*finalUser} Usuario final para calcular la distancia
 * @returns {Object} Si el usuario existe en la lista de seguidores
 */
function isFollowingUser(dataUser, finalUser) {
  //console.log(dataUser);
  const { Following } = dataUser;
  return Following.find((follow) => follow === finalUser);
}

//
console.log(getDistance("userA", "userI"));
