import axios from "axios";

const http = axios.create({
  baseURL: 'http://test.vanillabridge.com/test_data',
});

const req = () => {
  return http.get(null, null)
}

export { req }