const { komandanPaskibraka } = require("../../komandanPaskibraka");

describe("Basic Functional Test", () => {
  it("komandanPaskibraka class should be exist", () => {
    expect(new komandanPaskibraka("Budi", ["Julio", "Bondan"])).toExist();
  });

  it("komandanPaskibraka should be class type", () => {
    expect(new komandanPaskibraka("Budi", ["Julio", "Bondan"])).toBeType("object");
  });

  it("komandanPaskibraka class should be not throw any error", () => {
    expect(() => new komandanPaskibraka("Budi", ["Julio", "Bondan"])).not().toThrowError();
  })
});

describe("Child Functional Test", () => {
  it("findAndCountPerson Function should be on komandanPaskibraka class", () => {
    expect(new komandanPaskibraka("Budi", ["Julio", "Bondan"]).findAndCountPerson).toExist();
  })

  it("findAndCountPerson Function should be function type", () => {
    expect(new komandanPaskibraka("Budi", ["Julio", "Bondan"]).findAndCountPerson).toBeType("function");
  })

  it("findAndCountPerson Function should not throw an error", () => {
    expect(() => new komandanPaskibraka("Budi", ["Julio", "Bondan"]).findAndCountPerson()).not().toThrowError();
  })

  it("findAndCountPerson should be return object type", () => {
    expect(new komandanPaskibraka("Budi", ["Julio", "Agung", "Bondan"]).findAndCountPerson("Julio", "Bondan")).toBeType("object");
  })
})

describe("More Test", () => {
  it("findAndCountPerson should return 0 length of person", () => {
    expect(new komandanPaskibraka("Budi", ["Julio", "Bondan"]).findAndCountPerson("Julio", "Bondan").totalPerson).toStrictEqual(0);
  })

  it("findAndCountPerson should return 5 length of person", () => {
    const member = [
      ["Budi", "Julio", "Dito", "Yudha"],
      ["Agung", "Udin", "Fitri", "Ridho"],
    ]
    const komandan = new komandanPaskibraka("Budi", member)
    expect(komandan.findAndCountPerson("Julio", "Ridho").totalPerson).toStrictEqual(5);
  })

  it("findAndCountPerson should return contain Fitri name", () => {
    const member = [
      ["Budi", "Julio", "Dito", "Yudha"],
      ["Agung", "Udin", "Fitri", "Ridho"],
    ]
    const komandan = new komandanPaskibraka("Budi", member)
    expect(komandan.findAndCountPerson("Julio", "Ridho").listOfPerson).toContain("Fitri");
  })

  it("findAndCountPerson should return contain Agung name", () => {
    const member = [
      ["Budi", "Julio", "Dito", "Yudha"],
      ["Agung", "Udin", "Fitri", "Ridho"],
    ]
    const komandan = new komandanPaskibraka("Budi", member)
    expect(komandan.findAndCountPerson("Julio", "Ridho").listOfPerson).toContain("Agung");
  })
})

describe("Deep Test", () => {
  it("Test Case #1", () => {
    const member = [
      ["Budi", "Julio", "Dito", "Yudha"],
      ["Agung"],
    ]
    const komandan = new komandanPaskibraka("Budi", member)
    expect(komandan.findAndCountPerson("Budi", "Agung").totalPerson).toStrictEqual(3);
  })

  it("Test Case #2", () => {
    const member = [
      ["Budi", "Julio", "Dito", "Yudha"],
      ["Agung"],
    ]
    const komandan = new komandanPaskibraka("Budi", member)
    expect(komandan.findAndCountPerson("Budi", "Agung").listOfPerson).toContain("Yudha");
  })

  it("Test Case #3", () => {
    const member = [
      ["Budi", "Julio", "Dito", "Yudha"],
      ["Agung", "Udin", "Fitri", "Ridho"],
      ["Alfa", "Budi", "Caca", "Dito"],
      ["Eko", "Firman", "Gede", "Hendra"],
      ["Icha", "Julio", "Kaca", "Lulu"],
    ]

    const komandan = new komandanPaskibraka("Budi", member)
    expect(komandan.findAndCountPerson("Julio", "Hendra").listOfPerson).toContain("Ridho");
  })

  it("Test Case #4", () => {
    const member = [
      ["Budi", "Julio", "Dito", "Yudha"],
      ["Agung", "Udin", "Fitri", "Ridho"],
      ["Alfa", "Budi", "Caca", "Dito"],
      ["Eko", "Firman", "Gede", "Hendra"],
      ["Icha", "Julio", "Kaca", "Lulu"],
    ]

    const komandan = new komandanPaskibraka("Budi", member)
    expect(komandan.findAndCountPerson("Julio", "Hendra").totalPerson).toStrictEqual(13);
  })

  it("Test Case #5", () => {
    const member = [
      ["Budi", "Julio", "Dito", "Yudha"],
      ["Agung", "Udin", "Fitri", "Ridho"],
      ["Alfa", "Budi", "Caca", "Dito"],
      ["Eko", "Firman", "Gede", "Hendra"],
      ["Icha", "Julio", "Kaca", "Lulu"],
    ]

    const komandan = new komandanPaskibraka("Budi", member)
    const expected = ["Dito","Yudha","Agung","Udin","Fitri","Ridho","Alfa","Budi","Caca","Dito","Eko","Firman","Gede"]
    expect(komandan.findAndCountPerson("Julio", "Hendra").listOfPerson).toEqual(expected)
  })

  it("Test Case #6", () => {
    const member = [
      ["Budi", "Julio", false, "Yudha"],
      ["Agung", "Udin", "Fitri", "Ridho"],
      ["Alfa", "Budi", "Caca", "Dito"],
      ["Eko", "Firman", "Gede", "Hendra"],
      ["Icha", "Julio", "Kaca", "Lulu"],
    ]

    const komandan = new komandanPaskibraka("Budi", member)
    const expected = [false,"Yudha","Agung","Udin","Fitri","Ridho","Alfa","Budi","Caca","Dito","Eko","Firman","Gede"]
    expect(komandan.findAndCountPerson("Julio", "Hendra").listOfPerson).toEqual(expected)
  })

  it("Test Case #7", () => {
    const member = [
      ["Budi", "Julio", false, "Yudha"],
      ["Agung", "Udin", "Fitri", "Ridho"],
      ["Alfa", "Budi", "Caca", "Dito"],
      ["Eko", "Firman", "Gede", "Hendra"],
      ["Icha", "Julio", "Kaca", "Lulu"],
    ]

    const komandan = new komandanPaskibraka("Budi", member)
    const expected = []
    expect(komandan.findAndCountPerson(false, "Hendra").listOfPerson).toEqual(expected)
  })

  it("Test Case #8", () => {
    const member = [
      ["Budi", "Julio", true, "Yudha"],
      ["Agung", "Udin", "Fitri", "Ridho"],
      ["Alfa", "Budi", "Caca", "Dito"],
      ["Eko", "Firman", "Gede", "Hendra"],
      ["Icha", "Julio", "Kaca", "Lulu"],
    ]

    const komandan = new komandanPaskibraka("Budi", member)
    expect(komandan.findAndCountPerson(true, "Hendra").totalPerson).toStrictEqual(0)
  })

  it("Test Case #10", () => {
    const member = [
      ["Budi", "Julio", "Yudha"],
      ["Agung", "Udin Fitri", "Fitri Andini", "Ridho"],
      ["Alfa", "Budi", "Caca", "Dito"],
      ["Eko", "Firman", "Gede", "Hendra"],
      ["Icha", "Julio", "Kaca", "Lulu"],
    ]

    const komandan = new komandanPaskibraka("Budi", member)
    const expected = ["Ridho", "Alfa", "Budi", "Caca", "Dito", "Eko", "Firman", "Gede"]
    expect(komandan.findAndCountPerson("Fitri Andini", "Hendra").listOfPerson).toEqual(expected)
  })

  it("Test Case #9", () => {
    const member = [
      ["Budi", "Julio", "Yudha"],
      ["Agung", "Udin", "Fitri", "Ridho"],
      ["Alfa", "Budi", "Caca", "Dito"],
      ["Eko", "Firman", "Gede", "Hendra"],
      ["Icha", "Julio", "Kaca", "Lulu"],
    ]

    const komandan = new komandanPaskibraka("Budi", member)
    const expected = ["Udin", "Fitri", "Ridho", "Alfa"]
    expect(komandan.findAndCountPerson("Agung", "Budi").listOfPerson).toEqual(expected)
  })  

  it("Test Case #11", () => {
    const member = [
      ["Budi", "Julio", "Yudha"],
      ["Agung", "Udin", "Fitri", "Ridho"],
      ["Alfa", "Budi", "Caca", "Dito"],
      ["Eko", "Firman", "Gede", "Hendra"],
      ["Icha", "Julio", "Kaca", "Lulu"],
    ]

    const komandan = new komandanPaskibraka("Budi", member)
    const expected = ["Udin", "Fitri", "Ridho", "Alfa", "Budi", "Caca", "Dito", "Eko", "Firman", "Gede"]
    expect(komandan.findAndCountPerson("agung", "hendra").listOfPerson).toEqual(expected)
  })

  it("Test Case #12", () => {
    const member = [
      ["Budi", "123123", "Yudha"],
      ["Agung", "Udin", "Fitri", "Ridho"],
      ["Alfa", "Budi", "Caca", "Dito"],
      ["Eko", "Firman", "Gede", "Hendra"],
      ["Icha", "Julio", "Kaca", "Lulu"],
    ]

    const komandan = new komandanPaskibraka("Budi", member)
    expect(komandan.findAndCountPerson(123123, "hendra").totalPerson).toStrictEqual(0)
  })

  it("Test Case #13", () => {
    const member = [
      ["Budi", "123123", "Yudha"],
      ["Agung", "Udin", "Fitri", "Ridho"],
      ["Alfa", "Budi", "Caca", "Dito"],
      ["Eko", "Firman", "Gede", "Hendra"],
      ["Icha", "Julio", "Kaca", "Lulu"],
    ]

    const komandan = new komandanPaskibraka("Budi", member)
    const expected = ["Yudha", "Agung", "Udin", "Fitri", "Ridho", "Alfa", "Budi", "Caca", "Dito", "Eko", "Firman", "Gede"]
    expect(komandan.findAndCountPerson("123123", "hendra").listOfPerson).toEqual(expected)
  })

  it("Test Case #14", () => {
    const member = [
      ["Budi", "hmm'q", "Yudha"],
      ["Agung", "Udin", "Fitri", "Ridho"],
      ["Alfa", "Budi", "Caca", "Dito"],
      ["Eko", "Firman", "Gede", "Hendra"],
      ["Icha", "Julio", "Kaca", "Lulu"],
    ]

    const komandan = new komandanPaskibraka("Budi", member)
    const expected = ["Yudha", "Agung", "Udin", "Fitri", "Ridho", "Alfa", "Budi", "Caca", "Dito", "Eko", "Firman", "Gede"]
    expect(komandan.findAndCountPerson("hmm'q", "hendra").listOfPerson).toEqual(expected)
  })

  it("Test Case #15", () => {
    const member = [
      ["Budi", "hmm\"q", "Yudha"],
      ["Agung", "Udin", "Fitri", "Ridho"],
      ["Alfa", "Budi", "Caca", "Dito"],
      ["Eko", "Firman", "Gede", "Hendra"],
      ["Icha", "Julio", "Kaca", "Lulu"],
    ]

    const komandan = new komandanPaskibraka("Budi", member)
    const expected = ["Yudha", "Agung", "Udin", "Fitri", "Ridho", "Alfa", "Budi", "Caca", "Dito", "Eko", "Firman", "Gede"]
    expect(komandan.findAndCountPerson("hmm\"q", "hendra").listOfPerson).toEqual(expected)
  })

  it("Test Case #16", () => {
    const member = [
      ["Budi", "hmm", "༄ ᶦᶰᵈ᭄ℛ \ᗪXℛ²³"],
      ["Agung", "Udin", "Fitri", "Ridho"],
      ["Alfa", "Budi", "Caca", "Dito"],
      ["Eko", "Firman", "Gede", "Hendra"],
      ["Icha", "Julio", "Kaca", "Lulu"],
    ]

    const komandan = new komandanPaskibraka("Budi", member)
    const expected = ["Agung", "Udin", "Fitri", "Ridho", "Alfa", "Budi", "Caca", "Dito", "Eko", "Firman", "Gede"]
    expect(komandan.findAndCountPerson("༄ ᶦᶰᵈ᭄ℛ \ᗪXℛ²³", "hendra").listOfPerson).toEqual(expected)
  })

  it("Test Case #17", () => {
    const member = [
      ["Budi", "hmm", "༄ ᶦᶰᵈ᭄ℛ \ᗪXℛ²³"],
      ["Agung", "ⓅⓇⒺⒹⒶⓉⓄⓇ", "Fitri", "Ridho"],
      ["Alfa", "Budi", "Caca", "Dito"],
      ["Eko", "Firman", "Gede", "Hendra"],
      ["Icha", "Julio", "Kaca", "Lulu"],
    ]

    const komandan = new komandanPaskibraka("Budi", member)
    const expected = ["༄ ᶦᶰᵈ᭄ℛ \ᗪXℛ²³", "Agung", "ⓅⓇⒺⒹⒶⓉⓄⓇ", "Fitri", "Ridho", "Alfa", "Budi", "Caca", "Dito", "Eko", "Firman", "Gede"]
    expect(komandan.findAndCountPerson("hmm", "hendra").listOfPerson).toEqual(expected)
  })
})