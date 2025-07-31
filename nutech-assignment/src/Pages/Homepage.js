import NavbarComponent from "../Components/Nav";
import { useState, useEffect } from "react";
import axios from "axios";

function Homepage() {
  const [user, setUser] = useState(null);
  const [banner, setBanner] = useState(null);
  const [service, setService] = useState(null);

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
    const fetchBanner = async () => {
        try {
            const response = await axios.get('https://take-home-test-api.nutech-integrasi.com/banner');
            setBanner(response.data);
            console.log('Banner API response:', response.data);
        } catch (error) {
            console.error('Error fetching banner data:', error);
        }
        }
    const fetchService = async () => {
        try {
            const response = await axios.get('https://take-home-test-api.nutech-integrasi.com/service');
            setService(response.data);
            console.log('Service API response:', response.data);
        } catch (error) {
            console.error('Error fetching service data:', error);
        }
    };
    fetchService();    
    fetchBanner();    
    fetchUserData();
  }, []);

  return (
    <div>
      <NavbarComponent />
      <h1>Welcome to the Nutech, {user && `, ${user.first_name}`}</h1>
      {banner && (
        <div>
          <h2>Banner</h2>
          <img src={banner.banner_image} alt="Banner" />
          <p>{banner.banner_name}</p>
          <p>{banner.description}</p>
        </div>
      )}
      {banner && (
        <div>
          <ul>
            {service.map((item, index) => (
              <li key={index}>
                <h3>{item.banner_name}</h3>
                <img src={item.banner_image} alt={item.banner_name} />
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {service && (
        <div>
          <h2>Service</h2>
          <ul>
            {service.map((item, index) => (
              <li key={index}>
                <h3>{item.service_code}</h3>
                <h3>{item.service_name}</h3>
                <img src={item.service_icon} alt={item.service_name} />
                <p>{item.service_tariff}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Homepage;


