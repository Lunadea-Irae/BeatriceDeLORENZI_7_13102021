const multer = require('multer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  
  'video/mp4' : 'mp4',
  'video/mov' : 'mov',
};


  const storage = multer.diskStorage({

    destination: (req, file, callback) => {
      req.baseUrl==='/api/topics' ? callback(null, 'medias') : callback(null, 'avatars');
    },
    filename: (req, file, callback) => {
      const name = file.originalname.replace(/[^a-zA-Z0-9\-]/g, "").split(' ').join('_');
      const extension = MIME_TYPES[file.mimetype];
      callback(null, name + Date.now() + '.' + extension);
    }
  });

  module.exports = multer({ storage: storage }).single('file');