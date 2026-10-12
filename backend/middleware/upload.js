const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const unique_name = Date.now() +'-'+Math.round(Math.random() * 1E9);
        cb(null, unique_name + path.extname(file.originalname));
    }
}); 

const fileFilter = (req, file, cb) => {
    const fileType = [
        "image/jpeg",
        "image/jpg",
        "image/webp"
    ];

    if(!fileType.includes(file.mimetype)){
        return cb(new Error("Only jpeg,jpg and webp is required"));
    }

    cb(null, true);
}

const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024
    }
});

module.exports = upload; 