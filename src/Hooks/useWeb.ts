import { useEffect, useState } from "react";

const useWeb = () => {
  const [isWeb, setIsWeb] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1000px");

    const handleChange = () => {
      setIsWeb(mediaQuery.matches);
    };

    handleChange();
    mediaQuery.addListener(handleChange);

    return () => {
      mediaQuery.removeListener(handleChange);
    };
  }, []);

  return isWeb;
};

export default useWeb;
