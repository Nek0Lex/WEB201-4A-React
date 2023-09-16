/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.pdf$/,
            use: 'raw-loader',
        });

        config.module.rules.push({
            test: /\.node/,
            use: 'raw-loader',
        });

        return config;
    },
}

module.exports = nextConfig
