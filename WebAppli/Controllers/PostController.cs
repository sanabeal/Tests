using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAppli.Models;

namespace WebAppli.Controllers
{
    public class PostController : ApiController
    {
        public HttpResponseMessage Get()
        {
            List<vwPost> employeeList = new List<vwPost>();
            using (DataClasses1DataContext dc = new DataClasses1DataContext())
            {
                employeeList = dc.vwPosts.OrderBy(a => a.Post).ToList();
                HttpResponseMessage response;
                response = Request.CreateResponse(HttpStatusCode.OK, employeeList);
                return response;
            }
        }

        public HttpResponseMessage Get(string posts)
        {
            List<vwPost> employeeList = new List<vwPost>();
            using (DataClasses1DataContext dc = new DataClasses1DataContext())
            {
                employeeList = dc.vwPosts.Where(a => a.Post == posts).ToList();
                HttpResponseMessage response;
                response = Request.CreateResponse(HttpStatusCode.OK, employeeList);
                return response;
            }
        }
    }
}
