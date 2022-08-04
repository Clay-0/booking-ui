import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailLists/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { faArrowAltCircleLeft, faArrowAltCircleRight, faCircleXmark } from "@fortawesome/free-regular-svg-icons";



const Hotel = ()=>{
const[slideNumber,setSlideNumber] = useState(0)
const[open,setOpen] = useState(false)   
const photos =[
    {
        src: "https://image.shutterstock.com/image-illustration/modern-bright-interiors-3d-rendering-600w-697725358.jpg"
    },
    {
        src: "https://image.shutterstock.com/image-illustration/interior-sofa-3d-illustration-600w-480019873.jpg"
    },
    {
        src: "https://image.shutterstock.com/image-illustration/modern-bright-interiors-3d-rendering-600w-697725358.jpg"
    },
    {
        src: "https://image.shutterstock.com/image-photo/hotel-bedroom-interior-design-600w-585544559.jpg"
    },
    {
        src: "https://image.shutterstock.com/image-illustration/modern-bright-interiors-3d-rendering-600w-697725358.jpg"
    },
    {
        src: "https://image.shutterstock.com/image-illustration/3d-illustration-bedroom-interior-600w-1939523035.jpg"
    }
];

const handleOpen = (i)=>{
setSlideNumber(i);
setOpen(true);
}

const handleMove = (direction) =>{
    let newSlideNumber;

    if(direction==="l") {
        newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
    }else{
        newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1
    }

    setSlideNumber(newSlideNumber);
}
return (
<div>
<Navbar/>
<Header type="list" />
<div className="hotelContainer">
    {open && <div className="slider">
        <FontAwesomeIcon 
        icon={faCircleXmark} 
        className="close"
        onClick={()=>setOpen(false)}/>
        <FontAwesomeIcon 
        icon={faArrowAltCircleLeft} 
        className="arrow"
        onClick={()=>handleMove("l")}/>
        <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
        </div>
        <FontAwesomeIcon 
        icon={faArrowAltCircleRight} 
        className="arrow"
        onClick={()=>handleMove("r")}/>
    </div>}
<div className="hotelWrapper">
    <button className="bookNow">Reserve or Book Now!</button>
    <h1 className="hotelTitle">
        Grand Hotel
    </h1>
    <div className="hotelAdd">
        <FontAwesomeIcon icon={faLocationDot}/>
        <span>Nile street Khartoum</span>
    </div>
    <span className="hotelDistance">
        Excellant location - 500 from center
    </span>
    <span className="hotelPriceHgLg">
        Book a stay over 115$ at this property and get free airport taxi
    </span>
    <div className="hotelImgs">
    {photos.map((photo,i)=>(
        <div className="hotelImgWarp">
            <img 
            onClick={()=>handleOpen(i)} 
            src={photo.src} alt="" 
            className="hotelImg" />
        </div>
    ))}
    </div>
    <div className="hotelDetails">
        <div className="hotelDetailsText">
            <h1 className="hotelTitle">Stay in heart of the Nile</h1>
            <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                . Obcaecati animi, vel iusto et molestiae
                , repellat assumenda eos minima blanditiis
                 facere fugit quia natus sint? Deleniti
                  ea mollitia quas explicabo sequi.
            </p>
        </div>
        <div className="hotelDetailsPrice">
            <h1>Perfect for a 9-night stay!</h1>
            <span>
            facere fugit quia natus sint? Deleniti
            ea mollitia quas explicabo sequi.
            </span>
            <h2>
                <b>$123</b> (9 nights) 
            </h2>
            <button>Reserve or book now!</button>
        </div>
    </div>
</div>
<MailList/>
<Footer/>
</div>
</div>
);
}

export default Hotel;