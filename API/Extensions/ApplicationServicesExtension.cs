using Application.Activities;
using Application.Mapper;
using Domain;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Extensions
{
    public static class ApplicationServicesExtension
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            // Db
            services.AddDbContext<DatabaseContext>(opt =>
            {
                opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
            });
            // Cors
            services.AddCors(opt =>
            {
                opt.AddPolicy("CorsPolicy", policy =>
                {
                    policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000");
                });
            });

            // MediateR
            services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(List.Handler).Assembly));

            // Auto Mapper
            services.AddAutoMapper(typeof(MappingProfiles).Assembly);

            //Identity
            services.AddIdentityApiEndpoints<User>(opt => { opt.User.RequireUniqueEmail = true; }).AddRoles<Role>().AddEntityFrameworkStores<DatabaseContext>();

            return services;
        }
    }
}