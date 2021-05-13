export default function send(req, res) {
 
  if(req.method !== 'POST') return res.status(405).end();

  let nodemailer = require('nodemailer');

  console.log('node mailer');
  console.log(req.body)
  const { name,
    email,
    phone,
    company,
    quantity,
    comments } = req.body;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'marcostestelp415@gmail.com',
      pass: 'suel@2018',
    },
    secure: true,
  });




  const mailData = {
    from: 'marcostestelp415@gmail.com',
    to: 'marcos.ribeiro@health4pet.com.br',
    subject: `Message From`,
    text: name + " |"  + email + " | " + phone + " |"  + company + " | " + quantity + " |"  + comments + " | ",
    html: `<div>${name} " |"  ${email}  " | "  ${phone} " |"   ${company} " | "  ${quantity}" |" ${comments} " | "</div><p>Sent from:
      ${req.body.email}</p>`
  }
  transporter.sendMail(mailData, function (err, info) {
    if (err)
      res.status(400)
    else
      console.log(info)
  })
  console.log('email enviado');
  res.status(200);
}
