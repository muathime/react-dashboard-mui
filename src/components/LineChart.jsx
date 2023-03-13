import { useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import React from "react";
import { tokens } from "../theme";

function LineChart() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const data = [
    {
      id: "japan",
      color: "hsl(275, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 256,
        },
        {
          x: "helicopter",
          y: 40,
        },
        {
          x: "boat",
          y: 64,
        },
        {
          x: "train",
          y: 187,
        },
        {
          x: "subway",
          y: 101,
        },
        {
          x: "bus",
          y: 264,
        },
        {
          x: "car",
          y: 99,
        },
        {
          x: "moto",
          y: 234,
        },
        {
          x: "bicycle",
          y: 137,
        },
        {
          x: "horse",
          y: 169,
        },
        {
          x: "skateboard",
          y: 100,
        },
        {
          x: "others",
          y: 279,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(309, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 192,
        },
        {
          x: "helicopter",
          y: 41,
        },
        {
          x: "boat",
          y: 137,
        },
        {
          x: "train",
          y: 103,
        },
        {
          x: "subway",
          y: 166,
        },
        {
          x: "bus",
          y: 275,
        },
        {
          x: "car",
          y: 218,
        },
        {
          x: "moto",
          y: 187,
        },
        {
          x: "bicycle",
          y: 297,
        },
        {
          x: "horse",
          y: 179,
        },
        {
          x: "skateboard",
          y: 263,
        },
        {
          x: "others",
          y: 259,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(151, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 85,
        },
        {
          x: "helicopter",
          y: 229,
        },
        {
          x: "boat",
          y: 134,
        },
        {
          x: "train",
          y: 1,
        },
        {
          x: "subway",
          y: 184,
        },
        {
          x: "bus",
          y: 43,
        },
        {
          x: "car",
          y: 209,
        },
        {
          x: "moto",
          y: 35,
        },
        {
          x: "bicycle",
          y: 261,
        },
        {
          x: "horse",
          y: 257,
        },
        {
          x: "skateboard",
          y: 19,
        },
        {
          x: "others",
          y: 280,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(189, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 144,
        },
        {
          x: "helicopter",
          y: 95,
        },
        {
          x: "boat",
          y: 173,
        },
        {
          x: "train",
          y: 177,
        },
        {
          x: "subway",
          y: 248,
        },
        {
          x: "bus",
          y: 245,
        },
        {
          x: "car",
          y: 210,
        },
        {
          x: "moto",
          y: 230,
        },
        {
          x: "bicycle",
          y: 56,
        },
        {
          x: "horse",
          y: 220,
        },
        {
          x: "skateboard",
          y: 108,
        },
        {
          x: "others",
          y: 127,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(89, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 173,
        },
        {
          x: "helicopter",
          y: 283,
        },
        {
          x: "boat",
          y: 79,
        },
        {
          x: "train",
          y: 92,
        },
        {
          x: "subway",
          y: 2,
        },
        {
          x: "bus",
          y: 1,
        },
        {
          x: "car",
          y: 8,
        },
        {
          x: "moto",
          y: 100,
        },
        {
          x: "bicycle",
          y: 62,
        },
        {
          x: "horse",
          y: 262,
        },
        {
          x: "skateboard",
          y: 206,
        },
        {
          x: "others",
          y: 181,
        },
      ],
    },
  ];

  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      colors={{ scheme: "dark2" }}
      pointSize={4}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
}

export default LineChart;
