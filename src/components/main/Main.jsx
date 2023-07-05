import { Line } from "react-chartjs-2";
import { dummyData, formatDateLabels } from "../../utils/helpers";
import AnalyticsCard from "../Analytics/AnalyticsCard";
import "./Main.css";
import useFetchData from "../../utils/hooks/useFetchData";
import { BASE_API } from "../../utils/api";
import Loader from "../Loader/Loader";

function Main() {
  const { data, isLoading, error } = useFetchData(BASE_API);

  return (
    <div className="main">
      <div className="top">
        <h2>Dashboard</h2>
      </div>
      <div className="bottom">
        <div className="header">
          <div>
            <h2 className="header-text">Good morning, Blessing ⛅️</h2>
            <p className="header-sub-text">Check out your dashboard summary.</p>
          </div>
          <a>View analytics</a>
        </div>

        {/* Body */}
        <div className="wrapper">
          <div className="category">
            {categories.map((category, i) => {
              return (
                <div
                  key={i}
                  className={`category-item ${
                    category.label === "All time" ? "active" : ""
                  }`}
                >
                  {category.label}
                </div>
              );
            })}
          </div>
        </div>

        {/* Page Views */}
        <div className="page-view-section  card">
          <div className="page-view-header">
            <h3 className="">Page Views</h3>
            <span>i</span>
          </div>
          <p>All time</p>

          <p className="main-text">500</p>

          {isLoading ? (
            <Loader />
          ) : (
            <Line
              data={generateData(data?.graph_data)}
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
          )}
        </div>
        {/* Other analytics */}

        <div className="other-analytics">
          {isLoading ? (
            <Loader />
          ) : error ? (
            <p>An error occurred while loading data</p>
          ) : (
            <>
              <AnalyticsCard
                title="Top Locations"
                identifier="country"
                data={data.top_locations}
              />
              <AnalyticsCard
                title="Top Referral source"
                identifier="source"
                data={data.top_sources}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;

const categories = [
  {
    label: "1 day",
  },
  {
    label: "3 days",
  },
  {
    label: "7 days",
  },
  {
    label: "30 days",
  },
  {
    label: "All time",
  },
  {
    label: "Custom Date",
  },
];

const generateData = (data) => {
  return {
    labels: [0, ...formatDateLabels(data)],
    datasets: [
      {
        backgroundColor: "#ffefe8",
        borderColor: "#FF5403",
        data: [0, ...Object.values(data.views)],
        fill: true,
      },
    ],
  };
};
