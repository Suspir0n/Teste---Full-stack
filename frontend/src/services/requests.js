import Axios from "axios";
import api from "./Api.js";

export default class People {

  static  = async (search) => {
    const req = await api.get("/consulta-pessoas", {
      params: {
        search,
      },
    });

    return req.data;
  };

  static criar = async (person) => {
    const req = await api.post("/people", );
    return req.data;
  };

  static consultar_por_id = async (id) => {
    const req = await api.get(`/people/${id}`);

    return req.data;
  };

  static update = async (obj) => {
    console.log(obj);
    const req = await api.put(`/people/${obj.id_pessoa}`, obj);

    return req.data;
  };

  static delete = async (obj) => {
    const req = await api.delete(`/people/${obj.id_pessoa}`);

    return req.data;
  };
}
