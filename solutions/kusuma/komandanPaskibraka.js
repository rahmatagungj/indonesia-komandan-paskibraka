class komandanPaskibraka {
  constructor(name, member = []) {
    this.name = name;
    this.member = member;
  }

  findAndCountPerson(firstPerson, lastPerson) {
    if (!firstPerson || !lastPerson) return;
    const tempArray = this.member.flat();
    const indexFirst = tempArray.indexOf(firstPerson);
    const indexLast = tempArray.indexOf(lastPerson);
    const listOfPerson = [];
    tempArray.forEach((nama, index) => {
      if (index > indexFirst && index < indexLast) {
        listOfPerson.push(nama);
      }
    });
    return {
      totalPerson: listOfPerson.length,
      listOfPerson: listOfPerson,
    };
  }
}

// dont change the code below
exports.komandanPaskibraka = komandanPaskibraka;
