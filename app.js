const app = Vue.createApp({
    data() {
        return {
            name: "Dimas maendra",
            age: 26,
            link_image: "https://cdn.cloudflare.steamstatic.com/steam/apps/921570/capsule_616x353.jpg?t=1663152377"
        }
    },
    methods: {
        countAge(){
            return this.age + 5;
        },
        randomNumber() {
            return randomNumber =Math.random() * (1 - 0);
        }
    }
})

app.mount('#assignment');