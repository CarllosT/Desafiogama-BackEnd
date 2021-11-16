import sequelize , { Model } from "sequelize";

class Course extends Model {
    static init(sequelize){
        super.init({
            name: Sequelize.STRING,
        })
    }
}

export default Course;