using System;
using System.Collections.Generic;
using System.Text;
using System.Xml.Serialization;

namespace BusinessObjects.Common
{
    public class UserSystemInfo
    {
        [XmlElement]
        public ClientBrowser BrowserInfo { get; set; }
        [XmlElement]
        public ClientOS Windows { get; set; }
        [XmlAttribute]
        public string MacId { get; set; }
        [XmlAttribute]
        public string IpAddress { get; set; }
    }
}
