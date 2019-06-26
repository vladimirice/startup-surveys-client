class Config {
  public static getBackendUrl() {
    if (process.env.REACT_APP_ENV === 'production') {
      return 'http://startup-surveys-server.sunarmy.pro'
    }

    return 'http://localhost:5000';
  }
}

export default Config;
