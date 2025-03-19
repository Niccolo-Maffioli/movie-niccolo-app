var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import nav from './navbar.js';
var API_KEY = "70ddf3e274ba737bb04c206babec5fea";
var BASE_URL = "https://api.themoviedb.org/3";
var IMG_BASE_URL = "https://image.tmdb.org/t/p/w500"; // Per ottenere le immagini dei film
var fetchMoviesAndTV = function () { return __awaiter(void 0, void 0, void 0, function () {
    var sliders;
    return __generator(this, function (_a) {
        sliders = document.querySelectorAll('.sliderContainer');
        sliders.forEach(function (slider) { return __awaiter(void 0, void 0, void 0, function () {
            var type, endpoint, response, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        type = slider.dataset.type;
                        if (type === "movie") {
                            endpoint = "".concat(BASE_URL, "/discover/movie?api_key=").concat(API_KEY, "&with_genres=99"); // Corretto: movie e non tv
                        }
                        else if (type === "popular") {
                            endpoint = "".concat(BASE_URL, "/trending/all/week?api_key=").concat(API_KEY, "&language=it-IT");
                        }
                        else if (type === "documentary") {
                            endpoint = "".concat(BASE_URL, "/discover/movie?api_key=").concat(API_KEY, "&with_genres=99"); // 99 = documentari
                        }
                        else if (type === "anime") {
                            endpoint = "".concat(BASE_URL, "/discover/tv?api_key=").concat(API_KEY, "&with_genres=16"); // 16 = anime
                        }
                        else {
                            console.warn("Tipo non riconosciuto: ".concat(type));
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch("".concat(endpoint, "&language=it-IT&page=1"))];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 3:
                        data = _a.sent();
                        displayMovies(data.results, slider);
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.error("Errore nel caricamento di ".concat(type, ":"), error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); };
// Funzione per mostrare i film/serie TV nello slider
var displayMovies = function (movies, sliderContainer) {
    if (!movies || movies.length === 0) {
        console.warn("Nessun film/serie TV disponibile per questo slider.");
        return;
    }
    movies.slice(0, 7).forEach(function (movie) {
        var movieCard = document.createElement("div");
        movieCard.classList.add("card");
        var imageUrl = movie.poster_path ? "".concat(IMG_BASE_URL).concat(movie.poster_path) : "placeholder.jpg";
        var title = movie.title || movie.name;
        movieCard.innerHTML = "<img src=\"".concat(imageUrl, "\" alt=\"").concat(title, "\" class=\"movie-img\">");
        sliderContainer.appendChild(movieCard);
    });
};
fetchMoviesAndTV();
nav();
//scroll slider
/* document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll('.sliderContainer');

    sliders.forEach(slider => {
        const leftArrow = slider.closest('.slider').querySelector('.arrow-left');
        const rightArrow = slider.closest('.slider').querySelector('.arrow-right');

        let scrollAmount = 0;
        const scrollStep = slider.clientWidth * 1.0; // Scorre circa 80% della larghezza

        rightArrow.addEventListener("click", () => {
            slider.scrollBy({ left: scrollStep, behavior: "smooth" });
        });

        leftArrow.addEventListener("click", () => {
            slider.scrollBy({ left: -scrollStep, behavior: "smooth" });
        });
    });
}); */ 
