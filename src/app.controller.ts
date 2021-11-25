import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    import('@wasm').then((wasm_module: any) => {
      console.log(wasm_module.test());
    });
    return this.appService.getHello();
  }
}
