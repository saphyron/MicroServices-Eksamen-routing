import './headerfooter.css';
import { useState } from 'react';
import {Link, Redirect, useHistory} from 'react-router-dom';

function Header(props) {
    return (
        <div className="Main">
            <header className="App-headfoot">
                <div className="SelectionBar">
                    <div class="div1"><Link to="/"><button>Front Page </button></Link></div>
                    <div class="div2"><Link to="/login"><button>Login </button></Link></div>
                    <div class="div3"><Link to="/about"><button>About </button></Link></div>
                </div>
            </header>
        </div>
      );
}



export default Header;