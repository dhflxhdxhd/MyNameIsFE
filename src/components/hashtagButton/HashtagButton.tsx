import React from 'react';
import styled from 'styled-components';

interface HashtagButtonProps {
  backgroundcolor?: string;
  children: React.ReactNode;
  fontSize?: string;
  padding?: string;
}

const HashtagBox = styled.div<HashtagButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 40px;
  padding: ${(props) => (props.padding ? props.padding : '10px')};
  background-color: pink;
  color: white;
  font-family: 'Pretendard SemiBold';
  background-color: ${(props) => (props.backgroundcolor ? props.backgroundcolor : 'rgba(50, 50, 50, 0.8)')};
  font-size: ${(props) => props.fontSize};
`;

const HashtagButton = (props: HashtagButtonProps) => {
  return (
    <HashtagBox backgroundcolor={props.backgroundcolor} fontSize={props.fontSize} padding={props.padding}>
      {props.children}
    </HashtagBox>
  );
};

export default HashtagButton;
