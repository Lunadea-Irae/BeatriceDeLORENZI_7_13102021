'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Messages', [
    //&#x0A;
    {
      id: 1,
      title: "Un cadeau d'anniversaire",
      content: "Voila le cadeau d'anniversaire de mon fils... Qu'il vienne pas me dire qu'il n'est pas gâté !",
      media: 'http://localhost:3000/medias/test/1983188727_1.jpg',

      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      title: 'Parce que chat',
      content: "Je trouvais qu'il n'y avait pas assez de petit chat mignon sur ce site... allez y lachez vous ! Floodez de petits chats mignons !&#x0A;&#x0A;Par contre je décline toute responsabilité auprès des Admins ;)",
      media: 'http://localhost:3000/medias/test/12052633_1095482467129160_2915692806728300228_o.jpg',

      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      title: 'chúc mừng năm mới !',
      content: 'Bonne et heureuse année à tous, que cette nouvelle année lunaire vous comble de bonheur et de joie.',
      media: "http://localhost:3000/medias/test/fleur-de-pecher-hanoi-vietnam-tet-800x500.jpg",

      createdAt: new Date(),
      updatedAt: new Date()
    },{
      id: 4,
      title: 'Une heureuse naissance',
      content: "Je vous annonce la naissance de mon adorable fille.&#x0A;&#x0A;Elle et sa maman se portent bien, on va pouvoir se reposer maintenant... Non j'rigole ! XD",
      media: "http://localhost:3000/medias/test/1988 02 0602.png",

      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {}),

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Messages');
  }
};