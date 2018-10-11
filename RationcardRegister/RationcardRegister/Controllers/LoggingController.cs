using Helper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RationcardRegister.Filters;
using System;

namespace RationcardRegister.Controllers
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
