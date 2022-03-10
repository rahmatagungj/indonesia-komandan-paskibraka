class komandanPaskibraka {
  constructor(name, member = []) {
    this.name = name
    this.member = member
  }

  findAndCountPerson(firstPerson, lastPerson) {
    let result = this.member.flat().filter((v, i, a) => i > a.indexOf(firstPerson) && i < a.indexOf(lastPerson))
    return {
      totalPerson: result.length,
      listOfPerson: result
    }
  }
}

exports.komandanPaskibraka = komandanPaskibraka;
