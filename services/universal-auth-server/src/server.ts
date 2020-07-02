import { app } from './app';

const PORT = process.env.PORT || 8000;

app.listen({ port: PORT }, () => {
  console.log(`🚀  Server ready at http://localhost:${PORT}`);
});
