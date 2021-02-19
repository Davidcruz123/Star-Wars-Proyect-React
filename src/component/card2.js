import React from 'react';
import { Link} from "react-router-dom";
export const Tarjeta2 = (props) => {
    // console.log(props,"props")

    return (
        <div className="card tarjeta1" style={{ width: "18rem", minWidth: "250px" }} >
            <img src="https://nerdist.com/wp-content/uploads/2017/09/kglo_sw_planetary_necklace_key-615x306.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}  </h5>
                <p className="card-text">
                    Population: {props.population} <br />
                    Terrain: {props.terrain} <br />
                  
                </p>

                <div className="row">
                    <Link to={"/planetas/"+props.id} >              
                    <a href="#" className="btn btn-outline-primary  border-5">Learn more!</a>
                    </Link>
                    <button type="button" className="btn btn-outline-warning" style={{ fontSize: "2em", maxHeight: "1.2em", display: "flex", alignItems: "center" }}>   &#9825;     </button>
                </div>
                
            </div>
        </div>
    )
}