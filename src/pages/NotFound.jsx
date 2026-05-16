import { Link } from "react-router-dom";
import Container from "../components/layout/Container";

const NotFound = () => {
  return (
    <Container>
      <section
        style={{
          minHeight: "70vh",

          display: "flex",

          flexDirection: "column",

          justifyContent: "center",

          alignItems: "center",

          textAlign: "center",

          gap: "1rem",
        }}
      >
        <h1
          style={{
            fontSize: "5rem",
          }}
        >
          404
        </h1>

        <p>
          The page you are looking
          for does not exist.
        </p>

        <Link
          to="/"
          style={{
            padding:
              "0.9rem 1.4rem",

            background:
              "var(--color-primary)",

            color: "white",

            borderRadius:
              "10px",

            fontWeight: "600",
          }}
        >
          Back to Home
        </Link>
      </section>
    </Container>
  );
};

export default NotFound;