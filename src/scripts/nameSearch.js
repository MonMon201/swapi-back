'use strict';

const nameSearch = (name, names) => {
  for (let i = 0; i < names.length; i++) {
    const curr = names[i].name.toUpperCase();
    const upperName = name.toUpperCase();

    if (curr.includes(upperName)) {
      return names[i].name;
    }
  }
  return [];
};

module.exports = {
  nameSearch,
};
