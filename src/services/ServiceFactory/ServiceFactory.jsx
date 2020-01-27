import BookService from "../Books/BookService";
import UserService from "../Users/UserService";

const services = {
  books: BookService,
  users: UserService
};

export default {
  get: name => services[name]
};
