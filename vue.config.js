function getPublicPath() {
  switch (process.env.NODE_ENV) {
    case 'production': return '/taskPokeman/dist/'
    case 'qa': return '/QaEnv/'
    case 'dev': return '/DevEnv/'
    case 'stage': return '/StageEnv/'
    default: return ''
  }
}

module.exports = {
  publicPath: getPublicPath()
}