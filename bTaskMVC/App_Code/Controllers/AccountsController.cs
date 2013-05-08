using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TaskManager.App_Code.DTO;
using TaskManager.ContextData;

namespace TaskManager.Controllers
{
    public class AccountsController : ApiController
    {
        TaskDataDataContext taskData = new TaskDataDataContext();

        // GET api/values
        public IEnumerable<tblUser> Get()
        {
            var users = from u in taskData.tblUsers select u;

            return users;
        }


        public string Login(string accountName, string password)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}