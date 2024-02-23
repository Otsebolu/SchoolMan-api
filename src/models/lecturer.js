import  {Sequelize, Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/database'

export class Lecturer extends Model{}

Lecturer.init({
    lecturerID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }

},{
    sequelize,
    modelName: 'Lecturer'
}

)