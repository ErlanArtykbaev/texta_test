import React, { useState } from 'react';
import { useRouter } from 'next/router';


const Header = (): JSX.Element => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const router = useRouter();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleChangeRoute = (url: string) => {
    handleCloseNavMenu();
    router.push(url);
  };

  return (
    <div>
      layout
    </div>
  );
};

export default Header;
