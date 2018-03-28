describe("FizzBuzz Tests", function() {
  it("return 1 for 1", function() {
    expect(FizzBuzzTranslate(1)).toEqual("1");
  });

  it("return 2 for 2", function() {
    expect(FizzBuzzTranslate(2)).toEqual("2");
  });

  it("return 4 for 4", function() {
    expect(FizzBuzzTranslate(4)).toEqual("4");
  });

  it("return Fizz for 3", function() {
    expect(FizzBuzzTranslate(3)).toEqual("Fizz");
  });

  it("return Fizz for 6", function() {
    expect(FizzBuzzTranslate(6)).toEqual("Fizz");
  });

  it("return Buzz for 5", function() {
    expect(FizzBuzzTranslate(5)).toEqual("Buzz");
  });

  it("return FizzBuzz for 15", function() {
    expect(FizzBuzzTranslate(15)).toEqual("FizzBuzz");
  });

});