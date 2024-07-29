const Main: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-start min-h-screen py-10 px-10">
      <h1 className="text-2xl font-bold mb-2">저장 내역</h1>
      <hr className="w-1/5 border-t border-stone-950 mb-4" />
      <div className="w-full text-left">
        <p className="text-gray-600">저장된 목록이 여기에 표시됩니다.</p>
      </div>
    </div>
  );
};

export default Main;
