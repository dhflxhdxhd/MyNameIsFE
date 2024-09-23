import React, { useEffect, useRef, useState, Suspense, lazy } from 'react';
import styled from 'styled-components';
import { debounce } from 'lodash';

const MainHero = lazy(() => import('./MainHero'));
const MainStep = lazy(() => import('./MainStep'));
const MainCouple = lazy(() => import('./MainCouple'));
const MainReview = lazy(() => import('./MainReview'));
const MainStart = lazy(() => import('./MainStart'));

interface MainSectionProps {
  isOpenChat: boolean;
  setIsOpenChat: React.Dispatch<React.SetStateAction<boolean>>;
}

const StyledMainSectionContainer = styled.div`
  width: 100%;
  min-height: 70vh;
`;

const MainSection = ({ isOpenChat, setIsOpenChat }: MainSectionProps) => {
  const [showComponents, setShowComponents] = useState({
    step: false,
    couple: false,
    review: false,
    start: false,
  });

  const stepRef = useRef<HTMLDivElement>(null);
  const coupleRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);
  const startRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>, offsetPercent: number = -100) => {
    if (ref.current) {
      const offset = ref.current.offsetTop - (window.innerHeight * offsetPercent) / 100;
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = debounce(() => {
    const scrollY = window.scrollY + window.innerHeight;

    const stepOffset = stepRef.current?.offsetTop || 0;
    const coupleOffset = coupleRef.current?.offsetTop || 0;
    const reviewOffset = reviewRef.current?.offsetTop || 0;
    const startOffset = startRef.current?.offsetTop || 0;

    // console.log('Scroll Y:', scrollY);
    // console.log('Step Offset:', stepOffset);
    // console.log('Couple Offset:', coupleOffset);
    // console.log('Review Offset:', reviewOffset);
    // console.log('Start Offset:', startOffset);

    setShowComponents((prev) => ({
      step: prev.step || scrollY > stepOffset,
      couple: prev.couple || (prev.step && scrollY > coupleOffset),
      review: prev.review || (prev.couple && scrollY > reviewOffset),
      start: prev.start || (prev.review && scrollY > startOffset),
    }));
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledMainSectionContainer>
      <MainHero isOpenChat={isOpenChat} setIsOpenChat={setIsOpenChat} scrollToRef={() => scrollToRef(stepRef)} stepRef={stepRef} />
      <Suspense fallback={<div>Loading Step</div>}>{showComponents.step && <MainStep stepRef={stepRef} scrollToRef={() => scrollToRef(coupleRef)} coupleRef={coupleRef} />}</Suspense>
      <Suspense fallback={<div>Loading Couple</div>}>{showComponents.couple && <MainCouple coupleRef={coupleRef} scrollToRef={() => scrollToRef(reviewRef)} reviewRef={reviewRef} />}</Suspense>
      <Suspense fallback={<div>Loading Review</div>}>{showComponents.review && <MainReview />}</Suspense>
      <Suspense fallback={<div>Loading Start</div>}>{showComponents.start && <MainStart />}</Suspense>
    </StyledMainSectionContainer>
  );
};

export default MainSection;
