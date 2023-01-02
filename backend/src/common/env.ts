class Env {
  static get(key: string, defaultValue: string | number = "") {
    if (process.env[key]) {
      return String(process.env[key]);
    }

    return String(defaultValue);
  }
}

export default Env;
