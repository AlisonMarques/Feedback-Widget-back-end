import express from 'express';
import nodemailer from 'nodemailer'
import { prisma } from './prisma';

const app = express();

app.use(express.json())

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "79b1941174758e",
    pass: "8075e9fd5043a7"
  }
});

const port = 3333

app.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    }
  })

  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Alison Marques <alison-marques@outlook.com.br>',
    subject: 'Novo feedback',
    html: [ // Colocamos array para que nao haja espaços em branco na identação ou quebra de linha na digitação
      `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `</div>`
    ].join('\n')
  })

  return res.status(201).json({ data: feedback })
})

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`)
});