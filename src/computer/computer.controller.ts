import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {
    constructor(
        private cpuService: CpuService,
        private diskService: DiskService
    ) {}

    @Get()
    run() {
        console.log("Computing...");
        return `The result of your operation is: ${this.cpuService.compute(this.diskService.getData(420), this.diskService.getData(69))}`;
    }
}
