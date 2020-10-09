const config = {
  projectName: 'ls-view 组件库',
  dev: {
    name: 'dev',
    sshConfig: {
      host: '47.96.73.255',
      port: 22,
      username: 'root',
      password: 'chaoChao2134',
    },
    webDir: '/root',
    distPath: 'dist'
  },
  pre: {
    name: 'pre',
    sshConfig: {
      host: '47.96.73.255',
      port: 22,
      username: 'root',
      password: 'chaoChao2134',
    },
    webDir: '/root',
    distPath: 'dist'
  },
  pro: {
    name: 'pro',
    sshConfig: {
      host: '47.96.73.255',
      port: 22,
      username: 'root',
      password: 'chaoChao2134',
    },
    webDir: '/root',
    distPath: 'dist'
  }
}

module.exports = config