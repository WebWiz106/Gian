import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { QueryFormData } from "@/model/query-mail"; // Import the QueryFormData model
import { connectDB } from "@/utils/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, message } = body;
    await connectDB();

    const formData = new QueryFormData({
      fullName,
      email,
      phone,
      message,
      verified: false,
    });
    await formData.save();

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.APP_EMAIL,
        pass: process.env.APP_PASS,
      },
    });

    // Define mail options
    const mailOptions = {
      from: process.env.APP_EMAIL,
      to: email,
      subject: "Query Received",
      html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">Hello ${fullName},</h1>
          <div style="text-align: center;">
            <a href="${process.env.SITE_URL}/api/verify-query-mail?userID=${formData._id}" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px;">Verify Email</a>
          </div>
          <p style="color: #333;">Thank you for reaching out to us. We have received your query.</p>
          <p style="color: #333;">Here are the details you provided:</p>
          <ul>
            <li>Full Name: ${fullName}</li>
            <li>Email: ${email}</li>
            <li>Phone: ${phone}</li>
            <li>Message: ${message}</li>
          </ul>
          <p style="color: #333;">We will get back to you as soon as possible.</p>
          <p style="color: #333;">Best regards,</p>
          <p style="color: #333;">WebJini</p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Respond with success message
    return NextResponse.json({
      message: "Data received and email sent successfully",
      receivedData: { fullName, email, phone, message },
    });
  } catch (error: any) {
    let errorMessage = "";

    // Check which operation failed and set error message accordingly
    if (error.name === "ValidationError") {
      errorMessage = "Data validation failed";
    } else {
      errorMessage = "Email sending failed";
    }

    console.error("Error handling POST request:", error);

    // Respond with error message
    return NextResponse.json({
      message: errorMessage,
    });
  }
}
