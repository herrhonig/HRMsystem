import "./styles.css";
import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area
} from "recharts";

const data = [
  {
    name: "10:23PM",
    uv: 590,
    amt: 1400,
    cnt: 490
  },
  {
    name: "10:40PM",
    uv: 868,
    amt: 1506,
    cnt: 590
  },
  {
    name: "11:15PM",
    uv: 1397,
    amt: 989,
    cnt: 350
  },
  {
    name: "11:40PM",
    uv: 1480,
    amt: 1228,
    cnt: 480
  },
  {
    name: "13:00PM",
    uv: 1520,
    amt: 1100,
    cnt: 460
  },
  {
    name: "14:20PM",
    uv: 1400,
    amt: 1700,
    cnt: 380
  }
];

export default function Charts() {
  return (
    <ComposedChart
      width={730}
      height={250}
      data={data}
      margin={{
        top: 20,
        right: 80,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis
        dataKey="name"
        label={{  position: "insideBottomRight", offset: 0 }}
        scale="band"
      />
      <YAxis label={{  angle: -90, position: "insideLeft" }} />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="amt" stroke="#8884d8" />
      <Bar dataKey="pv" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="uv" stroke="#ff7300" />
    </ComposedChart>
  );
}
