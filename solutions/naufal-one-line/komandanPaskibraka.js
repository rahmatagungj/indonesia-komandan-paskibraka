class komandanPaskibraka {
  constructor(name, member = []) {
    this.name = name
    this.member = member
  }

  findAndCountPerson(firstPerson, lastPerson) {
    return (firstPerson && lastPerson) ? { totalPerson:this.member.flatMap(x => x).slice(this.member.flatMap(x => x).indexOf(firstPerson) + 1, this.member.flatMap(x => x).indexOf(lastPerson)).length, listOfPerson: this.member.flatMap(x => x).slice(this.member.flatMap(x => x).indexOf(firstPerson) + 1, this.member.flatMap(x => x).indexOf(lastPerson))} : {totalPerson: 0, listOfPerson: []};
  }
}

// dont change the code below
exports.komandanPaskibraka = komandanPaskibraka;