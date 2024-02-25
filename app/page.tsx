import Image from 'next/image'
import coffee from "@/public/coffee.jpeg"
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/authOptions';
import HeroSection from './components/common/HeroSection';
import SampleCard from './components/card/SampleCard';

export default async function Home() {
  const session  = await getServerSession(authOptions);
  console.log(session);
  const image= {
    src:'/users.jpeg',
    height:240, 
    width:550, 
    alt:'little description'
  }
  return (
    <main className='relative'>
      <div className='container mx-auto'>
        <HeroSection/>


      {/* add a row with 3 columns using  tailwindcss */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <SampleCard title={'List of users'} description={'Get all users and filter them easily!!'} image={image} />
        <SampleCard title={'List of products'} description={'Get all products and filter them easily!!'} image={image} />
        <SampleCard title={'List of something else'} description={'Get something else and filter them easily!!'} image={image} />
      </div>

     

        {/*
        <Image src={coffee} alt={'Coffee'} />
         */}
         
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
      </div>
    </main>
  )
}
