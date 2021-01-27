using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JamiesFirstASPNETWebApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            //These will be razors which is  combo of Html and Razor
            return View();
        }
        public IActionResult GradeCalculator()
        {
            return View();
        }
    }
}
