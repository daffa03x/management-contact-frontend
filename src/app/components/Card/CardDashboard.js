import Link from "next/link";

const CardDashboard = ({ icon, title, total, href }) => {
  return (
    <div className="card card-side bg-blue-100 shadow-xl h-48 text-right">
      <figure className="m-8">{icon}</figure>
      <div className="card-body">
        <h2 className="text-3xl text-blue-400 px-2 pb-2">{title}</h2>
        <p className="text-xl text-blue-400 px-2 pb-2">{total}</p>
        <div className="card-actions justify-end">
          <Link href={href} className="text-xl text-blue-400 px-2">
            Go
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CardDashboard;
