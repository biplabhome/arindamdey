using System;
using System.Collections.Generic;
using System.Text;
using System.Xml.Serialization;

namespace BusinessObjects.Common
{
   public class RoleControl
    {
        [XmlAttribute]
        public string RoleId { get; set; }
        [XmlAttribute]
        public string ControlIdToHide { get; set; }
        [XmlAttribute]
        public string RoleDesc { get; set; }
        [XmlAttribute]
        public string PageName { get; set; }
        [XmlAttribute]
        public ControlType ControlType { get; set; }
    }
    public enum ControlType
    {
        Name, Class, Id, Tag
    }
}
