package routes

import (
	"NdoaFlow/handlers"
	"net/http"
)

func SetupRoutes() {
	http.HandleFunc("/", handlers.IndexHandler)
	http.HandleFunc("/qr", handlers.QRHandler)
	http.HandleFunc("/gallery/kuhanda-ithigi", handlers.GalleryHandler)
	http.HandleFunc("/gallery/Aitodiar", handlers.NewGalleryHandler)
}
