const http = require("http")
const fs = require("fs")

function onRequest(request, response) {
    // TASK:
    // 1. Buat suatu request dengan quary string
    // 2. Url dengan query: http://localhost:8080/?username=adam&city=semarang
    // 3. Pecahkan query menjadi username dan city
    // 4. Tampilkan username dan city di browser
}

http.createServer(onRequest).listen(8080)