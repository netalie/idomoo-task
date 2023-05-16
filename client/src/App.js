import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DynamicForm from "./components/DynamicForm";
import VideoComponent from "./components/videoComponent";
import { Container, Col, Row } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [checkStatusUrl, setCheckStatusUrl] = useState("");

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <DynamicForm setVideoUrl={setVideoUrl} setCheckStatusUrl={setCheckStatusUrl} />
          </Col>
          <Col>
            <VideoComponent videoUrl={videoUrl} checkStatusUrl={checkStatusUrl} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;