// import "./App.css";
// import HomePage from "./components/homePage";

// function App() {

//   return (
//     <div className="App">
//       <HomePage />
//     </div>
//   );
// }
// export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DynamicForm from "./components/DynamicForm";
import VideoComponent from "./components/videoComponent";
import { Container, Col, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <DynamicForm />
          </Col>
          <Col>
            <VideoComponent />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;