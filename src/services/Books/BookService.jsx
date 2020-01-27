import httpClient from "../AxiosClient";
const resource = "/api/Books";

export default {
  get() {
    return httpClient.get(`${resource}`);
  },
  getPost(id) {
    return httpClient.get(`${resource}/${id}`);
  },
  create(payload) {
    return httpClient.post(`${resource}`, payload);
  },
  update(payload, id) {
    return httpClient.put(`${resource}/${id}`, payload);
  },
  delete(id) {
    return httpClient.delete(`${resource}/${id}`);
  }
};
