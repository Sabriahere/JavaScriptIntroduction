const id = (x) => x;
const konst = (x) => (y) => x;
const snd = (x) => (y) => y;

const T = konst;
const F = (x) => (y) => y;
//const and = (first) => (second) => first(second(T)(F))(second(F)(F));
//const and = (first) => (second) => first(second(T)(F))(F);
//const and = (first) => (second) => first(second)(F);
const and = (a) => (b) => a(b)(a);

//const or = a => b => a (b (T) (T))(b (T) (F))
//const or = a => b => a (b (T) (T)) (b);
//const or = a => b => a (T) (b);
//const or = a => b => a (T) (b);
const or = (a) => (b) => a(a)(b);

const flip = (f) => (x) => (y) => f(y)(x);

//const not = (a) => a(F)(T);
const not = (a) => flip(a)(T)(F);

//const beq = (a) => (b) => a(b(T)(F))(b(F)(T));
//const beq = (a) => (b) => a(b)(b(F)(T));
const beq = (a) => (b) => a(b)(not(b));

/*
const Pair = (fn) => (ln) => (selector) => selector(fn)(ln);
const firstname = (fn) => (ln) => fn;
const lastname = (fn) => (ln) => ln;
*/

const Pair = (x) => (y) => (f) => f(x)(y);
const firstname = konst;
const lastname = snd;

const Left = (x) => (lh) => (rh) => lh(x);
const Right = (x) => (lh) => (rh) => rh(x);
const either = (e) => (lh) => (rh) => e(lh)(rh);
//const either = id;

// ----- special -----

const Tuple = (n) => [
  parmStore(n + 1)([])((parms) =>
    parms.reduce((accu, it) => accu(it), parms.pop())
  ), // ctor
  ...Array.from({ length: n }, (it, idx) => iOfN(n)(idx)()), // selectors
];

const iOfN =
  (n) =>
  (i) =>
  (
    value // from n curried params, take argument at position i,
  ) =>
    n === 0 ? value : (x) => iOfN(n - 1)(i - 1)(i === 0 ? x : value);

const parmStore =
  (n) =>
  (args) =>
  (
    onDone // n args to come
  ) =>
    n === 0 ? onDone(args) : (arg) => parmStore(n - 1)([...args, arg])(onDone); // store parms in array

const Choice = (n) => [
  ...Array.from({ length: n }, (it, idx) =>
    parmStore(n + 1)([])((parms) => parms[idx + 1](parms[0]))
  ), // ctors
  id,
];
