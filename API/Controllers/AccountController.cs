using Application.Accounts;
using Application.DTOs;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly IMediator _mediator;

        public AccountController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost("register")]
        public async Task<ActionResult> CreateAccount(UserRegister userRegister)
        {
            await _mediator.Send(new CreateAccount.Command { userRegister = userRegister });
            return Ok();
        }
    }
}