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
})