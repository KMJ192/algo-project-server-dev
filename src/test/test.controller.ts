import { Controller, Get } from '@nestjs/common';

@Controller()
export class TestController {
  @Get('wasm-test')
  async test() {
    import('@wasm').then((module) => console.log(module.test()));
  }
}
