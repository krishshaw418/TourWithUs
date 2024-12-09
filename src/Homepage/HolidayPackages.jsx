import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap-icons/font/bootstrap-icons.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './HolidayPackages.css'

const HolidayPackages = ()=>{

    return (
        <div>
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
    <div className='h1tag'>
    <h1 className='mt-4 pt-5 pb-2'>Our Exclusive Holiday Packages Include</h1>
    </div>
            <section className='container-fluid'>
                <div className='container shadow mt-3 bgcolor'>
                    <div className='row d-flex gap-0'>
                        <div className='col-lg-6 col-sm-8 imgsize place'>
                        <img src="https://www.holidify.com/images/cmsuploads/compressed/shutterstock_633164246_20190904103856_20190904103926.jpg" alt="" />
                        </div>
                        <div className='col-lg-4 col-sm-4 place'>
                                <div className='textcolor'>
                                    <h2>Manali</h2>
                                    <p>Explore the beauty of Manali, a Himalayan gem surrounded by snow-capped peaks, lush valleys, and flowing rivers. Discover the charm of its pine forests, breathtaking views from Rohtang Pass, and the adventure-filled Solang Valley. Whether you seek peace or excitement, Manali offers a perfect blend of natural splendor and adventure, making it an ideal destination for every traveler.</p>
                                </div>
                        </div>
                    </div>
                </div>
                <div className='container shadow mt-3 bgcolor2'>
                    <div className='row d-flex gap-0'>
                        <div className='col-lg-6 col-sm-8 imgsize place'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlKvk5p7nQceJaOox64T1WUMk9jXa6kfqtfw&s" alt="" />
                        </div>
                        <div className='col-lg-4 col-sm-4 place'>
                                <div className='textcolor'>
                                    <h2>Ladakh</h2>
                                    <p>Discover the rugged beauty of Ladakh, a land of majestic mountains, clear blue skies, and ancient monasteries. Known for its pristine landscapes, Ladakh offers a unique blend of adventure and serenity. Whether you're crossing the high-altitude passes, exploring the barren beauty of Nubra Valley, or soaking in the tranquility of Pangong Lake, Ladakh promises an awe-inspiring experience for every traveler seeking peace in the wilderness.</p>
                                </div>
                        </div>
                    </div>
                </div>
                <div className='container shadow mt-3 bgcolor3'>
                    <div className='row d-flex gap-0'>
                        <div className='col-lg-6 col-sm-8 imgsize place'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2NDKyJWltovqu5XqfR7qPEWfD1eIH6KFQhQ&s" alt="" />
                        </div>
                        <div className='col-lg-4 col-sm-4 place'>
                                <div className='textcolor'>
                                    <h2>Darjeeling</h2>
                                    <p>Explore the enchanting beauty of Darjeeling, perched high in the Himalayas and known for its rolling tea gardens and stunning views of Mount Kanchenjunga. Sip on world-renowned Darjeeling tea, ride the historic toy train, or simply breathe in the fresh mountain air. Whether you seek panoramic landscapes or a peaceful retreat, Darjeeling's charm and serene surroundings offer a perfect escape into nature's lap.</p>
                                </div>
                        </div>
                    </div>
                </div>
                <div className='container shadow mt-3 bgcolor4'>
                    <div className='row d-flex gap-0'>
                        <div className='col-lg-6 col-sm-8 imgsize place'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyi8_9OHutdrIOZt8m9S2GwaN4VbJIWf3wpQ&s" alt="" />
                        </div>
                        <div className='col-lg-4 col-sm-4 place'>
                                <div className='textcolor'>
                                    <h2>Goa</h2>
                                    <p>Explore the vibrant allure of Goa, where golden beaches meet the shimmering Arabian Sea. From the lively shores of Baga to the serene sands of Palolem, Goa offers a perfect escape for sun-seekers and adventurers. Immerse yourself in its rich culture, savor the local cuisine, and experience its vibrant nightlife. Whether you're after relaxation or excitement, Goa’s tropical beauty and coastal charm create an unforgettable destination.</p>
                                </div>
                        </div>
                    </div>
                </div>
                <div className='container shadow mt-3 mb-2 bgcolor5'>
                    <div className='row d-flex gap-0'>
                        <div className='col-lg-6 col-sm-8 imgsize place'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE3ulot1xFvDGoDxAJbYcHVwyo3BnHGznIAQ&s" alt="" />
                        </div>
                        <div className='col-lg-4 col-sm-4 place'>
                                <div className='textcolor'>
                                    <h2>Shimla</h2>
                                    <p>Explore the colonial charm of Shimla, a serene hill station nestled in the heart of the Himalayas. With its scenic vistas, cool mountain air, and winding streets, Shimla offers the perfect retreat. Take a leisurely walk down Mall Road, visit the historic Ridge, or admire the lush greenery from Jakhoo Hill. Whether you're looking for relaxation or a taste of history, Shimla's timeless beauty makes it an ideal getaway.</p>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className='container-fluid message footercolor shadow mt-5'>
      <div className='container m-2 p-2 message'>
      <div className='row'>
        <div className='col-12 message'>
          <div className='d-flex gap-4'>
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className="bi bi-instagram iconcolor" viewBox="0 0 16 16">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className="bi bi-twitter-x iconcolor" viewBox="0 0 16 16">
          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className="bi bi-facebook iconcolor" viewBox="0 0 16 16">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" className="bi bi-linkedin iconcolor" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
          </svg>
          </div>
        </div>
      </div>
      </div>
    </footer>
        </div>
    )
}

export default HolidayPackages;