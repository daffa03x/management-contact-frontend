import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const ButtonLogout = () => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Mengambil token dari local storage atau dari mana pun yang sesuai
      const token = localStorage.getItem("token");

      if (!token) {
        // Jika token tidak ada, arahkan pengguna kembali ke halaman login
        router.push("/User");
        return;
      }
      // Mengambil data dari API
      const response = await axios.delete("https://test.raihmimpi.website/api/users/logout", {
        headers: {
          Authorization: token, // Menggunakan properti token
        },
      });

      // Periksa apakah response memiliki isi
      if (response.data.data) {
        setMessage("Berhasil Logout");
        setStatus("alert-success");
        // Simpan token ke dalam localStorage
        localStorage.removeItem("token");
        // Redirect ke dashboard
        router.push("/User");
      } else {
        setMessage(response.data.data);
        setStatus("alert-error");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Internal Server Error");
      setStatus("alert-error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <button className="w-40 text-left">Logout</button>
    </form>
  );
};
export default ButtonLogout;
