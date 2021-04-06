const multer = require("multer")
const router = require("express").Router()
const multerConfig = require("./conf/multerConf")
const Posts = require("./models/posts")
const path = require("path")
const fs = require("fs/promises")

router.delete("/deleteFile/:id", async (req, res) => {
    const id = req.params.id
    try{
    const post = await Posts.findById(id)

    await post.remove()
    await fs.unlink(path.resolve(__dirname,"..","storage","files",post.key))

    res.send("Removed")
    } catch(err){
        res.status(404).json({"err": "Arquivo não existente"})
    }
})
router.get("/listFiles", async (req, res) => {
    const files = await Posts.find()
    res.json(files)
})
router.post("/uploadFile", multer(multerConfig).single("file"), async (req, res) => {
    const { originalname: name, size, filename: key } = req.file
    const post = await Posts.create({
        name,
        size,
        key,
        path:"http://localhost:3001/files/" + key
    })
    res.json(post)
})



module.exports = router