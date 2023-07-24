const nodemailer = require("nodemailer");

const senMail = async (req,res)=>{

    const name = req.body.name;
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;
    const sub = req.body.sub;
    const text = req.body.text;
    const html = req.body.html;


    
    // const transporter = nodemailer.createTransport({
    //     host: 'smtp.ethereal.email',
    //     port: 587,
    //     auth: {
    //         user: 'laverne67@ethereal.email',
    //         pass: 'Gu18DRFzRCpgFWYUR5'
    //     }
    // });

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'cristopher.gusikowski@ethereal.email',
            pass: 'gKTevm2TjdMETTcYCK'
        }
    });
    
    const info = await transporter.sendMail({
        from: `${name} <${senderId}>`,                  //'"Naveen Patidar" <naveen05patidar@gmail.com>', // sender address
        to: `${receiverId}`, // list of receivers
        subject: `${sub}`, // Subject line
        text:`${text}`, // plain text body
        html: `<b>${html}</b>`, // html body
    });
    console.log("Message sent: %s", info.messageId);

    res.json(info);
    
}

module.exports = senMail;