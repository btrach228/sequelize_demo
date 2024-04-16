// Import library
import { Sequelize } from "sequelize";
// Create a database connection in your dialect:
const db = new Sequelize('production', 'production_user', 'password2', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;

