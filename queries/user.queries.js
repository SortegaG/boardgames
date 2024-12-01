
const queries = {
    getUserById: `
    SELECT *
    FROM users
    WHERE id = $1`,
    getAllUsers: `SELECT * FROM users`,
    createUser: `INSERT INTO users (nombre, apellidos, fecha_nacimiento, email, contraseña)
    VALUES ($1, $2, $3, $4, $5);`,
    updateUser: `UPDATE users
    SET nombre = $1 , apellidos = $2, email = $3, password = $4
    WHERE email = $3`,
    deleteUser: `DELETE FROM users
    WHERE email = $1`, 
    loginUser : `
    SELECT * FROM users 
    WHERE email = $1 AND contraseña = $2;`,
}
module.exports = queries;