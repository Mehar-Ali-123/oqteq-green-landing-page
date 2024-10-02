import React  from 'react'; 
import { Routes, Route} from 'react-router-dom'; 
import BusinessOwnerForAll from '../pages/PremiumSubcriptionLandingPage/BusinessOwnerForAll';

function Redirect() { 
    return (
        <>
            <Routes>  
                <Route path="/" element={<BusinessOwnerForAll />} />
            </Routes>
        </>
    );
}

export default Redirect;