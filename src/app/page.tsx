import Link from "next/link";

export default function Page() {
  return (
    <div>
    <h1>Dashboard</h1>
    <p>Selamat datang di dashboard kami.</p>
    <Link href="/lanjut">
      <button className="my-2 py-2 px-2 border-2 rounded border-slate-800 hover:bg-slate-800 hover:rounded">Halaman Selanjutnya</button>
    </Link>
  </div>
  );
}

// export default function Page() {
//   return <h1>Hello, Next.js!</h1>
// }