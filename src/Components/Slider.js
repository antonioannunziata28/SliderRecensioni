import React, {useState,useEffect} from "react";
import Slide from "./Slide";
import data from "../data";

const Slider = () => {
    const [recensioni, _] = useState(data);
    const [active,setActive] = useState(0);

    //Fun. prossima slide
    const prossimaSlide = () => {
        setActive((prevValue) => {
            if(prevValue +1 > recensioni.length -1){
                return 0;
            } else {
                return prevValue +1
            }
        });
    };

    //Fun. slide precedente
    const precedenteSlide = () => {
        setActive((prevValue) => {
            if(prevValue -1 < 0){
                return recensioni.length -1;
            } else{
                return prevValue -1;
            }
        });
    };

    //Fun. cambio slide ogni 4 sec
    useEffect(() => {
        const timer = setTimeout(() => {
            setActive((prevValue) => {
                if(prevValue +1 === recensioni.length){
                    return 0;
                } else{
                    return prevValue +1;
                }
            });
        },4000);
        //Elimino il timeout prima di attivare il prossimo
        return () => clearTimeout(timer);
    },[active]);

    return (
        <div className="container slider">
            {recensioni.map((recensione,index) => {
                //Cambio classe in base alla posizione dell'elemento rispetto a quello attivo
                let positionClass= "";
                if(index === active){
                    positionClass="active"
                }else if(active === index +1 || (active === 0 & index === recensione.length -1)){
                    positionClass="prev";
                }else {
                    positionClass="next";
                }
                return (
                    <Slide key={recensione.id} {...recensione} classes={positionClass} />
                );
            })}
            <div className="btn-group slider-btn-group">
                <button className="btn btn-slider prev-slide" onClick={precedenteSlide}>prev</button>
                <button className="btn btn-slider next-slide" onClick={prossimaSlide}>next</button>
            </div>
        </div>
    );
    
};

export default Slider;