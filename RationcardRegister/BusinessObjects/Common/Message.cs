using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessObjects.Common
{
    public class Message
    {
        public string MessageText { get; set; }
        public MessageType MessageRaisedType { get; set; }
        public bool MessageToView { get; set; }
        public bool MessageForPage { get; set; }
        public bool MessageForControl { get; set; }
        public void SetMessage(string msgTxt, MessageType msgType, bool msgView = true, bool msgForPage = true, bool msgForControl = false)
        {
            MessageText = msgTxt;
            MessageRaisedType = msgType;
            MessageToView = msgView;
            MessageForPage = msgForPage;
            MessageForControl = msgForControl;
        }
    }
    public enum MessageType
    {
        Warning, Error, Info
    }
}
