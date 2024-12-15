
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities
{
    public class Detail
    {
        public class Query : IRequest<Activity>
        {
            public Guid _id { get; set; }
        }
        public class Handler : IRequestHandler<Query, Activity>
        {
            private readonly DatabaseContext _db;
            public Handler(DatabaseContext db)
            {
                _db = db;
            }

            public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _db.Activities.FindAsync(request._id);
            }
        }
    }
}