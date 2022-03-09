import { Button } from 'react-bootstrap';
import Layout from './Layout';
import logo from './logo.svg';
import { BrowserRouter as Browser } from 'react-router-dom';
import Paths from './Paths';

function App() {
  return (
    <Browser>
      <Layout>
        <Paths />
      </Layout>
    </Browser>
  );
}

export default App;
