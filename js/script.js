// Dichiaro l'array di oggetti


// Creo l'app
const { createApp } = Vue

createApp({
    data() {
        return {
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            // Output ha l'array e la variabile che indica che l'immagine attiva deve avere come indice 0
            activeImage: 0,
        }
    },

    methods: {
        checkImageVisibility(indice) {
            return (indice == this.activeImage) ? 'active' : '';
        },

        back() {
            // indice = indice; Da chiedere
            // if (indice = 0){
            if (this.activeImage !== 0) {
                this.activeImage--;
            }
            else {
                this.activeImage = this.slides.length - 1
            }
            console.log(this.activeImage);
            // }

        },

        next() {
            if (this.activeImage !== 4) {
                this.activeImage++;
            }
            else {
                this.activeImage = 0;
            }
        },
        showSlide(indice){
            this.activeImage = indice; //imposta l'activeImage all'indice, nell html è gestito al click
        }
    }






}).mount('.slider-wrapper')