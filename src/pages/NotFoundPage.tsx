const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start pt-56 font-semibold">
      <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
      <p className="mb-4 text-lg text-gray-600">페이지를 찾을 수 없습니다.</p>
      <div className="animate-bounce">
        <svg
          className="mx-auto h-16 w-16 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          ></path>
        </svg>
      </div>
      <p className="mt-4 text-gray-600">
        메인 페이지로&nbsp;
        <a href="/" className="text-blue-500">
          돌아가기
        </a>
        .
      </p>
    </div>
  );
};

export default NotFoundPage;
