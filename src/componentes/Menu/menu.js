import React, { useEffect, useState, Image } from "react";
import Icon, { FontAwesome, Feather, Ionicons } from 'react-web-vector-icons';


function Menu() {
    const [Beds, setbed] = useState(0);
    const [Refrigerador, setRefrigerador] = useState(0);
    const [Furniture, setFurniture] = useState(0);
    const [Oven, setOven] = useState(0);
    const [Sofa, setSofa] = useState(0);
    const [TV, setTV] = useState(0);
    const [Washer, setWasher] = useState(0);
    const [Dining, setDining] = useState(0);
    const [Desk, setDesk] = useState(0);
    const [Wardrobe, setWardrobe] = useState(0);
    let Total = 0;
    let Totalitems = 0;
    let TotalDinero = 0;
    let SubTotal = 0;
    let Descuento =0;
    const vec1 = require('../Img/Vector1.png');
    const vec2 = require('../Img/Vector2.png');
    const vec3 = require('../Img/Vector3.png');
    const vec4 = require('../Img/Vector4.png');
    const vec5 = require('../Img/Vector5.png');
    const vec6 = require('../Img/Vector6.png');
    const vec7 = require('../Img/Vector7.png');
    const vec8 = require('../Img/Vector8.png');
    const vec9 = require('../Img/Vector9.png');
    const vec10 = require('../Img/Vector10.png');
    Total =
        Beds * 1.2 +
        Refrigerador * 1 +
        Furniture * 0.5 +
        Oven * 0.6 +
        Sofa * 1.5 +
        TV * 0.25 +
        Washer * 0.5 +
        Dining * 2 +
        Desk * 0.75 +
        Wardrobe * 3.2

    Totalitems =
        Beds +
        Refrigerador +
        Furniture +
        Oven +
        Sofa +
        TV +
        Washer +
        Dining +
        Desk +
        Wardrobe

    if (Beds < 0) setbed(0)
    if (Refrigerador < 0) setRefrigerador(0)
    if (Furniture < 0) setFurniture(0)
    if (Oven < 0) setOven(0)
    if (Sofa < 0) setSofa(0)
    if (TV < 0) setTV(0)
    if (Washer < 0) setWasher(0)
    if (Dining < 0) setDining(0)
    if (Desk < 0) setDesk(0)
    if (Wardrobe < 0) setWardrobe(0)

    function Borrar() {
        setbed(0)
        setRefrigerador(0)
        setFurniture(0)
        setOven(0)
        setSofa(0)
        setTV(0)
        setWasher(0)
        setDining(0)
        setDesk(0)
        setWardrobe(0)
    }
    return (
        <div className='App'>
            <React.Fragment>
                <nav class="navbar navbar-expand-lg   text-center" >
                    <div style={izquierda}>

                    </div>

                    <div style={centro}>
                    <br/><br/>
                        <ul class=" navbar-nav me-auto "  >
                            <div class="card "  >
                                <div class="card-body " >
                                    <div style={imgs}>
                                        <img src={vec1} />
                                    </div>
                                    <h3 >Bed</h3>
                                    <div class="d-flex justify-content-center" >
                                        <div class="col" >
                                            <button class="btn btn-danger" onClick={() => setbed(Beds - 1)} style={caja} >
                                                -
                                            </button>
                                        </div>
                                        <div class="col" style={caja2}>
                                            <h3>{Beds}</h3>
                                        </div>
                                        <div class="col">
                                            <button  class="btn btn-success" onClick={() => setbed(Beds + 1)} style={caja}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card "  >
                                <div class="card-body " >
                                    <div style={imgs}>
                                        <img src={vec2} />
                                    </div>
                                    <h3 >Refrigerador</h3>
                                    <div class="d-flex justify-content-center" >
                                        <div class="col" >
                                            <button class="btn btn-danger" onClick={() => setRefrigerador(Refrigerador - 1)} style={caja} >
                                                -
                                            </button>
                                        </div>
                                        <div class="col" style={caja2}>
                                            <h3>{Refrigerador}</h3>
                                        </div>
                                        <div class="col">
                                            <button class="btn btn-success" onClick={() => setRefrigerador(Refrigerador + 1)} style={caja}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card "  >
                                <div class="card-body " >
                                    <div style={imgs}>
                                        <img src={vec3} />
                                    </div>
                                    <h3 >Furniture</h3>
                                    <div class="d-flex justify-content-center" >
                                        <div class="col" >
                                            <button class="btn btn-danger" onClick={() => setFurniture(Furniture - 1)} style={caja} >
                                                -
                                            </button>
                                        </div>
                                        <div class="col" style={caja2}>
                                            <h3>{Furniture}</h3>
                                        </div>
                                        <div class="col">
                                            <button class="btn btn-success" onClick={() => setFurniture(Furniture + 1)} style={caja}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card "  >
                                <div class="card-body " >
                                    <div style={imgs}>
                                        <img src={vec4} />
                                    </div>
                                    <h3 >Oven</h3>
                                    <div class="d-flex justify-content-center" >
                                        <div class="col" >
                                            <button class="btn btn-danger" onClick={() => setOven(Oven - 1)} style={caja} >
                                                -
                                            </button>
                                        </div>
                                        <div class="col" style={caja2}>
                                            <h3>{Oven}</h3>
                                        </div>
                                        <div class="col">
                                            <button class="btn btn-success" onClick={() => setOven(Oven + 1)} style={caja}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card "  >
                                <div class="card-body " >
                                    <div style={imgs}>
                                        <img src={vec5} />
                                    </div>
                                    <h3 >Sofa</h3>
                                    <div class="d-flex justify-content-center" >
                                        <div class="col" >
                                            <button class="btn btn-danger" onClick={() => setSofa(Sofa - 1)} style={caja} >
                                                -
                                            </button>
                                        </div>
                                        <div class="col" style={caja2}>
                                            <h3>{Sofa}</h3>
                                        </div>
                                        <div class="col">
                                            <button class="btn btn-success" onClick={() => setSofa(Sofa + 1)} style={caja}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </ul>
                        <br />
                        <ul class=" navbar-nav me-auto "  >
                            <div class="card "  >
                                <div class="card-body " >
                                    <div style={imgs}>
                                        <img src={vec6} />
                                    </div>
                                    <h3 >TV</h3>
                                    <div class="d-flex justify-content-center" >
                                        <div class="col" >
                                            <button class="btn btn-danger" onClick={() => setTV(TV - 1)} style={caja} >
                                                -
                                            </button>
                                        </div>
                                        <div class="col" style={caja2}>
                                            <h3>{TV}</h3>
                                        </div>
                                        <div class="col">
                                            <button class="btn btn-success" onClick={() => setTV(TV + 1)} style={caja}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card "  >
                                <div class="card-body " >
                                    <div style={imgs}>
                                        <img src={vec7} />
                                    </div>
                                    <h3 >Washer</h3>
                                    <div class="d-flex justify-content-center" >
                                        <div class="col" >
                                            <button class="btn btn-danger" onClick={() => setWasher(Washer - 1)} style={caja} >
                                                -
                                            </button>
                                        </div>
                                        <div class="col" style={caja2}>
                                            <h3>{Washer}</h3>
                                        </div>
                                        <div class="col">
                                            <button class="btn btn-success" onClick={() => setWasher(Washer + 1)} style={caja}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card "  >
                                <div class="card-body " >
                                    <div style={imgs}>
                                        <img src={vec8} />
                                    </div>
                                    <h3 >Dining</h3>
                                    <div class="d-flex justify-content-center" >
                                        <div class="col" >
                                            <button class="btn btn-danger" onClick={() => setDining(Dining - 1)} style={caja} >
                                                -
                                            </button>
                                        </div>
                                        <div class="col" style={caja2}>
                                            <h3>{Dining}</h3>
                                        </div>
                                        <div class="col">
                                            <button class="btn btn-success" onClick={() => setDining(Dining + 1)} style={caja}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card "  >
                                <div class="card-body " >
                                    <div style={imgs}>
                                        <img src={vec9} />
                                    </div>
                                    <h3 >Desk</h3>
                                    <div class="d-flex justify-content-center" >
                                        <div class="col" >
                                            <button class="btn btn-danger" onClick={() => setDesk(Desk - 1)} style={caja} >
                                                -
                                            </button>
                                        </div>
                                        <div class="col" style={caja2}>
                                            <h3>{Desk}</h3>
                                        </div>
                                        <div class="col">
                                            <button class="btn btn-success" onClick={() => setDesk(Desk + 1)} style={caja}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card "  >
                                <div class="card-body " >
                                    <div style={imgs}>
                                        <img src={vec10} />
                                    </div>
                                    <h3 >Wardrobe</h3>
                                    <div class="d-flex justify-content-center" >
                                        <div class="col" >
                                            <button class="btn btn-danger" onClick={() => setWardrobe(Wardrobe - 1)} style={caja} >
                                                -
                                            </button>
                                        </div>
                                        <div class="col" style={caja2}>
                                            <h3>{Wardrobe}</h3>
                                        </div>
                                        <div class="col">
                                            <button class="btn btn-success" onClick={() => setWardrobe(Wardrobe + 1)} style={caja}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </ul>
                        <br />

                    </div>
                    <div style={derecha}>
                        
                    </div>

                </nav>

                <nav class="navbar navbar-expand-lg   text-center" >
                    <div style={izquierda2}>
                        <div class="col">
                            <button onClick={() => Borrar()} style={limpiar}>
                                Limpiar
                            </button>
                        </div>
                        <br />
                    </div>
                    <div style={centro2}>
                        <ul class=" navbar-nav me-auto "  >
                            <div class="card " style={centro2}>
                                <div class="card-body " >
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col"><h3 >Total Items:</h3></th>
                                                <th scope="col"><h3 > {Totalitems}</h3></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row"> <h3 >Total M2:</h3></th>
                                                <td><h3 > {Total}</h3></td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><h3 >Subtotal:</h3> </th>
                                                <td>
                                                    <h3 > ${(SubTotal = Total * 200).toFixed(2)}</h3></td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><h3 >Tax: </h3></th>
                                                <td><h3 > ${(TotalDinero = (SubTotal / 100) * 16).toFixed(2)}</h3></td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><h3 >Total: </h3></th>
                                                <td>
                                                    <h3 > ${Descuento=(SubTotal + TotalDinero).toFixed(2)}</h3></td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><h3 >Due Today 50%: </h3></th>
                                                <td>
                                                    <h3 > ${((Descuento/100)*50).toFixed(2)}</h3></td>
                                            </tr>
                                        </tbody>
                                    </table>



                                </div>
                            </div>
                        </ul>
                    </div>
                    <div style={derecha2}>
                       
                    </div>

                </nav>
            </React.Fragment>

        </div>
    );
}

let izquierda = {
    flex: 1,

}
let centro = {
    flex: 3,
}
let derecha = {
    flex: 1,

}
let izquierda2 = {
    flex: 3,

}
let centro2 = {
    flex: 2,
}
let derecha2 = {
    flex: 3,

}
let caja = {
    width: "50px",
    height: "50px"
}
let caja2 = {
    width: "80px",
    height: "50px"
}
let imgs = {
    height: "100px"
}
let limpiar = {
    width: "200px",
    height: "50px"
}


export default Menu;
