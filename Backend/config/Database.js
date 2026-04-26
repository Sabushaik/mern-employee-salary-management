import { Sequelize } from 'sequelize';

const db = new Sequelize('db_penggajian3', 'root', 'root1234', {
    host: "localhost",
    dialect: "mysql"
});

export default db;