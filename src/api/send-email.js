import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const { name, email, phone, message, subject } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "يرجى ملء جميع الحقول المطلوبة" });
  }

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.RESEND_TO_EMAIL,
      subject,
      html: `
        <p><strong>الاسم:</strong> ${name}</p>
        <p><strong>البريد:</strong> ${email}</p>
        <p><strong>الهاتف:</strong> ${phone || "-"}</p>
        <p><strong>الرسالة:</strong><br/>${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Resend API error:", err);
    res.status(500).json({ success: false, error: "فشل إرسال الرسالة. حاول لاحقًا." });
  }
}