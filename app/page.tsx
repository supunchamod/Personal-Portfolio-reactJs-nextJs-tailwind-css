import Image from 'next/image';
import Head from "next/head";

//Image

import profileImage from"../public/p2.png";
import Card1 from"../public/design.png";
import Card2 from"../public/code.png";
import Portfolio1 from"../public/web1.png";
import Portfolio2 from"../public/web2.png";
import Portfolio3 from"../public/web3.png";

//framer



import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";





export default function Home() {
  return (
    <div> 
      <Head>
      <style>
         @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,800;1,400;1,600;1,800&family=Poppins:ital,wght@0,100;0,200;0,400;0,600;0,700;0,800;1,100;1,200;1,300;1,600;1,900&display=swap');
      </style>
    </Head>
    <main className="font-poppins bg-yellow-50 min-h-screen px-10 md:px-20 lg:px-40">
        <section>
          {/* Nav and Hero */}
          <nav className='py-10 flex justify-between'>
            <h1 className=' text-sm  md:text-xl '>Developed by Supun Chamod</h1>
            <ul className='flex  items-center'>
              <li>
                  <BsFillMoonStarsFill className=" cursor-pointer text-xl mx-5"
                   />
              </li>
              <li>
                <a href='https://drive.google.com/file/d/1A54YA7pHTdKiiRlRwh41Q5abfl9r7D2d/view?usp=sharing' download={"resume"} className='bg-yellow-400 text-black px-4 py-2 border-none rounded-md' >Resume</a>
                
              </li>
            </ul>
          </nav>

          {/* Hero Section */}

       <div className='text-center p-10'>
        <h1 className=' text-5xl font-bold text-yellow-400 md:text-6xl lg:text-7xl lg:mb-4'>Supun Chamod</h1>
        <h3 className=' text-2xl py-4 md:text-3xl  '>Web Development</h3>
        <p className='text-sm py-4 text-gray-400 leading-6 md:text-md max-w-xl mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aperiam, 
          incidunt error nam assumenda natus exercitationem sapiente non ex! 
          Aspernatur consequatur commodi expedita officia ea saepe sapiente 
          at, facilis sequi.</p>
       </div>   

       {/* Social Icon */}

       <div className='text-5xl flex justify-center gap-16 text-gray-600'>
          <a href='https://github.com/supunchamod'>
            <BsGithub/>
          </a>
          <a href='https://www.linkedin.com/in/supun-chamod-753632190/'>
            <BsLinkedin/>
          </a>
          <a href=''>
            <BsFacebook/>
          </a>
       </div>

       {/* Profile Image */}
    	 
       <div className=' m-auto relative bg-gradient-to-b from-yellow-200 w-80 h-80 p[-5 mt-20 rounded-full'>
        <Image src={profileImage} alt='Profile Image' layout='fill' objectFit='cover' />
       </div>

     </section>

      {/* Services Section */}

      <section>
        <div>
          <h2 className=' text-5xl py-10 font-bold opacity-60 '> Services I Offer</h2>
          <p className='text-sm py-2 text-gray-400  leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, error, fuga veniam molestiae repellendus est cum fugiat incidunt necessitatibus, nostrum eaque architecto? Sit, fugiat voluptates quae ratione sequi praesentium a!</p>
        </div>

        {/* Services Card */}

    <div className='md:flex lg:flex gap-10 mx'>
      <div className=' bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10 '>
        <Image src={Card1} alt='Card' width={100} height={100} className=" inline" />
        <h2 className=' text-2xl font-bold'>Graphics Designing</h2>
        <p className=' text-sm py-2 text-gray-800 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore suscipit laboriosam</p>
      </div>
    
    
    {/* Services Card */}

      <div className=' bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10 '>
        <Image src={Card2} alt='Card' width={100} height={100} className=" inline" />
        <h2 className=' text-2xl font-bold'>App Development</h2>
        <p className=' text-sm py-2 text-gray-800 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore suscipit laboriosam</p>
      </div>

    {/* Services Card */}

      <div className=' bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10 '>
        <Image src={Card1} alt='Card' width={100} height={100} className=" inline" />
        <h2 className=' text-2xl font-bold'>Graphics Designing</h2>
        <p className=' text-sm py-2 text-gray-800 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore suscipit laboriosam</p>
      </div>
   </div>
      </section>

      {/* my work */}

      <section>
        <div className=''>
          <h2 className=' text-5xl py-10 font-bold opacity-60'>Portfolio</h2>
          <p className='text-sm py-2 text-gray-400 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa architecto incidunt fugit vel, magni cupiditate quod aperiam perspiciatis? Animi praesentium est nemo quo veritatis reprehenderit, molestias doloribus quidem atque iste!</p>
        </div>

        {/* Images */}
        <div className=' flex flex-col gap-10 p-10 lg:flex-row lg:flex-wwrap'>
          <div className=' basis-3 flex-1'>
          <Image src={Portfolio1} alt='Image01'layout='responsive' className=' rounded-lg object-cover' />
          </div>
          <div className=' basis-3 flex-1'>
          <Image src={Portfolio2} alt='Image01'layout='responsive' className=' rounded-lg object-cover' />
          </div>
          <div className=' basis-3 flex-1'>
          <Image src={Portfolio3} alt='Image01'layout='responsive' className=' rounded-lg object-cover' />
          </div>
          <div className=' basis-3 flex-1'>
          <Image src={Portfolio1} alt='Image01'layout='responsive' className=' rounded-lg object-cover' />
          </div>
          <div className=' basis-3 flex-1'>
          <Image src={Portfolio2} alt='Image01'layout='responsive' className=' rounded-lg object-cover' />
          </div>
          <div className=' basis-3 flex-1'>
          <Image src={Portfolio3} alt='Image01'layout='responsive' className=' rounded-lg object-cover' />
          </div>
        </div>
      </section>

      {/* Footer */}

      <footer className=' border-t-2 border-black text-sm opacity-70 flex flex-col gap-5 items-center justify-center py-10 lg:flex-row lg:item-center'>
         <div>
          <h3 className='text-base mb-2'> Contact me for more details</h3>
          <p className=' opacity-40'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam illum consectetur sed impedit iusto cupiditate, architecto modi quod dignissimos nihil sapiente ipsum hic placeat alias iure quia deserunt vel expedita.</p>
         </div> 
         <div>
         <div className='text-5xl flex justify-center gap-16 text-gray-600'>
          <a href='https://github.com/supunchamod'>
            <BsGithub/>
          </a>
          <a href='https://www.linkedin.com/in/supun-chamod-753632190/'>
            <BsLinkedin/>
          </a>
          <a href=''>
            <BsFacebook/>
          </a>
       </div>
         </div>
      </footer>  

    </main>
    </div>
    
  );
}
