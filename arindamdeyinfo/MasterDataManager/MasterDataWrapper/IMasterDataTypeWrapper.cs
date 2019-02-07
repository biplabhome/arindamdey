using System.Data;

namespace ArindamdeyInfo.MasterDataManager
{
    public interface IMasterDataTypeWrapper
    {
        void Refresh();
        void Assign(DataSet ds);
    }
}
