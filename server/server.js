// Server map
import express from 'express';
import cors from 'cors';
import nodemailer from "nodemailer";
import { USER } from "./env.js";

const app = express();
const port = 3000;

app.use(cors());

app.use(express.urlencoded({
    extended: false,
    limit: "10kb",
    parameterLimit: 3
}));

app.post('/upload', (req, res) => {
    // console.log(req.body);
    const nameUser = req.body["user-name"];
    const phoneUser = req.body["user-phone"];
    const messageUser = req.body["user-comment"];

    res.send('Email sent successfully');

    async function main() {

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: USER.EMAIL,
                pass: USER.PASSWORD
            }
        });

        const content = await transporter.sendMail({
            from: `Server Expert Fitness: <${USER.EMAIL}>`,
            to: "<radualexeev@gmail.com>",
            subject: `Запрос на тренировку: ${nameUser} / ${phoneUser}`,
            html: `<p>${messageUser}</p>`
        });

        console.log("Message sent: " + content.messageId)
    };

    main()

    .catch(error => {
        console.log(error)
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});