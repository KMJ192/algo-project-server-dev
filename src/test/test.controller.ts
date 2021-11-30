import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class TestController {
  @Get('test')
  async test(@Res() response: Response) {
    response.send('test');
    console.log('test');
  }
}
