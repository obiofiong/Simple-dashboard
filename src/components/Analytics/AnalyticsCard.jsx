import "./AnalyticsCard.css";
import "../main/Main.css";
import colors from "../../utils/colors";
import {
  SOCIAL_MEDIA_ICON,
  extractIdentifierNames,
  extractPercentValues,
} from "../../utils/helpers";
// import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { useEffect, useRef } from "react";

function AnalyticsCard({ title, identifier, data }) {
  const chartRef = useRef(null);

  // Destroy the chart when the component unmounts
  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);
  return (
    <div className="analytics-card card">
      <div className="header">
        <p className="header-title">{title}</p>
        <a>View full reports</a>
      </div>
      <div className="body">
        <ul>
          {data?.map((item, i) => {
            return (
              <>
                <li>
                  {SOCIAL_MEDIA_ICON[item[identifier]] && (
                    <img
                      alt={`${item[identifier]}-${i}`}
                      src={SOCIAL_MEDIA_ICON[item[identifier]]}
                    />
                  )}
                  <p>{item[identifier]}</p>
                  <p className="percent">{item.percent}%</p>
                  <span
                    style={{
                      background: Object.values(colors)[i],
                    }}
                  ></span>
                </li>
              </>
            );
          })}
        </ul>
        <div className="graph">
          <Doughnut
            data={generateData(data, identifier)}
            options={{
              plugins: {
                title: {
                  display: false,
                  text: "",
                },
                legend: {
                  display: false,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default AnalyticsCard;

const generateData = (data, identifier) => {
  return {
    labels: extractIdentifierNames(data, identifier),
    datasets: [
      {
        label: "Countries",
        data: extractPercentValues(data),
        backgroundColor: Object.values(colors), //Use predefined color template,
        hoverOffset: 4,
      },
    ],
  };
};
