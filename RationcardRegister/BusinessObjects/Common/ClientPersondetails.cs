using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessObjects.Common
{
    class ClientPersondetails
    {
        public string Person_Id { get; set; }
        public string EnterpriseID { get; set; }
        public string DisplayName { get; set; }
        public string DefaultDesignation { get; set; }
        public string ImagePath { get; set; }
        public string ResumePath { get; set; }
        public bool IsSelected { get; set; }
        public string FileName { get; set; }
    }
}
