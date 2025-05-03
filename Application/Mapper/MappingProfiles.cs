
using Application.DTOs;
using AutoMapper;
using Domain;

namespace Application.Mapper
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Activity, Activity>();
            CreateMap<UserRegister, User>().ForMember(d => d.UserName, o => o.MapFrom(s => s.Email));
        }
    }
}