class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }

    guess() {
      this.center = Math.round((this.min + this.max) / 2);

      return this.center;
    }

    lower() {
      this.max = this.center;
    }

    greater() {
      this.min = this.center;
    }
}

module.exports = GuessingGame;
