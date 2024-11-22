db = db.getSiblingDB('musicDB');

db.singers.insertMany([
    {
        name: "Freddie Mercury",
        songs: ["Bohemian Rhapsody", "We Will Rock You", "Don't Stop Me Now"]
    },
    {
        name: "Michael Jackson",
        songs: ["Thriller", "Billie Jean", "Beat It"]
    },
    {
        name: "Whitney Houston",
        songs: ["I Will Always Love You", "I Wanna Dance with Somebody", "Greatest Love of All"]
    }
]);