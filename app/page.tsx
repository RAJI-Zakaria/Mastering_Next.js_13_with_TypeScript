import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';

export default async function Home() {
  const session  = await getServerSession(authOptions);

  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link className='btn btn-square btn-primary btn-lg' href="/users">users</Link>
      <ProductCard></ProductCard>
      <div className="indicator">
        <a href="./" className="indicator-item indicator-top indicator-right badge badge-primary">holaaa</a>
        <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </div>
    </main>
  )
}
