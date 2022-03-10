class komandanPaskibraka {
  constructor(name, member = []) {
    this.name = name
    this.member = member
  }

  findAndCountPerson(firstPerson, lastPerson) {
    return { totalPerson: this.member.reduce((a,b) => a.concat(b)).filter((val, i ) => i > this.member.reduce((a,b) => a.concat(b)).findIndex(m => m == firstPerson) && i < this.member.reduce((a,b) => a.concat(b)).findIndex(m => m == lastPerson)).length, listOfPerson: this.member.reduce((a,b) => a.concat(b)).filter((val, i ) => i > this.member.reduce((a,b) => a.concat(b)).findIndex(m => m == firstPerson) && i < this.member.reduce((a,b) => a.concat(b)).findIndex(m => m == lastPerson)) };
  }
}
// dont change the code below
exports.komandanPaskibraka = komandanPaskibraka;
