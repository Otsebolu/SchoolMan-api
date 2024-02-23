import { Sequelize } from "sequelize";
import { config } from "./env.js";

// export const sequelize = new Sequelize('schoolman', 'root', 'p@ssword1234', {
//     host: 'localhost',
//     dialect: 'mysql'
//   });

export const sequelize = new Sequelize(config.dbname, config.dbusername, config.dbpassword, {
  host: 'localhost',
  dialect: 'mysql'
});