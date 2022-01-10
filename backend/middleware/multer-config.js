const multer = require('multer');
const fs = require('fs');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',

  'video/mp4': 'mp4',
  'video/mov': 'mov',
};


const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    req.baseUrl === '/api/topics' ? callback(null, 'medias') : callback(null, 'medias/avatars');
  },
  filename: (req, file, callback) => {
    if (req.baseUrl === '/api/topics') {
      const name = file.originalname.replace(/[^a-zA-Z0-9\.\-]/g, "").split(' ').join('_');
      const extension = MIME_TYPES[file.mimetype];
      callback(null, name + Date.now() + '.' + extension);
    }
    else {
    if(file){
      `medias/avatars/${req.params.id}.jpg` ? fs.unlink(`medias/avatars/${req.params.id}.jpg`, () => { console.log("Avatar supprimé") }) : '';
      `medias/avatars/${req.params.id}.jpeg` ? fs.unlink(`medias/avatars/${req.params.id}.jpeg`, () => { console.log("Avatar supprimé") }) : '';
      `medias/avatars/${req.params.id}.png` ? fs.unlink(`medias/avatars/${req.params.id}.png`, () => { console.log("Avatar supprimé") }) : '';
    }
      const name = req.params.id+'.'+MIME_TYPES[file.mimetype];
      callback(null, name)
    }
  }
});

module.exports = multer({ storage: storage }).single('file');