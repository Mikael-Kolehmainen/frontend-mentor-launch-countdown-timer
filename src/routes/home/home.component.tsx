import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa6";
import Icon from "../../components/icon/icon.component";
import { getLaunchTimestamp, padToTwoDigits } from "../../utils";
import {
  BackgroundImage,
  ConfigurationContainer,
  ConfigurationIconContainer,
  HomeContainer,
  LaunchTimestampInput,
  LaunchTimestampLabel,
  SocialsContainer,
  Time,
  TimeCard,
  TimeCardContainer,
  TimeCardLower,
  TimeCardUpper,
  TimeContainer,
  TimeLabel,
  TimerContainer,
  TimerHeading,
} from "./home.styles";
import { FaCog } from "react-icons/fa";
import { saveLaunchTimestamp } from "../../store/configuration/configurationSlice";

const Home = () => {
  const socials = [
    { icon: FaInstagram, link: "https://instagram.com" },
    { icon: FaTiktok, link: "https://tiktok.com" },
    { icon: FaLinkedin, link: "https://linkedin.com" },
  ];
  const dispatch = useDispatch();
  const [now, setNow] = useState(new Date().getTime());
  const [showConfigurations, setShowConfigurations] = useState<boolean>(false);
  const launchTimestamp = getLaunchTimestamp(now);
  const timeTilLaunch = launchTimestamp - now;
  const timeLeftToLaunch = [
    { label: "DAYS", time: Math.round(new Date(timeTilLaunch) / (24 * 60 * 60 * 1000) /* ONE DAY */) },
    { label: "HOURS", time: new Date(timeTilLaunch).getUTCHours() },
    { label: "MINUTES", time: new Date(timeTilLaunch).getUTCMinutes() },
    { label: "SECONDS", time: new Date(timeTilLaunch).getUTCSeconds() },
  ];

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleChangeLaunchDatetime = (datetime: string) => {
    const launchTimestamp = new Date(datetime).getTime();
    dispatch(saveLaunchTimestamp(launchTimestamp));
  };

  return (
    <HomeContainer>
      <TimerHeading>WE'RE LAUNCHING SOON</TimerHeading>
      <TimerContainer>
        {timeLeftToLaunch.map((timeLeft, i) => {
          return (
            <TimeContainer key={i}>
              <TimeCardContainer>
                <TimeCard>
                  <TimeCardUpper></TimeCardUpper>
                  <TimeCardLower></TimeCardLower>
                </TimeCard>
                <Time>{padToTwoDigits(timeLeft.time)}</Time>
              </TimeCardContainer>
              <TimeLabel>{timeLeft.label}</TimeLabel>
            </TimeContainer>
          );
        })}
      </TimerContainer>
      <SocialsContainer>
        {socials.map((social, i) => {
          return (
            <Icon IconComponent={social.icon} link={social.link} target="_blank" width="25px" height="25px" key={i} />
          );
        })}
      </SocialsContainer>
      <BackgroundImage src="/bg-stars.svg" alt="Background stars" />
      {showConfigurations && (
        <ConfigurationContainer>
          <LaunchTimestampLabel>Choose launch datetime</LaunchTimestampLabel>
          <LaunchTimestampInput
            type="datetime-local"
            onChange={(event) => handleChangeLaunchDatetime(event.target.value)}
          />
        </ConfigurationContainer>
      )}
      <ConfigurationIconContainer>
        <Icon IconComponent={FaCog} width="15px" height="15px" onClick={() => setShowConfigurations((prev) => !prev)} />
      </ConfigurationIconContainer>
    </HomeContainer>
  );
};

export default Home;
