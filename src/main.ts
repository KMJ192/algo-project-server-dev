import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Response } from 'express';

declare const module: any;

async function bootstrap() {
  let isDisableKeepAlive = false;
  const port = 8080;
  const app = await NestFactory.create(AppModule);

  // app 준비 완료되면 ready send
  await app.listen(port);

  // SICINT 신호를 받으면 응답 헤더에 Connection: close를 설정하여 Client Request 종료
  process.on('SIGINT', () => {
    isDisableKeepAlive = true;
    app.close();
  });

  app.use((res: Response, next: any) => {
    if (isDisableKeepAlive === true) res.set('Connection', 'close');
    next();
  });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
