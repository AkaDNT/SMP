using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Create
    {
        public class Command : IRequest
        {
            public Activity activity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DatabaseContext _db;
            public Handler(DatabaseContext db)
            {
                _db = db;
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                _db.Activities.Add(request.activity);
                await _db.SaveChangesAsync();
            }
        }
    }
}