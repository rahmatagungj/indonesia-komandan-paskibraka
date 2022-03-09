class komandanPaskibraka {
  constructor(name, member = []) {
    this.name = name
    this.member = member
  }

  findAndCountPerson(firstPerson, lastPerson) {
    const allMember = this.#convertToSingleArray(this.member)
    const firstPersonIndex = allMember.indexOf(firstPerson)
    const lastPersonIndex = allMember.indexOf(lastPerson)

    let allPersonFromFristToLast = []
    for (let i = firstPersonIndex + 1; i <= lastPersonIndex - 1; i++) {
      allPersonFromFristToLast.push(allMember[i])
    }

    return {
      totalPerson: allPersonFromFristToLast.length, 
      listOfPerson: allPersonFromFristToLast
    }
  }

  #convertToSingleArray = (array) => {
    return array.reduce((acc, curr) => acc.concat(curr), [])
  }
}

// dont change the code below
exports.komandanPaskibraka = komandanPaskibraka;
