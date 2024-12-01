
const queries = {
    getFavoriteById: `
SELECT *
FROM favorites AS f
INNER JOIN games as g ON f.id_juego = g.id
WHERE id_usuario = $1;`,
    getAllGames: `SELECT * FROM games`,
    createGame: `INSERT INTO games (nombre, descripcion, categoria, edad_recomendada, jugadores_min, jugadores_max)
    VALUES ($1, $2, $3, $4, $5, $6);`,
    updateUser: `UPDATE users
    SET nombre = $1 , apellidos = $2, email = $3, password = $4
    WHERE email = $3`,
    deleteGame: `DELETE FROM games
    WHERE id_juego = $1`,
}
module.exports = queries;