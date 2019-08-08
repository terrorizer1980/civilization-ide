class Game {
    public population: number = 100;
    public food: number = 0;

    public tick(): void {
        this.food += this.population * (Math.random() * 2);
        this.food -= this.population;
        this.food *= 0.9;
    }
}

export const game = new Game();
