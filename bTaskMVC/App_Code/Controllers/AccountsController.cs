using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using bTaskMVC.App_Code.DTO;

namespace bTaskMVC.Controllers
{
    public class AccountsController : ApiController
    {
        // GET api/values
        public Accounts Get()
        {
            return new Accounts();
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