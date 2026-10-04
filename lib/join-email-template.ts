export interface JoinEmailData {
  name: string;
  email: string;
  phone?: string;
  role: string;
  portfolio?: string;
  message: string;
}

export function getJoinEmailHtml(data: JoinEmailData): string {
  const { name, email, phone, role, portfolio, message } = data;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Join Us / Career Application</title>
</head>
<body style="margin: 0; padding: 0; background-color: #050505; color: #f3f4f6; font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 40px auto; background-color: #0E0E0E; border: 1px solid #1f1f1f; border-collapse: collapse; box-shadow: 0 20px 50px rgba(0,0,0,0.6);">
    <!-- Decorative Header Gradient -->
    <tr>
      <td height="6" style="background: linear-gradient(90deg, #AC002D 0%, #FFE739 50%, #3366FF 100%);"></td>
    </tr>
    
    <!-- Header -->
    <tr>
      <td style="padding: 40px 40px 20px 40px; text-align: left;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td>
              <span style="font-family: monospace; font-size: 10px; color: #FFE739; letter-spacing: 0.25em; font-weight: 900; text-transform: uppercase; display: block; margin-bottom: 8px;">CREATIVE IDEA // TALENT & CAREERS</span>
              <h1 style="margin: 0; font-size: 24px; font-weight: 800; color: #ffffff; letter-spacing: -0.02em;">New Join Request / Application</h1>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Body Content -->
    <tr>
      <td style="padding: 0 40px 40px 40px;">
        <p style="font-size: 14px; color: #9ca3af; line-height: 1.6; margin-top: 0;">
          A creative professional has submitted a request to join the Creative Idea team. Here are the application details:
        </p>

        <!-- Meta/Contact Info Box -->
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #121212; border: 1px solid #222222; margin-top: 24px; margin-bottom: 24px;">
          <tr>
            <td style="padding: 20px;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td width="32%" style="font-family: monospace; font-size: 9px; color: #666666; letter-spacing: 0.1em; text-transform: uppercase; padding-bottom: 8px;">Applicant Name</td>
                  <td style="font-size: 14px; color: #ffffff; font-weight: 600; padding-bottom: 8px;">${name}</td>
                </tr>
                <tr>
                  <td style="font-family: monospace; font-size: 9px; color: #666666; letter-spacing: 0.1em; text-transform: uppercase; padding-bottom: 8px;">Email Address</td>
                  <td style="font-size: 14px; color: #FFE739; padding-bottom: 8px;"><a href="mailto:${email}" style="color: #FFE739; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="font-family: monospace; font-size: 9px; color: #666666; letter-spacing: 0.1em; text-transform: uppercase; padding-bottom: 8px;">Contact Number</td>
                  <td style="font-size: 14px; color: #ffffff; padding-bottom: 8px;">${phone || "Not provided"}</td>
                </tr>
                <tr>
                  <td style="font-family: monospace; font-size: 9px; color: #666666; letter-spacing: 0.1em; text-transform: uppercase; padding-bottom: 8px;">Role / Expertise</td>
                  <td style="font-size: 14px; color: #AC002D; font-weight: bold; padding-bottom: 8px;">${role}</td>
                </tr>
                ${
                  portfolio
                    ? `
                <tr>
                  <td style="font-family: monospace; font-size: 9px; color: #666666; letter-spacing: 0.1em; text-transform: uppercase; padding-bottom: 8px;">Portfolio / Links</td>
                  <td style="font-size: 14px; color: #3366FF; padding-bottom: 8px;"><a href="${portfolio}" target="_blank" style="color: #3366FF; text-decoration: underline;">${portfolio}</a></td>
                </tr>
                `
                    : ""
                }
              </table>
            </td>
          </tr>
        </table>

        <!-- Message Segment -->
        <h3 style="font-family: monospace; font-size: 10px; color: #9ca3af; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 12px; margin-top: 32px; border-bottom: 1px solid #222222; padding-bottom: 8px;">About The Applicant &amp; Vision</h3>
        <div style="background-color: #121212; border-left: 3px solid #FFE739; padding: 20px; font-size: 14px; color: #e5e7eb; line-height: 1.6; font-style: italic; white-space: pre-wrap;">
          ${message}
        </div>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="background-color: #080808; border-top: 1px solid #181818; padding: 30px 40px; text-align: center;">
        <p style="margin: 0; font-family: monospace; font-size: 9px; color: #444444; letter-spacing: 0.1em; text-transform: uppercase;">
          This is an automated join application delivery from Creative Idea Studio.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}
