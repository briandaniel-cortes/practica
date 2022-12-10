import React from "react";

function Header() {

    return (
        <React.Fragment>
            <nav class="navbar navbar-expand-lg gfa" style={gfa}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><h1>Menu</h1></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#"><h2>Boton 1</h2></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><h2>Boton 2</h2></a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link "><h2>Boton 3</h2></a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                            <button class="btn btn-outline-dark" type="submit">Buscador</button>
                        </form>
                    </div>
                </div>
            </nav>

        </React.Fragment>
    );
}
let gfa={
    background:"rgb(247, 160, 11)",
    height:"200px" 
}
export default Header;