import  {Sequelize, Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/database.js'

export class Student extends Model{}

Student.init({
    studentID: {
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
    }

},{
    sequelize,
    modelName: 'Student'
}

)