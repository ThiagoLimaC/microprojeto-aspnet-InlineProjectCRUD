using InlineProjectCRUD.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace InlineProjectCRUD.Controllers
{
    public class UsuarioController : Controller
    {
        private readonly AppDbContext _context;
        public UsuarioController(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            var users = await _context.Usuarios.ToListAsync();
            return View(users);
        }

        [HttpPost]
        public async Task<IActionResult> Update (int id, string field, string value)
        {
            var user = await _context.Usuarios.FindAsync(id);

            if (user == null) return Json(new { success = false });

            switch(field)
            {
                case "Nome": user.Nome = value; break;  
                case "Sobrenome": user.Sobrenome = value; break;  
                case "Email": user.Email = value; break;  
                case "Telefone": user.Telefone = value; break;  
                case "Endereco": user.Endereco = value; break;  
                case "Empresa": user.Empresa = value; break;  
            }

            await _context.SaveChangesAsync();

            return Json(new { success = true });
        }

        [HttpPost]
        public async Task<IActionResult> Delete(int id)
        {
            var user = await _context.Usuarios.FindAsync(id);
            if (user == null) return Json(new { success = false });

            _context.Usuarios.Remove(user);
            await _context.SaveChangesAsync();

            return Json(new { success = true });
        }
    }
}
