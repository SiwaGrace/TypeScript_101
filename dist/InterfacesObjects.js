"use strict";
// **********************
// ----------------------
// Interfaces & Objects
// ----------------------
// **********************
Object.defineProperty(exports, "__esModule", { value: true });
const movies = [
    { title: "Inception", rating: 9, genre: "Sci-Fi" },
    { title: "The Dark Knight", rating: 9, genre: "Action" },
    { title: "Interstellar", rating: 8.5, genre: "Sci-Fi" },
    { title: "The Shawshank Redemption", rating: 9.3, genre: "Drama" },
    { title: "Parasite", rating: 8.6, genre: "Thriller" },
    { title: "La La Land", rating: 8, genre: "Romance" },
    { title: "Avengers: Endgame", rating: 8.4, genre: "Action" },
    { title: "Joker", rating: 8.5, genre: "Drama" },
    { title: "Frozen II", rating: 7, genre: "Animation" },
    { title: "The Godfather", rating: 9.2, genre: "Crime" },
    // 👇 Medium-rated
    { title: "The Flash", rating: 6.9, genre: "Action" },
    { title: "Ant-Man and the Wasp: Quantumania", rating: 6.5, genre: "Sci-Fi" },
    { title: "The Marvels", rating: 6.2, genre: "Action" },
    { title: "Lightyear", rating: 6.8, genre: "Animation" },
    { title: "Jumanji: The Next Level", rating: 7.1, genre: "Adventure" },
    // 👇 Low-rated
    { title: "Cats", rating: 3.8, genre: "Musical" },
    { title: "Morbius", rating: 5.2, genre: "Action" },
    { title: "The Room", rating: 3.7, genre: "Drama" },
    { title: "Emoji Movie", rating: 3.3, genre: "Animation" },
    { title: "Sharknado", rating: 4, genre: "Comedy" },
];
movies.forEach(({ title, rating }) => {
    if (rating < 5) {
        console.log(`this movies sucks:${title}`);
    }
});
//# sourceMappingURL=InterfacesObjects.js.map