document.getElementById('traditionsModal').addEventListener('shown.bs.modal', function () {
    // Point to your local worker file
    pdfjsLib.GlobalWorkerOptions.workerSrc = "/static/js/pdf.worker.min.js";

    const url = "/static/docs/Teso-and-Gikuyu-Traditional-Marriage-Processes.pdf";

    const loading = document.querySelector('#traditionsModal .loading-spinner');
    const content = document.querySelector('#traditionsModal #traditionsContent');
    const canvas = document.getElementById('pdf-preview');
    const context = canvas.getContext('2d');

    // Reset UI
    loading.style.display = 'block';
    content.style.display = 'none';
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Load and render PDF
    pdfjsLib.getDocument(url).promise.then(pdf => {
        return pdf.getPage(1);
    }).then(page => {
        const scale = 1.2;
        const viewport = page.getViewport({ scale: scale });

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = { canvasContext: context, viewport: viewport };
        return page.render(renderContext).promise;
    }).then(() => {
        loading.style.display = 'none';
        content.style.display = 'block';
    }).catch(err => {
        console.error('PDF render error:', err);
        loading.innerHTML = '<p class="text-danger">Failed to load PDF preview.</p>';
    });
});
