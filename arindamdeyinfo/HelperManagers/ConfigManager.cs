using BusinessObjects.Common;
using MasterDataManager;
using System;
using System.Collections.Generic;
using System.Text;

namespace HelperManagers
{
    public static class ConfigManager
    {
        public static List<Config> GetConfig(string distId = "")
        {
            MasterDataHelper.FetchConfig();
            return MasterData.Configs.Data;
        }
        public static string GetConfigValue(string keyText)
        {
            string val = "";
            var config = MasterData.Configs.Data.Find(i => i.KeyText.Equals(keyText));
            if (config != null)
            {
                val = config.ValueText;
            }
            else
            {
                val = "";
            }
            return val;
        }
        public static void AddOrEditConfig(string distId, string keyText, string keyVal)
        {
            MasterDataHelper.FetchConfig(distId, keyText, keyVal, 1, "ADDOREDIT");
        }
        public static void DeleteConfig(string distId, string keyText)
        {
            MasterDataHelper.FetchConfig(distId, keyText, "", 0, "DELETE");
        }
    }
}
