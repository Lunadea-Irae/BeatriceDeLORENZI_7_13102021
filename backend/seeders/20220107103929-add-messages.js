'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Messages', [
    {
      id: 1,
      title: 'titre numero 1',
      content: 'Description 1',
      media: 'http://localhost:3000/medias/test/1983188727_1.jpg',

      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      title: 'titre numero 2',
      content: 'Description 2',
      media: 'http://localhost:3000/medias/test/12052633_1095482467129160_2915692806728300228_o.jpg',

      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      title: 'titre numero 3',
      content: 'Description 3',
      media: "http://localhost:3000/medias/test/fleur-de-pecher-hanoi-vietnam-tet-800x500.jpg",

      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {}),

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Messages');
  }
};