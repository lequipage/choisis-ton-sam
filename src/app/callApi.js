
module.exports = {
  addUser: (data) => {
    const formData = new FormData();
    formData.append('username', data.username);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('password', data.password);
    formData.append('driver_licence', data.driver_licence);
    fetch('http://212.47.252.1/~purpleunikorn/api-ndi/public/index.php/v1/bros', {
      method: 'POST',
      body: formData,
    })
      .then(response => console.log(response))
      .catch(err => console.log(err));
  },
  getUsers: () => fetch('http://212.47.252.1/~purpleunikorn/api-ndi/public/index.php/v1/bros', {
    method: 'GET',
  })
    .catch(err => err),
  getUser: (id) => {
    fetch('http://212.47.252.1/~purpleunikorn/api-ndi/public/index.php/v1/bros', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(id),
    });
  },
  canLogin: (data) => {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);
    return fetch('http://212.47.252.1/~purpleunikorn/api-ndi/public/index.php/v1/bros/login', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(json => json.connected);
  },
  submitEvent: (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('date', data.date);
    formData.append('place', data.place);
    formData.append('emailList', data.emailList);
    fetch('http://212.47.252.1/~purpleunikorn/api-ndi/public/index.php/v1/murge', {
      method: 'POST',
      body: formData,
    });
  },
  getEvents: () => fetch('http://212.47.252.1/~purpleunikorn/api-ndi/public/index.php/v1/murge', {
    method: 'GET',
  })
    .catch(err => err),
};
