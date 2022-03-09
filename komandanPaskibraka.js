class komandanPaskibraka {
  constructor(name, member = []) {
    this.name = name
    this.member = member
  }

  findAndCountPerson(firstPerson, lastPerson) {
    const personFilter = data => {
      const firstIndex = data.findIndex(first => {
        return first === firstPerson;
      });

      const lastIndex = data.findIndex(last => {
        return last === lastPerson;
      })

      return data.filter((person, index) => {
        if (firstIndex < index && lastIndex > index) {
          return person;
        };
      });
    };

    const checkObject = data => {
      if (data.length >= 3) {
        return personFilter(data);
      } else {
        return [];
      };
    };

    if (typeof (this.member[0]) === 'object') {
      const appendPerson = [];
      for (const itemPerson of this.member) {
        appendPerson.push(...itemPerson)
      };
        return {
          totalPerson: checkObject(appendPerson).length,
          listOfPerson: checkObject(appendPerson)
        };
    } else {
      return {
        totalPerson: checkObject(this.member).length,
        listOfPerson: checkObject(this.member)
      };
    
    };
  };
};

// dont change the code below
exports.komandanPaskibraka = komandanPaskibraka;