"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantNetService = void 0;
const api_service_1 = require("../../../shared/services/api.service");
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const index_1 = require("../../index");
dotenv_1.default.config({
    path: path_1.default.resolve(__dirname, '../../../../.env'),
});
class PlantNetService extends api_service_1.ApiService {
    constructor() {
        super(index_1.plantNetAxiosInstance, 'https://my-api.plantnet.org/v2');
        this.identificationParams = {
            'api-key': `${process.env.PLANTNET_API_KEY}`,
            'include-related-images': 'false',
            'no-reject': 'false',
            'nb-results': '10',
            'lang': 'en',
        };
        index_1.plantNetAxiosInstance.defaults.headers.common["Content-Type"] = "multipart/form-data";
    }
    identifyPlant(images) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._post('/identify/all', null, new URLSearchParams(this.identificationParams), images)
                .then((response) => {
                return response.data.results.map((result) => ({
                    plantnetName: result.species.scientificNameWithoutAuthor,
                    plantnetGenus: result.species.genus.scientificNameWithoutAuthor,
                    score: result.score
                }))
                    .sort((a, b) => Number(a.score) > Number(b.score));
            })
                .catch((error) => {
                throw error;
            });
        });
    }
}
exports.PlantNetService = PlantNetService;
