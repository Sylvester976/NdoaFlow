package handlers

import (
	"github.com/skip2/go-qrcode"
	"html/template"
	"log"
	"net/http"
)

type InviteData struct {
	RSVPLink     string
	WhatsAppLink string
	Phone        string
}

func IndexHandler(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("./templates/index.html")
	if err != nil {
		log.Println("Template parse error:", err)
		http.Error(w, "Template error", http.StatusInternalServerError)
		return
	}

	data := InviteData{
		RSVPLink:     "https://docs.google.com/forms/d/e/1FAIpQLSc7D6rHtvgOTa7yWzrcTi8U4Oho4PnJaiKMhRjwD3juh5__hw/viewform?usp=sharing&ouid=102791930819467703017",
		WhatsAppLink: "https://wa.me/254747660485",
		Phone:        "+254747660485",
	}

	if err := tmpl.Execute(w, data); err != nil {
		log.Println("Template execute error:", err)
		http.Error(w, "Failed to render page", http.StatusInternalServerError)
		return
	}
}

func QRHandler(w http.ResponseWriter, r *http.Request) {
	qrData := "https://drive.google.com/file/d/1E6QMTnDP0SqKDoa9gOA-MGJ1SbuAac0G/view?usp=drive_link" // this can be dynamic

	png, err := qrcode.Encode(qrData, qrcode.Medium, 256)
	if err != nil {
		http.Error(w, "QR generation failed", http.StatusInternalServerError)
		return
	}

	// Serve the QR code as PNG
	w.Header().Set("Content-Type", "image/png")
	w.Write(png)
}
