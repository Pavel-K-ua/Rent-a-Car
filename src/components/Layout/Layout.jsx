import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  OutletWrapper,
  StyledContainer,
  StyledLi,
  StyledNavLink,
  StyledUl,
} from './Layout.styled';
import Loader from 'components/Loader/Loader';
import ScrollButton from 'components/ToTopButton/ScrollButton';

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
        <Suspense fallback={<Loader />}>
          <OutletWrapper>
            <Outlet />
          </OutletWrapper>
        </Suspense>
      </StyledContainer>
      <ScrollButton />
    </>
  );
};

export default Layout;
