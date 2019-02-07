using BusinessObjects.Contact;
using System;
using System.Net.Mail;


namespace Helper
{
    public static class EMailHelper
    {
        public static bool SendMail(Email email, out bool isSuccess)
        {
            isSuccess = true;
            MailMessage mail = new MailMessage();
            foreach (var to in email.To)
            {
                mail.To.Add(to);
            }
            foreach (var cc in email.Cc)
            {
                mail.CC.Add(cc);
            }
            foreach (var bcc in email.BCc)
            {
                mail.To.Add(bcc);
            }
            mail.From = new MailAddress(email.From);
            mail.Subject = email.Subject;
            mail.Body = email.Body;

            SmtpClient smtp = new SmtpClient();
            smtp.UseDefaultCredentials = true;

            try
            {
                smtp.Send(mail);
            }
            catch (SmtpFailedRecipientException ex)
            {
                isSuccess = false;
                LoggerHelper.LogError(ex);
            }
            catch (Exception ex)
            {
                isSuccess = false;
                LoggerHelper.LogError(ex);
            }
            return isSuccess;
        }
    }
}
