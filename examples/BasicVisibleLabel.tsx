import * as React from "react";
import { Range, getTrackBackground } from "../src/index";

const STEP = 0.1;
const MIN = 0;
const MAX = 100;

const BasicVisibleLabelExample: React.FC<{ rtl: boolean }> = ({ rtl }) => {
  const [values, setValues] = React.useState([50]);
  const rangeRef: any = React.useRef<Range>();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <label
        onClick={(e) => {
          rangeRef.current.thumbRefs[0].current.focus();
        }}
        id="unique_id"
        style={{
          flex: "auto",
          fontFamily: "sans-serif",
        }}
      >
        Visible accessibility label:
      </label>

      <Range
        labelledBy="unique_id"
        ref={rangeRef}
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={rtl}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#548BF4", "#ccc"],
                  min: MIN,
                  max: MAX,
                  rtl,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            key={props.key}
            style={{
              ...props.style,
              height: "42px",
              width: "42px",
              borderRadius: "4px",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
            }}
          >
            <div
              style={{
                height: "16px",
                width: "5px",
                backgroundColor: isDragged ? "#548BF4" : "#CCC",
              }}
            />
          </div>
        )}
      />
      <output style={{ marginTop: "30px" }} id="output">
        {values[0].toFixed(1)}
      </output>
    </div>
  );
};

export default BasicVisibleLabelExample;