import React, { Suspense } from 'react';
import {  Outlet } from 'react-router-dom';
import {
  OutletWrapper,
  StyledContainer,
  StyledLi,
  StyledNavLink,
  StyledUl,
} from './Layout.styled';

const Layout = () => {
  return (
    <>
      <StyledContainer>
        <nav>
          <StyledUl>
            <StyledLi>
              <StyledNavLink to="/">Home</StyledNavLink>
            </StyledLi>
            <StyledLi>
              <StyledNavLink to="/catalog">Catalog</StyledNavLink>
            </StyledLi>
            <StyledLi>
              <StyledNavLink to="/favorites">Favorites</StyledNavLink>
            </StyledLi>
          </StyledUl>
        </nav>
        <Suspense fallback={<h2>Loading...</h2>}>
          <OutletWrapper>
            <Outlet />
          </OutletWrapper>
        </Suspense>
      </StyledContainer>
    </>
  );
};

export default Layout;
