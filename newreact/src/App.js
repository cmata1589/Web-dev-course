import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

import HomeNavbar from './components/Homenavbar.js';
import HomeCarousel from './components/Carousel.js';
import Cardcomp from './components/Cardcomp.js';

const items1 =   {
    img: 'https://i.vimeocdn.com/video/703876203_1280x720.jpg',
    title: 'Slide 1',
    subtitle: 'Slide 1'
  };

  const items2 ={
    img: 'https://llandscapes-10674.kxcdn.com/wp-content/uploads/2019/07/lighting.jpg',
    title: 'Slide 2',
    subtitle: 'Slide 2'
  };
  const items3 ={
    img: 'https://i.redd.it/tk46u5nrkxm21.png',
    title: 'Slide 3',
    subtitle: 'Slide 3'
  };


function App() {
  return (
    // <Container className="themed-container" fluid="sm">
      <div className="App">
        <HomeNavbar />
        <HomeCarousel />
        <Row>
          <Col><Cardcomp img='https://i.vimeocdn.com/video/703876203_1280x720.jpg'/></Col>
          <Col><Cardcomp item={items1} /></Col>
          <Col><Cardcomp title="somos 3"/></Col>

        </Row>

      </div>
    // </container>
  );
}

export default App;
