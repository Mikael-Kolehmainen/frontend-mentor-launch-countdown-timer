import { useSelector } from "react-redux";
import State from "./interfaces/State";

export const getLaunchTimestamp = (now: number) => {
  const launchTimestamp = useSelector((state: State) => state.configuration.launchTimestamp);

  if (!launchTimestamp || launchTimestamp < now) {
    return now;
  }

  return launchTimestamp;
};

export const padToTwoDigits = (num: number): string => {
  return num.toString().padStart(2, '0');
};
