'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

//const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
// const { sanitizeEntity } = require('strapi-utils');

 module.exports = {

//     async find(ctx) {
//         const entity = await strapi.services.doctors.find();
//         return sanitizeEntity(entity, { model: strapi.models.doctors });
//       },
    async find(ctx) {
        console.log("im in ");
        const Doctors = await strapi.services.doctor.find(ctx.query);
        return Doctors.map((doc)=>doctor.firstname);
      },
};
