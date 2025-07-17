// Placeholder: replace this with your actual Pinterest‐API call / static endpoint
function getRandomPinterestImage() {
    // e.g. return fetchPinterestRandomImageUrl();
    return `https://via.placeholder.com/300x200?text=Random+Pinterest+Image`;
}

export const videos = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        description:
            "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        category: "Drama",
        thumbnail: getRandomPinterestImage(),
        videoUrl: "https://www.youtube.com/embed/6hB3S9bIaco",
        created_at: "1994-09-23T00:00:00Z",
        updated_at: "2023-10-01T00:00:00Z",
    },
    {
        id: 2,
        title: "The Godfather",
        description:
            "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
        category: "Crime",
        thumbnail: getRandomPinterestImage(),
        videoUrl: "https://www.youtube.com/embed/sY1S34973zA",
        created_at: "1972-03-14T00:00:00Z",
        updated_at: "2023-10-01T00:00:00Z",
    },
    {
        id: 3,
        title: "The Dark Knight",
        description:
            "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        category: "Action",
        thumbnail: getRandomPinterestImage(),
        videoUrl:
            "https://www.youtube.com/embed/EXeTwQWrcwY?si=V9zbL0DxC59BhiWD",
        created_at: "2008-07-18T00:00:00Z",
        updated_at: "2023-10-01T00:00:00Z",
    },
    {
        id: 4,
        title: "Pulp Fiction",
        description:
            "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        category: "Crime",
        thumbnail: getRandomPinterestImage(),
        videoUrl: "https://www.youtube.com/embed/s7EdQ4FqbhY",
        created_at: "1994-10-14T00:00:00Z",
        updated_at: "2023-10-01T00:00:00Z",
    },
    {
        id: 5,
        title: "Forrest Gump",
        description:
            "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other history unfold through the perspective of an Alabama man.",
        category: "Drama",
        thumbnail: getRandomPinterestImage(),
        videoUrl: "https://www.youtube.com/embed/bLvqoHBptjg",
        created_at: "1994-07-06T00:00:00Z",
        updated_at: "2023-10-01T00:00:00Z",
    },
    {
        id: 6,
        title: "Inception",
        description:
            "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        category: "Sci‑Fi",
        thumbnail: getRandomPinterestImage(),
        videoUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
        created_at: "2010-07-16T00:00:00Z",
        updated_at: "2023-10-01T00:00:00Z",
    },
    {
        id: 7,
        title: "The Matrix",
        description:
            "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
        category: "Sci‑Fi",
        thumbnail: getRandomPinterestImage(),
        videoUrl: "https://www.youtube.com/embed/vKQi3bBA1y8",
        created_at: "1999-03-31T00:00:00Z",
        updated_at: "2023-10-01T00:00:00Z",
    },
    {
        id: 8,
        title: "Fight Club",
        description:
            "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
        category: "Drama",
        thumbnail: getRandomPinterestImage(),
        videoUrl: "https://www.youtube.com/embed/SUXWAEX2jlg",
        created_at: "1999-10-15T00:00:00Z",
        updated_at: "2023-10-01T00:00:00Z",
    },
    {
        id: 9,
        title: "The Lord of the Rings: The Return of the King",
        description:
            "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        category: "Fantasy",
        thumbnail: getRandomPinterestImage(),
        videoUrl: "https://www.youtube.com/embed/r5X-hFf6Bwo",
        created_at: "2003-12-17T00:00:00Z",
        updated_at: "2023-10-01T00:00:00Z",
    },
    {
        id: 10,
        title: "Interstellar",
        description:
            "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        category: "Sci‑Fi",
        thumbnail: getRandomPinterestImage(),
        videoUrl: "https://www.youtube.com/embed/zSWdZVtXT7E",
        created_at: "2014-11-07T00:00:00Z",
        updated_at: "2023-10-01T00:00:00Z",
    },
];

export default videos;
