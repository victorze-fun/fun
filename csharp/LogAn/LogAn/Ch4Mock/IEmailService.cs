using System;
using System.Collections.Generic;
using System.Text;

namespace LogAn.Ch4Mock
{
    public interface IEmailService
    {
        void SendEmail(string to, string subject, string body);
    }
}
