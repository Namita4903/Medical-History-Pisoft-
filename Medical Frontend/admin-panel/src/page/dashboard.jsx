import React from "react";
import { Card, Statistic, Row, Col, Table } from "antd";
import {
  UserOutlined,
  UsergroupAddOutlined,
  FileDoneOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const userStats = [
  { name: " Patients", value: 400 },
  { name: "Doctors", value: 120 },
];

const monthlyRegistrations = [
  { month: "Jan", users: 30 },
  { month: "Feb", users: 50 },
  { month: "Mar", users: 80 },
  { month: "Apr", users: 65 },
  { month: "May", users: 90 },
];

const recentUsers = [
  { key: "1", name: "Namita Mahajan", email: "namita@example.com", role: "User" },
  { key: "2", name: "Dr. Rakesh Kumar", email: "rakesh@hospital.com", role: "Doctor" },
  { key: "3", name: "Mantan Sharma", email: "mantan@domain.com", role: "User" },
];

const columns = [
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Email", dataIndex: "email", key: "email" },
  { title: "Role", dataIndex: "role", key: "role" },
];

const Dashboard = () => {
  return (
    <div>
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <Statistic
              title="Total Patients"
              value={400}
              prefix={<UserOutlined />}
              valueStyle={{ color: "#3f8600" }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Total Doctors"
              value={120}
              prefix={<UsergroupAddOutlined />}
              valueStyle={{ color: "#005f73" }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Appointments"
              value={240}
              prefix={<ScheduleOutlined />}
              valueStyle={{ color: "#8338ec" }}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Reports"
              value={78}
              prefix={<FileDoneOutlined />}
              valueStyle={{ color: "#ff006e" }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col span={12}>
          <Card title="User Distribution">
            <PieChart width={350} height={300}>
              <Pie
                data={userStats}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} (${(percent * 100).toFixed(0)}%)`
                }
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {userStats.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </Card>
        </Col>

        <Col span={12}>
          <Card title="Monthly Registrations">
            <BarChart width={400} height={300} data={monthlyRegistrations}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="users" fill="#00b4d8" />
            </BarChart>
          </Card>
        </Col>
      </Row>

      <Card title="Recent Users" style={{ marginTop: 24 }}>
        <Table dataSource={recentUsers} columns={columns} pagination={false} />
      </Card>
    </div>
  );
};

export default Dashboard;
