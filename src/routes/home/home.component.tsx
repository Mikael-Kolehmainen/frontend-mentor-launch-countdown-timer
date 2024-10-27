import { useEffect, useState } from "react";
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
  const socials = [
    { icon: FaInstagram, link: "https://instagram.com" },
    { icon: FaTiktok, link: "https://tiktok.com" },
    { icon: FaLinkedin, link: "https://linkedin.com" },
  ];
  const [now, setNow] = useState(Date.now());
  const launchTimestamp = new Date("2024-11-08 17:00:00").getTime();
  const timeTilLaunch = launchTimestamp - now;
  const timeLeftToLaunch = [
    { label: "DAYS", time: new Date(timeTilLaunch).getDate() - 1 },
    { label: "HOURS", time: new Date(timeTilLaunch).getHours() },
    { label: "MINUTES", time: new Date(timeTilLaunch).getMinutes() },
    { label: "SECONDS", time: new Date(timeTilLaunch).getSeconds() },
  ];

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <HomeContainer>
      <TimerHeading>WE'RE LAUNCHING SOON</TimerHeading>
      <TimerContainer>
        {timeLeftToLaunch.map((timeLeft) => {
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
          return <Icon IconComponent={social.icon} link={social.link} target="_blank" width="25px" height="25px" />;
        })}
      </SocialsContainer>
    </HomeContainer>
  );
};

export default Home;
