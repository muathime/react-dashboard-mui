import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import React from "react";
import { tokens } from "../theme";

function BarChart() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const data = [
    {
      country: "Kenya",
      "hot dog": 34,
      burger: 56,
      sandwich: 98,
    },
    {
      country: "Uganda",
      "hot dog": 68,
      burger: 120,
      sandwich: 33,
    },
    {
      country: "Ethiopia",
      "hot dog": 165,
      burger: 99,
      sandwich: 45,
    },
    {
      country: "Malawi",
      "hot dog": 178,
      burger: 93,
      sandwich: 88,
    },
  ];

  return (
    <ResponsiveBar
      data={data}
      keys={["hot dog", "burger", "sandwich"]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      minValue={0}
      groupMode="grouped"
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "red_yellow_green" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "fries",
          },
          id: "dots",
        },
        {
          match: {
            id: "sandwich",
          },
          id: "lines",
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "country",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "food",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableGridX={true}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          itemTextColor: colors.greenAccent[300],
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Fast Food Consumption by Country"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }}
    />
  );
}

export default BarChart;
