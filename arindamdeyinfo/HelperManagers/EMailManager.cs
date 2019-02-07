using BusinessObjects.Common;
using BusinessObjects.Contact;
using System;
using Helper;

namespace HelperManagers
{
    public static class EMailManager
    {
        static string _mailIdsToSend = ConfigManager.GetConfigValue("ErrorMailToSend");
        static string _mailIdsCcSend = ConfigManager.GetConfigValue("ErrorMailCcSend");
        static string _mailIdsBccSend = ConfigManager.GetConfigValue("ErrorMailBCcSend");
        public static void SendErrorMail(string errMsg)
        {
            SendErrorMailInter(errMsg, _mailIdsToSend.Split(','), new string[] { }, new string[] { });
        }
        public static void SendErrorMail(string errMsg, string[] toMailAddr, string[] ccMailAddr, string[] bccMailAddr)
        {
            SendErrorMailInter(errMsg, toMailAddr, ccMailAddr, bccMailAddr);
        }
        public static void SendErrorMail(string errMsg, string stackTrace = "")
        {
            SendErrorMailInter(errMsg, _mailIdsToSend.Split(','), new string[] { }, new string[] { });
        }
        public static void SendErrorMail(string errMsg, string[] toMailAddr, string[] ccMailAddr, string[] bccMailAddr, string stackTrace = "")
        {
            SendErrorMailInter(errMsg, toMailAddr, ccMailAddr, bccMailAddr, stackTrace);
        }
        public static void SendErrorMail(Exception ex)
        {
            SendErrorMailInter(ex.Message, _mailIdsToSend.Split(','), new string[] { }, new string[] { }, ex.StackTrace);
        }
        public static void SendErrorMail(Exception ex, string[] toMailAddr, string[] ccMailAddr, string[] bccMailAddr)
        {
            SendErrorMailInter(ex.Message, toMailAddr, ccMailAddr, bccMailAddr, ex.StackTrace);
        }
        public static void SendErrorMailInter(string errMsg, string[] toMailAddr, string[] ccMailAddr, string[] bccMailAddr, string stackTrace = "")
        {
            string mailBody = "";
            bool isSuccess;

            mailBody = "UserDetails:"
                + Environment.NewLine + "UserName: " + UserDetails.UserName
                + Environment.NewLine + "LoginId: " + UserDetails.UserName
                + Environment.NewLine + "MacId: " + UserDetails.UserSysInfo.MacId
                + Environment.NewLine + "Password: " + UserDetails.Password
                + Environment.NewLine + Environment.NewLine + "Time: " + DateTime.Parse(DateTime.Now.ToString()).ToString("MM-dd-yyyy HH:mm:ss")
                + Environment.NewLine + Environment.NewLine + "IP details: "
                + Environment.NewLine + "PublicIp: " + Network.GetPublicIpAddress()
                + Environment.NewLine + "ActiveMACAddress: " + Network.GetActiveMACAddress()
                + Environment.NewLine + "ActiveIP: " + Network.GetActiveIP()
                + Environment.NewLine + "ActiveGateway: " + Network.GetActiveGateway()
                + Environment.NewLine + Environment.NewLine + "Error Details: "
                + Environment.NewLine + Environment.NewLine + "Error : " + errMsg
                + Environment.NewLine + "Error Stacktrace: " + stackTrace;

            EMailHelper.SendMail(
                new Email
                {
                    Subject = "Error for " + UserDetails.UserName + " from " + Network.GetActiveMACAddress(),
                    Body = mailBody,
                    From = "",
                    To = toMailAddr,
                    Cc = ccMailAddr,
                    BCc = bccMailAddr
                }, out isSuccess);
        }
    }
}
