import nodemailer from 'nodemailer';

export async function POST(request) {
  const body = await request.json();

  const { subject, text } = body;

  // Cấu hình SMTP transporter
  const transporter = nodemailer.createTransport({
    
    service: 'Gmail', // Hoặc dịch vụ khác
    auth: {
      user: process.env.EMAIL_USER, // Email của bạn
      pass: process.env.EMAIL_PASS, // Mật khẩu ứng dụng email
    },
  });

  try {
    // Gửi email
    console.log('process.env.EMAIL_USER, process.env.EMAIL_PASS', process.env.EMAIL_USER, process.env.EMAIL_PASS);

    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Email người gửi
      to: process.env.TONYWOODFLOORSTAIRS, // Email người nhận
      subject, // Chủ đề email
      text, // Nội dung email
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
