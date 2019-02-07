using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Net.NetworkInformation;

namespace Helper
{
    public class ConnectionManager
    {
        private static IHttpContextAccessor _accessor;
        public static IConfiguration _configuration;

        public ConnectionManager(IHttpContextAccessor accessor, IConfiguration configuration)
        {
            _accessor = accessor;
            _configuration = configuration;
        }
        public static string GetAppSettings(string key)
        {
            return _configuration.GetSection("AppSettings").GetValue<string>(key);
        }
        public static string MacAddress
        {
            get
            {
                return string.IsNullOrEmpty(_macValue) ? GetMACAddress() : _macValue;
            }
        }

        public static string IpAddressPublic
        {
            get
            {
                return string.IsNullOrEmpty(_ipValue) ? GetExternalIPAddress() : _ipValue;

            }
        }
        public static string IpAddressInternal
        {
            get
            {
                return string.IsNullOrEmpty(_ipValue) ? GetInternalIPAddress() : _ipValue;

            }
        }
        private static string _macValue { get; set; }
        private static string _ipValue { get; set; }

        public static string _connStr;
        public static DataSet Exec(string procName, List<SqlParameter> sqlParams)
        {
            int count = 0;
            DataSet ds = new DataSet();
            using (var con = new SqlConnection(_connStr))
                try
                {
                    using (var cmd = new SqlCommand(procName, con))
                    using (var da = new SqlDataAdapter(cmd))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        foreach (SqlParameter param in sqlParams)
                        {
                            cmd.Parameters.Add(sqlParams[count]);
                            count++;
                        }

                        da.Fill(ds);
                    }
                }
                catch (Exception ex)
                {
                    LoggerHelper.LogError(ex);
                }
                finally
                {
                    con.Close();
                }
            return ds;
        }

        private static string GetMACAddress()
        {
            NetworkInterface[] nics = NetworkInterface.GetAllNetworkInterfaces();
            foreach (NetworkInterface adapter in nics)
            {
                if (_macValue == String.Empty)// only return MAC Address from first card  
                {
                    IPInterfaceProperties properties = adapter.GetIPProperties();
                    _macValue = adapter.GetPhysicalAddress().ToString();
                }
            }
            return _macValue;
        }
        private static string GetExternalIPAddress()
        {
            return _accessor.HttpContext.Connection.RemoteIpAddress.ToString();
        }
        private static string GetInternalIPAddress()
        {
            return _accessor.HttpContext.Connection.LocalIpAddress.ToString();
        }
    }
}
