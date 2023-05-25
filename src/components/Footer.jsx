import React from 'react';
import ReactDOM from 'react-dom';

var d = new Date();
var year = d.getFullYear();

function Footer(){
    return(
        <footer>
            <p>Copyright &copy; {year} DumbWayToDie</p>
        </footer>
    );
}

export default Footer;