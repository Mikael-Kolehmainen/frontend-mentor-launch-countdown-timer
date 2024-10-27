import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa6";
import Icon from "../../components/icon/icon.component";
import { padToTwoDigits } from "../../utils";
import {
  HomeContainer,
  SocialsContainer,
  Time,
  TimeCard,
  TimeContainer,
  TimeLabel,
  TimerContainer,
  TimerHeading,
} from "./home.styles";

const Home = () => {
  const socials = [{ icon: FaInstagram }, { icon: FaTiktok }, { icon: FaLinkedin }];
  const timeLeftTEMP = [
    { label: "DAYS", time: 8 },
    { label: "HOURS", time: 23 },
    { label: "MINUTES", time: 55 },
    { label: "SECONDS", time: 41 },
  ];

  return (
    <HomeContainer>
      <TimerHeading>WE'RE LAUNCHING SOON</TimerHeading>
      <TimerContainer>
        {timeLeftTEMP.map((timeLeft) => {
          return (
            <TimeContainer>
              <TimeCard>
                <Time>{padToTwoDigits(timeLeft.time)}</Time>
              </TimeCard>
              <TimeLabel>{timeLeft.label}</TimeLabel>
            </TimeContainer>
          );
        })}
      </TimerContainer>
      <SocialsContainer>
        {socials.map((social) => {
          return <Icon IconComponent={social.icon} width="25px" height="25px" />;
        })}
      </SocialsContainer>
    </HomeContainer>
  );
};

export default Home;
