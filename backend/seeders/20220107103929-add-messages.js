
require('dotenv').config();
'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Messages', [
    //&#x0A;
    /* {
      id: ,
      title: "",
      content: "",
      media: '',
      createdAt: new Date(2021,10,11),
      updatedAt: new Date(2021,10,11)
    },*/
    {
      id: 1,
      title: "",
      content: "",
      media: '',
      createdAt: new Date(2021, 10, 11),
      updatedAt: new Date(2021, 10, 11)
    }, {
      id: 2,
      title: "",
      content: "",
      media: '',
      createdAt: new Date(2021, 10, 12),
      updatedAt: new Date(2021, 10, 12)
    }, {
      id: 3,
      title: "",
      content: "",
      media: '',
      createdAt: new Date(2021, 10, 12),
      updatedAt: new Date(2021, 10, 12)
    }, {
      id: 4,
      title: "",
      content: "",
      media: '',
      createdAt: new Date(2021, 10, 13),
      updatedAt: new Date(2021, 10, 13)
    }, {
      id: 5,
      title: "",
      content: "",
      media: '',
      createdAt: new Date(2021, 10, 13),
      updatedAt: new Date(2021, 10, 13)
    }, {
      id: 6,
      title: "",
      content: "",
      media: '',
      createdAt: new Date(2021, 10, 17),
      updatedAt: new Date(2021, 10, 17)
    }, {
      id: 7,
      title: "",
      content: "",
      media: '',
      createdAt: new Date(2021, 10, 18),
      updatedAt: new Date(2021, 10, 18)
    }, {
      id: 8,
      title: "",
      content: "",
      media: '',
      createdAt: new Date(2021, 10, 19),
      updatedAt: new Date(2021, 10, 19)
    }, {
      id: 9,
      title: "",
      content: "",
      media: '',
      createdAt: new Date(2021, 10, 19),
      updatedAt: new Date(2021, 10, 19)
    }, {
      id: 10,
      title: "",
      content: "",
      media: '',
      createdAt: new Date(2021, 10, 19),
      updatedAt: new Date(2021, 10, 19)
    }, {
      id: 11,
      title: "",
      content: "",
      media: '',
      createdAt: new Date(2021, 10, 21),
      updatedAt: new Date(2021, 10, 21)
    }, {
      id: 12,
      title: "",
      content: "",
      media: '',
      createdAt: new Date(2021, 10, 21),
      updatedAt: new Date(2021, 10, 21)
    }, {
      id: 13,
      title: "",
      content: "",
      media: '',
      createdAt: new Date(2021, 10, 21),
      updatedAt: new Date(2021, 10, 21)
    }, {
      id: 14,
      title: "",
      content: "",
      media: '',
      createdAt: new Date(2021, 10, 21),
      updatedAt: new Date(2021, 10, 21)
    }, {
      id: 15,
      title: "",
      content: "",
      media: '',
      createdAt: new Date(2021, 11, 11),
      updatedAt: new Date(2021, 11, 11)
    }, {
      id: 16,
      title: "",
      content: "",
      media: '',
      createdAt: new Date(2021, 12, 11),
      updatedAt: new Date(2021, 12, 11)
    }, {
      id: 17,
      title: "",
      content: "",
      media: '',
      createdAt: new Date(2021, 12, 11),
      updatedAt: new Date(2021, 12, 11)
    }, {
      id: 18,
      title: "",
      content: "",
      media: '',
      createdAt: new Date(2021, 10, 11),
      updatedAt: new Date(2021, 10, 11)
    }, {
      id: 19,
      title: "",
      content: "",
      media: '',
      createdAt: new Date(2021, 10, 11),
      updatedAt: new Date(2021, 10, 11)
    }, {
      id: 20,
      title: "",
      content: "",
      media: '',
      createdAt: new Date(2021, 10, 11),
      updatedAt: new Date(2021, 10, 11)
    },

  ], {}),

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Messages');
  }
};