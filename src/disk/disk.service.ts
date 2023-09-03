import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
    constructor(private powerService: PowerService) {}

    getData(data: number) {
        console.log("Drawing 20 watts from power service for doing this task.");

        this.powerService.supplyPower(20);
        return data;
    }
}
