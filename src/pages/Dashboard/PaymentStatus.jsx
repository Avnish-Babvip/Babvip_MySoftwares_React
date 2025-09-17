import { Container, Card, Button } from "react-bootstrap";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function PaymentStatus() {
  const navigate = useNavigate();

  return (
    <Container className="d-flex justify-content-center align-items-center my-10">
      <Card
        className="text-center shadow-lg p-4 border-0"
        style={{ maxWidth: "500px" }}
      >
        <div className="d-flex justify-content-center align-items-center ">
          {" "}
          <FaRegCircleCheck size={70} className="text-success mb-3" />
        </div>

        <h3 className="fw-bold">Payment Successful!</h3>
        <p className="text-muted mb-4">
          Thank you for your purchase. Your payment has been processed
          successfully.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Button variant="success" onClick={() => navigate("/")}>
            Go to Home
          </Button>
          {/* <Button variant="outline-primary" onClick={() => navigate("/orders")}>
            View Orders
          </Button> */}
        </div>
      </Card>
    </Container>
  );
}
