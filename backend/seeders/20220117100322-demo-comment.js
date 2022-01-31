'use strict';


module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Comments', [
        //&#x0A;
    {
      id: 1,
      content:"Pour ça il faut être cha-ste ? X) Rendez-vous à la Cha-christie&#x0A;&#x0A;(Ces blagues marchent mieux en vocal que par écrit)" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 2,
      messageId: 1
  },
  {
      id: 2,
      content:"Quand on pense qu'au moyen âge le pape avait ordonné de les bruler... Ca ferait une belle revanche." ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 3,
      messageId: 1
  },
  {
      id: 3,
      content:"Certains disent que c'est des mensonges.&#x0A;&#x0A;https://www.youtube.com/watch?v=tFOVWwEUuPE&t=66s&#x0A;&#x0A;Après, aucun d'entre nous n'était là à l'époque du coup difficile de faire son Bourdin 🤣" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 4,
      messageId: 1
  },
  {
      id: 4,
      content:"Ah oui tient c'est vrai que ça veut pas du tout dire la même chose dis donc. Merci pour cette vidéo. Après... sincèrement les quiproquos à cette époque et le soucis de circulation de l'information a sans doute fait son oeuvre..." ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 5,
      messageId: 1
  },
  {
      id: 5,
      content:"Je vais direct à la chat-pelle dans ce cas !" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 6,
      messageId: 1
  },
  {
      id: 6,
      content:"Ce topic ressemble de plus en plus à un chat (un tchat)" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 8,
      messageId: 1
  },
  {
      id: 7,
      content:"Prends du local, un bon taipan te débarrassera des araignées 😝" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 4,
      messageId: 2
  },
  {
      id: 8,
      content:"Non mais c'est un cercle infinit ! Après tu vas te demander Baygon vert ou Baygon Jaune... ensuite quelle taille de spray..." ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 5,
      messageId: 2
  },
  {
      id: 9,
      content:"Moi je dis, tu reviens et pouf t'es Indiana Johns !" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 6,
      messageId: 2
  },
  {
      id: 10,
      content:"Une maitresse commune aux deux... j'aimerais pas être à sa place." ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 1,
      messageId: 3
  },
  {
      id: 11,
      content:"Ah ah si copier des lignes avaient été efficace, la paie dans le monde serait assurée" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 3,
      messageId: 3
  },
  {
      id: 12,
      content:"Ouaaaah c'est magnifique ! C'est clair que ça donne envie" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 1,
      messageId: 4
  },
  {
      id: 13,
      content:"Moi je suis partant ! Je suis dispo les samedi et dimanche, ça pose souci si on amène la famille et le chien ? Ca pourrait être sympa non ?" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 8,
      messageId: 4
  },
  {
      id: 14,
      content:"Oui en effet ils refondent leur site entièrement. Après il me semble qu'ils avaient plutot prévu des photos in-situ... Si c'est ça leur in situ ça doit pas beaucoup bosser 😅" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 1,
      messageId: 5
  },
  {
      id: 15,
      content:"Non mais Instagram c'est new age pour la pub !" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 2,
      messageId: 5
  },
  {
      id: 16,
      content:"Hey je la connais elle, elle fait une story facebook sur la vie dans sa société, elle est suivie par des centaines de followers !" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 3,
      messageId: 5
  },
  {
      id: 17,
      content:"Sans rire ? 😲 Mais c'est ce qu'il nous faut ça aussi !" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 4,
      messageId: 5
  },
  {
      id: 18,
      content:"Lol complètement, on se fait des vidéos des soirées d'entreprises et c'est suur qu'on explose les vues 🤣" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 8,
      messageId: 5
  },
  {
      id: 19,
      content:"\"long live the Queen\" prend tout son sens du coup X)" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 3,
      messageId: 6
  },
  {
      id: 20,
      content:"C'est pour ça que ses cheveux cachent toujours le haut de ses oreilles 😱" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 7,
      messageId: 6
  },
  {
      id: 21,
      content:"C'est une demi-elfe, elle a l'éternité mais pas la jeunesse éternelle... pas de bol sur la génétique quoi." ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 8,
      messageId: 6
  },
  {
      id: 22,
      content:"Enchanté Natasha !" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 2,
      messageId: 7
  },
  {
      id: 23,
      content:"Bon courage pour la mission." ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 3,
      messageId: 7
  },
  {
      id: 24,
      content:"Ca a l'air trop bien ! " ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 5,
      messageId: 7
  },
  {
      id: 25,
      content:"J'y suis allée en Afrique du Sud il y a deux ans, c'est top ! " ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 7,
      messageId: 7
  },
  {
      id: 26,
      content:"Pas trop chaud ?" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 8,
      messageId: 7
  },
  {
      id: 27,
      content:"Chewi en solo !" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 1,
      messageId: 8
  },
  {
      id: 28,
      content:"Si ton chat fait le même cri que Chewi amènes le chez le véto quand même 😂" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 2,
      messageId: 8
  },
  {
      id: 29,
      content:"Il va combattre les chat-sseurs X wing" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 3,
      messageId: 8
  },
  {
      id: 30,
      content:"Pourquoi les topics de chats ont tant de succès ? 🤣" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 4,
      messageId: 8
  },
  {
      id: 31,
      content:"Parce qu'ils sont chat-rmants ? &#x0A;&#x0A;On devrait faire un tag \"Blagues Pourries\"" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 5,
      messageId: 8
  },
  {
      id: 32,
      content:"Y a déjà le tag Humour X) après c'est vrai que pour les âmes sensibles ce serait cool de biiiieeennn séparer." ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 7,
      messageId: 8
  },
  {
      id: 33,
      content:"Un post sérieux, ça change. Mais c'est très très cool oui." ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 2,
      messageId: 9
  },
  {
      id: 34,
      content:"C'est pas un peu le sujet de ce site ?" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 5,
      messageId: 9
  },
  {
      id: 35,
      content:"C'est exactement ce que je me disais, c'est un réseau social d'entreprise du coup en théorie ça devrait servir à ça." ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 7,
      messageId: 9
  },
  {
      id: 36,
      content:"Sauf que tout le monde s'en sert pour partager des blagues ou des photos de vacances. Après c'est aussi ça l'intérêt d'une telle communication, ça améliore la com dans l'entreprise." ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 8,
      messageId: 9
  },
  {
      id: 37,
      content:"Ohhhh un revenant ! Alors ? Ca fait quoi de ne plus se lever à 6h ?" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 1,
      messageId: 10
  },
  {
      id: 38,
      content:"Ca te va bien au teint, profites bien et garde moi une place au soleil le vieux." ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 2,
      messageId: 10
  },
  {
      id: 39,
      content:"La prochaine fois floute pas l'arrière plan ça a l'air super beau là où tu es." ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 3,
      messageId: 10
  },
  {
      id: 40,
      content:"C'est qui \"Invité\" ?" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 5,
      messageId: 10
  },
  {
      id: 41,
      content:" Ca veut juste dire qu'il n'y a plus de compte associé." ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 6,
      messageId: 10
  },
  {
      id: 42,
      content:"J'ai mis du temps à la comprendre." ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 1,
      messageId: 11
  },
  {
      id: 43,
      content:"Vous qui avez une cheminée chez vous... sachez que je suis jaloux !" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 4,
      messageId: 11
  },
  {
      id: 44,
      content:"Vous qui êtes en Métropole... sachez que je pense à vous depuis la Guyane XD" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 5,
      messageId: 11
  },
  {
      id: 45,
      content:"Le nom de la photo c'est \"everest\"... après sincèrement... je suis pas convaincu." ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 1,
      messageId: 12
  },
  {
      id: 46,
      content:"J'ai pas trop l'impression que c'est en France, en tous cas désolé mais j'ai pas d'idée." ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 2,
      messageId: 12
  },
  {
      id: 47,
      content:"Pyrennées" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 4,
      messageId: 12
  },
  {
      id: 48,
      content:"Ah ? Moi j'aurais dit Alpes XD Ou Andes" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 5,
      messageId: 12
  },
  {
      id: 49,
      content:"Non mais ofdsg4 fait la pub pour sa région d'origine." ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 6,
      messageId: 12
  },
  {
      id: 50,
      content:"Merci beaucoup pour vos réponses ^^" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 8,
      messageId: 12
  },
  {
      id: 51,
      content:"OUIIIIIiiii Moi aussi je fais ça." ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 3,
      messageId: 13
  },
  {
      id: 52,
      content:"Moi je faisais ça avec un manche à balais peint X)" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 4,
      messageId: 13
  },
  {
      id: 53,
      content:"J'arrive pas à savoir si le cadeau est dans le papier cadeau ou le papier cadeau en lui même..." ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 5,
      messageId: 13
  },
  {
      id: 54,
      content:"Les chats et les enfants se posent encore la question." ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 7,
      messageId: 13
  },
  {
      id: 55,
      content:"NOOOOOONNN je te hais, je l'ai à nouveau en tête maintenant. Tant pis je vais le mettre dans l'openspace aujourd'hui. Ca vous apprendra 😈." ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 1,
      messageId: 14
  },
  {
      id: 56,
      content:"Tant que c'est pas l'âne Trotro..." ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 3,
      messageId: 14
  },
  {
      id: 57,
      content:"Nyan cat histoire d'être bien relou" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 5,
      messageId: 14
  },
  {
      id: 58,
      content:"Trop compliqué à chanter" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 6,
      messageId: 14
  },
  {
      id: 59,
      content:"Le salow il a même gardé les feuilles pour les lui ramener." ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 2,
      messageId: 15
  },
  {
      id: 60,
      content:"Quelle honte, rends la fraise à ta femme toi ! Tu sais pas ce que c'est !" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 3,
      messageId: 15
  },
  {
      id: 61,
      content:"Ah ! on m'informe que le CV de Sarah vient d'arriver sur le bureau de la RH avec comme lettre de motiv : \"La cantine et péter la gueule à Jim\"... Avec de telles motivations elle commence lundi" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 4,
      messageId: 15
  },
  {
      id: 62,
      content:"🤣" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 6,
      messageId: 15
  },
  {
      id: 63,
      content:"Haaawww trop chou !" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 2,
      messageId: 16
  },
  {
      id: 64,
      content:"Hey franchement faites pas ça à ces pauvres bêtes, c'est pas agréable pour eux." ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 3,
      messageId: 16
  },
  {
      id: 65,
      content:"C'est surtout dangereux surtout pour un chat, il va s'accrocher partout et se faire mal." ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 4,
      messageId: 16
  },
  {
      id: 66,
      content:"Je pense qu'il fallait bien prendre en compte le tag \"Humour\" Posez les panneaux SPA" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 7,
      messageId: 16
  },
  {
      id: 67,
      content:"Perso je suis Verso XD mais ils disent pas si c'est une bouteille de Whisky ou d'Hépar" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 1,
      messageId: 17
  },
  {
      id: 68,
      content:"... Moi je suis balance... bon bah ça \"élimine\" une bonne résolution pour cette nouvelle année XD" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 2,
      messageId: 17
  },
  {
      id: 69,
      content:"Balance aussi... je te soutiendrai dans ta non-résolution." ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 3,
      messageId: 17
  },
  {
      id: 70,
      content:"OGM j'avais jamais remarqué ! Non pitié pas encore ><" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 2,
      messageId: 18
  },
  {
      id: 71,
      content:"Comme le disait un célèbre Géranium : \"Oh non pas encore\"" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 3,
      messageId: 18
  },
  {
      id: 72,
      content:"Please incert coins to try again...&#x0A;Nooope on peut mettre plus de sous pour passer directement en 2023 pour être \"free\"" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 4,
      messageId: 18
  },
  {
      id: 73,
      content:"Tellement flippant ><" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 3,
      messageId: 19
  },
  {
      id: 74,
      content:"Grave, habituellement on poste plutot des feux d'artifices pour la nouvelle année vous savez ? Avec un joli texte qui dit \"Bonne année et bonne santé\"" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 5,
      messageId: 19
  },
  {
      id: 75,
      content:"Ouaiii mais c'est oldschool ça, ici on est trop in 😎" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 7,
      messageId: 19
  },
  {
      id: 76,
      content:"Faut vraiment que je me souvienne comment ça se dit... Non en fait google m'aidera" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 2,
      messageId: 20
  },
  {
      id: 77,
      content:"Qu'est-ce qu'on ferait sans google" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 3,
      messageId: 20
  },
  {
      id: 78,
      content:"Bonne année à tous !" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 5,
      messageId: 20
  },
  {
      id: 79,
      content:"C'est quand déjà le Têt ?" ,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 8,
      messageId: 20
  }
  ], {}),

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Comments');

  }
};
