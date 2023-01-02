class Env {
  static get(key: string, defaultValue: string = ""): string {
    if (process.env[key]) {
      return String(process.env[key]);
    }

    return defaultValue;
  }
}

export default Env;
