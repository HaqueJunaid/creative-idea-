export interface EmailData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  services: string[];
}

export function getPremiumEmailHtml(data: EmailData): string {
  const { name, email, phone, message, services } = data;
  const serviceTags = services
    .map(
      (s) =>
        `<span style="display: inline-block; background-color: rgba(51, 102, 255, 0.15); border: 1px solid rgba(51, 102, 255, 0.3); color: #8ab4f8; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.1em; padding: 6px 12px; margin-right: 6px; margin-bottom: 6px; font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">${s}</span>`
    )
    .join("");

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Project Inquiry</title>
</head>
<body style="margin: 0; padding: 0; background-color: #050505; color: #f3f4f6; font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 40px auto; background-color: #0E0E0E; border: 1px solid #1f1f1f; border-collapse: collapse; box-shadow: 0 20px 50px rgba(0,0,0,0.6);">
    <!-- Decorative Header Gradient -->
    <tr>
      <td height="6" style="background: linear-gradient(90deg, #3366FF 0%, #a855f7 50%, #6366f1 100%);"></td>
    </tr>
    
    <!-- Header -->
    <tr>
      <td style="padding: 40px 40px 20px 40px; text-align: left;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td>
              <span style="font-family: monospace; font-size: 10px; color: #3366FF; letter-spacing: 0.25em; font-weight: 900; text-transform: uppercase; display: block; margin-bottom: 8px;">CREATIVE IDEA STUDIO</span>
              <h1 style="margin: 0; font-size: 24px; font-weight: 800; color: #ffffff; letter-spacing: -0.02em;">New Project Inquiry</h1>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Body Content -->
    <tr>
      <td style="padding: 0 40px 40px 40px;">
        <p style="font-size: 14px; color: #9ca3af; line-height: 1.6; margin-top: 0;">
          A client has reached out through the website contact form. Here are the details of their request:
        </p>

        <!-- Meta/Contact Info Box -->
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #121212; border: 1px solid #222222; margin-top: 24px; margin-bottom: 24px;">
          <tr>
            <td style="padding: 20px;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td width="30%" style="font-family: monospace; font-size: 9px; color: #666666; letter-spacing: 0.1em; text-transform: uppercase; padding-bottom: 8px;">Client Name</td>
                  <td style="font-size: 14px; color: #ffffff; font-weight: 600; padding-bottom: 8px;">${name}</td>
                </tr>
                <tr>
                  <td style="font-family: monospace; font-size: 9px; color: #666666; letter-spacing: 0.1em; text-transform: uppercase; padding-bottom: 8px;">Email Address</td>
                  <td style="font-size: 14px; color: #3366FF; padding-bottom: 8px;"><a href="mailto:${email}" style="color: #3366FF; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="font-family: monospace; font-size: 9px; color: #666666; letter-spacing: 0.1em; text-transform: uppercase; padding-bottom: ${phone ? "8px" : "0px"};">Phone Number</td>
                  <td style="font-size: 14px; color: #ffffff; padding-bottom: ${phone ? "8px" : "0px"};">${phone || "Not provided"}</td>
                </tr>
                ${
                  services && services.length > 0
                    ? `
                <tr>
                  <td style="font-family: monospace; font-size: 9px; color: #666666; letter-spacing: 0.1em; text-transform: uppercase; padding-top: 8px; vertical-align: top;">Services</td>
                  <td style="padding-top: 8px;">
                    ${serviceTags}
                  </td>
                </tr>
                `
                    : ""
                }
              </table>
            </td>
          </tr>
        </table>

        <!-- Message Segment -->
        <h3 style="font-family: monospace; font-size: 10px; color: #9ca3af; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 12px; margin-top: 32px; border-bottom: 1px solid #222222; padding-bottom: 8px;">Project Details / Message</h3>
        <div style="background-color: #121212; border-left: 3px solid #3366FF; padding: 20px; font-size: 14px; color: #e5e7eb; line-height: 1.6; font-style: italic; white-space: pre-wrap;">
          ${message}
        </div>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="background-color: #080808; border-top: 1px solid #181818; padding: 30px 40px; text-align: center;">
        <p style="margin: 0; font-family: monospace; font-size: 9px; color: #444444; letter-spacing: 0.1em; text-transform: uppercase;">
          This is an automated delivery from Creative Idea Studio.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}
