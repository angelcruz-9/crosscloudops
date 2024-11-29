module.exports = {
  globDirectory: 'build/',
  globPatterns: [
    '**/*.{html,json,js,css,png,jpg,jpeg,svg,mp4,webm}'
  ],
  swDest: 'build/sw.js',
  maximumFileSizeToCacheInBytes: 20 * 1024 * 1024, // 20 MB
  runtimeCaching: [{
    urlPattern: /\.(?:mp4|webm)$/,
    handler: 'CacheFirst',
    options: {
      cacheName: 'video-cache',
      expiration: {
        maxEntries: 10,
        maxAgeSeconds: 7 * 24 * 60 * 60, // 1 week
      },
    },
  }],
};
