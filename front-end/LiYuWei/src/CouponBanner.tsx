import "./CouponBanner.css";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useEffect, useState } from "react";

dayjs.extend(duration);

function CouponBanner() {
  const [dateH, setDateH] = useState<number>();
  const [dateM, setDateM] = useState<number>();
  const [dateS, setDateS] = useState<number>();
  useEffect(() => {
    setInterval(function () {
      const date1 = dayjs("2023-03-10");
      const date2 = dayjs();
      const dataG = dayjs.duration(date1.diff(date2))
      setDateH(dataG.get("hours"))
      setDateM(dataG.get("minutes"))
      setDateS(dataG.get("seconds"))
    }, 1000);
  }, []);

  return (
    <div className="app">
      <div className="appLeft">
        <span className="backLeftImg"></span>
        <div className="backLeftText">
          <div className="textTop">Enjoy now your favorite brands with</div>
          <div className="textDown">30% off</div>
        </div>
      </div>
      <div className="appRight">
        <div className="countDown">
          Ends in
          <span className="time">{dateH}</span>h
          <span className="time">{dateM}</span>m
          <span className="time">{dateS}</span>s
        </div>
        <div className="backRightImg">
          <div className="discount">
            <span className="discountTop">30%</span>
            <span className="discountDown">OFF</span>
          </div>
          <div className="pLeft">
            <div className="Welcome">Welcome Coupon</div>
            <div className="mar">
              <div className="textCon">Aplicable to all items </div>
              <div className="textCon">
                Min. order 10€. Valid for 30 days from now.
              </div>
            </div>
            <button className="btn">¡Lo quiero!</button>
          </div>
        </div>
        <div className="TC">T&C</div>
      </div>
    </div>
  );
}

export default CouponBanner;
