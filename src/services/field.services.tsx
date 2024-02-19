import createAPIClient from "./api.service";

class FieldService {
  api: any;
  constructor(baseURL = "/api/fields") {
    this.api = createAPIClient(baseURL);
  }

  async getAll() {
    return (await this.api.get("/")).data;
  }
}

export default new FieldService();
