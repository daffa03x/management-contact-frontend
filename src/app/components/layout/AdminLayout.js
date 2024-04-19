import Link from "next/link";
import ButtonLogout from "../ButtonLogout";

const AdminLayout = ({ children, title, currentLink }) => {
  return (
    <div className="flex h-screen antialiased">
      {/* Sidebar */}
      <ul className="menu bg-base-200 w-60 rounded-box">
        <li className="py-4 text-lg font-bold text-center">Contact</li>
        <li>
          <Link href="/Dashboard">Dashboard</Link>
        </li>
        <li>
          <details>
            <summary>User Contact</summary>
            <ul>
              <li>
                <Link href="/Contact">Contact</Link>
              </li>
              <li>
                <a>Address</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <ButtonLogout />
        </li>
      </ul>
      {/* Main content */}
      <main className="flex-1 bg-gray-100">
        <div className="flex justify-between text-sm breadcrumbs pt-6 px-6 text-black">
          <div className="text-3xl">{title}</div>
          <ul>
            <li>
              <Link href="/Dashboard">Dashboard</Link>
            </li>
            <li>{currentLink}</li>
          </ul>
        </div>
        <hr className="bg-gray-800 my-3 mx-6 h-0.5" />
        <div className="p-6">{children}</div>
        <footer className="fixed bottom-0 left-32 footer footer-center p-4 text-base-content">
          <aside>
            <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
          </aside>
        </footer>
      </main>
    </div>
  );
};
export default AdminLayout;
