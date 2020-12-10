import React from 'react';
import './style.css';

const Categories = prosp => {
    return (
        <React.Fragment>
            <span>Categorias</span>
            <ul class="CategoryList">
                <li>
                    <span>
                        <a href="#">Acessórios</a>
                    </span>
                    <ul>
                        <li><a href="#">Bolsas</a></li>
                        <li><a href="#">Calçados</a></li>
                        <li><a href="#">Relógios</a></li>
                    </ul>
                </li>
                <li>
                    <span>
                        <a href="#">Vestuário</a>
                    </span>
                    <li><a href="#">Camisetas</a></li>
                    <li><a href="#">Calças</a></li>
                </li>
                <li>
                    <span>
                        <a href="#">Informática</a>
                    </span>
                </li>
                <li>
                    <span>
                        <a href="#">Camping</a>
                    </span>
                </li>
            </ul>
        </React.Fragment>
    );
}

export default Categories;
