using BusinessObjects.Common;
using Helper;
using Microsoft.AspNetCore.Http;
using System;

namespace Helper
{
    public class UserHelper
    {
        public static string _userAgent;
        public UserHelper(HttpContext context)
        {
            _userAgent = context.Request.Headers["User-Agent"];
            GetUserInfo();
        }        
        public static void GetUserInfo()
        {
            try
            {
                UserAgent._userAgent = _userAgent;
                LoggerHelper.LogInfo(String.Format("User logged in with following details::- UserAgent: {0}"
                    + Environment.NewLine +" Os: {1}"
                    + Environment.NewLine + " Os Version: {2}"
                    + Environment.NewLine + " Browser Name: {3}"
                    + Environment.NewLine + " Browser Major: {4}"
                    + Environment.NewLine + " Browser Version: {5}"
                    + Environment.NewLine + " Ip Address Internal: {6}"
                    + Environment.NewLine + " Ip Address external: {7}"
                    + Environment.NewLine + " Mac Address: {8}"

                    , _userAgent
                    , UserAgent.OS.Name
                    , UserAgent.OS.Version
                    , UserAgent.Browser.Name
                    , UserAgent.Browser.Major
                    , UserAgent.Browser.Version
                    , ConnectionManager.IpAddressInternal
                    , ConnectionManager.IpAddressPublic
                    , ConnectionManager.MacAddress
                    ));
            }
            catch (Exception ex)
            {
                LoggerHelper.LogError(ex);
            }
        }
    }
}
