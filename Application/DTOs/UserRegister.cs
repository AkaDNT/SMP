
using System.ComponentModel.DataAnnotations;

namespace Application.DTOs
{
    public class UserRegister
    {
        [Required]
        [EmailAddress]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        [Required]
        public string DisplayName { get; set; }
        public string Password { get; set; }
    }
}