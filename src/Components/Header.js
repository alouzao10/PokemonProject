import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <h1>Pokemon Project</h1>
            <nav>
                <Link to='/'><button>Home</button></Link>
                <Link to='/cards'><button>Cards</button></Link>
                <Link to='/trainers'><button>Trainers</button></Link>
                <Link to='/about'><button>About</button></Link>
            </nav>
        </div>
    )
}

export default Header
