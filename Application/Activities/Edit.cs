using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Activity activity { get; set; }
        }
        public class Handler : IRequestHandler<Command>
        {
            private readonly DatabaseContext _db;
            private readonly IMapper _mapper;
            public Handler(DatabaseContext db, IMapper mapper)
            {
                _mapper = mapper;
                _db = db;
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var activityHolder = _db.Activities.Find(request.activity.Id);
                if (activityHolder == null) throw new Exception("The activity is not found");
                _mapper.Map(request.activity, activityHolder);
                await _db.SaveChangesAsync();
            }
        }
    }
}