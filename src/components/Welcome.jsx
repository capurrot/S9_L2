import { Alert } from "react-bootstrap";

const Welcome = () => {
  return (
    <div className="container mt-4 text-center">
      <Alert variant="success">Benvenuto sul nostro sito</Alert>
      <h2>Scegli il tuo oggetto preferito</h2>
    </div>
  );
};
export default Welcome;
