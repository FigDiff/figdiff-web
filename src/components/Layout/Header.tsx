import { useNavigate, useLocation } from "react-router-dom";
import { IoMdHome } from "react-icons/io";

import FigDiffLogo from "/logo.png";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = () => {
    navigate("/dash");
  };

  const isInitialPage = location.pathname === "/";

  return (
    <header className="flex items-center justify-between h-16 font-bold border-b border-gray-300 pl-4 pr-4">
      <div className="flex items-center">
        <img src={FigDiffLogo} alt="FigDiff Logo" className="h-10 mr-3" />
        <h1>FigDiff</h1>
      </div>
      {!isInitialPage && (
        <IoMdHome
          className="text-3xl cursor-pointer"
          onClick={handleHomeClick}
        />
      )}
    </header>
  );
};

export default Header;
