export function generateVerificationOtpEmailTemplate(otpCode) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>{{APP_NAME}} – Verify Email</title>
  </head>
  <body
    style="
      margin: 0;
      background: #f5f7fb;
      font-family: Arial, Helvetica, sans-serif;
    "
  >
    <!-- Preheader (hidden preview text for inboxes) -->
    <div style="display: none; max-height: 0; overflow: hidden; mso-hide: all">
      Your {{APP_NAME}} verification code is {{OTP_CODE}}.
    </div>

    <table
      role="presentation"
      width="100%"
      cellpadding="0"
      cellspacing="0"
      style="background: #f5f7fb; padding: 24px 12px"
    >
      <tr>
        <td align="center">
          <table
            role="presentation"
            width="100%"
            cellpadding="0"
            cellspacing="0"
            style="
              max-width: 520px;
              background: #ffffff;
              border-radius: 12px;
              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
            "
          >
            <!-- Header -->
            <tr>
              <td
                style="
                  padding: 24px 24px 8px;
                  text-align: center;
                  font-weight: 700;
                  font-size: 18px;
                  color: #0f172a;
                "
              >
                LIBRARY MANAGEMENT
              </td>
            </tr>

            <!-- Message -->
            <tr>
              <td
                style="
                  padding: 0 24px 16px;
                  text-align: center;
                  font-size: 14px;
                  color: #334155;
                "
              >
                Use the code below to verify your email.
              </td>
            </tr>

          
            <tr>
              <td align="center" style="padding: 8px 24px 24px">
                <div
                  style="
                    display: inline-block;
                    padding: 14px 20px;
                    border: 1px solid #e2e8f0;
                    border-radius: 10px;
                    background: #f8fafc;
                    font-size: 24px;
                    font-weight: 700;
                    letter-spacing: 6px;
                    color: #0f172a;
                  "
                >
                  ${otpCode}
                </div>
              </td>
            </tr>

            <!-- Verify Button -->
            <tr>
              <td align="center" style="padding: 0 24px 24px">
                <a
                  href="VERIFY_URL"
                  style="
                    display: inline-block;
                    padding: 12px 18px;
                    border-radius: 8px;
                    background: #2563eb;
                    color: #ffffff;
                    text-decoration: none;
                    font-size: 14px;
                    font-weight: 600;
                  "
                  >Verify Email</a
                >
              </td>
            </tr>

            <!-- Fallback Link -->
            <tr>
              <td
                style="
                  padding: 0 24px 24px;
                  text-align: center;
                  font-size: 12px;
                  color: #64748b;
                "
              >

            <!-- Footer -->
            <tr>
              <td
                style="
                  padding: 0 24px 24px;
                  text-align: center;
                  font-size: 11px;
                  color: #94a3b8;
                "
              >
                Didn’t request this? You can ignore this email.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
}
