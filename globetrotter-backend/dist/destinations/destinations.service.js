"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const destination_entity_1 = require("./entities/destination.entity");
let DestinationsService = class DestinationsService {
    destinationRepository;
    constructor(destinationRepository) {
        this.destinationRepository = destinationRepository;
    }
    async getAllDestinations() {
        try {
            const destinations = await this.destinationRepository.find();
            return destinations.map((destination) => {
                const correctOption = `${destination.city}, ${destination.country}`;
                const incorrectOptions = this.getRandomIncorrectOptions(destinations, correctOption);
                return {
                    ...destination,
                    options: [correctOption, ...incorrectOptions].sort(() => Math.random() - 0.5),
                };
            });
        }
        catch (error) {
            throw new Error(`Failed to fetch destinations: ${error.message}`);
        }
    }
    getRandomIncorrectOptions(destinations, correctOption) {
        const otherDestinations = destinations.filter((dest) => `${dest.city}, ${dest.country}` !== correctOption);
        const shuffled = otherDestinations.sort(() => Math.random() - 0.5);
        return shuffled.slice(0, 3).map((dest) => `${dest.city}, ${dest.country}`);
    }
};
exports.DestinationsService = DestinationsService;
exports.DestinationsService = DestinationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(destination_entity_1.Destination)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DestinationsService);
//# sourceMappingURL=destinations.service.js.map