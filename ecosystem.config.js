module.exports = {
  apps: [
    {
      name: 'algo-project-server-dev',
      script: 'dist/main.js',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
      instance: 0,
      exec_mode: 'cluster',
      kill_timeout: 5000,
    },
  ],
};
