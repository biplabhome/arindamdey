using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessObjects
{
    public class LogEntry
    {
        public string Date { get; set; }
        public string Text { get; set; }
        public LogTypeEnum LogType { get; set; }
        public string Stacktrace { get; set; }
        public string InnerException { get; set; }
    }
    public enum LogTypeEnum
    {
        ErrorLog, InfoLog
    }
}
