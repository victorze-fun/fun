using System;
using LogAn.Ch5Isolation;
using NSubstitute;
using NUnit.Framework;

namespace LogAn.Tests.Ch5Isolation
{
    [TestFixture]
    class LogAnalyzerTests
    {
        [Test]
        public void Analyze_LoggerThrows_CallsWebService()
        {
            var mockWebService = Substitute.For<IWebService>();
            var stubLogger = Substitute.For<ILogger>();
            stubLogger.When(logger => logger.LogError(Arg.Any<string>()))
                .Do(info => throw new Exception("fake exception"));
            var analyzer = new LogAnalyzer(stubLogger, mockWebService);

            analyzer.MinNameLength = 10;
            analyzer.Analyze("Short.txt");

            // Comprueba que se llamó al servicio web simulado.
            mockWebService.Received()
                .Write(Arg.Is<string>(s => s.Contains("fake exception")));
        }

        [Test]
        public void Analyze_TooShortFileName_CallLogger()
        {
            ILogger logger = Substitute.For<ILogger>();
            LogAnalyzer analyzer = new LogAnalyzer(logger);

            analyzer.MinNameLength = 6;
            analyzer.Analyze("a.txt");

            logger.Received().LogError("Filename too short: a.txt");
        }

        [Test]
        public void Returns_ByDefault_WorksForHardCodedArgument()
        {
            IFileNameRules fakeRules = Substitute.For<IFileNameRules>();

            fakeRules.IsValidLogFileName(Arg.Any<string>()).Returns(true);

            Assert.IsTrue(fakeRules.IsValidLogFileName("anything.txt"));
        }

        [Test]
        public void Returns_ArgAny_Throws()
        {
            IFileNameRules fakeRules = Substitute.For<IFileNameRules>();

            fakeRules.When(x => x.IsValidLogFileName(Arg.Any<string>())).
                Do(context => throw new Exception("fake exception"));

            Assert.Throws<Exception>(() => fakeRules.IsValidLogFileName("anything"));
        }
    }
}
