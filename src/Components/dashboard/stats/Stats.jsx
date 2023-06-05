import React from "react";
import Icons from "../icons/Icons";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import style from "./Stats.module.css";
const data = [
  { name: "Jan", uv: 4000 },
  { name: "Feb", uv: 3000 },
  { name: "Mar", uv: 2000 },
  { name: "Apr", uv: 2780 },
  { name: "May", uv: 1890 },
  { name: "Jun", uv: 2390 },
  { name: "Jul", uv: 3490 },
  { name: "Aug", uv: 2000 },
  { name: "Sep", uv: 2780 },
  { name: "Oct", uv: 1890 },
  { name: "Nov", uv: 2390 },
  { name: "Dec", uv: 3490 },
];
const Stats = ({ charts, height }) => {
  return (
    <div className="w-100 d-flex flex-column gap-3 align-items-center">
      <div
        style={{
          width: "100%",

          backgroundColor: "white",
          padding: "7px",
        }}
      >
        <div className="fw-bold text-center mb-2">Last Month Visit </div>
        <ResponsiveContainer aspect={2}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Stats;
/*
<div className={`p-4 ${style.mainContainer}`}>
        
      </div>
     <div style={{ height: "300px", width: "320px" }}>
          <ResponsiveContainer width="100%" aspect={2}>
            <AreaChart
              width={730}
              height={250}
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="gray" />
              <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="total"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#total)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
*/
