class komandanPaskibraka {
  constructor(name, member = []) {
    this.name = name
    this.member = member
  }

  findAndCountPerson(firstPerson, lastPerson) {
    let state1 = false, state2 = false
    const arr = []
    for (const arr1 of this.member) {
      for (const arr2 of arr1) {
        if(arr2 === lastPerson) state2 = true;
        if (state2) break
        if (state1) arr.push(arr2)
        if (arr2 === firstPerson) state1 = true;
      }
    }
    return { totalPerson: arr.length, listOfPerson: arr }
  }
}

// dont change the code below
exports.komandanPaskibraka = komandanPaskibraka;