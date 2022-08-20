import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser'

const app = express()

const article = mongoose.Schema(
    {
        no: Number,
        data: Object
    }
);

const comment = mongoose.Schema(
    {
        no: Number,
        articleId: Number,
        data: Object
    }
);

const articleModel = mongoose.model("Article", article);
const commentModel = mongoose.model("Comment", comment);

function main() {
    try {
        const port = 3000;
        app.listen(3000);
        mongoose.connect("mongodb+srv://mongoTest:11223344@cluster0.qqiomgv.mongodb.net/Pages", {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        app.use(cors());
        app.use(bodyParser.json());
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        console.log("Connected!");
    } catch (e) {
        throw new Error(e.message)
    }
}

main();

app.get("/article/:no", async (req, res) => {
    try {
        res.status(200).send({
            data: await articleModel.findOne({no: req.query.no})
        });
    } catch (e) {
        res.status(500).send(
            {
                data: e.message
            }
        )
    }
});
app.post("/article", async (req, res) =>  {
    try {
        const article = new articleModel(req.body);
        await article.save();
        return res.status(201).send({
            data: article
        });
    } catch (e) {
        return res.status(500).send({
            data: e.message
        });
    }
});
app.patch("/article/:no", async (req, res) => {
    const article = await articleModel.findOneAndUpdate({no: no}, {data: req.body.data});
    res.status(200).send({data: article})
});
app.delete("/article/:no", async (req, res) => {
    await articleModel.findOneAndDelete({no: req.query.no});
    res.status(404).send({
        data: "Success"
    });
});

app.get("/comment");
app.post("/comment");
app.patch("/comment");
app.delete("/comment");