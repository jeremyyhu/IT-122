const albums = [
    {
        artist: 'Olivia Rodrigo',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Video115/v4/51/da/e5/51dae5db-7b59-fa89-10b6-8113b64da0dc/Jobb5abba3a-cc0d-4e64-8006-989bc075e79e-113516901-PreviewImage_PreviewImageIntermediate_preview_image_nonvideo_vfcs144571853-Time1620955600856.png/632x632bb.webp',
        genre: 'Pop',
        title: 'SOUR',
        year: 2021
    },
    {
        artist: 'Olivia Rodrigo',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/5a/4c/6a/5a4c6aac-318a-b5a6-a481-15141d65fddc/24UMGIM30484.rgb.jpg/632x632bb.webp',
        genre: 'Pop',
        title: 'GUTS (spilled)',
        year: 2023
    },
    {
        artist: 'Wendy',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/9c/18/3e/9c183ee9-bdd7-7f97-b56a-536b0625672a/24UMGIM20636.rgb.jpg/632x632bb.webp',
        genre: 'K-Pop',
        title: 'Wish You Hell',
        year: 2024
    },
    {
        artist: 'Hebe Tien',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/b1/43/db/b143db3c-5b3c-8db3-5af9-3b8d4aac88eb/hebe1400x1400.jpg/632x632bb.webp',
        genre: 'Mandopop',
        title: 'Day by Day',
        year: 2016
    },
    {
        artist: 'IU',
        cover: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f8/75/d2/f875d2e2-1317-7f5a-2025-7ca9513dbb3d/COVER-.jpg/632x632bb.webp',
        genre: 'K-Pop',
        title: 'CHAT-SHIRE',
        year: 2015
    }
];

const getAll = () => {
    return albums;
}

const getItem = (title) => {
    return albums.find((album => {
        return album.title === title;
    }));
}

export { getAll, getItem }