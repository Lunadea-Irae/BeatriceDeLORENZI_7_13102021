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
      avatar: 'http://localhost:3000/medias/avatars/8.png',
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      id: 2,
      email: 'test@groupomania.com',
      showEmail: false,
      username: 'Toto',
      password: 'test',
      level: 1,
      avatar: 'http://localhost:3000/medias/avatars/1.jpg',
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      id: 3,
      email: 'vaness4@groupomania.com',
      showEmail: false,
      username: 'Vaness',
      password: 'test',
      level: 1,
      avatar: 'http://localhost:3000/medias/avatars/2.png',
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      id: 4,
      email: 'test4@groupomania.com',
      showEmail: false,
      username: 'ofdsg4',
      password: 'test',
      level: 1,
      avatar: 'http://localhost:3000/medias/avatars/3.png',
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      id: 5,
      email: 'test5@groupomania.com',
      showEmail: false,
      username: 'user 5',
      password: 'test',
      level: 1,
      avatar: 'http://localhost:3000/medias/avatars/4.jpg',
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      id: 6,
      email: 'test6@groupomania.com',
      showEmail: false,
      username: 'Fandes6ties',
      password: 'test',
      level: 1,
      avatar: 'http://localhost:3000/medias/avatars/5.jpg',
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      id: 7,
      email: 'test7@groupomania.com',
      showEmail: false,
      username: 'Chau7',
      password: 'test',
      level: 1,
      createdAt:new Date(),
      updatedAt:new Date()
    },{
      id: 8,
      email: 'test8@groupomania.com',
      showEmail: false,
      username: '888',
      password: 'test',
      level: 1,
      avatar: 'http://localhost:3000/medias/avatars/7.png',
      createdAt:new Date(),
      updatedAt:new Date()
    }
  ], {}),

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users');
  }
};
