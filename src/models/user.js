import { sequelize } from '../config/database.js'
import { DataTypes, Model } from 'sequelize'

export class User extends Model{}



User.init({
    userID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: "student",
        allowNull: false,

        validate:{
            isIn: [["student", "lecturer", "admin"]]
        }
    }

},{
    sequelize,
    modelName: 'User'
}

)