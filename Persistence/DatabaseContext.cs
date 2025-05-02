using Domain;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Persistence
{
    public class DatabaseContext(DbContextOptions options) : IdentityDbContext<User>(options)
    {
        public DbSet<Activity> Activities { get; set; }
    }
}