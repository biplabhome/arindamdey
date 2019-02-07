using BusinessObjects;
using BusinessObjects.Common;
using MongoDB.Driver;
using System;
using System.Linq;

namespace Helper
{
    public static class MongoDbHelper
    {
        public static MongoClient _mongoClient;
        public static IMongoDatabase _mongoDbData;
        //public static IMongoCollection<UserDetails> _mongoUserCollection;
        public static IMongoCollection<LogEntry> _mongoLogCollection;

        //Mongodb query selector
        //https://docs.mongodb.com/manual/reference/operator/query/?_ga=2.247431684.180059386.1533270388-449267180.1532931380
        static MongoDbHelper()
        {
            try
            {
                // To directly connect to a single MongoDB server
                // (this will not auto-discover the primary even if it's a member of a replica set)
                //_mongoClient = new MongoClient();

                // or use a connection string
                _mongoClient = new MongoClient("mongodb://localhost:27017/SelfSerPortalDb");

                // or, to connect to a replica set, with auto-discovery of the primary, supply a seed list of members
                //var client = new MongoClient("mongodb://localhost:27017,localhost:27018,localhost:27019");

                //if the database doesn’t yet exist. It will be created upon first use
                _mongoDbData = _mongoClient.GetDatabase("SelfSerPortalDb");

                //if the collection  doesn’t yet exist. It will be created upon first use
                //_mongoUserCollection = _mongoDbData.GetCollection<User>("Users");
                _mongoLogCollection = _mongoDbData.GetCollection<LogEntry>("log");
            }
            catch(Exception ex)
            {
                LoggerHelper.LogError(ex);
            }
        }

        //public static void InsertUser(User dataToInsert)
        //{
        //    if (!IsUserExistsByUserName(dataToInsert.UserName))
        //    {
        //        //Once you have the collection instance, you can insert documents into the collection.
        //        _mongoUserCollection.InsertOne(dataToInsert);
        //    }
        //}
        //public static bool IsUserExistsByUserName(string valueToFind)
        //{
        //    var filter = Builders<User>.Filter.Eq(x => x.UserName, "biplabhome");
        //    return _mongoUserCollection.Find(filter).ToList().Count() > 0;
        //}
        //public static User FindUserByUserName(string valueToFind)
        //{
        //    var filter = Builders<User>.Filter.Eq(x => x.UserName, "biplabhome");
        //    return _mongoUserCollection.Find(filter).FirstOrDefault();
        //}

        public static void InsertLog(LogEntry dataToInsert)
        {
            try
            { 
            //Once you have the collection instance, you can insert documents into the collection.
            _mongoLogCollection.InsertOne(dataToInsert);
            }
            catch (Exception ex)
            {
                LoggerHelper.LogError(ex);
            }
        }
        public static void FindLogByType(LogEntry sourceData, LogTypeEnum logType)
        {
            try
            { 
                var results = _mongoLogCollection.Find(x => x.LogType == logType).ToList();
            }
            catch (Exception ex)
            {
                LoggerHelper.LogError(ex);
            }
        }        

        //public static string GetthePropertyValue<T>(T sourceData, string keyToFind)
        //{
        //    var t = typeof(T);
        //    PropertyInfo p = t.GetProperty(keyToFind);
        //    return p.GetValue(sourceData, null) as string;
        //}
    }
}
