/* 
Shema topic  :

GS id
title : string                                  // le titre, utile en version réduite type pinterest
GS creation_date : timestamp, required             // date de création du post
creation_user : number, required                // _id de l'user qui a posté
GS last_update : timestamp                         // date de mise à jour
media : string                                    // media (video, photo, etc) via multer
description : text                              // texte avec le media
likesUsers : array                              // liste des _id likers table de likes à part
linked : number, required, default : 0          // _id du post auquel celui ci répond (0 => post racine)
tags : [string], default : []                   // tags du post
*/

[
    {
      id: 1,
      title: "titre",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec sed purus semper, rhoncus elit et, viverra libero.
      Aenean finibus ligula sit amet nisi ultricies, non aliquet nunc mattis.`,
      likes: 1,
      nbComments: 1,
      imageUrl: 'https://img-9gag-fun.9cache.com/photo/aE8w4yM_700b.jpg',
      tags: '',
      imageMakerUrl: '../assets/images/profiles/1.jpg',
      makerName: 'user 1111111111111111111111111111111111111111',
      date: '00/00/0000 à 00h00'
    },
    {
      title: "titre",
      description: `Donec sed purus semper, rhoncus elit et, viverra libero.
      Aenean finibus ligula sit amet nisi ultricies, non aliquet nunc mattis.
      Vivamus sit amet metus in ante efficitur molestie eget eget tortor.
      Ut in felis non justo mattis dictum in eget neque.`,
      likes: 2,
      nbComments: 2,
      imageUrl: '../../assets/images/test/1988 02 0602.png', tags: '', id: 2,
      imageMakerUrl: '../assets/images/profiles/2.png',
      makerName: 'user 2',
      date: '00/00/0000 à 00h00'
    },
    {
      title: "titre",
      description: `Nullam eget nibh vel nisi rhoncus tincidunt.
      Donec pulvinar est quis malesuada egestas.`,
            likes: 3,
      nbComments: 3,
      imageUrl: '../../assets/images/test/12052633_1095482467129160_2915692806728300228_o.jpg', tags: '', id: 3,
      imageMakerUrl: '../assets/images/profiles/3.png',
      makerName: 'user 3',
      date: '00/00/0000 à 00h00'
    },
    {
      title: "titre",
      description: `Lorem ipsum dolor sit amet. Qui voluptatem eligendi id quia dolorum aut dolorem quia aut deserunt beatae. Sit doloribus quia ut error dicta et possimus mollitia et voluptatibus blanditiis
      Rem alias alias ad culpa porro non sint perferendis ut corrupti quia et laudantium autem hic maxime similique et itaque doloribus. Et fuga rerum cum quasi ducimus ea voluptas saepe ea aperiam temporibus! Sit eius corrupti et consequuntur velit et repellat doloremque et sapiente aperiam.
      
      Ut delectus enim hic quis porro ut accusantium iste aut tempore odit qui alias corrupti. Sed galisum neque et modi laborum in veritatis aliquam ut velit internos est Quis aliquid aut unde explicabo quo odit molestias.`,
      likes: 3,
      nbComments: 3,
      imageUrl: '', tags: '', id: 4,
      imageMakerUrl: '../assets/images/profiles/4.jpg',
      makerName: 'user 4',
      date: '00/00/0000 à 00h00'
    },
    {
      title: "titre",
      description: `Pellentesque ultrices nulla eu enim tempus, nec mattis libero convallis.
      Integer vehicula arcu id arcu imperdiet, vel vestibulum justo gravida.`,
      likes: 3,
      nbComments: 3,
      imageUrl: '', tags: '', id: 5,
      imageMakerUrl: '../assets/images/profiles/5.jpg',
      makerName: 'user 5',
      date: '00/00/0000 à 00h00'
    },
    {
      title: "titre",
      description: `Pellentesque ultrices nulla eu enim tempus, nec mattis libero convallis.
      Integer vehicula arcu id arcu imperdiet, vel vestibulum justo gravida.
      Nunc quis erat luctus nunc pulvinar vulputate.`,
      likes: 3,
      nbComments: 3,
      imageUrl: '', tags: '', id: 6,
      imageMakerUrl: '../assets/images/profiles/6.png',
      makerName: 'user 6',
      date: '00/00/0000 à 00h00'
    },
    {
      title: "titre",
      description: `Fusce tincidunt ipsum non molestie iaculis.`,
      likes: 3,
      nbComments: 3,
      imageUrl: '../../assets/images/test/1983188727_1.jpg', tags: '', id: 7,
      imageMakerUrl: '../assets/images/profiles/7.png',
      makerName: 'user 7',
      date: '00/00/0000 à 00h00'
    },
    {
      title: "titre",
      description: `Pellentesque non urna id augue accumsan blandit.
      In quis lorem a nisl porta rhoncus.
      Maecenas lacinia dui ut imperdiet tristique.`,
      likes: 3,
      nbComments: 3,
      imageUrl: '', tags: '', id: 8,
      imageMakerUrl: '../assets/images/profiles/8.png',
      makerName: 'user 8',
      date: '00/00/0000 à 00h00'
    },
    {
      title: "titre",
      description: `Quisque auctor nunc id iaculis finibus.
      Fusce ac dolor pretium, aliquet justo at, mattis tellus.`,
      likes: 3,
      nbComments: 3,
      imageUrl: '', tags: '', id: 9,
      imageMakerUrl: '../assets/images/profiles/1.jpg',
      makerName: 'user 9',
      date: '00/00/0000 à 00h00'
    },
    {
      title: "titre",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec sed purus semper, rhoncus elit et, viverra libero.
      Aenean finibus ligula sit amet nisi ultricies, non aliquet nunc mattis.
      Vivamus sit amet metus in ante efficitur molestie eget eget tortor.
      Ut in felis non justo mattis dictum in eget neque.
      Nullam eget nibh vel nisi rhoncus tincidunt.
      Donec pulvinar est quis malesuada egestas.`,
      likes: 3,
      nbComments: 3,
      imageUrl: '', tags: '', id: 10,
      imageMakerUrl: '../assets/images/profiles/2.png',
      makerName: 'user 10',
      date: '00/00/0000 à 00h00'
    },
    {
      title: "titre",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec sed purus semper, rhoncus elit et, viverra libero.
      Aenean finibus ligula sit amet nisi ultricies, non aliquet nunc mattis.
      Vivamus sit amet metus in ante efficitur molestie eget eget tortor.`,
      likes: 3,
      nbComments: 3,
      imageUrl: '', tags: '', id: 11,
      imageMakerUrl: '../assets/images/profiles/3.png',
      makerName: 'user 11',
      date: '00/00/0000 à 00h00'
    },
    {
      title: "titre",
      description: `Ut in felis non justo mattis dictum in eget neque.`,
      likes: 3,
      nbComments: 3,
      imageUrl: '', tags: '', id: 12,
      imageMakerUrl: '../assets/images/profiles/4.jpg',
      makerName: 'user 12',
      date: '00/00/0000 à 00h00'
    },
    {
      title: "titre",
      description: `Nullam eget nibh vel nisi rhoncus tincidunt.
      Donec pulvinar est quis malesuada egestas.
      Pellentesque ultrices nulla eu enim tempus, nec mattis libero convallis.`,
      likes: 3,
      nbComments: 3,
      imageUrl: '', tags: '', id: 13,
      imageMakerUrl: '../assets/images/profiles/5.jpg',
      makerName: 'user 13',
      date: '00/00/0000 à 00h00'
    },
    {
      title: "titre",
      description: `Integer vehicula arcu id arcu imperdiet, vel vestibulum justo gravida.
      Nunc quis erat luctus nunc pulvinar vulputate.
      Pellentesque non urna id augue accumsan blandit.`,
      likes: 3,
      nbComments: 3,
      imageUrl: '', tags: '', id: 14,
      imageMakerUrl: '../assets/images/profiles/7.png',
      makerName: 'user 14',
      date: '00/00/0000 à 00h00'
    }
  ]