using BusinessObjects.RationCard.Model;
using MasterDataManager;
using System.Collections.Generic;
using System.Data;

namespace RationCard.MasterDataManager
{
    public class RoleMasterDataTypeWrapper : IMasterDataTypeWrapper
    {
        public List<Role> Data { get; set; }
        public void Refresh()
        {
            MasterDataHelper.FetchRoleData();
        }
        public void Assign(DataSet ds)
        {
            MasterDataHelper.AssignRoleData(ds);
        }
    }
}
