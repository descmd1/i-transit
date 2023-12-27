import http from "../http-common";

const getAll = () => {
  return http.get("/login");
};

const get = id => {
  return http.get(`/login/${id}`);
};

const create = data => {
  return http.post("/login", data);
};

const update = (id, data) => {
  return http.put(`/login/${id}`, data);
};

const remove = id => {
  return http.delete(`/login/${id}`);
};

const removeAll = () => {
  return http.delete(`/login`);
};

const findByTitle = title => {
  return http.get(`/login?title=${title}`);
};

const LoginService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default LoginService;