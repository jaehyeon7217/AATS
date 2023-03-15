import Info from "../components/info/Info";
import Summary from "../components/summary/Summary";
import Calendar from "../components/calendar/Calendar";
// inport css style
import classes from "./MyInfo.module.css"

const MyInfo = () => {
  return (
    <div className={classes.myinfo}>
      <Info />
      <Summary />
      <Calendar />
    </div>
  );
};

export default MyInfo;