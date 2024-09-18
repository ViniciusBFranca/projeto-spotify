document.addEventListener('DOMContentLoaded', () => {

    const artistsData = [
        { name: 'Henrique & Juliano', image: '.imagens/artista-henrique-juliano.jpg' },
        { name: 'Jorge & Matheus', image: './imagens/artista-jorge-mateus.jpg' },
        { name: 'Zé Neto & Cristiano', image: './imagens/artista-ze-neto.jpg' },
        { name: 'Gustavo Lima', image: '.imagens/artista-gustavo-limma.jpg' },
        { name: 'Luan Santana', image: '.imagens/artista-luan-santana.jpg' },
        { name: 'Matheus & Kauan', image: '.imagens/artista-mateus-kauan.jpg' },
    ];

    const albumsData = [
        { name: 'White Noise (Sleep & Relaxation Sounds)', artist: 'Sleepy John', image: '.imagens/album-white-noise.jpg' },
        { name: 'O Céu Explica Tudo (Ao Vivo)', artist: 'Henrique & Juliano', image: '.imagens/album-ceu-explica.jpg' },
        { name: 'Nada como um dia após o outro dia', artist: 'Racionais', image: '.imagens/album-vida-loka.jpg' },
        { name: 'Hit me hard and soft', artist: 'Billie Eilish', image: '.imagens/album-hit-me.jpg' },
        { name: 'Caju', artist: 'Liniker', image: '.imagens/album-caju.jpg' },
        { name: 'Escândalo Íntimo', artist: 'Luísa Sonza', image: '.imagens/album-escandalo.jpg' },
    ];

    const artistGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')

    artistsData.forEach(artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artistCard')

        artistCard.innerHTML = `
           <img src="${artist.image}" alt="imagem do ${artist.name}">
            <h3>${artist.name}</h3>
            <p>artista</p>
        `

        artistGrid.appendChild(artistCard)
    })

    albumsData.forEach( album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

       albumCard.innerHTML = `
           <img src="${album.image}" alt="imagem do ${album.name}">
            <h3>${album.name}</h3>
            <p>${album.artist}</p>
        `

        albumsGrid.appendChild(albumCard)
    })
})

