using System;
using System.ComponentModel;
using System.Linq;
using System.Net;
using System.Net.NetworkInformation;
using System.Runtime.InteropServices;
using System.Threading;

namespace HelperManagers
{
    public static class Network
    {
        static Thread _myThread;
        static int _disconnectCount = 0;
        static int _notificationCount = 0;
        static DateTime _notificationTime = DateTime.MinValue;
        static IPAddress _iPSAddress = GetIP();
        static Network()
        {

        }

        [DllImport("iphlpapi.dll", ExactSpelling = true)]
        public static extern int SendARP(int DestIP, int SrcIP, [Out] byte[] pMacAddr, ref int PhyAddrLen);

        [DllImport("iphlpapi.dll", CharSet = CharSet.Auto)]
        private static extern int GetBestInterface(UInt32 destAddr, out UInt32 bestIfIndex);

        public static string GetPublicIpAddress()
        {
            return new System.Net.WebClient().DownloadString("https://api.ipify.org");
        }

        public static string GetActiveIP()
        {
            return GetActiveIP().ToString();
        }

        public static IPAddress GetIP()
        {
            IPAddress ip = null;
            IPHostEntry Host = default(IPHostEntry);
            string Hostname = null;
            Hostname = System.Environment.MachineName;
            Host = Dns.GetHostEntry(Hostname);
            foreach (IPAddress IP in Host.AddressList)
            {
                if (IP.AddressFamily == System.Net.Sockets.AddressFamily.InterNetwork)
                {
                    ip = IP;
                }
            }
            return ip;
        }
        public static string GetMACAddress(string sName)
        {
            string s = string.Empty;
            System.Net.IPHostEntry Tempaddr = null;
            Tempaddr = (System.Net.IPHostEntry)Dns.GetHostEntry(sName);
            System.Net.IPAddress[] TempAd = Tempaddr.AddressList;
            string[] Ipaddr = new string[3];
            foreach (IPAddress TempA in TempAd)
            {
                Ipaddr[1] = TempA.ToString();
                byte[] ab = new byte[6];
                int len = ab.Length;
                int r = SendARP((int)TempA.Address, 0, ab, ref len);
                string sMAC = BitConverter.ToString(ab, 0, 6);
                Ipaddr[2] = sMAC;
                s = sMAC;
            }
            return s;
        }

        public static string GetActiveMACAddress()
        {
            return GetMACAddress(_iPSAddress.ToString());
        }
        public static string GetActiveGateway()
        {
            return GetGateway(_iPSAddress);
        }
        public static string GetGateway(IPAddress destinationAddress)
        {
            IPAddress gateway = null;
            UInt32 destaddr = BitConverter.ToUInt32(destinationAddress.GetAddressBytes(), 0);

            uint interfaceIndex;
            int result = GetBestInterface(destaddr, out interfaceIndex);
            if (result != 0)
                throw new Win32Exception(result);

            foreach (var ni in NetworkInterface.GetAllNetworkInterfaces())
            {
                var niprops = ni.GetIPProperties();
                if (niprops == null)
                    continue;

                gateway = niprops.GatewayAddresses?.FirstOrDefault()?.Address;
                if (gateway == null)
                    continue;

                if (ni.Supports(NetworkInterfaceComponent.IPv4))
                {
                    var v4props = niprops.GetIPv4Properties();
                    if (v4props == null)
                        continue;

                    if (v4props.Index == interfaceIndex)
                        return gateway.ToString();
                }

                if (ni.Supports(NetworkInterfaceComponent.IPv6))
                {
                    var v6props = niprops.GetIPv6Properties();
                    if (v6props == null)
                        continue;

                    if (v6props.Index == interfaceIndex)
                        return gateway.ToString();
                }
            }

            return null;
        }
    }
}
