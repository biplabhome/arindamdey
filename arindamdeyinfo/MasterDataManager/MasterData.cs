using ArindamdeyInfo.MasterDataManager;
using System;
using System.Collections.Generic;

namespace MasterDataManager
{
    public static class MasterData
    {
        public static RoleMasterDataTypeWrapper Roles { get; set; }
        public static ConfigWrapper Configs { get; set; }
        public static bool MasterDataFetchComplete { get; set; }
        public static DateTime DataFetchTime { get; set; }
    }
}
