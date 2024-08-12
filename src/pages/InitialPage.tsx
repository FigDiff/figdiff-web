import { RiErrorWarningLine } from "react-icons/ri";
import { RiDownloadLine } from "react-icons/ri";

const InitialPage: React.FC = () => {
  const handleDownloadClick = () => {
    window.location.href =
      "https://chromewebstore.google.com/detail/figdiff/pkmedbhgncaalfmaihnmgdfkejoohhan";
  };

  return (
    <div className="flex flex-col items-center justify-start pt-20 font-semibold">
      <RiErrorWarningLine className="text-6xl text-blue-400" />
      <h1 className="text-xl mt-6">
        회원님의 서비스 이용내역을 확인할 수 없습니다.
      </h1>
      <h2 className="text-xl mt-10">
        아래의 링크로 이동하여 FigDiff 를 다운받아 서비스 이용내역을 확인해보실
        수 있습니다!
      </h2>
      <button
        className="flex items-center mt-14 p-4 bg-blue-500 text-white rounded shadow"
        onClick={handleDownloadClick}
      >
        <img
          src="/logo_white_version.png"
          alt="FigDiff Logo"
          className="h-8 mr-4"
        />
        <span className="mr-2">FigDiff 설치 페이지 열기</span>
        <RiDownloadLine className="text-2xl ml-2" />
      </button>
    </div>
  );
};

export default InitialPage;
