document.addEventListener('DOMContentLoaded', () => {
    // Sample images data (replace this with actual data)
    const images = [
        { title: 'Image 1', src: 'https://via.placeholder.com/200', alt: 'Image 1' },
        { title: 'Image 2', src: 'https://via.placeholder.com/200', alt: 'Image 2' },
        { title: 'Image 3', src: 'https://via.placeholder.com/200', alt: 'Image 3' },
        { title: 'Image 4', src: 'https://via.placeholder.com/200', alt: 'Image 4' },
        { title: 'Image 5', src: 'https://via.placeholder.com/200', alt: 'Image 5' }
      
    ];

    const imageCardsContainer = document.getElementById('imageCards');

    // Display images on index.html
    images.forEach(image => {
        const card = document.createElement('div');
        card.classList.add('col-md-4');
        card.innerHTML = `
            <div class="card">
                <img src="${image.src}" class="card-img-top" alt="${image.alt}">
                <div class="card-body">
                    <h5 class="card-title">${image.title}</h5>
                </div>
            </div>
        `;
        imageCardsContainer.appendChild(card);
    });

    // Handle image upload (upload.html)
    const uploadForm = document.querySelector('form');
    uploadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('imageTitle').value;
        const file = document.getElementById('imageUpload').files[0];

        if (title && file) {
            alert('Image uploaded successfully!');
        } else {
            alert('Please select an image and enter a title.');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Sample images data (replace this with actual data)
    const images = [
        { title: 'Image 1', src: 'https://via.placeholder.com/200', alt: 'Image 1' },
        { title: 'Image 2', src: 'https://via.placeholder.com/200', alt: 'Image 2' },
        { title: 'Image 3', src: 'https://via.placeholder.com/200', alt: 'Image 3' },
        { title: 'Image 4', src: 'https://via.placeholder.com/200', alt: 'Image 4' },
        { title: 'Image 5', src: 'https://via.placeholder.com/200', alt: 'Image 5' }
      
    ];

    const imageCardsContainer = document.getElementById('imageCards');

    // Display images on index.html
    images.forEach(image => {
        const card = document.createElement('div');
        card.classList.add('col-md-4');
        card.innerHTML = `
            <div class="card">
                <img src="${image.src}" class="card-img-top" alt="${image.alt}">
                <div class="card-body">
                    <h5 class="card-title">${image.title}</h5>
                </div>
            </div>
        `;
        imageCardsContainer.appendChild(card);
    });

    // Handle image upload (upload.html)
    const uploadForm = document.querySelector('form');
    uploadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('imageTitle').value;
        const file = document.getElementById('imageUpload').files[0];

        if (title && file) {
            alert('Image uploaded successfully!');
        } else {
            alert('Please select an image and enter a title.');
        }
    });
});
