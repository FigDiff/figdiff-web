import FigDiffLogo from "/logo.png";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-center h-16 font-bold border-b border-gray-300">
      <img src={FigDiffLogo} alt="FigDiff Logo" className="h-10 mr-3" />
      <h1>FigDiff</h1>
    </header>
  );
};

export default Header;
