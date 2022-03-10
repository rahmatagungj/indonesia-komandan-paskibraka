class komandanPaskibraka {
  constructor(name, member = []) {
    this.name = name
    this.member = member
  }

  findAndCountPerson(firstPerson, lastPerson) {
    if (typeof firstPerson == "undefined" || lastPerson == "undefined") return { totalPerson: 0, listOfPerson: [] }

    const paskibrakaMember = [].concat(...this.member)

    paskibrakaMember.splice(0, paskibrakaMember.indexOf(firstPerson) + 1)
    paskibrakaMember.splice(paskibrakaMember.indexOf(lastPerson))

    return {
      totalPerson: paskibrakaMember.length,
      listOfPerson: paskibrakaMember
    }
  }
}

// dont change the code below
exports.komandanPaskibraka = komandanPaskibraka;