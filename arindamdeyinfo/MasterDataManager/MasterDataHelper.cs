using BusinessObjects.Common;
using Helper;
using ArindamdeyInfo.MasterDataManager;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading;

namespace MasterDataManager
{
    public static class MasterDataHelper
    {
        public static void FetchMasterData()
        {            
            try
            {
                List<SqlParameter> sqlParams = new List<SqlParameter>();
                sqlParams.Add(new SqlParameter { ParameterName = "@distId", SqlDbType = SqlDbType.VarChar, Value = UserDetails.UserName });
                DataSet ds = ConnectionManager.Exec("Sp_GetMasterData", sqlParams);

                DataSet tmpDs = new DataSet();
                if ((ds != null) && (ds.Tables.Count > 0))
                {
                    tmpDs.Tables.Add(ds.Tables[0].Copy());
                    AssignRoleData(tmpDs);
                    tmpDs.Reset();

                    tmpDs.Tables.Add(ds.Tables[20].Copy());
                    AssignConfigData(tmpDs);
                    tmpDs.Reset();

                    //DataFetchTime
                    MasterData.DataFetchTime = DateTime.Now;
                }
                LoggerHelper.LogInfo(Environment.NewLine + "masterdata fetch completed on " + DateTime.Now);
            }
            catch (Exception ex)
            {
                LoggerHelper.LogError(ex);
            }
        }
        public static void FetchDelayedMasterData()
        {
            try
            {
                List<SqlParameter> sqlParams = new List<SqlParameter>();
                sqlParams.Add(new SqlParameter { ParameterName = "@distId", SqlDbType = SqlDbType.VarChar, Value = UserDetails.UserName });
                DataSet ds = ConnectionManager.Exec("Sp_GetMasterData", sqlParams);

                DataSet tmpDs = new DataSet();
                if ((ds != null) && (ds.Tables.Count > 0))
                {
                    
                }
                LoggerHelper.LogInfo(Environment.NewLine + "masterdata fetch completed on " + DateTime.Now);
            }
            catch (Exception ex)
            {
                LoggerHelper.LogError(ex);
            }
        }
        public static void AssignRoleData(DataSet ds)
        {
            if ((ds != null) && (ds.Tables.Count > 0))
            {
                MasterData.Roles = new RoleMasterDataTypeWrapper();
                try
                {
                    //ProductRoles
                    MasterData.Roles.Data = ds.Tables[0].AsEnumerable().Select((i, index) => new RoleControl
                    {
                        RoleId = i["Role_Id"].ToString(),
                        ControlIdToHide = i["Role_Desc"].ToString(),
                        RoleDesc = i["ControlIdToHide"].ToString()
                    })
                    .ToList();
                }
                catch (Exception ex)
                {
                    LoggerHelper.LogError(ex);
                }
            }
        }
        public static void FetchRoleData()
        {
            try
            {
                List<SqlParameter> sqlParams = new List<SqlParameter>();
                sqlParams.Add(new SqlParameter { ParameterName = "@distId", SqlDbType = SqlDbType.VarChar, Value = UserDetails.UserName });
                DataSet ds = ConnectionManager.Exec("Sp_GetRoleMasterData", sqlParams);

                if ((ds != null) && (ds.Tables.Count > 0))
                {
                    AssignRoleData(ds);
                }
            }
            catch (Exception ex)
            {
                LoggerHelper.LogError(ex);
            }
        }
        public static void FetchConfig(string distId = "", string keyText = "", string keyVal = "", int active = 1, string operation = "GET", string cloneFromDistId = "")
        {
            distId = (string.IsNullOrEmpty(distId.Trim())) ? UserDetails.UserName : distId;
            if(operation == "CLONE")
            {
                cloneFromDistId = (string.IsNullOrEmpty(cloneFromDistId.Trim())) ? UserAgent.OS.Name : cloneFromDistId;
            }
            try
            {
                List<SqlParameter> sqlParams = new List<SqlParameter>();
                sqlParams.Add(new SqlParameter { ParameterName = "@distId", SqlDbType = SqlDbType.VarChar, Value = distId });
                sqlParams.Add(new SqlParameter { ParameterName = "@configKey", SqlDbType = SqlDbType.VarChar, Value = keyText });
                sqlParams.Add(new SqlParameter { ParameterName = "@configVal", SqlDbType = SqlDbType.VarChar, Value = keyVal });
                sqlParams.Add(new SqlParameter { ParameterName = "@active", SqlDbType = SqlDbType.Bit, Value = active });
                sqlParams.Add(new SqlParameter { ParameterName = "@cloneFromDistId", SqlDbType = SqlDbType.VarChar, Value = cloneFromDistId });
                sqlParams.Add(new SqlParameter { ParameterName = "@action", SqlDbType = SqlDbType.VarChar, Value = operation });

                DataSet ds = ConnectionManager.Exec("Sp_ConfigOperation", sqlParams);

                if ((ds != null) && (ds.Tables.Count > 0))
                {
                    AssignConfigData(ds);
                }
            }
            catch (Exception ex)
            {
                LoggerHelper.LogError(ex);
            }
        }

        public static void AssignConfigData(DataSet ds)
        {
            if ((ds != null) && (ds.Tables.Count > 0))
            {
                MasterData.Configs = new ConfigWrapper();
                try
                {
                    //Master Category
                    MasterData.Configs.Data = ds.Tables[0].AsEnumerable().Select(i => new Config
                    {
                        KeyText = i["KeyText"].ToString(),
                        ValueText = i["ValueText"].ToString(),
                        Active = i["Active"].ToString() == "True",
                        Created_Date = DateTime.Parse(i["Created_Date"].ToString()),
                        Updated_Date = DateTime.Parse(i["Updated_Date"].ToString())

                    }).ToList();
                }
                catch (Exception ex)
                {
                    LoggerHelper.LogError(ex);
                }
            }
        }
    }
}
