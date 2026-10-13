const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

const storage = multer.diskStorage({
    destination: path.join(__dirname, '..', 'uploads'),
    filename: (req, file, callback) => {
        callback(null, `${crypto.randomUUID()}${path.extname(file.originalname)}`);
    }
});

module.exports = multer({ storage });
