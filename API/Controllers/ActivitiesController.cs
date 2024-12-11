using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class ActivitiesController : HomeController
    {
        private readonly DatabaseContext _db;
        public ActivitiesController(DatabaseContext db)
        {
            _db = db;
        }
        [HttpGet]
        public async Task<IActionResult> GetActivities(){
            var activities = await _db.Activities.ToListAsync();
            return Ok(activities);
        }
    }
}