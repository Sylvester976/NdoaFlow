document.getElementById('kuhandaModal').addEventListener('shown.bs.modal', function () {
    const loading = document.querySelector('#kuhandaModal .loading-spinner');
    const content = document.getElementById('kuhandaContent');
    const gallery = document.getElementById('kuhanda-image-gallery');

    // Reset state
    loading.style.display = 'block';
    content.style.display = 'none';
    gallery.innerHTML = '';

    // Fetch images
    fetch('/gallery/kuhanda-ithigi')
        .then(res => res.json())
        .then(images => {
            if (!Array.isArray(images)) throw new Error('Invalid response');

            setTimeout(() => {
                images.forEach(src => {
                    const img = document.createElement('img');
                    img.src = src;
                    img.style.width = '100%';
                    img.style.height = 'auto';
                    img.style.maxWidth = '600px';
                    img.style.borderRadius = '12px';
                    img.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
                    img.style.cursor = 'pointer';
                    img.loading = 'lazy';
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




document.getElementById('aitodiarModal').addEventListener('shown.bs.modal', function () {
    const loading = document.querySelector('#aitodiarModal .loading-spinner');
    const content = document.getElementById('AitodiarContent');
    const gallery = document.getElementById('image-gallery2');

    // Reset state
    loading.style.display = 'block';
    content.style.display = 'none';
    gallery.innerHTML = '';

    // Fetch images
    fetch('/gallery/Aitodiar')
        .then(res => res.json())
        .then(images => {
            if (!Array.isArray(images)) throw new Error('Invalid response');

            setTimeout(() => {
                images.forEach(src => {
                    const img = document.createElement('img');
                    img.src = src;
                    img.style.width = '100%';
                    img.style.height = 'auto';
                    img.style.maxWidth = '600px';
                    img.style.borderRadius = '12px';
                    img.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
                    img.style.cursor = 'pointer';
                    img.loading = 'lazy';
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


// Close button
document.getElementById('CloseAitodiar').addEventListener('click', function () {
    document.getElementById('aitodiarGallery').style.display = 'none';
});

// Close button
document.getElementById('Closekuhanda').addEventListener('click', function () {
    document.getElementById('kuhandaGallery').style.display = 'none';
});


