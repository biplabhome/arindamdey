using System;
using System.Collections.Generic;
using System.Text;
using System.Xml.Serialization;

namespace BusinessObjects.Common
{
    public static class UserDetails
    {
        [XmlAttribute]
        public static string Password { get; set; }
        [XmlAttribute]
        public static string UserEMailAddress { get; set; }
        [XmlAttribute]
        public static string UserName { get; set; }
        [XmlAttribute]
        public static string UserDomain { get; set; }
        [XmlAttribute]
        public static bool IsAuthenticateUser { get; set; }
        [XmlElement]
        public static RoleControl RoleRight { get; set; }
        [XmlElement]
        public static UserSystemInfo UserSysInfo { get; set; }
    }
}
