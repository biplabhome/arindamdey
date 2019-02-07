using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessObjects.Common
{
    public class ClientCredential
    {
        public string CredentialDetails_Id { get; set; }
        public string CredentialTitle { get; set; }
        public string CredentialDescription { get; set; }
        public string UniqueApproach { get; set; }
        public string UniqueApproach_Desc { get; set; }
        public string Result { get; set; }
        public string Result_Desc { get; set; }
        public string CleintValue { get; set; }
        public string ClientValue_Desc { get; set; }
        public string ThumbPath { get; set; }
        public bool Isselected { get; set; }
    }
}
