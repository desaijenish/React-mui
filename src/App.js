import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { height } from '@mui/system';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Fade from '@mui/material/Fade';
import FormControlLabel from '@mui/material/FormControlLabel';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import ShareIcon from '@mui/icons-material/Share';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';

import { RiDashboardFill } from "react-icons/ri";
import { MdPermDataSetting } from "react-icons/md";
import { MdStorage } from "react-icons/md";
import { MdStayCurrentPortrait } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";


import Slider from "react-slick";

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Photo from './componets/Photo';
import { getValue } from '@testing-library/user-event/dist/utils';


const label = { inputProps: { 'aria-label': 'Switch demo' } };

function App() {

    const [checked, setChecked] = React.useState(false);

    // slick slider
    var settings = {
        dots: true,
        infinite: false,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    // work section
    function card(im, h) {
        return (
            <Card sx={{ maxWidth: '100%' }} className='card'>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="100%"
                    image={im}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {h}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <hr></hr>
                <CardActions>
                    <Button size="small"><InsertLinkIcon className='color-b' /></Button>
                    <Button size="small"><ShareIcon className='color-b' /></Button>
                </CardActions>
            </Card>
        )
    }

    //  services section 
    function box2(icon, heading) {
        return (
            <div className='box2'>
                <center><font className="icon" >{icon}</font></center>
                <font size='5' style={{ color: '#636363' }} >{heading}</font>
                <p style={{ fontSize: '14px', color: '#636363' }}>Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.</p>
                <Button variant="t">READ MORE</Button>
            </div>
        )
    }

    // form section
    function form(name) {
        return (
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="standard-basic" label={name} variant="standard" />
            </Box>
        );
    }


    // switch and plan section
    const handleChange = () => {
        setChecked((prev) => !prev);
    };

   
    return (

        <div>
            {/* navbar section */}
            <div className='pos-s' >
                <React.Fragment  >
                    <CssBaseline />
                    <Container fixed >
                        <div className='flex' style={{ height: '90px' }}>
                            <div className='logo'>
                                <img src='http://evelynn-react.ui-lib.com/assets/images/react-logo.svg'></img>
                            </div>
                            <Navbar expand="lg" >
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link href="#Demos">Demos</Nav.Link>
                                        <Nav.Link href="#Home">Home</Nav.Link>
                                        <Nav.Link href="#Works " >Works</Nav.Link>
                                        <Nav.Link href="#service">Service</Nav.Link>
                                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                                        <Nav.Link href="#comtect">Contect</Nav.Link>
                                        <Button variant className="text color-w justify-end" style={{ marginRight: '10px' }} ><PersonIcon />  my Account</Button>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    </Container>
                </React.Fragment>
            </div>
            {/* hero section */}
            <div className='background' id='Home'>
                <React.Fragment >
                    <CssBaseline />
                    <Container fixed>
                        <Box sx={{ flexGrow: 1 }} id='Home'>
                            <Grid container spacing={1}>
                                <Grid item xs={12} md={6}>
                                    <div style={{ margin: '60px 0px' }}>
                                        <h1 className='color-w'><font size="7">Better Management;<br></br> Less Expense</font></h1>
                                        <font size="5" className="color-w">Not sure about Pro? Try trial first!</font><br></br><br></br>
                                        <font size="3" className="color-w"><CheckIcon className='color-o'></CheckIcon>Unlimited Projects.</font><br></br><br></br>
                                        <font size="3" className="color-w"><CheckIcon className='color-o'></CheckIcon>Unlimited Projects.</font><br></br><br></br>
                                        <font size="3" className="color-w"><CheckIcon className='color-o'></CheckIcon>Unlimited Projects.</font><br></br><br></br>
                                        <Button variant="contained" style={{ backgroundColor: '#3F50B4', borderRadius: '30px', margin: "0px 20px 0px 0px " }}><FlightTakeoffIcon />Contained</Button>
                                        <Button variant="outlined color-w" style={{ backgroundColor: 'white', borderRadius: '30px' }}> <AccessAlarmsIcon />14 day free trial</Button>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <div style={{ marginTop: '80px' }}>
                                        <center>
                                            <div className='box'>
                                                <AttachMoneyIcon fontSize='large' /> <font size='6' style={{ fontWeight: '700', margin: '30px 0px 0px -18px' }}>16</font>
                                                <p>by one <br></br>theme forest</p>
                                            </div>
                                        </center>
                                        <center>
                                            <img className='im' src='http://evelynn-react.ui-lib.com/assets/images/screenshots/landing-intro.png' width={'80%'} style={{ borderRadius: '10px', margin: "80px -6px 0px 0px" }} ></img>
                                        </center>
                                    </div>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </React.Fragment>
            </div>
            {/* work section */}
            <React.Fragment >
                <CssBaseline />
                <Container >
                    <div id="Works"  className="m-100">
                        <h1 className='font-w'><font size="5">Works & Case studies</font></h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipisci eius nisi placeat at.</p>
                    </div>
                    <Box sx={{ flexGrow: 1 }} >
                        <Grid container spacing={3}>
                            <Grid item sm={6} xs={12} md={4}>
                                {card("http://evelynn-react.ui-lib.com/assets/images/sq-12.jpg", 'heading')}
                            </Grid>
                            <Grid item sm={6} xs={12} md={4}>
                                {card("http://evelynn-react.ui-lib.com/assets/images/sq-10.jpg", "heading2")}
                            </Grid>
                            <Grid item sm={6} xs={12} md={4}>
                                {card("http://evelynn-react.ui-lib.com/assets/images/sq-9.jpg", "heading3")}
                            </Grid>
                        </Grid>
                    </Box>
                    <center>
                        <Button variant="outlined color-w" style={{ backgroundColor: "#FF9100", borderRadius: '10px', padding: '10px', margin: '30px 0px 70px 0px' }}>lode more</Button>
                    </center>
                </Container>
            </React.Fragment>
            {/* services section */}
            <React.Fragment>
                <div style={{ background: '#F7F7F7', padding: '30px 0px' }}>
                    <CssBaseline />
                    <Container id='service'>
                        <h1 style={{ margin: '5px 0px' }}>Our Services</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipisci eius nisi placeat at.</p>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={3}>
                                <Grid item sm={6} xs={12} md={3}>
                                    {box2(<RiDashboardFill />, 'Business  Application')}
                                    {/* <Box icon={"<RiDashboardFill/>"} heading={"'Business  Application"}/> */}
                                </Grid>
                                <Grid item sm={6} xs={12} md={3}>
                                    {box2(<MdPermDataSetting />, 'Custom System Integration')}
                                </Grid>
                                <Grid item sm={6} xs={12} md={3}>
                                    {box2(<MdStorage />, 'Database Administration')}
                                </Grid>
                                <Grid item sm={6} xs={12} md={3}>
                                    {box2(<MdStayCurrentPortrait />, 'Custom Mobile Application')}
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </div>
            </React.Fragment>
            {/* photo section */}
            <React.Fragment>
                <CssBaseline />
                <Container >
                    <h1 style={{ margin: '70px 0px 0px 0px' }}>What our customers says</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipisci eius nisi placeat at.</p>
                    <div>
                        <Slider {...settings}>
                            <div>
                                <Photo logo={"http://evelynn-react.ui-lib.com/assets/images/mock-logo-2.png"} photo={"http://evelynn-react.ui-lib.com/assets/images/face-1.jpg"} name={"John Doe"} pos={'Product Manager'}></Photo>
                            </div>
                            <div>
                                <Photo logo={"http://evelynn-react.ui-lib.com/assets/images/mock-logo-1.png"} photo={"http://evelynn-react.ui-lib.com/assets/images/face-2.jpg"} name={"john White"} pos={'Software Engineer'}></Photo>
                            </div>
                            <div>
                                <Photo logo={"http://evelynn-react.ui-lib.com/assets/images/mock-logo-3.png"} photo={"http://evelynn-react.ui-lib.com/assets/images/face-3.jpg"} name={"Adim smith"} pos={'CEO'}></Photo>
                            </div>
                            <div>
                                <Photo logo={"http://evelynn-react.ui-lib.com/assets/images/mock-logo-4.png"} photo={"http://evelynn-react.ui-lib.com/assets/images/face-4.jpg"} name={"jesica hiche"} pos={'CEO'}></Photo>
                            </div>
                        </Slider>
                    </div>
                </Container>
            </React.Fragment>
            {/* customers section */}
            <React.Fragment>
                <CssBaseline />
                <div className="background" style={{ margin: '70px 0px 7px 0px', padding: '50px 0px' }}>
                    <Container>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={10}>
                                    <h1 className='color-w' style={{ margin: '60px 0px 0px 0px' }}>What our customers says</h1>
                                    <p className='color-w'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipisci eius nisi placeat at.</p>
                                </Grid>
                                <Grid item xs={12} md={2}  >
                                    <center>
                                        <Button variant="outlined color-w" style={{ backgroundColor: "#FF9100", borderRadius: '5px', padding: '10px', margin: '70px 0px 7px 0px' }}>Start 14 day triyl</Button>
                                    </center>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </div>
            </React.Fragment>
            {/* plan section */}
            <div style={{ margin: '70px 0px' }} id=" pricing">
                <React.Fragment pricing >
                    <CssBaseline />
                    <Container>
                        <h1 style={{ margin: '60px 0px 0px 0px' }}>Choose a Plan</h1>

                        <FormControlLabel
                            control={<Switch checked={checked} onChange={handleChange} />}
                            label="Get up to 10% discount annually"
                        />

                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={1}>
                                <Grid item sm={6} xs={12} md={3}>
                                    <div className='plan'>
                                        <center>
                                            <div className='plan2'>
                                                <p>Developer</p>
                                                <p>For New Develope</p>
                                            </div>
                                            <div style={{ margin: '15px 0px' }}>
                                                <font size='6' className="color-b font-w" >free</font>
                                                <p className='m-2'>10GB of Bandwidth</p>
                                                <p className='m-2'>Max 50 connection</p>
                                                <p className='m-2'>512MB RAM</p>
                                                <p className='m-2'>Unlimited access</p>
                                                <p className='m-2'>Unlimited User</p>
                                                <p className='m-2'>Data analytics</p>
                                                <Button variant="outlined color-w" style={{ backgroundColor: "#FF9100", borderRadius: '5px', padding: '7px', margin: '15px 0px 7px 0px' }}>choose</Button>
                                            </div>
                                        </center>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <div className='plan'>
                                        <center>
                                            <div className='plan2' style={{ backgroundColor: '#3F51B5' }}>
                                                <p className='color-w'>Starter</p>
                                                <p className='color-w'>For Professional Developer</p>
                                            </div>
                                            <div style={{ margin: '15px 0px' }}>
                                                <font size='6' className="color-b font-w" >

                                                    {
                                                        checked ?
                                                            <div className='demo'>  <AttachMoneyIcon fontSize='large' />324 /yr</div>
                                                            :
                                                            <div className='demo'>  <AttachMoneyIcon fontSize='large' />30 /mo</div>
                                                    }
                                                </font>
                                                <p className='m-2'>10GB of Bandwidth</p>
                                                <p className='m-2'>Max 50 connection</p>
                                                <p className='m-2'>512MB RAM</p>
                                                <p className='m-2'>Unlimited access</p>
                                                <p className='m-2'>Unlimited User</p>
                                                <p className='m-2'>Data analytics</p>
                                                <Button variant="outlined color-w" style={{ backgroundColor: "#FF9100", borderRadius: '5px', padding: '7px', margin: '15px 0px 7px 0px' }}>choose</Button>
                                            </div>
                                        </center>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <div className='plan'>
                                        <center>
                                            <div className='plan2' >
                                                <p >Business</p>
                                                <p >For Small Businesses</p>
                                            </div>
                                            <div style={{ margin: '15px 0px' }}>
                                                <font size='6' className="color-b font-w" >
                                                    {
                                                        checked ?
                                                            <div className='demo'>  <AttachMoneyIcon fontSize='large' />648 /yr</div>
                                                            :
                                                            <div className='demo'>  <AttachMoneyIcon fontSize='large' />60 /mo</div>
                                                    }

                                                </font>
                                                <p className='m-2'>10GB of Bandwidth</p>
                                                <p className='m-2'>Max 50 connection</p>
                                                <p className='m-2'>512MB RAM</p>
                                                <p className='m-2'>Unlimited access</p>
                                                <p className='m-2'>Unlimited User</p>
                                                <p className='m-2'>Data analytics</p>
                                                <Button variant="outlined color-w" style={{ backgroundColor: "#FF9100", borderRadius: '5px', padding: '7px', margin: '15px 0px 7px 0px' }}>choose</Button>
                                            </div>
                                        </center>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <div className='plan'>
                                        <center>
                                            <div className='plan2' >
                                                <p >Enterprise</p>
                                                <p >For Large companies</p>
                                            </div>
                                            <div style={{ margin: '15px 0px' }}>
                                                <font size='6' className="color-b font-w" >
                                                    {
                                                        checked ?
                                                            <div className='demo'>  <AttachMoneyIcon fontSize='large' />1728 /yr</div>
                                                            :
                                                            <div className='demo'>  <AttachMoneyIcon fontSize='large' />160 /mo</div>
                                                    }
                                                </font>
                                                <p className='m-2'>10GB of Bandwidth</p>
                                                <p className='m-2'>Max 50 connection</p>
                                                <p className='m-2'>512MB RAM</p>
                                                <p className='m-2'>Unlimited access</p>
                                                <p className='m-2'>Unlimited User</p>
                                                <p className='m-2'>Data analytics</p>
                                                <Button variant="outlined color-w" style={{ backgroundColor: "#FF9100", borderRadius: '5px', padding: '7px', margin: '15px 0px 7px 0px' }}>choose</Button>
                                            </div>
                                        </center>
                                    </div>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </React.Fragment>
            </div>
            {/* form secti~on */}
            <div>
                <React.Fragment>
                    <div style={{ background: '#F7F7F7', padding: '30px 0px' }}>
                        <CssBaseline />
                        <Container>
                            <h1 style={{ margin: '70px 0px 0px 0px' }}>Send Us an Email</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, error.</p>
                            <div style={{ margin: '20px 0px' }}>
                                {
                                    form('name')
                                }
                            </div>
                            <div style={{ margin: '20px 0px' }}>
                                {
                                    form('email')
                                }
                            </div>
                            <div style={{ margin: '20px 0px' }}>
                                {
                                    form('subject')
                                }
                            </div>
                            <div style={{ margin: '20px 0px' }}>
                                {
                                    form('message')
                                }
                            </div>
                            <Button style={{ backgroundColor: '#3F50B4', borderRadius: '50%', margin: "0px 20px 0px 0px ", padding: '15px', border: '0px' }}><IoSend style={{ fontSize: '20px', color: 'white' }} /></Button>

                        </Container>
                    </div>
                </React.Fragment>
            </div>
            {/* futter section */}
            <div style={{ backgroundColor: "#212121" }}>
                <React.Fragment>
                    <CssBaseline />
                    <Container id='comtect'>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item sm={6} xs={12} md={6} >
                                    <div className='color-w bor' style={{ padding: '20px' }}>
                                        <div >
                                            <font size='4' className='font-w m-2' style={{ borderBottom: '2px solid #FF9100' }}>About Us</font>
                                        </div>
                                        <div>
                                            <p className='m-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis rem, aut aliquam neque nam? dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit. Officiis perferendis rem, aut aliquam.</p>
                                        </div>
                                        <div>
                                            <Button className='m-2 color-b' variant="outlined color-w" style={{ backgroundColor: "#FF9100", borderRadius: '5px', color: 'black', padding: '7px', margin: '15px 0px 7px 0px' }}>contact us</Button>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item sm={6} xs={12} md={3}>
                                    <div className='color-w bor' style={{ padding: '20px' }}>
                                        <div >
                                            <font size='4' className='font-w m-2' style={{ borderBottom: '2px solid #FF9100' }}>Contact</font>
                                        </div>
                                        <div className='flex'>
                                            <div><MdEmail className='mt-4 m-2' style={{ fontSize: '30px', color: "#FF9100" }} /></div>
                                            <div className='m-3'><p>Email</p><p>email@abc.com</p></div>
                                        </div>
                                        <div className='flex'>
                                            <div><MdLocationOn className='mt-4 m-2' style={{ fontSize: '30px', color: "#FF9100" }} /></div>
                                            <div className='m-2'><p>Adress</p><p>Topoban, Akhalia Sylhet 3114, BD</p></div>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item sm={6} xs={12} md={3}>
                                    <div className='color-w bor' style={{ padding: '20px' }}>
                                        <div >
                                            <font size='4' className='font-w m-2' style={{ borderBottom: '2px solid #FF9100' }}>Disclaimer</font>
                                        </div>
                                        <div>
                                            <p className='m-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis rem, aut aliquam neque nam?</p>
                                        </div>
                                        <div className='m-3'>
                                            <FaLinkedinIn style={{ fontSize: '25px', color: '#666666' }} />
                                            <AiOutlineTwitter style={{ fontSize: '25px', color: '#666666', margin: '0px 20px' }} />
                                            <FaFacebookF style={{ fontSize: '25px', color: '#666666' }} />
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </React.Fragment>
            </div>
        </div>
    );
}


export default App;