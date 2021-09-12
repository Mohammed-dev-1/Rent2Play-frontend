const user = JSON.parse(localStorage.getItem('user'));

class Header {
  authHeader() {
    if(user && user.accessToken) {
      return {
        'x-access-token': user.accessToken
      }
    }
  }
  userId() {  
    return (user && user.id) ? user.id : null;
  }
}

export default new Header();