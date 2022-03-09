class komandanPaskibraka {
  constructor(name, member = []) {
    this.name = name
    this.member = member
  }

  findAndCountPerson(firstPerson, lastPerson) {
    const sum = this.member.flatMap(x => x)
    const diffArr = sum.slice(sum.indexOf(firstPerson) + 1, sum.indexOf(lastPerson))
    return (firstPerson && lastPerson) ? { totalPerson: diffArr.length, listOfPerson: diffArr} : {totalPerson: 0, listOfPerson: []};
  }
}

// dont change the code below
exports.komandanPaskibraka = komandanPaskibraka;