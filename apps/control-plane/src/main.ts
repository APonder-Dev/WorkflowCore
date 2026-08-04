import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const port = Number(process.env["CONTROL_PLANE_PORT"] ?? 3000);
  await app.listen(port);

  // eslint-disable-next-line no-console
  console.log(`[control-plane] listening on port ${port}`);
}

bootstrap().catch((error: unknown) => {
  console.error("[control-plane] failed to start", error);
  process.exitCode = 1;
});
