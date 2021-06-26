import app from './app';

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.info(`Server launched on http://localhost:${PORT}... 🚀`));

