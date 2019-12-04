using System;
using LogAn.Ch3Stubs;

namespace LogAn.Tests.Ch3Stubs
{
    public class AlwaysValidFakeExtensionManager : IExtensionManager
    {
        public bool IsValid(string fileName)
        {
            return true;
        }
    }
}
