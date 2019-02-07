using BusinessObjects.Common;
using MasterDataManager;
using System.Collections.Generic;
using System.Data;

namespace ArindamdeyInfo.MasterDataManager
{
    public class RoleMasterDataTypeWrapper : IMasterDataTypeWrapper
    {
        public List<RoleControl> Data { get; set; }
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
