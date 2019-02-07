using BusinessObjects;
using BusinessObjects.Common;
using Helper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace DataAccess
{
    public sealed class DALInstance
    {
        private static readonly Lazy<DALInstance> lazy =
           new Lazy<DALInstance>(() => new DALInstance());

        public static DALInstance Instance { get { return lazy.Value; } }

        private DALInstance()
        {

        }
        public void Login(string userName)
        {
            try
            {
                UserDetails.UserName = userName;
                UserDetails.IsAuthenticateUser =  !UserDetails.UserName.Contains("ext.");
            }
            catch (Exception ex)
            {
                LoggerHelper.LogError(ex);
            }
        }
        public DataSet FetchUserPrimaryInfo(string macAddr, string ipAddrInternal, string ipAddrPublic, string gateWay)
        {
            DataSet ds = null;
            try
            {
                List<SqlParameter> sqlParams = new List<SqlParameter>();
                sqlParams.Add(new SqlParameter { ParameterName = "@mac", SqlDbType = SqlDbType.VarChar, Value = macAddr });
                sqlParams.Add(new SqlParameter { ParameterName = "@Internal_Ip", SqlDbType = SqlDbType.VarChar, Value = ipAddrInternal });
                sqlParams.Add(new SqlParameter { ParameterName = "@Public_Ip", SqlDbType = SqlDbType.VarChar, Value = ipAddrPublic });
                sqlParams.Add(new SqlParameter { ParameterName = "@Gateway_Addr", SqlDbType = SqlDbType.VarChar, Value = gateWay });

                ds = ConnectionManager.Exec("SP_App_Start", sqlParams);                
            }
            catch (Exception ex)
            {
                LoggerHelper.LogError(ex);
            }
            return ds;
        }

        public string LogUserInputData(string userInputXml)
        {
            string msg = string.Empty;
            try
            {
                List<SqlParameter> sqlParams = new List<SqlParameter>();
                sqlParams.Add(new SqlParameter { ParameterName = "@userId", SqlDbType = SqlDbType.VarChar, Value = UserDetails.UserName });
                sqlParams.Add(new SqlParameter { ParameterName = "@userInputXml", SqlDbType = SqlDbType.Xml, Value = userInputXml });

                DataSet ds = ConnectionManager.Exec("Sp_SaveAndClose", sqlParams);
                DataSet tmpDs = new DataSet();

                if ((ds != null) && (ds.Tables.Count > 0) && (ds.Tables[0].Rows[0][0].ToString().Contains("SUCCESS")))
                {
                    msg = Constants.SaveAndSuccessSuccessMsg;
                }
                else
                {
                    msg = Constants.SaveAndCloseErrorMsg;
                    LoggerHelper.LogError(Constants.SaveAndCloseErrorMsg);
                }
            }
            catch (Exception ex)
            {
                LoggerHelper.LogError(ex);
            }
            return msg;
        }
    }
}
