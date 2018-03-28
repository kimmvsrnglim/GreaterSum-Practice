function FizzBuzzTranslate(number) {
  if(shouldFizz(number) && shouldBuzz(number)) return "FizzBuzz";
  if(shouldFizz(number)) return "Fizz";
  if(shouldBuzz(number)) return "Buzz";
  return number.toString();
}

function shouldFizz(number) {
  return number % 3 == 0;
}

function shouldBuzz(number) {
  return number % 5 == 0;
}