import { useState } from 'react';
import styled from 'styled-components';
import Icon from '../icon/Icon';
import { EtcDots, Vector, MicOn, MicOff, RoomOut, VideoOn, VideoOff } from '../../config/IconName';

interface VideoButtonProps {
  exitModalOpen: boolean;
  setExitModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const StyleVideoButtonContainer = styled.div<ButtonItemProps>`
  margin-top: 10px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

interface ButtonItemProps {
  backgroundcolor?: string;
  gap?: string;
}

const StylevideoButtonItem = styled.div<ButtonItemProps>`
  background-color: ${(props) => (props.backgroundcolor ? props.backgroundcolor : '#2E3038')};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 10px 20px;
`;

const VideoButton = (props: VideoButtonProps) => {
  const [isMicRunning, setIsMicRunning] = useState(false);
  const [isVideoRunning, setIsVideoRunning] = useState(false);

  const handleMicToggle = () => {
    setIsMicRunning((prev) => !prev);
  };

  const handleVideoToggle = () => {
    setIsVideoRunning((prev) => !prev);
  };

  return (
    <StyleVideoButtonContainer>
      <StylevideoButtonItem>
        <div onClick={handleMicToggle}>{isMicRunning ? <Icon src={MicOn} description='icon' width='20px' height='20px' /> : <Icon src={MicOff} description='icon' width='20px' height='20px' />}</div>
      </StylevideoButtonItem>

      <StylevideoButtonItem>
        <div onClick={handleVideoToggle}>{isVideoRunning ? <Icon src={VideoOn} description='icon' width='20px' height='20px' /> : <Icon src={VideoOff} description='icon' width='20px' height='20px' />}</div>
      </StylevideoButtonItem>

      <StylevideoButtonItem
        backgroundcolor='#FF4155'
        onClick={() => {
          props.setExitModalOpen(true);
        }}
      >
        <Icon src={RoomOut} description='icon' width='20px' height='20px' />
      </StylevideoButtonItem>
    </StyleVideoButtonContainer>
  );
};

export default VideoButton;
