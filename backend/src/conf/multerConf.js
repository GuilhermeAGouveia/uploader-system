const multer = require("multer")
const path = require("path")
const crypto = require("crypto")

module.exports = {
    dest: path.resolve(__dirname,"..","..","storage","files"),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname,"..","..","storage","files"))
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err,hash) => {
                if (err) cb(err)
          
                const filename = `${hash.toString("hex")}-${file.originalname.replace(/   /g,"_")}`
                cb(null, filename)
            })
        }
    }),
    limits: {
        fileSize: 2 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        const mimeTypes = [
            "image/jpeg",
            "image/png",
            "image/pjpeg",
            "image/jpg",
            "image/gif",
            "image/tif"
        ]
        if (mimeTypes.includes(file.mimetype)){
            cb(null, file)
        } else (
            cb(new Error("Invalid file type"))
        )
    }
}