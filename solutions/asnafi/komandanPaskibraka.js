class komandanPaskibraka {
  constructor(name, member = []) {
    this.name = name
    this.member = member
  }

  findAndCountPerson(firstPerson, lastPerson) {
    const paskibrakaMember = [].concat(...member)

    const firstPersonIndex = paskibrakaMember.indexOf(firstPerson)
    paskibrakaMember.splice(0, firstPersonIndex + 1)

    const lastPersonIndex = paskibrakaMember.indexOf(lastPerson)
    paskibrakaMember.splice(lastPersonIndex)

    return {
      totalPerson: paskibrakaMember.length,
      listOfPerson: paskibrakaMember
    }
  }
}

// dont change the code below
exports.komandanPaskibraka = komandanPaskibraka;