const ForbiddenPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start pt-56 font-semibold">
      <h1 className="mb-4 text-6xl font-semibold text-red-500">403</h1>
      <p className="mb-4 text-lg text-gray-600">접근이 거부되었습니다.</p>
      <div className="animate-pulse">
        <span className="text-3xl font-semibold text-red-600">🚫</span>
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

export default ForbiddenPage;
