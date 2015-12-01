/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      uuid: {
          type: 'string',
          primaryKey: true,
          required: true
      },

    firstName : { type: 'string' },
    password : { type: 'string' },
    tasks: {
        collection: 'Tasks',
        via: 'owner'
    },
    email : {
        type: 'string',
        unique: true
       },
    surname: { type: 'string'},
    encryptPassword: function () {
       return this.password;
      }
  },
  findUserByName: function (opts, cb){
      //var user = opts.user;
//      User.findOne(user.firstName).exec(function (err, user){
//     if(err) return cb(err);
//     if(!user) return cb(new Error ("the user was not found"));
//
//      });

      return cb({
          username: "Francis",
          password : "Mypassword1"
      });

  }
};

