using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TaskManager.App_Code.DTO;

namespace TaskManager.Controllers
{
    public class TaskController : ApiController
    {
        // GET api/values
        public Task Get()
        {
            return new Task();
        }
    }
}