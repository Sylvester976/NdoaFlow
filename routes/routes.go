package routes

import (
	"NdoaFlow/handlers"
	"net/http"
)

func SetupRoutes() {
	http.HandleFunc("/", handlers.IndexHandler)
}
