using System;
using System.Globalization;

namespace Helper
{
    public static class DateHelper
    {
        public static string MonthAndYearFromString(string date)
        {
            string dtString = string.Empty;
            try
            {
                DateTime dt = DateTime.ParseExact(date, "yyMM", CultureInfo.InvariantCulture);
                dtString = string.Concat(dt.Month.ToString(), " ", dt.Year.ToString());
            }
            catch (Exception ex)
            {
                LoggerHelper.LogError(ex);
            }
            return dtString;
        }
    }
}
