import { app } from './app';
import { config } from './config';

app.listen({ port: config.PORT }, () => {
  console.log(`🚀  Server ready at http://localhost:${config.PORT}`);
});
