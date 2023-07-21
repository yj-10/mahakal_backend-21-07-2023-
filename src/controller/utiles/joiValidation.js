let Joi = require('joi')

let Copyright = Joi.object().keys({

  year: Joi.string().min(7).alphanum()
})

module.exports = {
  createUserSchema
}

