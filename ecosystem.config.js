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
      watch: true,
      wait_ready: true,
      listen_timeout: 30000,
      kill_timeout: 5000,
    },
  ],
};
