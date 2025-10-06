const LoadingFallback = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-white">
      <img
        src="/assests/Home/toothscribe_logo.svg"
        alt="Loading"
        className="w-20 h-20 mb-6"
      />

      <div className="flex space-x-2">
        <span className="w-2 h-2 bg-[#0D9488] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-2 h-2 bg-[#0D9488] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-2 h-2 bg-[#0D9488] rounded-full animate-bounce"></span>
      </div>
    </div>
  );
};

export default LoadingFallback;
