module.exports = {
  apps : [{
    name: 'crmsuccesfactor',
    script: '/1tb/NodeJS/COS_RPA_CRMSUCCESFACTOR/src/index.js',
    watch: false,
    autorestart: true,
    cron_restart: "30 0 * * *"
}, {
    name: 'crmsuccesfactor_bot',
    script: '/1tb/NodeJS/COS_RPA_CRMSUCCESFACTOR/src/python/Server.py',
    watch: false,
    args: [""],
    wait_ready: true,
    autorestart: true,
    max_memory_restart: '512M',
    interpreter: 'python3',
    cron_restart: "0 0 * * *"
  }],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
