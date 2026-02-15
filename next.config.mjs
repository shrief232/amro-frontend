/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer, dev }) => {
        if (dev) {
            config.watchOptions = {
                poll: 1000,
                aggregateTimeout: 300,
            };
        }

        if (!isServer) {
            config.externals = config.externals || [];
            if (Array.isArray(config.externals)) {
                config.externals = config.externals.filter(
                    (external) => typeof external !== "function" || !external.toString().includes("wowjs")
                );
            }
        }

        return config;
    },
};

export default nextConfig;