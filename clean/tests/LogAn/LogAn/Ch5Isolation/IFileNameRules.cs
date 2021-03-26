using System;
using System.Collections.Generic;
using System.Text;

namespace LogAn.Ch5Isolation
{
    public interface IFileNameRules
    {
        bool IsValidLogFileName(string fileName);
    }
}
