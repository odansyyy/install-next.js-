import Link from 'next/link';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Selamat datang di dashboard Anda.</p>
      <Link href="/halaman-selanjutnya">
        <a>Halaman Selanjutnya</a>
      </Link>
    </div>
  );
}

export default Dashboard;
