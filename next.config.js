module.exports = {
    env: {
        RUBY_BACKEND_URL: process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' ? "https://lingering-wood-1850.fly.dev/" : "http://localhost:3000"
    },
};