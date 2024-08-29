import { useEffect, useState } from "react";

function Header() {
  const [isStyledH, setIsStyledH] = useState(true);
  const [isStyledImg, setIsStyledImg] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsStyledImg((prevIsStyled) => !prevIsStyled);
      setIsStyledH((prevIsStyled) => !prevIsStyled);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const styleH = isStyledH ? { color: "#fffb00", textShadow: "0px 0px 30px #fff349" } : {};
  const styleImg = isStyledImg ? { filter: "drop-shadow(0 0 10px #61dafb" } : {filter: "grayscale(100%)"};
  return (
    <header className="app-header">
      <img src="logo512.png" alt="React logo" style={styleImg} />
      <h1 style={ styleH }>The React Quiz</h1>
    </header>
  );
}

export default Header;
