import React  from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt id="tilt" className="br2 shadow-2" options={{max: 55}} 
            style={{ height: '150px',width: '150px',
            background: 'linear-gradient(86deg , #FF5EDF 0%,#04C8DE 100%)'}}>
                <div className="Tilt-inner pa3">
                    <img alt="logo" src={brain}/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;