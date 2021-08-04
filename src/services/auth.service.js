import axios from 'axios';

const API_URL = "http://localhost:4000/api";

class authService {
  async register(user) {
    const res = await axios
      .post(`${API_URL}/register`, user);
  
    if(res.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(res.data));
      return res.data;
    }
  }

  async logIn(user) {
    const res = await axios
      .post(`${API_URL}/login`, {
        email: user.email,
        password: user.password
      });
    
    if(res.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(res.data));
      return res.data;
    }
  }

  logout() {
    localStorage.removeItem('user');
  }
}

export default new authService();