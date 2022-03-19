import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container className="text-center mt-4 h-100">
      <img
        className="w-75"
        src="https://cdn.yenicaggazetesi.com.tr/news/2022/03/150320221117469981053.jpeg"
        alt=""
      />

      <div className="mt-4">
        <Button variant="info" onClick={() => navigate("/")}>
          GO HOME
        </Button>
        <Button variant="warning" onClick={() => navigate(-1)}>
          GO BACK
        </Button>
      </div>
    </Container>
  );
};

export default NotFound;
