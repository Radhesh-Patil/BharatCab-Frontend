import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { removeToken } from '../../service/SessionStorageService';

export default function LogoutPage() {
  const navigate = useNavigate();

  useEffect(() => {

   removeToken();
    navigate('/'); 
  }, [navigate]);

  return (
    <div>
      <h1>Logging Out...</h1>
    </div>
  );
}

// const Logout =()=>{
//   const handleLogout =()=>{
//     removeToken();
//     navigate('/');
//   },[navigate]);

//   return <button onClick={handleLogout}>Logout</button>;
// };
// export default Logout;