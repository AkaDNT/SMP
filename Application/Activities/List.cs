using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
namespace Application.Activities
{
    public class List
    {
        public class Query : IRequest<List<Activity>>
        {
        }
        public class Handler : IRequestHandler<Query, List<Activity>>
        {
            private readonly DatabaseContext _db;

            public Handler(DatabaseContext db)
            {
                _db = db;
            }

            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _db.Activities.ToListAsync();
            }
        }
    }
}