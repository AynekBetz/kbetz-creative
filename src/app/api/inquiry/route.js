import { Resend } from "resend";

export async function POST(request) {
  try {
    const data = await request.json();

    const {
      name,
      email,
      business,
      websiteType,
      packageName,
      message,
    } = data;

    if (!name || !email || !websiteType || !message) {
      return Response.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "KBETZ Creative <onboarding@resend.dev>",
      to: ["aynekbetz@gmail.com"],
      replyTo: email,
      subject: `New Website Inquiry - ${business || name}`,
      text: `
NEW WEBSITE PROJECT INQUIRY

Name: ${name}
Email: ${email}
Business: ${business || "Not provided"}
Website Type: ${websiteType}
Package: ${packageName || "Not sure yet"}

PROJECT DETAILS:
${message}

Sent from KBETZ Creative Solutions
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        { error: "Your request could not be sent. Please try again." },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Your project request has been sent.",
    });
  } catch (error) {


    console.error("Inquiry error:", error);

    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
