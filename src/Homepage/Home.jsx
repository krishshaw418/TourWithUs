import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Home.css";

const Home = ()=>{
    return (
      <div>
    <header className='parent'> {/*Header*/}
    <Navbar expand="lg" className="bg-body-tertiary shadow navigator p-0">
      <Container>
        <Navbar.Brand href="/"><h2>TourWithUs</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link className='textstyle' href="/user/SignUp">SignUp</Nav.Link>
            <Nav.Link className='textstyle' href="/holidayPackages">HolidayPackages</Nav.Link>
            <NavDropdown title={<span style={{color: 'aliceblue'}}>Book Transport</span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><h6>Flight</h6></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"><h6>Train</h6></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><h6>Bus</h6></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"><h6>Cancel Booking</h6></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    <section className='container-fluid mt-2 pt-2'> {/*Collage & Intro*/}
      <div className='container'>
        <div className='row mt-4 pt-4 d-flex gap-0'>
          <div className='col-lg-6 collage mt-4'>
            <img src="../src/assets/MixCollage-15-Oct-2024-09-35-AM-8957.png" alt="error" />
          </div>
          <div className='col-lg-6 message'>
            <div>
              <h1>Love to Explore?</h1>
              <p><span>Welcome to Your Next Adventure!</span></p>
              <p>We're thrilled to guide you on unforgettable journeys across the world. Whether you seek relaxation, exploration, or adventure, we have something special waiting for you. Let's create memories together!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section> {/*1st para*/}
      <div className='container-fluid'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 m-4 p-2 content message centralize'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi mollitia consequatur nisi. Ea totam esse, quasi accusantium quis placeat rerum dolorem sunt? Veniam maiores esse iure excepturi consectetur magni consequatur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, animi blanditiis deserunt id praesentium numquam quod ipsum ullam deleniti eius quidem fugit voluptatibus consequatur nesciunt itaque! Voluptatum, iure dolores quo numquam repellendus, harum esse maiores cupiditate voluptatibus dolorum quis, aliquam accusantium impedit distinctio minima totam libero deleniti. Commodi, natus unde!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section> {/*Cards for different options*/}
      <div className='container-fluid m-0 p-0'>
        <div className='container mb-4'>
          <div className='row row-cols-sm-2'>
            <div className='col-lg-3'>
            <a href="#hotels">
            <div className="card cardstyle">
              <img src="..\src\assets\hotels (1).jpg" className="card-img-top" alt=""/>
                <div className="card-body">
                  <p className="card-text message">Luxury Hotels</p>
                </div>
              </div>
            </a>
            </div>
            <div className='col-lg-3'>
              <a href="#cuisines">
              <div className="card cardstyle">
              <img src="..\src\assets\cuisines (2).jpeg" className="card-img-top" alt=""/>
                <div className="card-body">
                  <p className="card-text message">Cuisines</p>
                </div>
              </div>
              </a>
            </div>
            <div className='col-lg-3'>
            <a href="#clubs">
            <div className="card cardstyle">
              <img src="../src/assets/pexels-edotommo99-2034851 (2).jpg" className="card-img-top" alt=""/>
                <div className="card-body">
                  <p className="card-text message">Exclusive Clubs</p>
                </div>
              </div>
            </a>
            </div>
            <div className='col-lg-3'>
            <a href="#resorts">
            <div className="card cardstyle">
              <img src="../src/assets/hotels.jpeg" className="card-img-top" alt=""/>
                <div className="card-body">
                  <p className="card-text message">Premium Resorts</p>
                </div>
              </div>
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='fluid-container'> {/*Heading for Carousel*/}
      <div className='container'>
        <div className='row'>
          <div className='col-12 d-flex justify-content-center interstyle'>
            <h1>Tour Gallery</h1>
          </div>
        </div>
      </div>
    </section>
    <section className='fluid-container p-3 mb-3'> {/*Carousel*/}
      <div className='container'>
      <div className='row'>
        <div className='col-md-8 offset-md-2'>
        <Carousel>
            <Carousel.Item className='sizing'>
                <ExampleCarouselImage
                    src="https://i0.wp.com/triparambh.com/wp-content/uploads/2019/06/BB.jpg?w=640&ssl=1"
                    alt="First Slide"
                    caption="Glowing Beach In Goa"
                />
            </Carousel.Item>
            <Carousel.Item className='sizing'>
                <ExampleCarouselImage
                    src="https://www.honeymoonpackagesmanali.org/uploads/8/2/6/1/8261259/p179.png"
                    alt="Second Slide"
                    caption="Solang Valley, Manali"
                />
            </Carousel.Item>
            <Carousel.Item className='sizing'>
                <ExampleCarouselImage
                    src="https://cdn.pixabay.com/photo/2017/05/10/13/39/ladakh-2300904_1280.jpg"
                    alt="Third Slide"
                    caption="Ladakh"
                />
            </Carousel.Item>
            <Carousel.Item className='sizing'>
                <ExampleCarouselImage
                    src="https://www.darjeelingriders.com/blog/wp-content/uploads/2019/07/Batasia-loop-Darjeeling-1360x765.jpg"
                    alt="Third Slide"
                    caption="Toy Train, Darjeeling"
                />
            </Carousel.Item>
        </Carousel>
        </div>
      </div>
      </div>
    </section>
    <section className='fluid-cotainer'> {/*Last Para*/}
      <div className='col-12 m-4 p-2 content message centralize'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus accusantium consequuntur dolor omnis assumenda quas, repellat voluptatem, dicta quae adipisci ipsam magnam dolore ratione pariatur fuga modi. Quidem vel, debitis rem autem error qui soluta vitae ratione assumenda accusamus minima quibusdam dicta numquam, beatae, at veniam vero reprehenderit odit quae!</p>
      </div>
    </section>
    <section className='fluid-container end '> {/*Footer*/}
      <div className='container p-5'>
        <div className='row'>
          <div className='col-4 d-flex justify-content-start pr-4'>
           <p>
           <h1>Why TourWithUs?</h1><br />
           Established in 2000, TourWithUs has since positioned itself as one of the leading companies, providing great offers, competitive airfares, exclusive discounts, and a seamless online booking experience to many of its customers. The experience of booking your flight tickets, hotel stay, and holiday package through our desktop site or mobile app can be done with complete ease and no hassles at all. We also deliver amazing offers, such as Instant Discounts, Fare Calendar, MyRewardsProgram, MyWallet, and many more while updating them from time to time to better suit our customers' evolving needs and demands.
           </p>
          </div>
          <div className='col-4 d-flex justify-content-start pr-4'>
          <p>
          <h1>Booking Flights with TourWithUs</h1><br />

           At TourWithUs, you can find the best of deals and cheap air tickets to any place you want by booking your tickets on our website or app. Being India's leading website for hotel, flight, and holiday bookings, MakeMyTrip helps you book flight tickets that are affordable and customized to your convenience. With customer satisfaction being our ultimate goal, we also have a 24/7 dedicated helpline to cater to our customer's queries and concerns. Serving over 5 million happy customers, we at MakeMyTrip are glad to fulfill the dreams of folks who need a quick and easy means to find air tickets. You can get a hold of the cheapest flight of your choice today while also enjoying the other available options for your travel needs with us.
          </p>
          </div>
          <div className='col-4 d-flex justify-content-start'>
          <p>
          <h1>Domestic Flights with TourWithUs</h1><br />

           TourWithUs is India's leading player for flight bookings. With the cheapest fare guarantee, experience great value at the lowest price. Instant notifications ensure current flight status, instant fare drops, amazing discounts, instant refunds and rebook options, price comparisons and many more interesting features.
          </p>
          </div>
        </div>
      </div>
    </section>
    <footer className='container-fluid message footercolor shadow'> {/*Footer*/}
      <div className='container m-2 p-2 message'>
      <div className='row'>
        <div className='col-12 message'>
          <div className='d-flex gap-4'>
          <a href="#instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className="bi bi-instagram iconcolor" viewBox="0 0 16 16">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
          </svg>
          </a>
          <a href="#twitter">
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className="bi bi-twitter-x iconcolor" viewBox="0 0 16 16">
          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
          </svg>
          </a>
          <a href="#facebook">
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className="bi bi-facebook iconcolor" viewBox="0 0 16 16">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
          </svg>
          </a>
          <a href="#linkedin">
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className="bi bi-linkedin iconcolor" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
          </svg>
          </a>
          </div>
        </div>
      </div>
      </div>
    </footer>
    </div>
    )    
}

export default Home;