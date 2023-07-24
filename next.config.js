module.exports = {
    env: {
        // RUBY_BACKEND_URL: process.env.NEXT_PUBLIC_VERCEL_ENV === 'development' ? (console.log("Dev environment"))() : "",
        RUBY_BACKEND_URL: process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' ? "https://cool-lake-5286.fly.dev/" : "http://localhost:3000",
    },
};