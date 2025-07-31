import NavbarComponent from "./Components/Nav";
import { useState, useEffect } from "react";
import axios from "axios";

function Userprofile() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                console.log('Token:', token);
                const response = await axios.get('https://take-home-test-api.nutech-integrasi.com/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUser(response.data);
                console.log('User API response:', response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUserData();
    }, []);

  return (
    <div>
      <NavbarComponent />
      <h1>Profile Page</h1>
      {user ? (
        <div>
          <p>Name: {user.first_name} {user.last_name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Userprofile;