module.exports = {
  apps: [
    {
      name: 'algo-project-server-dev',
      script: 'dist/main.js',
      instance: 0,
      exec_mode: 'cluster',
      kill_timeout: 5000,
    },
  ],
};
