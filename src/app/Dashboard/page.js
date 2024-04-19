"use client"; // This is a client component 👈🏽

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import AdminLayout from "../components/layout/AdminLayout";
import { FaRegUser, FaUserCheck, FaUserGraduate } from "react-icons/fa";

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
      <h1 className="text-4xl font-bold text-black mb-4">Selamat Datang, </h1>
      <h1 className="text-3xl font-bol mb-4">{user.name}</h1>
      <div className="stats shadow flex justify-center">
        <div className="stat">
          <div className="stat-figure text-primary">
            <FaRegUser />
          </div>
          <div className="stat-title">Total User</div>
          <div className="stat-value text-primary">25.6K</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUserCheck />
          </div>
          <div className="stat-title">Total Contact</div>
          <div className="stat-value text-secondary">2.6M</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUserGraduate />
          </div>
          <div className="stat-title">Total Contact</div>
          <div className="stat-value text-secondary">2.6M</div>
        </div>
      </div>
    </AdminLayout>
  );
}
