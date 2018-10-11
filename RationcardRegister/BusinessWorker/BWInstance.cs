
using BusinessObjects.Common;
using DataAccess;
using Helper;
using MasterDataManager;
using System;
using System.Collections.Generic;
using System.Threading;



namespace BusinessObjects
{
    public sealed class BWInstance
    {
        private static readonly Lazy<BWInstance> lazy =
            new Lazy<BWInstance>(() => new BWInstance());

        public static BWInstance Instance { get { return lazy.Value; } }

        private BWInstance()
        {
        }

        public void FetchMasterData()
        {
            try
            {
                MasterDataHelper.FetchMasterData();

                //AddStaticData();
            }
            catch (Exception ex)
            {
                LoggerHelper.LogError(ex);
            }
        }
        public void FetchMasterDataByThread()
        {
            try
            {
                MasterDataHelper.FetchDelayedMasterData();
            }
            catch (Exception ex)
            {
                LoggerHelper.LogError(ex);
            }
        }
        //private void AddStaticData()
        //{
            
        //}
        public void Login(string userName)
        {
            Messages.ClearMessages();
            try
            {
                DALInstance.Instance.Login(userName);

                if (UserDetails.IsAuthenticateUser)
                {
                    FetchMasterData();
                    //fetch Master Data
                    ThreadStart threadDelegate = new ThreadStart(FetchMasterDataByThread);
                    Thread newThread = new Thread(threadDelegate);
                    newThread.Start();
                }
            }
            catch (Exception ex)
            {
                LoggerHelper.LogError(ex);
            }
        }        
    }
}
