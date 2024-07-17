import React from "react";
import StarCreator from "../Utils/StarCreator";

const Slide = ({autore,recensione,voto,classes}) => {
    return (
        <div className={`slide ${classes}`}>
            <div className="review">
                <h4>{autore}</h4>
                <p>{recensione}</p>
                <div className="star-container">{StarCreator(voto)}</div>
            </div>
        </div>
    )
};

export default Slide;