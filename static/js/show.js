document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("traditionsModal");
    const viewer = document.getElementById("traditions-pdf-viewer");
    const spinner = modal.querySelector(".loading-spinner");
    const content = document.getElementById("traditionsContent");

    const pdfUrl = "static/docs/Teso-and-Gikuyu-Traditional-Marriage-Processes.pdf"; // 🔗 Replace with your actual PDF path
    let pdfDoc = null;
    let currentPage = 1;
    let loading = false;

    // Reset modal each time it opens
    modal.addEventListener("show.bs.modal", () => {
        viewer.innerHTML = "";
        spinner.style.display = "block";
        content.style.display = "none";
        currentPage = 1;
    });

    // Load PDF when modal is shown
    modal.addEventListener("shown.bs.modal", async () => {
        try {
            pdfDoc = await pdfjsLib.getDocument(pdfUrl).promise;
            spinner.style.display = "none";
            content.style.display = "block";

            renderPage(currentPage); // first page
        } catch (e) {
            spinner.innerHTML = "<p class='text-danger'>Failed to load PDF.</p>";
        }
    });

    async function renderPage(pageNum) {
        if (loading || pageNum > pdfDoc.numPages) return;
        loading = true;

        const page = await pdfDoc.getPage(pageNum);
        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        viewer.appendChild(canvas);

        await page.render({ canvasContext: context, viewport }).promise;
        loading = false;
    }

    // Infinite scroll inside modal body
    viewer.addEventListener("scroll", () => {
        if (viewer.scrollTop + viewer.clientHeight >= viewer.scrollHeight - 50) {
            if (currentPage < pdfDoc.numPages) {
                currentPage++;
                renderPage(currentPage);
            }
        }
    });
});