import  {Sequelize, Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/database.js'

export class Course extends Model{}

Course.init({
    CourseID: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    coursecode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    coursename: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    department: {
        type: DataTypes.STRING,
        allowNull: false
    },
    faculty: {
        type: DataTypes.STRING,
        allowNull: false
    }

},{
    sequelize,
    modelName: 'Course'
}

)