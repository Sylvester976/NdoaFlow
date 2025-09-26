package handlers

import (
	"encoding/json"
	"html/template"
	"log"
	"net/http"
	"os"
	"path/filepath"
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
		Phone:        "+254 747 660 485",
	}

	if err := tmpl.Execute(w, data); err != nil {
		log.Println("Template execute error:", err)
		http.Error(w, "Failed to render page", http.StatusInternalServerError)
		return
	}
}

func InviteHandler(w http.ResponseWriter, r *http.Request) {
	// Path to your PDF file (can be dynamic)
	pdfPath := "./static/docs/Invite_Card.pdf"

	// Set headers to open in browser
	w.Header().Set("Content-Type", "application/pdf")
	w.Header().Set("Content-Disposition", "inline; filename=Invite_Card.pdf")

	// Serve the file
	http.ServeFile(w, r, pdfPath)
}

func GalleryHandler(w http.ResponseWriter, r *http.Request) {
	imageDir := "./static/images/kuhanda-ithigi"

	files, err := os.ReadDir(imageDir)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	var images []string
	for _, f := range files {
		if !f.IsDir() {
			ext := filepath.Ext(f.Name())
			if ext == ".jpg" || ext == ".jpeg" || ext == ".png" || ext == ".webp" {
				images = append(images, "/static/images/kuhanda-ithigi/"+f.Name())
			}
		}
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(images)
}

func NewGalleryHandler(w http.ResponseWriter, r *http.Request) {
	imageDir := "./static/images/Aitodiar"

	files, err := os.ReadDir(imageDir)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	var images []string
	for _, f := range files {
		if !f.IsDir() {
			ext := filepath.Ext(f.Name())
			if ext == ".jpg" || ext == ".jpeg" || ext == ".png" || ext == ".webp" {
				images = append(images, "/static/images/Aitodiar/"+f.Name())
			}
		}
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(images)
}

func MarriageTraditionsHandler(w http.ResponseWriter, r *http.Request) {
	// Path to your PDF file (can be dynamic)
	pdfPath := "./static/docs/Teso-and-Gikuyu-Traditional-Marriage-Processes.pdf"

	// Set headers to open in browser
	w.Header().Set("Content-Type", "application/pdf")
	w.Header().Set("Content-Disposition", "inline; filename=Teso-and-Gikuyu-Traditional-Marriage-Processes.pdf")

	// Serve the file
	http.ServeFile(w, r, pdfPath)
}
