document.getElementById('kuhandaBtn').addEventListener('click', function (e) {
    e.preventDefault();

    const galleryContainer = document.getElementById('kuhandaGallery');
    const loading = galleryContainer.querySelector('.loading-spinner');
    const content = document.getElementById('kuhandaContent');
    const gallery = document.getElementById('kuhanda-image-gallery');

    // Toggle visibility
    if (galleryContainer.style.display === 'block') {
        galleryContainer.style.display = 'none';
        return;
    } else {
        galleryContainer.style.display = 'block';
    }

    // Reset state
    loading.style.display = 'block';
    content.style.display = 'none';
    gallery.innerHTML = '';

    // Fetch images
    fetch('/gallery/kuhanda-ithigi')
        .then(res => res.json())
        .then(images => {
            console.log('Images response:', images);
            if (!Array.isArray(images)) throw new Error('Invalid response');

            setTimeout(() => {
                images.forEach(src => {
                    const img = document.createElement('img');
                    img.src = src;
                    img.style.maxWidth = '80%';
                    img.style.borderRadius = '12px';
                    img.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
                    img.style.cursor = 'pointer';
                    gallery.appendChild(img);
                });

                loading.style.display = 'none';
                content.style.display = 'block';

            }, 1000);
        })
        .catch(err => {
            console.error('Gallery error:', err);
            loading.innerHTML = '<p class="text-danger">Failed to load images.</p>';
        });
});



document.getElementById('aitodiarBtn').addEventListener('click', function (e) {
    e.preventDefault();

    const galleryContainer = document.getElementById('aitodiarGallery');
    const loading = galleryContainer.querySelector('.loading-spinner');
    const content = document.getElementById('AitodiarContent');
    const gallery = document.getElementById('image-gallery2');

    // Toggle visibility
    if (galleryContainer.style.display === 'block') {
        galleryContainer.style.display = 'none';
        return;
    } else {
        galleryContainer.style.display = 'block';
    }

    // Reset state
    loading.style.display = 'block';
    content.style.display = 'none';
    gallery.innerHTML = '';

    // Fetch images
    fetch('/gallery/Aitodiar')
        .then(res => res.json())
        .then(images => {
            console.log('Images response:', images);
            if (!Array.isArray(images)) throw new Error('Invalid response');

            setTimeout(() => {
                images.forEach(src => {
                    const img = document.createElement('img');
                    img.src = src;
                    img.style.maxWidth = '80%';
                    img.style.borderRadius = '12px';
                    img.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
                    img.style.cursor = 'pointer';
                    gallery.appendChild(img);
                });

                loading.style.display = 'none';
                content.style.display = 'block';

            }, 1000);
        })
        .catch(err => {
            console.error('Gallery error:', err);
            loading.innerHTML = '<p class="text-danger">Failed to load images.</p>';
        });
});


