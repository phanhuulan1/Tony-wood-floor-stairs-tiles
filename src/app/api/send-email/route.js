import nodemailer from 'nodemailer';
import cors from 'cors';
import express from 'express';

const app = express();

const corsOptions = {
  origin: 'https://tonywoodfloorstairs.com/', // Thay bằng domain production của bạn
  methods: ['POST'],
};
app.use(cors(corsOptions));

export async function POST(request) {
  const body = await request.json();
  const { subject, text } = body;

  // Cấu hình SMTP transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Hoặc dịch vụ khác
    tls: {
      ciphers: 'SSLv3',
    },
    auth: {
      user: 'sp.tonywoodfloorstairs@gmail.com', // Email của bạn
      pass: 'zfts lbyw hvxz ybds', // Mật khẩu ứng dụng email
    },
  });

  console.log('EMAIL_USER:', process.env.EMAIL_USER);
  console.log('EMAIL_PASS:', process.env.EMAIL_PASS);
  console.log('TONYWOODFLOORSTAIRS:', process.env.TONYWOODFLOORSTAIRS);

  try {
    // Tạo Promise để gửi email
    const mailData = {
      from: 'sp.tonywoodfloorstairs@gmail.com', // Email người gửi
      to: 'Hotuan1100@gmail.com', // Email người nhận
      subject, // Chủ đề email
      text, // Nội dung email
    };

    await new Promise((resolve, reject) => {
      transporter.sendMail(mailData, (err, info) => {
        if (err) {
          console.error('Error sending email:', err);
          reject(err);
        } else {
          console.log('Email sent successfully:', info);
          resolve(info);
        }
      });
    });

    return new Response(
      JSON.stringify({ message: 'Email sent successfully!' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send email.' }),
      { status: 500 }
    );
  }
}

