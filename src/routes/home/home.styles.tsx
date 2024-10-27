import { styled } from "styled-components";

export const HomeContainer = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const TimerHeading = styled.h1`
  color: ${(props) => props.theme.primaryFontColor};
  letter-spacing: 8px;
  font-size: 18px;
  text-align: center;
  width: 80%;
  max-width: 330px;
  margin: auto;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TimerContainer = styled.article`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TimeContainer = styled.div`
  width: 17.5%;
  max-width: 72px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const TimeCardContainer = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  position: relative;
`;

export const TimeCard = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 6px 3px ${(props) => props.theme.shadowColor};
`;

export const TimeCardUpper = styled.div`
  height: 35px;
  width: 100%;
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 4px;
`;

export const TimeCardLower = styled.div`
  height: 35px;
  width: 100%;
  background-color: ${(props) => props.theme.secondaryColor};
  border-radius: 4px;
`;

export const Time = styled.label`
  color: ${(props) => props.theme.primaryColor};
  font-size: 38px;
  text-align: center;
  letter-spacing: 1px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TimeLabel = styled.label`
  display: block;
  color: ${(props) => props.theme.iconColor};
  letter-spacing: 2px;
  font-size: 8px;
  text-align: center;
`;

export const SocialsContainer = styled.div`
  background: url(/pattern-hills.svg) no-repeat center / cover;
  width: 100%;
  height: 20%;
  position: absolute;
  bottom: 0;
  display: flex;
  gap: 25px;
  justify-content: center;
  align-items: center;
`;

export const BackgroundImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
