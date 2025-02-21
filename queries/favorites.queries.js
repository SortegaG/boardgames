
const queries = {
    getFavoriteByUserId: `
SELECT f.id as id_favorito, g.id as id_juego, *
FROM favorites AS f
INNER JOIN games as g ON f.id_juego = g.id
WHERE id_usuario = $1;`,
    createFavorite: `INSERT INTO favorites (id_usuario, id_juego)
    VALUES ($1, $2);`,
    deleteFavoriteById: `DELETE FROM favorites
    WHERE id = $1`,
}
module.exports = queries;