import linkedInIcon from "../assets/social-media-icon/linkedin.svg";
import facebookIcon from "../assets/social-media-icon/facebook.svg";
import instagramIcon from "../assets/social-media-icon/instagram.svg";
import twitterIcon from "../assets/social-media-icon/twitter.svg";

export const extractIdentifierNames = (data, identifier) => {
  var labels = data.map((location) => {
    return location[identifier];
  });
  return labels;
};

export const extractPercentValues = (data) => {
  var percentValues = data.map((location) => {
    return location.percent;
  });
  return percentValues;
};

export const formatDateLabels = ({ views }) => {
  const options = { day: "numeric", month: "short" };

  const formattedLabels = Object.keys(views).map((dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  });

  return formattedLabels;
};

export const SOCIAL_MEDIA_ICON = {
  linkedin: linkedInIcon,
  facebook: facebookIcon,
  instagram: instagramIcon,
  twitter: twitterIcon,
};

export const dummyData = {
  graph_data: {
    views: {
      "2022-07-31": 1,
      "2022-08-01": 3,
      "2022-08-02": 3,
      "2022-08-03": 7,
      "2022-08-04": 8,
      "2022-08-05": 5,
      "2022-08-06": 20,
      "2022-08-07": 50,
      "2022-08-08": 100,
      "2022-08-09": 2,
    },
  },
  top_locations: [
    {
      country: "Nigeria",
      count: 68,
      percent: 34,
    },
    {
      country: "Germany",
      count: 37,
      percent: 19,
    },
    {
      country: "Ghana",
      count: 50,
      percent: 25,
    },
    {
      country: "Finland",
      count: 40,
      percent: 20,
    },
    {
      country: "United Kingdom",
      count: 4,
      percent: 2,
    },
  ],
  top_sources: [
    {
      source: "google",
      count: 50,
      percent: 25,
    },
    {
      source: "instagram",
      count: 68,
      percent: 34,
    },
    {
      source: "facebook",
      count: 40,
      percent: 20,
    },
    {
      source: "linkedin",
      count: 41,
      percent: 21,
    },
  ],
};
