using System.Runtime.Serialization;

namespace ATMApp.Services
{
    [Serializable]
    internal class NoCardFount : Exception
    {
        public NoCardFount()
        {
        }

        public NoCardFount(string? message) : base(message)
        {
        }

        public NoCardFount(string? message, Exception? innerException) : base(message, innerException)
        {
        }

        protected NoCardFount(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}