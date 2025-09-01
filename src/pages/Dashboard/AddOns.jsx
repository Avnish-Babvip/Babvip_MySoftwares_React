import { Container, Row, Col, Card } from "react-bootstrap";

const addons = [
  {
    title: "Bluehost India SEO Tools",
    desc: "Boost website search rankings with this complete SEO toolkit.",
    price: "₹389.00/mo",
  },
  {
    title: "Yoast SEO Premium",
    desc: "Let Yoast help you stand out in search engines and grow your site traffic.",
    price: "₹499.00/mo",
  },
  {
    title: "Microsoft 365",
    desc: "Productivity tools and professional email that matches your domain.",
    price: "₹249.00/mo",
  },
  {
    title: "Google Workspace",
    desc: "Improve productivity with Gmail, Chat, Drive, and additional Google apps on your domain.",
    price: "₹299.00/mo",
  },
  {
    title: "Constant Contact",
    desc: "Increase visitor engagement with advanced email marketing campaigns.",
    price: "FREE for the first 3 months",
  },
  {
    title: "Managed Services",
    desc: "Get advanced support on server setup, customization & monitoring by our expert technicians.",
    price: "₹5999.00/mo",
  },
  {
    title: "Jetpack",
    desc: "Essential security, performance, and growth tools to make your site best-in-class.",
    price: "₹379.00/mo",
  },
  {
    title: "SiteLock",
    desc: "Defend against cyber attacks with automated malware detection and removal.",
    price: "₹99.00/mo",
  },
  {
    title: "WPLive",
    desc: "Partner with WordPress experts for design, functionality, and troubleshooting needs.",
    price: "₹2799.00/mo",
  },
  {
    title: "SSL Certificates",
    desc: "Protect sensitive visitor data by encrypting communication to your website.",
    price: "₹149.00/mo",
  },
  {
    title: "Domain Privacy + Protection",
    desc: "Prevent marketing emails by hiding the contact information associated with your domain.",
    price: "₹37.42/mo",
  },
  {
    title: "Bluehost India CodeGuard",
    desc: "Protect website data with automated scheduled backups.",
    price: "₹199.00/mo",
  },
  {
    title: "Dedicated IP",
    desc: "Defend against shared IP blacklists with a personal dedicated IP.",
    price: "₹399.00/mo",
  },
  {
    title: "SpamExperts",
    desc: "Protect your inbox by automatically removing spam, virus, and phishing emails.",
    price: "₹199.00/mo",
  },
];

const AddOnsPage = () => {
  return (
    <Container className="my-5">
      <h2 className="mb-4">Add-ons</h2>
      <Row>
        {addons.map((item, idx) => (
          <Col key={idx} md={3} sm={6} className="mb-4">
            <Card className="h-100 shadow-sm d-flex">
              <Card.Body className="d-flex flex-column">
                <div>
                  <Card.Title className="text-center">{item.title}</Card.Title>
                  <Card.Text className="text-center">{item.desc}</Card.Text>
                </div>
                <div className="mt-auto d-flex flex-column align-items-center text-center">
                  <small className="text-muted mb-1">Starting at</small>
                  <p className="fw-bold text-primary mb-0">{item.price}</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AddOnsPage;
