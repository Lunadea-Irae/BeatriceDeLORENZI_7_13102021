
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
      title: "Cat-holique",
      content: "Je sais qu'on a dit de ne pas parler de politique mais... quand même une religion comme ça je signe avec un tel pape !&#x0A;&#x0A;Me frappez pas c'est juste de l'humour !",
      media: 'meme32725.jpg',
      createdAt: new Date(2021, 10, 11),
      updatedAt: new Date(2021, 10, 11)
    }, {
      id: 2,
      title: "Je suis pas prêt 😨",
      content: "j-61 avant mon départ en Australie pour les vacances de Noël... a votre avis je prends du Baygon ou un lance-flamme ? #Voyage #Noël #Films #Humour",
      media: 'memetdgdecembre38.jpg',
      createdAt: new Date(2021, 10, 12),
      updatedAt: new Date(2021, 10, 12)
    }, {
      id: 3,
      title: "Qui est leur maitresse ?",
      content: "#Humour #Politique",
      media: 'meme21810.jpg',
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
      title: "Elle était là",
      content: "Et oui, elle était déjà là... et elle n'a pas changé depuis... La reine est-elle une elfe ? #Humour #Films #Politique",
      media: 'memetdgdecembre42.jpg',
      createdAt: new Date(2021, 10, 17),
      updatedAt: new Date(2021, 10, 17)
    }, {
      id: 7,
      title: "Mission Afrique du sud",
      content: "Salut à tous et toutes,&#x0A;&#x0A;Je suis actuellement en Afrique du Sud à Le Cap (ou Au Cap... je sais pas) pour discuter avec notre partenaire Testify.&#x0A;&#x0A;J'ai été accueilli par Natasha qui a été mon interlocutrice pour tout ce séjour ainsi que mon guide et ma traductrices pour certains cas. #Voyage #Corporate",
      media: 'happy-4191133_1280.jpg',
      createdAt: new Date(2021, 10, 18),
      updatedAt: new Date(2021, 10, 18)
    }, {
      id: 8,
      title: "chewbacCat",
      content: "#Chat #Films #Humour",
      media: 'meme20031.jpg',
      createdAt: new Date(2021, 10, 19),
      updatedAt: new Date(2021, 10, 19)
    }, {
      id: 9,
      title: "La communication interne en entreprise",
      content: "Comment bien la mettre en œuvre au sein de votre entreprise ?&#x0A;&#x0A;Le choix des outils et des méthodes s’avère crucial. Rien ne sert de les mettre en place si personne n’a envie de les utiliser. Pour véhiculer votre message tout est possible : affiches, newsletters ou encore journal interne, intranet… mais également organiser des réunions reste une option intéressante à condition d’avoir été bien préparées en amont.&#x0A;Prenons l’exemple de quelques méthodes et supports pour illustrer notre propos:&#x0A;– La création d’un journal interne : destiné à vos salariés, vous pouvez le diffuser sous format numérique ou papier (voir les deux), et devra parler des nouveautés et des enjeux de l’entreprise mais aussi de la vie des salariés (les hobbies des salariés sont très appréciés).Votre objectif transmettre une information à tous et créer ainsi un lien d’appartenance. Attention tenez compte dans le cas d’une version papier à la protection de la planète !&#x0A;– L’instauration d’un livret d’accueil : il est destiné à vos nouveaux arrivants afin de faciliter leur intégration dans le groupe et leur permettre d’avoir un document pour connaitre les valeurs, les enjeux de l’entreprise.&#x0A;– Les tableaux d’affichage : leur positionnement doit être judicieux afin de transmettre des informations de fonctionnement à la vue de tous&#x0A;– Les conventions ou les séminaires : qui permettent non seulement de transmettre les enjeux de l’entreprise, les nouvelles stratégies mais aussi d’offrir un moment pour partager les idées, les avis et les opinions. C’est également l’occasion de féliciter vos collaborateurs pour leur travail et les motiver davantage.&#x0A;– L’intranet, l’outil devenu indispensable avec les confinements car il permet de faire circuler l’information mais attention il  doit être aussi utilisé avec intelligence. Transmettre une information si l’intranet dédié à la communication n’est pas lu par les salariés revient à une perte d’argent et de temps. Il faut donc mener une réflexion approfondie sur la manière de diffuser l’information. Avec les différents confinements, il est devenu l’axe de communication avec les collaborateurs.&#x0A;Tous ces supports ont pour but de favoriser la communication interne dans votre entreprise et ainsi d’assurer la bonne circulation des messages que vous souhaitez passer.&#x0A;Le rôle de la communication interne d’une entreprise est primordial ! Elle permet le partage des valeurs, la circulation des messages, la motivation des salariés et un contact bénéfique avec ces derniers. Il faut l’instaurer de la façon que vous souhaitez, mais de telle sorte à ce qu’elle soit le plus efficace possible. N’hésitez pas à être créatif !&#x0A;&#x0A;#Corporate",
      createdAt: new Date(2021, 10, 19),
      updatedAt: new Date(2021, 10, 19)
    }, {
      id: 10,
      title: "Bons baisés de la retraite",
      content: "Salut les jeunes, à la retraite depuis quelques jours et ça va très bien !",
      media: 'people-4041024_1280.jpg',
      createdAt: new Date(2021, 10, 19),
      updatedAt: new Date(2021, 10, 19)
    }, {
      id: 11,
      title: "Le retour du froid",
      content: "Jonhy, on pense à toi alors que le termomettre chute.",
      media: 'blaze-2178749_1280.jpg',
      createdAt: new Date(2021, 10, 21),
      updatedAt: new Date(2021, 10, 21)
    }, {
      id: 12,
      title: "Alpes ou Pyrénées ?",
      content: "Salut, j'ai découvert cette photos sur google et je trouve ça magnifique mais à votre avis c'est plutot dans les Alpes ou dans les Pyrénées ? #Voyage",
      media: 'mount-everest-6395759_1280.jpg',
      createdAt: new Date(2021, 10, 21),
      updatedAt: new Date(2021, 10, 21)
    }, {
      id: 13,
      title: "Je suis... ton père noel !",
      content: "C'est bientot Noël ! Le plus dur c'est de rester caché des enfants pour faire ça. #Humour #Films #Noël",
      media: 'memetdgdecembre33.jpg',
      createdAt: new Date(2021, 11, 10),
      updatedAt: new Date(2021, 11, 12)
    }, {
      id: 14,
      title: "La vengeance",
      content: "J'ai envie de chanter Baby-shark à mon fils de 4ans... il est 6h du mat 😈.",
      createdAt: new Date(2021, 11, 10),
      updatedAt: new Date(2021, 11, 21)
    }, {
      id: 15,
      title: "Sarah, cette fraise était pour toi...",
      content: "Jimmy se sent plus à la cantine depuis qu'il sait qu'il va devenir papa.&#x0A;&#x0A;Il m'a demandé de prendre cette photo pour, je cite \"Faire saliver sa copine\".#Corporate",
      media: 'model-395574_1280.jpg',
      createdAt: new Date(2021, 11, 11),
      updatedAt: new Date(2021, 11, 11)
    }, {
      id: 16,
      title: "Mamie Cateau",
      content: "Si ma grand-mère faisait vraiment ça, j'enverrai mon chat toutes les semaines chez elle oui ! Joyeux Noel petit chat !&#x0A;&#x0A;#Humour",
      media: 'memetdgdecembre31.jpg',
      createdAt: new Date(2021, 12, 11),
      updatedAt: new Date(2021, 12, 11)
    }, {
      id: 17,
      title: "Les Astres font des blagues en 2022",
      content: "Bélier, foncera tête baissée mais ne se fera pas trop mal. Aussi, évitez d’enfoncer des portes ouvertes pour vous épargner un mal inutile pour un bien futile.&#x0A;Taureau, attention à vous si vous allez dans le sud, les corridas ne sont pas encore bannies. De plus, soyez prudent lorsque vous sortirez car beaucoup aiment prendre le taureau par les cornes !&#x0A;Gémeaux, s’entendront bien entres- eux, sauf quand ils entreront en conflit.Ils auront toutefois l’avantage de pouvoir brainstormer ensemble de manière individuelle.Une chance pour les gémeaux.&#x0A;Cancer, fera encore de nombreux morts alors, mobilisez - vous pour que la recherche avance.PS : Les pro n’s’tatent plus, la clope en son sein tue!&#x0A;Lion, se fera manger un matin par un mec qui sera ensuite beaucoup trop en forme.Il perdra probablement sa place de roi de la savane suite à l’élection présidentielle qui mettra fin à sa dynastie pour un régime démocratique.&#x0A;Vierge, la perte du pucelage n’est pas prévue pour cette année.Désolé, il faudra encore se débrouiller seul(e).Le coup de main est possible mais pas le coup de rein.&#x0A;Balance, prendra du poids si elle ne fait pas gaffe à son équilibre alimentaire&#x0A;Scorpion, qui s’y frotte s’y pique.Il tentera de devenir ami avec une grenouille, mais comme la fable le dit bien, cette relation sera toxique bien que piquante.&#x0A;Sagittaire, instables à plusieurs, ils ne cesseront de bouger et les autres diront ensuite qu’ils s’agitèrent beaucoup pour produire peu!&#x0A;Capricorne, un insecte dommageable pour les habitations.Ce faisant, ne les invitez pas, ou bien vous risquez de le regretter.Préférez les convier à des pique - niques.&#x0A;Verseau, finira surement dans un verre.Durant l’année, il prendra de la bouteille.&#x0A;Poissons, se noieront dans un verre d’eau pour les moins chanceux.Verre d’eau probablement versé par un verseau.Attention donc aux interactions que vous entretiendrez.PS : préférez le charme à la drague.La drague étant une technique de pêche, préservez - vous - en.&#x0A;&#x0A;#Humour",
      createdAt: new Date(2021, 12, 30),
      updatedAt: new Date(2021, 12, 30)
    }, {
      id: 18,
      title: "Encore 2020",
      content: "Quand tu réalises qu'en anglais, 2022 se dit \"2020 aussi\"&#x0A;&#x0A;Bonne nouvelle année à tous et toutes, en espérant que ça aille mieux !&#x0A;&#x0A;#BonneAnnée",
      media: '2022-is-2020-too-memes-matthew-McConaughey.jpg',
      createdAt: new Date(2021, 12, 31),
      updatedAt: new Date(2021, 12, 31)
    }, {
      id: 19,
      title: "De pire en pire XD",
      content: "2021 montre à 2022 son lieu de travail.&#x0A;&#x0A;Bonne Année 2022 en espérant que ce soit plus clown que ça&#x0A;&#x0A;#Humour",
      media: '2022-It-Clown-New-Year-Meme.jpg',
      createdAt: new Date(2021, 12, 31),
      updatedAt: new Date(2021, 12, 31)
    }, {
      id: 20,
      title: "Chúc mừng năm mới !",
      content: "Bonne Année du tigre à tous, un peu en avance mais ça fait toujours classe de connaitre la formulation à l'avance pour se la pêter devant la belle famille XD. En espérant que la nouvelle lune nous sauve.",
      media: 'fleur-de-pecher-hanoi-vietnam-tet-800x500.jpg',
      createdAt: new Date(2022, 01, 11),
      updatedAt: new Date(2022, 01, 11)
    }

  ], {}),

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Messages');
  }
};