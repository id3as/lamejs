function eq (a, b) {
  return (Math.abs(a) > Math.abs(b)) ?
    (Math.abs((a) - (b)) <= (Math.abs(a) * 1e-6)):
    (Math.abs((a) - (b)) <= (Math.abs(b) * 1e-6));
}

function neq(a, b) {
  return !eq(a, b);
}

module.exports = {
  EQ: eq,
  NEQ: neq
};
