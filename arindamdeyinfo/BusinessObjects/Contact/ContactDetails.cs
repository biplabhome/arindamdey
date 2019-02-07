using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessObjects.Contact
{
    public class ContactDetails
    {
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string Address3 { get; set; }
        public string Address4 { get; set; }
        public string Address5 { get; set; }
        public string Address
        {
            get
            {
                return string.Concat((Address1 ?? ""),
                    (Address2 ?? ""),
                    (Address3 ?? ""),
                    (Address4 ?? ""),
                    (Address5 ?? ""));
            }
        }
        public string PostCode { get; set; }
        public string TelNo { get; set; }
        public string FaxNo { get; set; }
        public string ContactName { get; set; }
        public string ContactOccupation { get; set; }
        public string ContactEmail { get; set; }
    }
}
