import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service is not configured. Please contact us by phone or email." },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "ComplyBridge <onboarding@resend.dev>";
    const toEmail = process.env.CONTACT_TO_EMAIL || "info@complybridge.in";

    const { name, email, phone, service, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New Enquiry from ${name} – ${service || "General"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #112740, #1a3c5e); padding: 20px; border-radius: 8px 8px 0 0; color: white; text-align: center;">
            <h1 style="margin: 0; font-size: 22px;">New Enquiry – ComplyBridge</h1>
          </div>
          <div style="padding: 24px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; font-size: 14px; width: 130px;">Name</td>
                <td style="padding: 10px 0; font-weight: 600; color: #111827;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Email</td>
                <td style="padding: 10px 0; font-weight: 600; color: #111827;"><a href="mailto:${email}" style="color: #16a34a;">${email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Phone</td>
                <td style="padding: 10px 0; font-weight: 600; color: #111827;"><a href="tel:${phone}" style="color: #16a34a;">${phone}</a></td>
              </tr>
              ${
                service
                  ? `<tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Service</td>
                <td style="padding: 10px 0; font-weight: 600; color: #111827;">${service}</td>
              </tr>`
                  : ""
              }
              <tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 14px; vertical-align: top;">Message</td>
                <td style="padding: 10px 0; color: #374151; line-height: 1.6;">${message.replace(/\n/g, "<br/>")}</td>
              </tr>
            </table>
          </div>
          <div style="background: #f9fafb; padding: 16px; border-radius: 0 0 8px 8px; text-align: center;">
            <p style="margin: 0; color: #9ca3af; font-size: 12px;">This message was sent from the ComplyBridge website contact form.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      const resendMessage =
        typeof error === "object" && error !== null && "message" in error
          ? String((error as { message: string }).message)
          : "";

      if (
        resendMessage.includes("domain is not verified") ||
        resendMessage.includes("verify a domain")
      ) {
        return NextResponse.json(
          {
            error:
              "Email could not be sent: verify complybridge.in at resend.com/domains, or use Resend test settings in .env.local.",
          },
          { status: 503 }
        );
      }

      return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
