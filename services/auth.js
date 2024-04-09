import axios from "axios";

export const RegisterAPI = async ({ name, username, password, setMessage, setStatus }) => {
  const URL = "https://test.raihmimpi.website/api/users";
  try {
    const response = await axios.post(URL, { name, username, password });
    if (response.status === 201) {
      setMessage("User " + name + " Berhasil Ditambahkan");
      setStatus("alert-success");
    } else {
      setMessage(response.message);
      setStatus("alert-error");
    }
    return response;
  } catch (error) {
    console.error("Error:", error);
    setMessage("Internal Server Error");
    setStatus("alert-error");
  }
};

export const LoginAPI = async ({ username, password, setMessage, setStatus }) => {
  const URL = "https://test.raihmimpi.website/api/users/login";
  try {
    const response = await axios.post(URL, { username, password });
    // Periksa apakah response memiliki isi
    if (response.data.data) {
      setMessage("Berhasil Login");
      setStatus("alert-success");
      const newToken = response.data.data.token;

      // Simpan token ke dalam localStorage
      localStorage.setItem("token", newToken);
      return response;
    } else {
      setMessage(response.data.message);
      setStatus("alert-error");
    }
  } catch (error) {
    console.error("Error:", error);
    setMessage("Internal Server Error");
    setStatus("alert-error");
  }
};
