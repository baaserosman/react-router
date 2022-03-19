import NotFound from "./NotFound";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

const InstructorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          setError(true);
          throw new Error("Error");
        }
        return res.json();
      })
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);

  if (error) {
    return <NotFound />;
  } else if (!user) {
    return (
      <div className="text-center">
        <h1>User data is fetching</h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Ajux_loader.gif/600px-Ajux_loader.gif"
          alt=""
        />
      </div>
    );
  }

  return (
    <Container className="text-center mt-4">
      {user && (
        <div>
          <img
            className="w-50"
            src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`}
            alt=""
          />
          <h6>{user.name}</h6>
          <h4>{user.email}</h4>
          <h4>{user.phone}</h4>
          <div>
            <Button variant="warning" onClick={() => navigate(-1)}>
              {" "}
              GO BACK
            </Button>

            <Button variant="success" onClick={() => navigate("/")}>
              {" "}
              GO HOME
            </Button>
          </div>
        </div>
      )}
    </Container>
  );
};

export default InstructorDetails;
