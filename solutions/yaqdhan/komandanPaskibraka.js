class komandanPaskibraka {
  constructor(name, member = []) {
    this.name = name
    this.member = member
  }

  findAndCountPerson(firstPerson, lastPerson) {
    const combined = this._combineArray(this.member);
    const first = combined.indexOf(firstPerson);
    const last = combined.indexOf(lastPerson);
    const more = first > last ? first : last;
    const less = first > last ? last : first;
    const result = combined.filter((_, i) => i > less && i < more);

    return {
      totalPerson: result.length,
      listOfPerson: result
    }
  }

  _combineArray(array) {
    const result = [];
    for (const item of array) { result.push(...item) }
    return result;
  }
}

// dont change the code below
exports.komandanPaskibraka = komandanPaskibraka;
