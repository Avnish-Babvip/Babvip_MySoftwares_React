import { useState } from "react";
import Chart from "react-apexcharts";
import { Dropdown } from "react-bootstrap";

const DonutChart = ({ leads, title, colors }) => {
  const options = {
    chart: { type: "donut" },
    legend: { show: false },
    dataLabels: { enabled: false },
    colors,
    tooltip: {
      y: {
        formatter: (value, { seriesIndex }) => {
          return seriesIndex === 0
            ? `${title}: ${value}`
            : `Total Leads: ${value}`;
        },
        title: {
          formatter: () => "",
        },
      },
    },
  };

  return (
    <div style={{ position: "relative", paddingRight: "25px" }}>
      <Chart options={options} series={leads} type="donut" width={100} />
    </div>
  );
};

const Card = ({ title, count, total, leads, colors }) => (
  <div className="col-12 col-md-6 col-xl-3 mb-4">
    <div className="card shadow-sm p-3">
      <h6 className="fw-medium">{title}</h6>
      <div className="d-flex align-items-center justify-content-between ">
        <h2 style={{ color: `${colors[0]}` }}>{count}</h2>
        <DonutChart leads={leads} title={title} colors={colors} />
      </div>
      <span className="badge bg-success mt-2">{total} All Leads Count</span>
    </div>
  </div>
);

const MarketItem = ({ rank, name, growth }) => (
  <div className="d-flex justify-content-between align-items-center mb-2">
    <div>
      <span className="badge bg-light text-dark me-2">{rank}</span>
      {name}
    </div>
    <span className={`badge ${growth >= 0 ? "bg-success" : "bg-danger"}`}>
      {growth >= 0 ? `+${growth}%` : `${growth}%`}
    </span>
  </div>
);

const Dashboard = () => {
  const leadStats = [
    {
      title: "New Leads",
      count: 8,
      leads: [8, 12],
      colors: ["#34c38f", "#0096FF"],
    },
    {
      title: "Progress Leads",
      count: 2,
      leads: [2, 12],
      colors: ["#fcbf49", "#0096FF"],
    },
    {
      title: "Pending Leads",
      count: 1,
      leads: [1, 12],
      colors: ["#ff6b35", "#0096FF"],
    },
    {
      title: "Rejected Leads",
      count: 0,
      leads: [0, 12],
      colors: ["#fa0505", "#0096FF"],
    },
  ];

  const markets = [
    { rank: 1, name: "Mobile Phones", growth: 5.4 },
    { rank: 2, name: "Smart Watch", growth: 6.8 },
    { rank: 3, name: "Protable Acoustics", growth: -4.9 },
    { rank: 4, name: "Smart Speakers", growth: 3.5 },
    { rank: 5, name: "Camcorders", growth: -0.3 },
  ];

  const salesByLocation = [
    { country: "USA", percent: 75 },
    { country: "Russia", percent: 55 },
    { country: "Australia", percent: 85 },
  ];

  const [sortBy, setSortBy] = useState("World");
  const [marketDuration, setMarketDuration] = useState("ALL");

  return (
    <>
      <div className="px-3 py-4">
        <h4 className="mb-4">Welcome to Dealer Panel</h4>

        <div className="row">
          {leadStats.map((lead, idx) => (
            <Card key={idx} {...lead} total={12} />
          ))}
        </div>

        <div className="row mt-4 ">
          <div className="col-12 col-md-6 col-lg-12 col-xl-6 ">
            <div className="card shadow-sm p-3">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-medium">Market Overview</h6>
                <div>
                  {["ALL", "1M", "6M", "1Y"].map((label) => (
                    <button
                      key={label}
                      onClick={() => setMarketDuration(label)}
                      className={`btn btn-sm mx-1 ${
                        marketDuration === label
                          ? "btn-primary text-white"
                          : "btn-light"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {markets.map((item) => (
                <MarketItem key={item.rank} {...item} />
              ))}
              <button className="btn btn-primary mt-3">See All Balances</button>
            </div>
          </div>
          <div className="w-100 d-md-none d-lg-block d-xl-none mb-5"></div>
          <div className="col-12 col-md-6 col-lg-12 col-xl-6 ">
            <div className="card p-4 shadow-sm border-0">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-medium">Sales by Locations</h6>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="link"
                    size="sm"
                    className="text-dark text-decoration-none w-50"
                  >
                    Sort By: {sortBy}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {["World", "USA", "Russia", "Australia"].map((loc) => (
                      <Dropdown.Item key={loc} onClick={() => setSortBy(loc)}>
                        {loc}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              {salesByLocation.map((loc, idx) => (
                <div key={idx} className="mb-3">
                  <div className="d-flex justify-content-between">
                    <span>{loc.country}</span>
                    <span>{loc.percent}%</span>
                  </div>
                  <div
                    className="progress bg-dark-subtle"
                    style={{ height: "6px" }}
                  >
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: `${loc.percent}%` }}
                      aria-valuenow={loc.percent}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row mt-5">
          {/* Customer List */}
          <div className="col-md-3">
            <div className="card p-3 shadow-sm">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-medium">Customer List</h6>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="link"
                    className="text-dark text-decoration-none w-50"
                    size="sm"
                  >
                    All Members
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Members</Dropdown.Item>
                    <Dropdown.Item>New Members</Dropdown.Item>
                    <Dropdown.Item>Old Members</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              {[
                { name: "Randy Matthews", email: "Randy@gmail.com" },
                { name: "Vernon Wood", email: "Vernon@gmail.com" },
                { name: "Howard Rhoades", email: "Howard@gmail.com" },
                { name: "Arthur Zurcher", email: "Arthur@gmail.com" },
                { name: "Angela Palmer", email: "Angela@gmail.com" },
                { name: "Dorothy Wimson", email: "Dorothy@gmail.com" },
              ].map((user, i) => (
                <div
                  key={i}
                  className="d-flex align-items-center justify-content-between py-2 border-bottom"
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={`https://i.pravatar.cc/40?img=${i + 10}`}
                      alt={user.name}
                      className="rounded-circle me-2"
                      width="40"
                      height="40"
                    />
                    <div>
                      <div className="fw-medium small">{user.name}</div>
                      <div className="text-muted small">{user.email}</div>
                    </div>
                  </div>
                  <span className="text-muted">⋮</span>
                </div>
              ))}
            </div>
          </div>

          {/* Selling Products */}
          <div className="col-md-5">
            <div className="card p-3 shadow-sm">
              <h6 className="fw-medium mb-3">Selling Products</h6>
              {[
                {
                  name: "Half sleeve T-shirt",
                  price: "$240.00",
                  stock: "Available",
                  sales: "145 Sales",
                  rating: 4,
                  color: "red",
                },
                {
                  name: "Light blue T-shirt",
                  price: "$650.00",
                  stock: "Out Of Stock",
                  sales: "260 Sales",
                  rating: 4,
                  color: "lightblue",
                },
                {
                  name: "Black Color T-shirt",
                  price: "$325.00",
                  stock: "Available",
                  sales: "220 Sales",
                  rating: 5,
                  color: "black",
                },
                {
                  name: "Hoodie (Blue)",
                  price: "$170.00",
                  stock: "Available",
                  sales: "165 Sales",
                  rating: 5,
                  color: "blue",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="d-flex justify-content-between align-items-center mb-3"
                >
                  <div className="d-flex align-items-center">
                    <div
                      className="rounded me-2"
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: item.color,
                      }}
                    />
                    <div>
                      <div className="fw-medium small">{item.name}</div>
                      <div className="text-muted small">{item.price}</div>
                    </div>
                  </div>
                  <div className="text-end small">
                    <div className="text-muted">{item.stock}</div>
                    <div className="text-muted">{item.sales}</div>
                    <div className="text-warning">
                      {"★".repeat(item.rating)}
                      {"☆".repeat(5 - item.rating)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Section */}
          <div className="col-md-4">
            <div className="card p-3 shadow-sm">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="fw-medium">Chat</h6>
              </div>
              <div className="border-top border-bottom py-2 mb-3">
                <div className="d-flex mb-2">
                  <img
                    src="https://i.pravatar.cc/30?img=11"
                    alt="user"
                    className="rounded-circle me-2"
                    width="40"
                    height="40"
                  />
                  <div className="bg-primary text-white px-2 py-1 rounded">
                    Good Morning
                  </div>
                </div>
                <div className="d-flex justify-content-end mb-2">
                  <div className="bg-light text-dark px-2 py-1 rounded">
                    Good morning
                  </div>
                  <img
                    src="https://i.pravatar.cc/30?img=17"
                    alt="user"
                    className="rounded-circle ms-2"
                    width="40"
                    height="40"
                  />
                </div>
                <div className="d-flex mb-2">
                  <img
                    src="https://i.pravatar.cc/30?img=11"
                    alt="user"
                    className="rounded-circle me-2"
                    width="40"
                    height="40"
                  />
                  <div className="bg-primary text-white px-2 py-1 rounded">
                    Hi there, How are you?
                  </div>
                </div>
                <div className="d-flex mb-2">
                  <img
                    src="https://i.pravatar.cc/30?img=11"
                    alt="user"
                    className="rounded-circle me-2"
                    width="40"
                    height="40"
                  />
                  <div className="bg-primary text-white px-2 py-1 rounded">
                    Waiting for your reply. I have to go back soon.
                  </div>
                </div>
              </div>
              <div className="input-group">
                <input className="form-control" placeholder="Type here..." />
                <button className="btn btn-primary">Send ➤</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
