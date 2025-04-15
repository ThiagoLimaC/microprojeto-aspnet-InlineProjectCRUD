using Microsoft.AspNetCore.Mvc;

namespace InlineProjectCRUD.Controllers
{
    public class UsuarioController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
