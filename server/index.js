import express from "express";
import cors from "cors";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors()); // للسماح للـ React frontend بالاتصال
app.use(express.json());

app.post("/send-email", async (req, res) => {
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

    res.json({ success: true });
  } catch (error) {
    console.error("Resend API error:", error);
    res.status(500).json({ success: false, error: "فشل إرسال الرسالة. حاول لاحقًا." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
