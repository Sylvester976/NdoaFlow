document.getElementById('kuhandaModal').addEventListener('shown.bs.modal', function () {
    const loading = document.querySelector('#kuhandaModal .loading-spinner');
    const content = document.querySelector('#kuhandaModal #kuhandaContent');
    const gallery = document.getElementById('image-gallery');
    const viewFull = document.getElementById('view-full-kuhanda');

    loading.style.display = 'block';
    content.style.display = 'none';
    gallery.innerHTML = '';

    fetch('/gallery/kuhanda-ithigi')
        .then(res => res.json())
        .then(images => {
            console.log('Images response:', images); // <--- add this
            if (!Array.isArray(images)) throw new Error('Invalid response');

            setTimeout(() => {
                images.forEach(src => {
                    const img = document.createElement('img');
                    img.src = src;
                    img.style.maxWidth = '80%';
                    img.style.borderRadius = '12px';
                    img.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
                    img.style.cursor = 'pointer';
                    img.addEventListener('click', () => {
                        viewFull.href = src;
                    });
                    gallery.appendChild(img);
                });

                loading.style.display = 'none';
                content.style.display = 'block';

                if (images.length > 0) {
                    viewFull.href = '/static/docs/kuhanda-ithigi.pdf';
                }
            }, 1000);
        })
        .catch(err => {
            console.error('Gallery error:', err);
            loading.innerHTML = '<p class="text-danger">Failed to load images.</p>';
        });

});


document.getElementById('aitodiarModal').addEventListener('shown.bs.modal', function () {
    const loading = document.querySelector('#aitodiarModal .loading-spinner');
    const content = document.querySelector('#aitodiarModal #AitodiarContent');
    const gallery = document.getElementById('image-gallery2');
    const viewFull = document.getElementById('view-full-Alitodiar');

    loading.style.display = 'block';
    content.style.display = 'none';
    gallery.innerHTML = '';

    fetch('/gallery/Aitodiar')
        .then(res => res.json())
        .then(images => {
            console.log('Images response:', images); // <--- add this
            if (!Array.isArray(images)) throw new Error('Invalid response');

            setTimeout(() => {
                images.forEach(src => {
                    const img = document.createElement('img');
                    img.src = src;
                    img.style.maxWidth = '80%';
                    img.style.borderRadius = '12px';
                    img.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
                    img.style.cursor = 'pointer';
                    img.addEventListener('click', () => {
                        viewFull.href = src;
                    });
                    gallery.appendChild(img);
                });

                loading.style.display = 'none';
                content.style.display = 'block';

                if (images.length > 0) {
                    viewFull.href = '/static/docs/Alitodiar.pdf';
                }
            }, 1000);
        })
        .catch(err => {
            console.error('Gallery error:', err);
            loading.innerHTML = '<p class="text-danger">Failed to load images.</p>';
        });

});

