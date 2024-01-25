// class Player {
//   constructor(name, playerNumber, teamNumber) {
//     this.player = {
//       name: name,
//       playerNumber: playerNumber,
//       teamNumber: teamNumber,
//       status: "Idle",
//     };
//   }
// }

// class turningPlayer {
//   constructor(playerNumber) {
//     const turningPlayer = {
//       playerNumber: null,
//     };
//   }
// }

class Team {}

// Создание команд
let teamsArray = {};
let teamsCount = 4;
for (let i = 0; i < teamsCount; i++) {
  let team = new Team();
  teamsArray[`newTeam${i + 1}`] = team;
}
console.log(teamsArray);

// Импорт слов из JSON
// import * from "words.json";
// import * as data from './words.json';
// const word = data.word;
// console.log(word);
// let wordsArray;

// fetch(wordsPath)
//   .then((response) => response.json())
//   .then((data) => {
//     wordsArray = data; // Сохраняем данные в переменную
//     const first10Words = wordsArray.slice(0, 10);
//     console.log(first10Words);
//   })
//   .catch((error) => {
//     console.error("Ошибка при загрузке JSON-файла:", error);
//   });

class Card {
  _colourNumber = Math.floor(Math.random() * teamsCount) + 1;
  _picked = false;
  _hidden = true;
  constructor(container, word, action) {
    this.card = document.createElement("div");
    this.card.classList.add("card");
    this.card.classList.add("hidden");
    this.card.textContent = word;
    this.colourNumber = this._colourNumber;

    this.card.addEventListener("click", () => {
      if (
        this.picked == false &&
        this.hidden == true
        // && Player.turning == true
      ) {
        this.picked = true;
        action(this);
      } else if (this.picked == true && this.hidden == true) {
        this.picked = false;
        action(this);
      }
    });
    container.append(this.card);
  }

  set colourNumber(value) {
    this._colourNumber = value;
    if (value == 1) {
      this.card.classList.add("redCard");
    } else if (value == 2) {
      this.card.classList.add("blueCard");
    } else if (value == 3) {
      this.card.classList.add("greenCard");
    } else if (value == 4) {
      this.card.classList.add("orangeCard");
    }
  }

  get colourNumber() {
    return this._colourNumber;
  }

  set picked(value) {
    this._picked = value;
    if (value == true) {
      this.card.classList.add("picked");
    } else {
      this.card.classList.remove("picked");
    }
  }

  get picked() {
    return this._picked;
  }

  set hidden(value) {
    this._hidden = value;
    if (value == true) {
      this.card.classList.add("hidden");
    } else {
      this.card.classList.remove("hidden");
    }
  }

  get hidden() {
    return this._hidden;
  }
}

class ButtonTurn {
  _turn = true;
  constructor(container, turn) {
    this.button = document.createElement("div");
    this.button.classList.add("button-turn");
    container.append(this.button);

    this.button.addEventListener("click", () => {
        for (const cards in cardsArray) {
            const card = cardsArray[cards];
            if (card.picked == true && card.hidden == true) {
              card.picked = false;
              card.hidden = false;
        }}
    });
  }

  set turn(value) {
    if (this._turn == true) {
      this.button.classList.add("hidden");
    } else {
      this.button.classList.remove("hidden");
    }
  }

  get turn() {
    return this._turn;
  }
}

// -------------------- ЛОГИКА МАТЧА

// // Создание игроков
// let playersArray = {};
// let playersCount = 8;
// for (let i = 0; i < playersCount; i++) {
//   let player = new Player("Вася", 1, 1);
//   playersArray[`newPlayer${i + 1}`] = player;
// }
// console.log(newPlayer1);

// Создание карточек
let cardsArray = {};
let cardsCount = 16;
for (let i = 0; i < cardsCount; i++) {
  let card = new Card(
    document.getElementById("board-page"),
    `Карта ${i + 1}`,
    show
  );
  cardsArray[`newCard${i + 1}`] = card;
}
console.log(cardsArray);

function show(card) {
  console.log(card);
}

// Создания кнопки "Завершить ход"
let newButtonTurn = new ButtonTurn(
  document.getElementById("match-buttons"), true
);
console.log(newButtonTurn);

// console.log("Кол-во команд:", teamCount, ", номер цвета: ", colourNumber);
