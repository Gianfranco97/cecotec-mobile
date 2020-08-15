const API = {
  serverURL: 'http://localhost:3010/',

  makeRequest(request, callback) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await fetch(request.url, {
          method: request.method || 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: request.data && JSON.stringify(request.data),
        });

        const dataJSON = await res.json();

        if (callback) callback(dataJSON);

        resolve(dataJSON);
      } catch (error) {
        reject(error);
      }
    });
  },

  getProducts() {
    return this.makeRequest({
      url: `${this.serverURL}products`,
    });
  },
};

export default API;
