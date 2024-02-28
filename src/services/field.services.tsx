import createAPIClient from "./api.service";

interface formSport {
  fieldName: string;
  duong: string;
  phoneNumber: string;
  phuong: string;
  quan: string;
  sports: string[];
}

class FieldService {
  api: any;
  constructor(baseURL = "/api/fields") {
    this.api = createAPIClient(baseURL);
  }

  async getAll() {
    return (await this.api.get("/")).data;
  }

  async getAllBySport(sportId: string) {
    return (await this.api.get("/sports/" + sportId)).data;
  }

  async addField(formDataObject: formSport) {
    return (
      await this.api.post("/", {
        fieldName: formDataObject.fieldName,
        fieldAddress: {
          duong: formDataObject.duong,
          quan: formDataObject.quan,
          phuong: formDataObject.phuong,
        },
        ownerPhoneNumber: formDataObject.phoneNumber,
        sports: formDataObject.sports,
      })
    ).data;
  }

  async deleteFieldById(id: string) {
    return await this.api.delete("/find/" + id).data;
  }
}

export default new FieldService();
