const Joi = require('joi');

module.exports = {
    id: Joi.number(),
    login: Joi.string().min(1),
    email: Joi.string().email().min(5),
    tel: Joi.string().min(1),
    officeId: Joi.number()
};


const bcrypt = require('bcryptjs');
module.exports = (Sequelize, sequelize) => {
    return sequelize.define('accounts', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        login: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        created:{
            type: Sequelize.DATE
        },
        role: {
            type: Sequelize.STRING
        },
        isBlocked:{
            type: Sequelize.BOOLEAN, defaultValue: false
        }

    }, {
        hooks: {
            beforeSave: (account, options) =>{
                return bcrypt.genSalt(11)
                    .then(function (salt){
                        return bcrypt.hash(account.password, salt);
                    }).then(function (hash){
                        user.password = hash;
                    });
            }
        }
    });
};