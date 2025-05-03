
using System.Text.Json;
using Application.DTOs;
using AutoMapper;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;

namespace Application.Accounts
{
    public class CreateAccount
    {
        public class Command : IRequest
        {
            public UserRegister userRegister { get; set; }
        }
        public class Handler : IRequestHandler<Command>
        {
            private readonly UserManager<User> _userManager;
            private readonly IMapper _mapper;
            private readonly ILogger<Handler> _logger;

            public Handler(UserManager<User> userManager, IMapper mapper, ILogger<Handler> logger)
            {
                _userManager = userManager;
                _mapper = mapper;
                _logger = logger;
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var user = _mapper.Map<User>(request.userRegister);

                var result = await _userManager.CreateAsync(user, request.userRegister.Password);

                if (!result.Succeeded)
                {
                    foreach (var error in result.Errors)
                    {
                        _logger.LogError("CreateAsync failed: {Code} - {Description}", error.Code, error.Description);
                    }

                    throw new ApplicationException("User creation failed");
                }
            }
        }
    }
}