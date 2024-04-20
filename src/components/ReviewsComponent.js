import { useMemo } from "react";
import "./ReviewsComponent.css";

const ReviewsComponent = ({
  consultedForSkinCare,
  mightBeBitEarlyToConfirmB,
  propPadding,
  propPadding1,
  propWidth,
  propDisplay,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv2Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const consultedForSkinStyle = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
    };
  }, [propWidth, propDisplay]);

  return (
    <div className="frame-wrapper26" style={frameDiv1Style}>
      <div className="frame-parent42" style={frameDiv2Style}>
        <div className="frame-parent43">
          <div className="frame-parent44">
            <div className="frame-parent45">
              <img
                className="frame-child23"
                loading="lazy"
                alt=""
                src="/frame-2608514@2x.png"
              />
              <div className="alicent-hightower-parent">
                <div className="alicent-hightower">Alicent Hightower</div>
                <div
                  className="consulted-for-skin"
                  style={consultedForSkinStyle}
                >
                  {consultedForSkinCare}
                </div>
              </div>
            </div>
            <div className="icon-parent">
              <img className="icon" loading="lazy" alt="" src="/icon.svg" />
              <img className="icon1" loading="lazy" alt="" src="/icon.svg" />
              <img className="icon2" loading="lazy" alt="" src="/icon-2.svg" />
              <img className="icon3" loading="lazy" alt="" src="/icon-2.svg" />
              <img className="icon4" alt="" src="/icon-2.svg" />
            </div>
          </div>
          <div className="january-2023-wrapper">
            <div className="january-2023">20 January 2023</div>
          </div>
        </div>
        <div className="might-be-bit">{mightBeBitEarlyToConfirmB}</div>
      </div>
    </div>
  );
};

export default ReviewsComponent;
