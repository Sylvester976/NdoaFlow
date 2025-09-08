package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

var (
	Port string
)

func LoadConfig() {
	// Load .env file
	err := godotenv.Load()
	if err != nil {
		log.Println("No .env file found, using system environment variables")
	}

	Port = os.Getenv("PORT")

}
