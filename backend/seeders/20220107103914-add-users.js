
require('dotenv').config();
'use strict';
const port = normalizePort(process.env.PORT || '3000')

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
      password: '$2b$10$GwDbr7SzKIaZ.nwr/CqWPeWE/t3XWPZSpMfpbnxjZFdpB6GhL8r9e',
      brief: 'Je suis la nuit, je suis... Batman',
      level: 9,
      avatar: 'http://localhost:'+port+'/medias/avatars/1.png',
      createdAt:new Date(2021,10,11),
      updatedAt:new Date(2022,01,17)
    },{
      id: 2,
      email: 'thomas.tomel@groupomania.com',
      showEmail: false,
      username: 'Toto',
      password: '$2b$10$y/7EQJrScU4J/CnhKmF0.u0uBOfVygZcwu6ieQemckir5Ps9AQnsK',
      level: 1,
      avatar: 'http://localhost:3000/medias/avatars/2.png',
      createdAt:new Date(2021,10,12),
      updatedAt:new Date(2022,01,17)
    },{
      id: 3,
      email: 'vaness4@groupomania.com',
      showEmail: false,
      username: 'Vaness',
      password: '$2b$10$y/7EQJrScU4J/CnhKmF0.u0uBOfVygZcwu6ieQemckir5Ps9AQnsK',
      level: 1,
      avatar: '',
      createdAt:new Date(2021,10,12),
      updatedAt:new Date(2022,01,17)
    },{
      id: 4,
      email: 'test4@groupomania.com',
      showEmail: false,
      username: 'ofdsg4',
      password: '$2b$10$y/7EQJrScU4J/CnhKmF0.u0uBOfVygZcwu6ieQemckir5Ps9AQnsK',
      level: 1,
      avatar: 'http://localhost:3000/medias/avatars/4.jpg',
      createdAt:new Date(2021,10,13),
      updatedAt:new Date(2022,01,17)
    },{
      id: 5,
      email: 'test5@groupomania.com',
      showEmail: false,
      username: 'user 5',
      password: '$2b$10$y/7EQJrScU4J/CnhKmF0.u0uBOfVygZcwu6ieQemckir5Ps9AQnsK',
      level: 1,
      avatar: 'http://localhost:3000/medias/avatars/5.jpg',
      createdAt:new Date(2021,10,14),
      updatedAt:new Date(2022,01,17)
    },{
      id: 6,
      email: 'test6@groupomania.com',
      showEmail: false,
      username: 'Fandes6ties',
      password: '$2b$10$y/7EQJrScU4J/CnhKmF0.u0uBOfVygZcwu6ieQemckir5Ps9AQnsK',
      level: 1,
      avatar: '',
      createdAt:new Date(2021,10,14),
      updatedAt:new Date(2022,01,17)
    },{
      id: 7,
      email: 'test7@groupomania.com',
      showEmail: false,
      username: 'Chau7',
      password: '$2b$10$y/7EQJrScU4J/CnhKmF0.u0uBOfVygZcwu6ieQemckir5Ps9AQnsK',
      avatar: 'http://localhost:3000/medias/avatars/7.png',
      level: 1,
      createdAt:new Date(2021,10,15),
      updatedAt:new Date(2022,01,17)
    },{
      id: 8,
      email: 'test8@groupomania.com',
      showEmail: false,
      username: '888',
      password: '$2b$10$y/7EQJrScU4J/CnhKmF0.u0uBOfVygZcwu6ieQemckir5Ps9AQnsK',
      level: 1,
      avatar: 'http://localhost:3000/medias/avatars/8.png',
      createdAt:new Date(2021,10,16),
      updatedAt:new Date(2022,01,17)
    },{
      id: 9,
      email: 'invite@nomail.com',
      showEmail: false,
      username: 'Invité',
      password: 'nopassword',
      brief : 'Tous les posts de ceux qui nous ont quittés sont là.',
      avatar: 'http://localhost:3000/medias/avatars/9.png',
      level: 0,
      createdAt:new Date(2021,10,11),
      updatedAt:new Date(2022,01,17)
    }
  ], {}),

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users');
  }
};
