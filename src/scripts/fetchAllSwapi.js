'use strict';

const swapi = require('swapi-node');

const fetchAllSwapi = (acc, link) =>
  new Promise((resolve) => {
    swapi
      .get(link)
      .then((data) => {
        acc = acc.concat(data.results);
        if (data.next) {
          const num = parseInt(link.slice(link.length - 1)) + 1;
          link = link.slice(0, link.length - 1) + num;
          resolve(fetchAllSwapi(acc, link));
        } else {
          resolve(acc);
        }
      })
      .catch((err) => {
        throw err;
      });
  });

module.exports = {
  fetchAllSwapi,
};
