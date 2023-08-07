function addSquares(a, b) {
  const square = (x) => {//arrow function
    return x * x;
  };

  let sqrA = square(a);
  let sqrB = square(b);
  return sqrA + sqrB;
}
console.log(addSquares(2, 3));
//opniao do professor: sempre que fizer uma funcao dentro de outra funcao, fazer a de dentro como arrowFunction =>
