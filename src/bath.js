import bath from './images/one.png';
import './bath.css';
import { useState } from 'react';
import {Front_Products, Korpus_Products,Waschtisch_Products} from './photo_importer';


const Bath = () => {
    const [Details, setDetails] = useState(false)
    const [Room, setRoom] = useState(false)
    const [Front, setFront] = useState(false)
    const [Korpus, setKorpus] = useState(false)
    const [Waschtisch, setWaschtisch] = useState(false)

    const [show_image_room, setShow_room] = useState(false)
    const [ima_room, setImage_room] = useState(null)

    const [show_image_front, setShow_front] = useState(false)
    const [ima_front, setImage_front] = useState(null)

    const [show_image_korpus, setShow_korpus] = useState(false)
    const [ima_korpus, setImage_korpus] = useState(null)

    const [show_image_wash, setShow_wash] = useState(false)
    const [ima_wash, setImage_wash] = useState(null)

    function image_handler_front(a){
        setShow_front(true)
        setImage_front(a)
        setDetails(false)
    }

    function image_handler_korpus(a){
        setShow_korpus(true)
        setImage_korpus(a)
        setDetails(false)
    }

    function image_handler_wash(a){
        setShow_wash(true)
        setImage_wash(a)
        setDetails(false)
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
                <img className='bath_image' src={bath} alt="bath_image_alternative" />
                
                <img className='test' style={{position:"absolute", left:"0%", top:"0%" ,width:"100%", 
                height:"100%",display:show_image_front ? "block": "none"}} src={ima_front} alt="bath_image_alternative" />

                <img className='korpus' style={{position:"absolute", left:"0%", top:"0%" ,width:"100%", 
                height:"100%",display:show_image_korpus ? "block": "none"}} src={ima_korpus} alt="bath_image_alternative" />

                <img className='wash' style={{position:"absolute", left:"0%", top:"0%" ,width:"100%", 
                height:"100%",display:show_image_wash ? "block": "none"}} src={ima_wash} alt="bath_image_alternative" />


                <div onMouseLeave={()=> setDetails(false)} className="bath_panel_shell">
                   
                        <div onMouseEnter={()=> setDetails(true)}  className="bath_panel_options">
                            <div className="bath_panel_option" onMouseOver={()=> room_mouse_enter()} 
                            >Front</div>
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
                                    <img  className='room_image'  src={bath} alt="Room" /> 
                                    <div className="product_name">Room</div> 
                                </div>
                                
                                
                            }

                            { Front &&
                                Front_Products.map((F) =>
                                // console.log(F.image) &&
                                <div  key={F.name} className="option_in_subcategory_front" onClick={() => setDetails(false)}>
                                    <img onClick={() => image_handler_front(F.code) } className='product_image_front'  src={F.image} alt="Front" /> 
                                    <div className="product_name">{F.name}</div> 
                                </div>
                                )
                            }
                            
                            { Korpus &&
                                Korpus_Products.map((F) =>
                                <div key={F.name} className="option_in_subcategory_korpus">
                                   <img onClick={() => image_handler_korpus(F.code)} className='product_image_korpus' src={F.image}  alt="Korpus" />
                                   <div className="product_name">{F.name}</div> 
                                </div>
                                )

                            }

                            { Waschtisch &&
                                Waschtisch_Products.map((F) =>
                                <div key={F.name} className="option_in_subcategory_wash">
                                    <img onClick={() => image_handler_wash(F.code)} className='product_image_wash' src={F.image} alt="Waschtich" />
                                    <div className="product_name">{F.name}</div> 
                                </div>
                                )
                            }
                                 


                        </div>
                </div>            
                
                
            </div>
     );
}
 
export default Bath;