import React from "react";
import { useRouter } from "next/router";
import {
  StyledHeader,
  LogoContainer,
  LogoImage,
  CompanyName,
  DesktopNav,
  NavLink,
  LoginButton,
  MobileMenuButton,
} from "../../styles/user/Header.styles";

const Header: React.FC = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  const goTo = (path: string) => {
    router.push(path);
  };

  return (
    <StyledHeader>
      <LogoContainer>
        <LogoImage
          src="logo.jpeg"
          alt="Samrudh Bhoomi Logo"
          style={{ cursor: "pointer" }}
          onClick={() => goTo("/")}
        />
        <CompanyName
          variant="h6"
          onClick={() => goTo("/")}
          style={{ cursor: "pointer" }}
        >
          Samrudh Bhoomi
        </CompanyName>
      </LogoContainer>

      <DesktopNav>
        <NavLink active={router.pathname === "/"} onClick={() => goTo("/")}>
          Home
        </NavLink>
        <NavLink
          active={router.pathname === "/about"}
          onClick={() => goTo("/about")}
        >
          About Us
        </NavLink>
        <NavLink
          active={router.pathname === "/products"}
          onClick={() => goTo("/products")}
        >
          Products
        </NavLink>
        <NavLink
          active={router.pathname === "/blogs"}
          onClick={() => goTo("/blogs")}
        >
          Blogs
        </NavLink>
        <NavLink
          active={router.pathname === "/contact"}
          onClick={() => goTo("/contact")}
        >
          Contact Us
        </NavLink>
      </DesktopNav>

      <LoginButton variant="contained" onClick={handleLogin}>
        Login
      </LoginButton>

      {/* <MobileMenuButton>
        <span className="material-symbols-outlined">menu</span>
      </MobileMenuButton> */}
    </StyledHeader>
  );
};

export default Header;
