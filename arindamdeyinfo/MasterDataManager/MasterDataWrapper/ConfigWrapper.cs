using BusinessObjects.Common;
using MasterDataManager;
using System.Collections.Generic;
using System.Data;

namespace ArindamdeyInfo.MasterDataManager
{
    public class ConfigWrapper : IMasterDataTypeWrapper
    {
        public List<Config> Data { get; set; }
        public void Refresh()
        {
            MasterDataHelper.FetchConfig();
        }
        public void Assign(DataSet ds)
        {
            MasterDataHelper.AssignConfigData(ds);
        }
    }
}
