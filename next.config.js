module.exports = {
    env: {
        API_BASE_URL: process.env.NODE_ENV === 'production' ? 'https://lingering-wood-1850.fly.dev' : 'http://localhost:3000',
    },
};