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
exports.placesController = void 0;
const express_1 = __importDefault(require("express"));
const places_query_1 = require("./places.query");
const database_1 = require("../../database/database");
const schema_1 = require("../../database/schema");
const drizzle_orm_1 = require("drizzle-orm");
exports.placesController = (0, express_1.default)();
exports.placesController.get('/all', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const places = yield (0, places_query_1.getAllPlacesByUserId)(req.userId).execute();
        res.status(200).json(places);
    }
    catch (e) {
        res.status(500).json({ message: e });
    }
}));
exports.placesController.get('/allRoomsByPlaceId/:placeId', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hasAccess = !!(yield (0, places_query_1.getAllPlacesByUserId)(req.userId).execute()).find((place) => place.id === req.params.placeId);
        if (!hasAccess) {
            res.status(500).json({ message: "No room found" });
            return;
        }
        const allRooms = yield database_1.db.select()
            .from(schema_1.rooms)
            .where((0, drizzle_orm_1.eq)(schema_1.rooms.placeId, req.params.placeId))
            .execute();
        res.status(200).json(allRooms);
    }
    catch (e) {
        res.status(500).json({ message: e });
    }
}));
