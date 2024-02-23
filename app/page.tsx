import Image from 'next/image'
import coffee from "@/public/coffee.jpeg"
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/authOptions';

export default async function Home() {
  const session  = await getServerSession(authOptions);
  console.log(session);
  return (
    <main className='relative'>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Image src={coffee} alt={'Coffee'} />
      
      <Link className='btn btn-square btn-primary btn-lg' href="/users">users</Link>
      <ProductCard></ProductCard>
      <div className="indicator">
        <a href="./" className="indicator-item indicator-top indicator-right badge badge-primary">holaaa</a>
        <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </div>

      {/* Background use */}
      {/* <Image 
        src={'https://earthsky.org/upl/2021/03/river-aerial-shot-e1615896010133.jpg'} 
        alt={'water'}
        fill
        className='object-cover'
        sizes='(max-width: 640px) 100vw, (max-width: 768px) 70vw, (max-width: 1024px) 50vw, 33vw'
        quality={75}

        /> */}
    </main>
  )
}
