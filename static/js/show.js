document.getElementById('traditionsBtn').addEventListener('click', function () {
    const container = document.getElementById('traditionsContainer');
    const loading = container.querySelector('.loading-spinner');
    const content = document.getElementById('traditionsContent');

    // Toggle visibility
    if (container.style.display === 'block') {
        container.style.display = 'none';
        return;
    } else {
        container.style.display = 'block';
    }

    // Reset UI
    loading.style.display = 'block';
    content.style.display = 'none';
    content.innerHTML = ''; // Clear previous pages

    // Set worker path
    pdfjsLib.GlobalWorkerOptions.workerSrc = "/static/js/pdf.worker.min.js";

    const url = "/static/docs/Teso-and-Gikuyu-Traditional-Marriage-Processes.pdf";

    // Load and render all pages
    pdfjsLib.getDocument(url).promise.then(pdf => {
        const totalPages = pdf.numPages;
        const pagePromises = [];

        for (let i = 1; i <= totalPages; i++) {
            pagePromises.push(
                pdf.getPage(i).then(page => {
                    const scale = 1.2;
                    const viewport = page.getViewport({ scale: scale });

                    // Create a canvas per page
                    const canvas = document.createElement('canvas');
                    canvas.style.maxWidth = '100%';
                    canvas.style.marginBottom = '20px';
                    canvas.style.border = '1px solid #eee';
                    canvas.style.borderRadius = '8px';

                    const context = canvas.getContext('2d');
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;

                    const renderContext = { canvasContext: context, viewport: viewport };
                    return page.render(renderContext).promise.then(() => {
                        content.appendChild(canvas);
                    });
                })
            );
        }

        return Promise.all(pagePromises);
    }).then(() => {
        loading.style.display = 'none';
        content.style.display = 'block';
    }).catch(err => {
        console.error('PDF render error:', err);
        loading.innerHTML = '<p class="text-danger">Failed to load PDF preview.</p>';
    });
});

// Close button
document.getElementById('closeTraditions').addEventListener('click', function () {
    document.getElementById('traditionsContainer').style.display = 'none';
});
