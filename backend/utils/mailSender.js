import nodemailer from 'nodemailer'; 
import { configDotenv } from 'dotenv';

configDotenv();

const otpMailSender = async ({ email, title, body }) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
    let info = await transporter.sendMail({
      from: 'Study Notion || By Ayush Kumar',
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });
  } catch (error) {
    console.error("error in otp sender", error.message);
  }
};

export default otpMailSender;
