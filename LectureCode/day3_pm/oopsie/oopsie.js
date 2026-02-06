// create a proper Player construction with
// state:
//   fallbackIndex = 0 // place to fall back on oopsie
//   progressIndex = 0 // place having been proceeding to
// and functions:
//   proceed(stride) // proceed so many places
//   fallback()      // "oopsie": go back to last start (fallback position)
//   turn()          // cash in your win, update fallback position for next turn
//

const Player = (_name) => {
  let progressIndex = 0;
  let fallbackIndex = 0;
  return {
    getFallbackIndex: () => fallbackIndex,
    getProgressIndex: () => progressIndex,
    turn: () => (fallbackIndex = progressIndex),
    fallback: () => (progressIndex = fallbackIndex),
    proceed: (stride) => (progressIndex += stride),
  };
};

const display = () => {
  for (let i = 0; i < 100; i++) {
    const field = document.getElementById("FIELD-" + i);
    field.setAttribute("CLASS", "field");
  }
  const fallbackField = document.getElementById(
    "FIELD-" + player.getFallbackIndex(),
  );
  fallbackField.setAttribute("CLASS", "field fallback");
  const progressField = document.getElementById(
    "FIELD-" + player.getProgressIndex(),
  );
  progressField.setAttribute("CLASS", "field progress");
};

const start = () => {
  const fields = document.getElementById("fields");

  for (let i = 0; i < 100; i++) {
    const field = document.createElement("DIV");
    field.setAttribute("ID", "FIELD-" + i);
    field.textContent = " ";
    fields.appendChild(field);
  }
  display();
};

const dice = () => {
  const stride = Math.round(1 + Math.random() * 5);
  //document.getElementById("dice").innerText = "" + stride; //innerText don't use!
  document.getElementById("dice").textContent = String(stride);
  if (stride === 3) {
    player.fallback();
  } else {
    player.proceed(stride);
  }
  display();
};

const turn = () => {
  player.turn();
  display();
};

player = Player("One");
