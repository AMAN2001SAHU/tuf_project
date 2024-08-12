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
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
const PORT = process.env.PORT;
const prisma = new client_1.PrismaClient();
app.post('/api/create-banner', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newBanner = yield prisma.banner.create({
            data: {
                description: 'Master Data Structures & Algorithms: Boost Your Coding Skills Today!',
                link: 'https://google.com/',
                duration: 1,
                isVisible: true,
            },
        });
        res.status(200).json({ banner: newBanner });
    }
    catch (e) {
        if (e)
            console.log(e);
        res.status(404).json({ error: 'Some error occurred' });
    }
}));
app.post('/api/update-banner/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bannerId = parseInt(req.params.id);
        const body = req.body;
        const updateBanner = yield prisma.banner.update({
            where: { id: bannerId },
            data: {
                description: body.description,
                link: body.link,
                duration: body.duration,
                isVisible: body.isVisible,
            },
        });
        res.status(200).json({ banner: updateBanner });
    }
    catch (e) {
        if (e)
            console.log(e);
        res.status(404).json({ error: 'Some error occured' });
    }
}));
app.post('/api/delete-banner', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bannerDelete = yield prisma.banner.deleteMany({});
        res.status(200).json({ message: 'Deleted Banners' });
    }
    catch (e) {
        if (e)
            console.log(e);
        res.status(404).json({ error: 'Some error occured' });
    }
}));
app.listen(PORT, () => {
    console.log(`Server started at port`);
});
