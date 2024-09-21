import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo.webp';

const StyledLogoImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;

const Logo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/'); // 이동하고자 하는 경로로 변경
  };

  return (
    <>
      <StyledLogoImage src={logo} alt='logo' onClick={handleClick}></StyledLogoImage>
    </>
  );
};

export default Logo;
