using Helper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ArindamdeyInfo.Filters;
using System;

namespace ArindamdeyInfo.Controllers
{
    [Authorize]
    [CustomActionFilters]
     
    public class LoggingController : Controller
    {
        public void LogError(Exception ex)
        {
            LoggerHelper.LogError(ex);
        }
        public void LogInfo(string msg)
        {
            LoggerHelper.LogInfo(msg);
        }
    }
}
