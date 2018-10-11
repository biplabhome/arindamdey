using BusinessObjects.RationCard.Model;
using System.Collections.Generic;
using System.Data;
using MasterDataManager;

namespace RationCard.MasterDataManager
{
    public class UomTypeMasterDataTypeWrapper : IMasterDataTypeWrapper
    {
        public List<UomType> Data { get; set; }
        public void Refresh()
        {
            MasterDataHelper.FetchUomData();
        }
        public void Assign(DataSet ds)
        {
            MasterDataHelper.AssignUomData(ds);
        }
    }
}
