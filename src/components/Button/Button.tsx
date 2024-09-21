import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  backgroundcolor: string;
  width: string;
  height: string;
  borderradius: string;
  bordercolor?: string;
  fontcolor?: string;
  fontSize?: string;
  children: React.ReactNode;
  onButtonClick?: () => void;
  disabled?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  font-family: 'Pretendard SemiBold';
  background-color: ${(props) => (props.backgroundcolor ? props.backgroundcolor : '#FFFFFF')};
  width: ${(props) => (props.width ? props.width : '455px')};
  height: ${(props) => (props.height ? props.height : '66px')};
  border-radius: ${(props) => (props.borderradius ? props.borderradius : '10px')};
  color: ${(props) => (props.fontcolor ? props.fontcolor : '#000000')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '18px')};
  border: ${(props) => (props.bordercolor ? `1px solid ${props.bordercolor}` : '0')};
  cursor: pointer;
`;

/**
 * Button 컴포넌트
 * -backgroundcolor: '#000000' 과 같이 색상 코드 지정
 * -fontcolor: '#000000' 과 같이 색상 코드 지정
 * -borderColor: '#000000' 과 같이 색상 코드 지정
 * -width, height: '12px' 과 같이 크기 단위와 함께 지정
 * -borderradius: '12px' 과 같이 크기 단위와 함께 지정
 * -fontSize: '12px'과 같이 크기 단위와 함께 지정
 * -onButtonClick: 버튼 클릭시 일어날 이벤트 지정(화살표 함수 형태)
 * @author 조은서
 * @param props
 * @returns
 */
const Button = (props: ButtonProps) => {
  return (
    <StyledButton
      onClick={props.onButtonClick}
      backgroundcolor={props.backgroundcolor}
      width={props.width}
      height={props.height}
      borderradius={props.borderradius}
      bordercolor={props.bordercolor}
      fontcolor={props.fontcolor}
      fontSize={props.fontSize}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
