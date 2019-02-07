using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel;

namespace BusinessObjects.Enums
{
    public enum ContactTypeEnum
    {
        [Description("A")]
        All,
        [Description("C")]
        Read,
        [Description("U")]
        UnRead
    }
}
