using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessObjects.Common
{
    public static class Messages
    {
        public static List<Message> AllMessages { get; set; }
        public static void AddMessages(Message msg)
        {
            if (AllMessages == null)
                AllMessages = new List<Message>();
            AllMessages.Add(msg);
        }
        public static void AddMessages(string msgTxt, MessageType msgType, bool msgView = true, bool msgForPage = true, bool msgForControl = false)
        {
            if (AllMessages == null)
                AllMessages = new List<Message>();
            Message msg = new Message();
            msg.SetMessage(msgTxt, msgType, msgView, msgForPage, msgForControl);
            AllMessages.Add(msg);
        }
        public static void ClearMessages()
        {
            AllMessages = new List<Message>();
        }
    }
}
