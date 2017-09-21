class GuessingGame {
    constructor() {
        this.imax = 0;
        this.imin = 0;
        this.imid = 0;
    }

    setRange(min, max) {
        this.imin = min;
        this.imax = max;
    }

    guess() {
        this.imid = Math.ceil(this.imin + (this.imax - this.imin) / 2);
        return this.imid;
    }

    lower() {
        this.imax = this.imid;  
    }

    greater() {
        this.imin = this.imid;
    }
}

module.exports = GuessingGame;
