import Head from 'next/head';
import Link from 'next/link';
import Toggle from './toggle';

const Layout = ({ children, title = 'Crypto Tracker' }) => {
  return (
    <div className='layout'>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <Link href='/' passHref>
          
        
       <div className="sticky top-0 z-50 grid grid-cols-2 
        bg-purple-600  p-5 md:px-10">
        
        {/* <div className="flex justify-center"> */}
       <a>
        <h1 className="text-2xl font-bold  
       text-white hover:cursor-pointer">CryptoTracker</h1>
         </a>
         {/* </div> */}
        <Toggle />
        
        </div>
       
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;