'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Users', [
    /*
    {
      id: ,
      email: ,
      showEmail: ,
      username: ,
      password:,
      brief: ,
      level: ,
      avatar:,
      birthday: ,
      service:,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    */
    {
      id: 1,
      email: 'admin@groupomania.com',
      showEmail: true,
      username: 'Admin',
      password: 'the8est4dmin',
      brief: 'Je suis la nuit, je suis... Batman',
      level: 9,
      avatar: 'http://localhost:3000/medias/profiles/8.png',
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      id: 2,
      email: 'test@groupomania.com',
      showEmail: false,
      username: 'Toto',
      password: 'jesuistoto',
      level: 1,
      createdAt:new Date(),
      updatedAt:new Date()
    }
  ], {}),

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users');
  }
};
