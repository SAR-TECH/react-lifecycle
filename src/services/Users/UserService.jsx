import httpClient from "../AxiosClient";
const resource = "/api/Users";

const getAllUsers = () => httpClient.get(resource);
const getUserById = userId => httpClient.get(`${resource}/${userId}`);
const createUser = user => httpClient.post(resource, user);

const UserService = {
  getAllUsers,
  getUserById,
  createUser
};

export default UserService;
