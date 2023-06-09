import { useNavigate } from "react-router-dom";
// redux
import { useSelector } from "react-redux";
// third-party
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import CameraOutdoorIcon from "@mui/icons-material/CameraOutdoor";
// css style
import classes from "./Welcome.module.css";

const Welcome = () => {
  const navigate = useNavigate();

  const id = useSelector((state) => state.auth.id);

  const toSearch = () => {
    navigate("/admin/search");
  };
  const toRegist = () => {
    navigate("/regist");
  };
  const cctvUrl = "https://j8d102.p.ssafy.io/ai";
  const toCCTV = () => {
    window.open(cctvUrl);
  };
  return (
    <div className={classes.welcome}>
      <div className={classes.textBox}>
        <p className={classes.text1}>Welcome,</p>
        <p className={classes.text2}>{id} Manager</p>
        <p className={classes.text3}>수행할 작업을 선택해주세요</p>
        <div className={classes.vLine}></div>
      </div>
      <div className={classes.bottomBox}>
        <div className={classes.chooseBox1} onClick={toSearch}>
          <div className={classes.chooseText1}>
            <PersonSearchIcon sx={{ fontSize: 80 }} />
            <p className={classes.chooseTextP1}>SEARCH</p>
            <p className={classes.chooseTextP2}>회원/근무자 선택</p>
          </div>
        </div>
        <div className={classes.chooseBox2} onClick={toRegist}>
          <div className={classes.chooseText1}>
            <HowToRegIcon sx={{ fontSize: 80 }} />
            <p className={classes.chooseTextP1}>REGIST</p>
            <p className={classes.chooseTextP2}>회원/근무자 등록</p>
          </div>
        </div>
        <div className={classes.chooseBox3} onClick={toCCTV}>
          <div className={classes.chooseText1}>
            <CameraOutdoorIcon sx={{ fontSize: 80 }} />
            <p className={classes.chooseTextP1}>CCTV</p>
            <p className={classes.chooseTextP2}>회원/근무자 CCTV</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
