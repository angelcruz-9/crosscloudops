import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


interface TimelineItem {
  title?: string;
  desc?: string;
  icon?: JSX.Element;
}

interface TimeLineProps {
  timeline: TimelineItem[];
}

const TimeLine: React.FC<TimeLineProps> = ({ timeline }) => {
  return (
    <VerticalTimeline layout="1-column">
      {timeline.map((t, i) => {
        const contentStyle = {
          background: "rgb(15 23 42)",
        };
        const arrowStyle =
          i === 0 ? { borderRight: "7px solid  rgb(33, 150, 243)" } : undefined;

        return (
          <VerticalTimelineElement
            key={i}
            className="vertical-timeline-element--work relative z-10"
            contentStyle={contentStyle}
            contentArrowStyle={arrowStyle}
            iconStyle={{
              background: "#2196f3",
              color: "#fff",
              textAlign: "center",
              fontSize: "30px",
              padding: "4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
            }}
            icon={t.icon}
            position={i % 2 === 0 ? "right" : "left"}
            style={{ width: "80%", maxWidth: "100%" }}
          >
            {t.title ? (
              <React.Fragment>
                <h3 className="text-xl text-white font-semibold text-center mb-2">{t.title}</h3>
                {t.desc && <p className="text-center text-zinc-400">{t.desc}</p>}
              </React.Fragment>
            ) : undefined}
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default TimeLine;
