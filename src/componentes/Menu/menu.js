import React, { useEffect, useState } from "react";

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

    return (
        <div className='App'>
            <React.Fragment>
                <nav class="navbar navbar-expand-lg bg-info  text-center" >
                    <div style={izquierda}>
                        g
                    </div>
                    <div style={centro}>
                        <ul class=" navbar-nav me-auto "  >
                            <div class="card "  >
                                <div class="card-body " >
                                    <h3 >Bed</h3>
                                    <div class="row align-items-start" >
                                        <div class="col" >
                                            <button onClick={() => setbed(Beds - 1)} style={caja} >
                                                -
                                            </button>
                                        </div>
                                        <div class="col" style={caja2}>
                                            <h3>{Beds}</h3>
                                        </div>
                                        <div class="col">
                                            <button onClick={() => setbed(Beds + 1)} style={caja}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card "  >
                                <div class="card-body " >
                                    <h3 >Refrigerador</h3>
                                    <div class="row align-items-start" >
                                        <div class="col" >
                                            <button onClick={() => setRefrigerador(Refrigerador - 1)} style={caja} >
                                                -
                                            </button>
                                        </div>
                                        <div class="col" style={caja2}>
                                            <h3>{Refrigerador}</h3>
                                        </div>
                                        <div class="col">
                                            <button onClick={() => setRefrigerador(Refrigerador + 1)} style={caja}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card "  >
                                <div class="card-body " >
                                    <h3 >Furniture</h3>
                                    <div class="row align-items-start" >
                                        <div class="col" >
                                            <button onClick={() => setFurniture(Furniture - 1)} style={caja} >
                                                -
                                            </button>
                                        </div>
                                        <div class="col" style={caja2}>
                                            <h3>{Furniture}</h3>
                                        </div>
                                        <div class="col">
                                            <button onClick={() => setFurniture(Furniture + 1)} style={caja}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card "  >
                                <div class="card-body " >
                                    <h3 >Oven</h3>
                                    <div class="row align-items-start" >
                                        <div class="col" >
                                            <button onClick={() => setOven(Oven - 1)} style={caja} >
                                                -
                                            </button>
                                        </div>
                                        <div class="col" style={caja2}>
                                            <h3>{Oven}</h3>
                                        </div>
                                        <div class="col">
                                            <button onClick={() => setOven(Oven + 1)} style={caja}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card "  >
                                <div class="card-body " >
                                    <h3 >Sofa</h3>
                                    <div class="row align-items-start" >
                                        <div class="col" >
                                            <button onClick={() => setSofa(Sofa - 1)} style={caja} >
                                                -
                                            </button>
                                        </div>
                                        <div class="col" style={caja2}>
                                            <h3>{Sofa}</h3>
                                        </div>
                                        <div class="col">
                                            <button onClick={() => setSofa(Sofa + 1)} style={caja}>
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
                                    <h3 >TV</h3>
                                    <div class="row align-items-start" >
                                        <div class="col" >
                                            <button onClick={() => setTV(TV - 1)} style={caja} >
                                                -
                                            </button>
                                        </div>
                                        <div class="col" style={caja2}>
                                            <h3>{TV}</h3>
                                        </div>
                                        <div class="col">
                                            <button onClick={() => setTV(TV + 1)} style={caja}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card "  >
                                <div class="card-body " >
                                    <h3 >Washer</h3>
                                    <div class="row align-items-start" >
                                        <div class="col" >
                                            <button onClick={() => setWasher(Washer - 1)} style={caja} >
                                                -
                                            </button>
                                        </div>
                                        <div class="col" style={caja2}>
                                            <h3>{Washer}</h3>
                                        </div>
                                        <div class="col">
                                            <button onClick={() => setWasher(Washer + 1)} style={caja}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card "  >
                                <div class="card-body " >
                                    <h3 >Dining</h3>
                                    <div class="row align-items-start" >
                                        <div class="col" >
                                            <button onClick={() => setDining(Dining - 1)} style={caja} >
                                                -
                                            </button>
                                        </div>
                                        <div class="col" style={caja2}>
                                            <h3>{Dining}</h3>
                                        </div>
                                        <div class="col">
                                            <button onClick={() => setDining(Dining + 1)} style={caja}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card "  >
                                <div class="card-body " >
                                    <h3 >Desk</h3>
                                    <div class="row align-items-start" >
                                        <div class="col" >
                                            <button onClick={() => setDesk(Desk - 1)} style={caja} >
                                                -
                                            </button>
                                        </div>
                                        <div class="col" style={caja2}>
                                            <h3>{Desk}</h3>
                                        </div>
                                        <div class="col">
                                            <button onClick={() => setDesk(Desk + 1)} style={caja}>
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card "  >
                                <div class="card-body " >
                                    <h3 >Wardrobe</h3>
                                    <div class="row align-items-start" >
                                        <div class="col" >
                                            <button onClick={() => setWardrobe(Wardrobe - 1)} style={caja} >
                                                -
                                            </button>
                                        </div>
                                        <div class="col" style={caja2}>
                                            <h3>{Wardrobe}</h3>
                                        </div>
                                        <div class="col">
                                            <button onClick={() => setWardrobe(Wardrobe + 1)} style={caja}>
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
                        g
                    </div>

                </nav>

                <nav class="navbar navbar-expand-lg bg-info  text-center" >
                    <div style={izquierda2}>
                        g
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
                                                    <h3 > ${SubTotal = Total * 200}</h3></td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><h3 >Tax: </h3></th>
                                                <td><h3 > ${TotalDinero = (SubTotal / 100) * 16}</h3></td>
                                            </tr>
                                            <tr>
                                                <th scope="row"><h3 >Total: </h3></th>
                                                <td>
                                                    <h3 > ${SubTotal + TotalDinero}</h3></td>
                                            </tr>
                                        </tbody>
                                    </table>



                                </div>
                            </div>
                        </ul>
                    </div>
                    <div style={derecha2}>
                        g
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
    backgroundColor: "blue",
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
export default Menu;
