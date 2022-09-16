import bath1 from './images/onee.jpg';
import bath2 from './images/room2.jpg';
import bath3 from './images/room3.jpg';

import bath1_thumb from './images/room1_thumbnail.jpg';
import bath2_thumb from './images/room2_thumbnail.jpg';
import bath3_thumb from './images/room3_thumbnail.jpg';


import './bath.css';
import { faBath } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import {Front_Products, Korpus_Products,Waschtisch_Products} from './photo_importer';


const Bath = () => {
    const [Details, setDetails] = useState(false)
    const [Room, setRoom] = useState(false)
    const [Front, setFront] = useState(false)
    const [Korpus, setKorpus] = useState(false)
    const [Waschtisch, setWaschtisch] = useState(false)

    const [show_image_room1, setShow_room1] = useState(true)
    const [show_image_room2, setShow_room2] = useState(false)
    const [show_image_room3, setShow_room3] = useState(false)

    const [show_image_front, setShow_front] = useState(false)
    const [ima_front, setImage_front] = useState(null)

    const [show_image_korpus, setShow_korpus] = useState(false)
    const [ima_korpus, setImage_korpus] = useState(null)

    const [show_image_wash, setShow_wash] = useState(false)
    const [ima_wash, setImage_wash] = useState(null)

    const [clicked_image_front, setClicked_front] = useState("")
    const [clicked_image_korpus, setClicked_korpus] = useState("")
    const [clicked_image_wash, setClicked_wash] = useState("")

    const chosen = <FontAwesomeIcon size={"xl"} icon={faBath} 
                        style={{color:"red", cursor: 'pointer'}} />                               





    function bath_background_handler(a){
                if (a === "Room1")
                {setShow_room1(true);
                setShow_room2(false);
                setShow_room3(false)
                setShow_front(false);
                setShow_korpus(false);
                setShow_wash(false)}
                if (a === "Room2")
                {setShow_room1(false);
                setShow_room2(true);
                setShow_room3(false);
                setShow_front(false);
                setShow_korpus(false);
                setShow_wash(false)}
                if (a === "Room3")
                {setShow_room1(false);
                setShow_room2(false);
                setShow_room3(true);
                setShow_front(false);
                setShow_korpus(false);
                setShow_wash(false)} 
    }

    function image_handler_front(a,b){
        setShow_front(true)
        setImage_front(a)
        setDetails(false)
        setClicked_front(b)
    }

    function image_handler_korpus(a,b){
        setShow_korpus(true)
        setImage_korpus(a)
        setDetails(false)
        setClicked_korpus(b)
    }

    function image_handler_wash(a,b){
        setShow_wash(true)
        setImage_wash(a)
        setDetails(false)
        setClicked_wash(b)
    }


    function room_mouse_enter () {
                                    setFront(false)
                                    setKorpus(false)
                                    setWaschtisch(false)
                                    setRoom(true)
                                } 
    function front_mouse_enter () {
                                    setFront(true)
                                    setKorpus(false)
                                    setWaschtisch(false)
                                    setRoom(false)
                                }
    function korpus_mouse_enter () {
                                        setFront(false)
                                        setKorpus(true)
                                        setWaschtisch(false)
                                        setRoom(false)
                                    }    
    function Waschtisch_mouse_enter () {
                                        setFront(false)
                                        setKorpus(false)
                                        setWaschtisch(true)
                                        setRoom(false)
                                    }                                                        
    return ( 

            
            <div className="bath_panel">
                <h1 style={{position:"absolute",top:"0%",zIndex:"50", left:"40%" }}>Dein Haus! Deine Seele </h1>
                
                <img className='bath_image' src={show_image_room1 ? bath1 :
                        show_image_room2 ? bath2 : bath3} alt="bath_image_alternative" />



                {/* Front, Korpus, Waschtich images */}
                <img className='test' style={{position:"absolute", left:"0%", top:"0%" ,width:"100%", 
                height:"100%",display:show_image_front ? "block": "none"}} src={ima_front} alt="bath_image_alternative" />
                <img className='korpus' style={{position:"absolute", left:"0%", top:"0%" ,width:"100%", 
                height:"100%",display:show_image_korpus ? "block": "none"}} src={ima_korpus} alt="bath_image_alternative" />
                <img className='wash' style={{position:"absolute", left:"0%", top:"0%" ,width:"100%", 
                height:"100%",display:show_image_wash ? "block": "none"}} src={ima_wash} alt="bath_image_alternative" />


                <div onMouseLeave={()=> setDetails(false)} className="bath_panel_shell">
                   
                        <div onMouseEnter={()=> setDetails(true)}  className="bath_panel_options">
                            <div className="bath_panel_option" onMouseOver={()=> room_mouse_enter()} 
                            >Room</div>
                            <div className="bath_panel_option" onMouseOver={()=> front_mouse_enter()} 
                            >Front</div>
                            <div  className="bath_panel_option" onMouseEnter={()=> korpus_mouse_enter()}
                            >Korpus</div>
                            <div  className="bath_panel_option" onMouseEnter={()=> Waschtisch_mouse_enter() }
                            >Waschtisch</div>
                        </div>

                    
                        <div style={{display: Details ? "grid" : "none", 
                        height: Korpus ? "60%" : Room ? "30%" : "100%",
                        marginTop: Korpus ? "10%" : "0%"
                        }} className="bath_panel_options_detail">    
                            { Room &&

                                <div className="option_in_subcategory_room" onClick={() => setDetails(false)}>
                                    <img onClick={(e) => bath_background_handler (e.target.alt)} className='room_image'  src={bath1_thumb} alt="Room1" /> 
                                    <img onClick={(e) => bath_background_handler (e.target.alt)} className='room_image'  src={bath2_thumb} alt="Room2" /> 
                                    <img onClick={(e) => bath_background_handler (e.target.alt)} className='room_image'  src={bath3_thumb} alt="Room3" /> 
                                </div>
                                
                                
                            }

                            { Front &&
                                Front_Products.map((F) =>
                                // console.log(F.image) &&
                                <div  key={F.name} className="option_in_subcategory_front" onClick={() => setDetails(false)}>
                                    <img onClick={() => image_handler_front(F.code, F.name) } className='product_image_front'  src={F.image} alt="Front" /> 
                                    <div className="product_name">{F.name}</div> 
                                    <div className="chosen" style={{display: clicked_image_front === F.name ? "grid" : "none"}}>{chosen}</div>
                                </div>
                                )
                            }
                            
                            { Korpus &&
                                Korpus_Products.map((F) =>
                                <div key={F.name} className="option_in_subcategory_korpus">
                                   <img onClick={() => image_handler_korpus(F.code, F.name)} className='product_image_korpus' src={F.image}  alt="Korpus" />
                                   <div className="product_name">{F.name}</div> 
                                   <div className="chosen" style={{display: clicked_image_korpus === F.name ? "grid" : "none"}}>{chosen}</div>

                                </div>
                                )

                            }

                            { Waschtisch &&
                                Waschtisch_Products.map((F) =>
                                <div key={F.name} className="option_in_subcategory_wash">
                                    <img onClick={() => image_handler_wash(F.code, F.name)} className='product_image_wash' src={F.image} alt="Waschtich" />
                                    <div className="product_name">{F.name}</div> 
                                    <div className="chosen" style={{display: clicked_image_wash === F.name ? "grid" : "none"}}>{chosen}</div>

                                </div>
                                )
                            }
                                 


                        </div>
                </div>            
                
                
            </div>
     );
}
 
export default Bath;