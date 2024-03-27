"use client"; // This is a client component 👈🏽

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import AdminLayout from "../components/layout/AdminLayout";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Mengambil token dari local storage atau dari mana pun yang sesuai
        const token = localStorage.getItem("token");

        if (!token) {
          // Jika token tidak ada, arahkan pengguna kembali ke halaman login
          router.push("/User");
          return;
        }

        // Menggunakan token untuk melakukan permintaan untuk mendapatkan data pengguna
        const response = await axios.get("https://test.raihmimpi.website/api/users/current", {
          headers: {
            Authorization: token, // Menggunakan properti token
          },
        });
        // Jika respons berhasil, atur data pengguna ke state
        setUser(response.data.data);
      } catch (error) {
        // Jika ada kesalahan, tangani dan tetapkan ke state error
        setError(error.message);
      }
    };

    // Panggil fungsi fetch saat komponen dipasang
    fetchUserData();
  }, []);

  return (
    <AdminLayout title="Dashboard" currentLink="Dashboard">
      <h1 className="text-2xl font-semibold mb-4">Welcome, {user.name}!</h1>
      <p className="text-gray-700">Your username: {user.username}</p>
    </AdminLayout>
  );
}
