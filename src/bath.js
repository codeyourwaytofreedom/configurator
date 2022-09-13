import bath from './images/one.png';
import './bath.css';
import { useState } from 'react';
import riva from './images/Griffmulde/Riva-Roxy-893-Eiche-San-Remo.png';



const Bath = () => {
    const [Details, setDetails] = useState(false)
    const [Front, setFront] = useState(false)
    const [Korpus, setKorpus] = useState(false)
    const [Waschtisch, setWaschtisch] = useState(false)

    const Front_Products = [{name:"Weiß Softmatt", image:require('./images/Front/weiss-softmatt.png')},
    {name:"Ston", image:require('./images/Front/Ston-F303.png')},
    {name:"Weiß hochglanz", image:require('./images/Front/Weiss-hochglanz.png')},
    {name:"Magnolia Softmatt", image:require('./images/Front/magnolia-softmatt.png')},
    {name:"Riva Roxy Eiche San Remo", image:require('./images/Front/Riva-Roxy-893-Eiche-San-Remo.png')},
    {name:"Magnolia hochglanz", image:require('./images/Front/Magnolia-hochglanz.png')},
    {name:"Seidengrau hochglanz", image:require('./images/Front/Seidengrau-hochglanz.png')},
    {name:"Focus Fire Schwarz", image:require('./images/Front/Focus-Fire-472-Schwarz-HGL-D01.png')},
    {name:"Fontana", image:require('./images/Front/Fontana-F453-F01.png')}]
    
    const [show_image, setShow] = useState(false)

    function image_handler(){
        if (!show_image)
        {setShow(true)}
    }
    // ,
    //                         , "" ,"", "Seidengrau","Seidengrau hochglanz",
    //                         "Sand" , "Sand Hochglanz" ,"Beton grau", "Schiefer Steingrau", "Steingrau Matt" ,
    //                         "Schiefergrau", "Schwarzbeton" ]

    // const Korpus_Products = ["Weiß" ,"Magnolia Matt" , "Sand","Seidengrau"  ,"Schiefergrau"
    //                         ,"Eiche Virginia","Eiche San Remo" ]

    // const Waschtisch_Products = ["Alpinweiß" ,"Seidengrau" , "Beton Grau","Beton Schiefergrau"  
    // ,"Dekor Oxid","Dekor Metal Art","Granit Schwarz geflammt","Schiefer" ,"Schiefergrau",
    // "Copper Vintage","Steel Vintage", "Eiche Halifax","Eiche Virginia","Eiche San Remo",
    //   "Endgrain Oak","Eiche Yukon", "Taxus", "Arizona Pine"]

    
      function front_mouse_enter () {
                                        setFront(true)
                                        setKorpus(false)
                                        setWaschtisch(false)
                                    }
    function korpus_mouse_enter () {
                                        setFront(false)
                                        setKorpus(true)
                                        setWaschtisch(false)
                                    }    
    function Waschtisch_mouse_enter () {
                                        setFront(false)
                                        setKorpus(false)
                                        setWaschtisch(true)
                                    }                                                        
    return ( 

            
            <div className="bath_panel">
                <h1 style={{position:"absolute",top:"-10%", left:"40%" }}>Dein Haus! Deine Seele </h1>
                <img className='bath_image' src={bath} alt="bath_image_alternative" />
                <img className='test' style={{position:"absolute", left:"0.25%", top:"-0.9%" ,width:"1153px", 
                height:"600px",display:show_image ? "block": "none"}} src={riva} alt="bath_image_alternative" />

                <div onMouseLeave={()=> setDetails(false)} className="bath_panel_shell">
                   
                        <div onMouseEnter={()=> setDetails(true)}  className="bath_panel_options">
                            <div className="bath_panel_option" onMouseEnter={()=> front_mouse_enter()} 
                            >Front</div>
                            <div  className="bath_panel_option" onMouseEnter={()=> korpus_mouse_enter()}
                            >Korpus</div>
                            <div  className="bath_panel_option" onMouseEnter={()=> Waschtisch_mouse_enter() }
                            >Waschtisch</div>
                        </div>

                    
                        <div style={{display: Details ? "grid" : "none", height: Front || Waschtisch ? "100%" : "50%",
                                marginTop: Korpus ? "20%" : "0"}} className="bath_panel_options_detail">                   
                            { Front &&
                                Front_Products.map((F) =>
                                // console.log(F.image) &&
                                <div  key={F.name} className="option_in_subcategory" onClick={() => setDetails(false)}>
                                    <img onClick={() => image_handler(F.image) } className='product_image' style={{width:"100%", height:"100%"}} src={F.image} alt="Image" /> 
                                    <div className="product_name">{F.name}</div> 
                                </div>
                                )
                            }
                            {/* { Korpus && 
                                Korpus_Products.map((F) =>
                                <div key={F} className="option_in_subcategory">
                                   <img className='product_image' alt="Image" />
                                   <div className="product_name">{F}</div> 
                                </div>
                                )

                            }
                            { Waschtisch && 
                                Waschtisch_Products.map((F) =>
                                <div key={F} className="option_in_subcategory">
                                    <img className='product_image' alt="Image" />
                                    <div className="product_name">{F}</div> 
                                </div>
                                )
                            } */}
                                 


                        </div>
                </div>            
                
                
            </div>
     );
}
 
export default Bath;