<template>
    <div>
        <div>Population: {{population}}</div>
        <div>Food: {{food}}kg</div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";
    import { game } from "../game";

    @Component
    export default class extends Vue {
        private population = game.population;
        private food = game.food;

        public created(): void {
            requestAnimationFrame(this.tick.bind(this));
        }

        private tick(): void {
            requestAnimationFrame(this.tick.bind(this));
            game.tick();
            this.population = game.population;
            this.food = game.food;
        }
    }
</script>

<style scoped lang="scss">

</style>
