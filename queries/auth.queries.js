
const queries = {
    loginUser : `
    SELECT id, nombre, apellidos, fecha_nacimiento, email FROM users 
    WHERE email = $1 AND contraseña = $2;`,
}
module.exports = queries;