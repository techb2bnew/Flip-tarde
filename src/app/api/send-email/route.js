import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true, // true if using 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      },
      tls: { rejectUnauthorized: false }
    });

    // 1) Send to Admin (your email)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // your inbox
      subject: `You’ve just received a new lead on Flip Trade Group`,
      text: `You received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
       <div>
        <h2>Here are the details submitted:</h2>
        <h3><strong>Name:</strong> ${name}</h3>
        <h3><strong>Email:</strong> ${email}</h3>
        <h3><strong>Message:</strong> ${message}</h3>
       

        <div>
           <h3>
             Please follow up at the earliest to ensure a smooth onboarding experience.
           <h3>
           <h3>
             Flip Trade Group System Notification
           </h3>
        </div>
        </div>
      `
    });

    // 2) Send Thank You email to User
    // await transporter.sendMail({
    //   from: process.env.EMAIL_USER,
    //   to: email,
    //   subject: "We’ve Received Your Request ",
    //   text: `Hi ${name},`,
    //   html: `
    //   <div>
    //    <h3>
    //       Hi <strong> ${name} </strong> Thank you for reaching out to <strong> Flip Trade Group </strong>
    //     </h3>
    //     <h3>
    //       Your request has been received, and one of our experts will connect with you shortly to guide you through the next steps.
    //     </h3>
    //     <h3>
    //     At FlipTrade, we value transparency, security, and support — so you can feel confident that you’re in safe hands.
    //     </h3?

    //       <div>
    //          <h3>
    //            Best regards,
    //          </h3>
    //          <h3>
    //            Team FlipTrade
    //          </h3>
    //       </div>
    //     </div>
    //   `,
    // });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
