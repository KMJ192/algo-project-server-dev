import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class TestController {
  @Get('wasm-test')
  async test(@Res() response: Response) {
    import('@wasm').then((module) => {
      const tmp = module.test();
      response.send(tmp);
      console.log(tmp);
    });
  }
}
