using System.Xml.Serialization;

namespace BusinessObjects.RationCard.Model
{
    public class ProductDeptMaster
    {
        [XmlAttribute]
        public string ProductDeptMasterId { get; set; }
        [XmlAttribute]
        public string ProductDeptMasterDesc { get; set; }
    }
}
