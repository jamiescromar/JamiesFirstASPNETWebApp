using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JamiesFirstASPNETWebApp
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            //handles errors and will tell us what the error is and will only tell developer not user
            if (env.IsEnvironment("Development"))
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                //can put other nice error for the user to see
            }
            //This is middlewear
            app.UseNodeModules();
            //when we use this we will not need to type in the index.html at the end of the URL
            //app.UseDefaultFiles();
            //By moving index.html to wwwroot it makes it so that we can see the file at localhost/index.html
            app.UseStaticFiles();
            //turns on generic routing in MVC (so you dont have to do www.jamie/index.html) routing will be held dynamically
            app.UseRouting();
            //which page are we going to run based on what
            app.UseEndpoints(cfg =>
            {
                //create a default enpoint. so find the controller that matches request and then what is the default
                cfg.MapControllerRoute("Default",
                    "{controller}/{action}/{id?}",
                    //dont have to specify index.html or so on
                    new { controller = "Home", action = "Index" });
            }
            );
        }
    }
}
