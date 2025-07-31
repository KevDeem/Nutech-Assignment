import NavbarComponent from "../Components/Nav";
import { useState, useEffect } from "react";
import axios from "axios";

function Homepage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
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
      <h1>Welcome to the Nutech, {user && `, ${user.first_name}`}</h1>
      <p>This is where you can find all the information related to the assignment.</p>
    </div>
  );
}

export default Homepage;


