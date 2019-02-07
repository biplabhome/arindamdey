using AutoMapper;
using System.Collections.Generic;

namespace Helper
{
    public static class AutomapperHelper
    {
        public static Y ConvertAutoMapper<X, Y>(X source)
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<X, Y>();
            });

            IMapper mapper = config.CreateMapper();
            return mapper.Map<X, Y>(source);
        }
        public static List<Y> ConvertListAutoMapper<X,Y>(List<X> source)
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<X, Y>();
            });

            IMapper mapper = config.CreateMapper();
            return mapper.Map<List<Y>>(source);
        }
    }
}
