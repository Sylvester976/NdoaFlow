document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("traditionsModal");
    const viewer = document.getElementById("traditions-pdf-viewer");
    const spinner = modal.querySelector(".loading-spinner");
    const content = document.getElementById("traditionsContent");

    const pdfUrl = "static/docs/Teso-and-Gikuyu-Traditional-Marriage-Processes.pdf"; // 🔗 Replace with your actual PDF path
    let pdfDoc = null;

    // Reset modal each time it opens
    modal.addEventListener("show.bs.modal", () => {
        viewer.innerHTML = "";
        spinner.style.display = "block";
        content.style.display = "none";
    });

    // Load PDF when modal is shown
    modal.addEventListener("shown.bs.modal", async () => {
        try {
            pdfDoc = await pdfjsLib.getDocument(pdfUrl).promise;
            spinner.style.display = "none";
            content.style.display = "block";

            // render all pages in order
            for (let i = 1; i <= pdfDoc.numPages; i++) {
                await renderPage(i);
            }
        } catch (e) {
            spinner.innerHTML = "<p class='text-danger'>Failed to load PDF.</p>";
        }
    });

    async function renderPage(pageNum) {
        const page = await pdfDoc.getPage(pageNum);

        // smaller scale for mobile
        const scale = window.innerWidth < 768 ? 1.0 : 1.5;
        const viewport = page.getViewport({ scale });

        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        viewer.appendChild(canvas);

        await page.render({ canvasContext: context, viewport }).promise;
    }
});
