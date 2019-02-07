using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessObjects.Contact
{
    public class Email
    {
        public string Body { get; set; }
        public string Subject { get; set; }
        public string From { get; set; }
        public string[] To { get; set; }
        public string[] Cc { get; set; }
        public string[] BCc { get; set; }
    }
}
