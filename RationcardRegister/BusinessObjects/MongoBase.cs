using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessObjects
{
    public class MongoBase
    {
        [BsonId]
        public ObjectId Id { get { return ObjectId.GenerateNewId(); } }
    }
}
