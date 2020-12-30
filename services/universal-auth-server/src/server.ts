import { app } from './app';
import { environments } from './utils/environments';

app.listen({ port: environments.PORT }, () => {
  console.log(`🚀  Server ready at http://localhost:${environments.PORT}`);
});
