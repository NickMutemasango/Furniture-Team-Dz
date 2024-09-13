import React from 'react'
import Image from 'next/image'
import logo from '@/public/Logo.png'



const Footer = () => {
  return (
    <div>

<div className='flex flex-col md:flex-row justify-around w-full text-darkgreen mr-10 mb-5  '>
  <div className='inwood flex flex-col pb-1 p-5'>
 <Image src={logo}
    className=" pb-3"
     alt="" />
   <div className='social icons flex  pb-1'>
    <a className=' pb-1 pr-2 ' href=""><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h7v-7H8V9.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.002v2.605h-1.197c-.994 0-1.372.746-1.372 1.438v1.69h2.568L15 12h-2v7h4c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2"/></svg></a>
    <a className='pb-1 pr-2' href=""><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg></a>
    <a className='pb-1 pr-2' href=""><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248a4.623 4.623 0 0 0 0-9.248m0 7.627a3.004 3.004 0 1 1 0-6.008a3.004 3.004 0 0 1 0 6.008"/><circle cx="16.806" cy="7.207" r="1.078" fill="currentColor"/><path fill="currentColor" d="M20.533 6.111A4.6 4.6 0 0 0 17.9 3.479a6.6 6.6 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.6 6.6 0 0 0-2.184.42a4.6 4.6 0 0 0-2.633 2.632a6.6 6.6 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71s0 2.753.056 3.71c.015.748.156 1.486.419 2.187a4.6 4.6 0 0 0 2.634 2.632a6.6 6.6 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.6 6.6 0 0 0 2.186-.419a4.6 4.6 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186c.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.6 6.6 0 0 0-.421-2.217m-1.218 9.532a5 5 0 0 1-.311 1.688a3 3 0 0 1-1.712 1.711a5 5 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055c-2.438 0-2.687 0-3.655-.055a5 5 0 0 1-1.669-.311a3 3 0 0 1-1.719-1.711a5.1 5.1 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654s0-2.686.053-3.655a5 5 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5 5 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a5 5 0 0 1 1.67.311a3 3 0 0 1 1.712 1.712a5.1 5.1 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655s0 2.698-.043 3.654z"/></svg></a>
    <a className='pb-1 pr-2' href=""><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20" clip-rule="evenodd"/><path d="M4 24h40"/><path d="M24 44c4.418 0 8-8.954 8-20S28.418 4 24 4s-8 8.954-8 20s3.582 20 8 20" clip-rule="evenodd"/><path d="M9.858 10.142A19.94 19.94 0 0 0 24 16a19.94 19.94 0 0 0 14.142-5.858m0 27.716A19.94 19.94 0 0 0 24 32a19.94 19.94 0 0 0-14.142 5.858"/></g></svg></a>
    <a className='pb-1 ' href=""><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M17.316 6.246c.008.162.011.326.011.488c0 4.99-3.797 10.742-10.74 10.742c-2.133 0-4.116-.625-5.787-1.697a7.577 7.577 0 0 0 5.588-1.562a3.779 3.779 0 0 1-3.526-2.621a3.858 3.858 0 0 0 1.705-.065a3.779 3.779 0 0 1-3.028-3.703v-.047a3.766 3.766 0 0 0 1.71.473a3.775 3.775 0 0 1-1.168-5.041a10.716 10.716 0 0 0 7.781 3.945a3.813 3.813 0 0 1-.097-.861a3.773 3.773 0 0 1 3.774-3.773a3.77 3.77 0 0 1 2.756 1.191a7.602 7.602 0 0 0 2.397-.916a3.789 3.789 0 0 1-1.66 2.088a7.55 7.55 0 0 0 2.168-.594a7.623 7.623 0 0 1-1.884 1.953"/></svg></a>
   </div>
   <p className='font-bold pb-1 text-sm'>Adress</p>
<a className='pb-1 text-sm' href="">+123 654 987</a>
<a  className='pb-1 text-sm' href="">B77 The Bronx,NY</a>
<a className='text-sm' href="">14568, USA</a>
  </div>




  <div className='My Account flex flex-col p-5'>
    <p className=' font-bold pb-3'>My account</p>
<a className='pb-2 text-sm' href="">Sign in</a>
<a className='pb-2 text-sm ' href="">Regester</a>
<a className='pb-2 text-sm' href="">Order status</a>
  </div>

  <div className='Help flex flex-col p-5'>
    <p className='font-bold pb-3'>Help</p>
<a className='pb-2 text-sm' href="">Shipping</a>
<a className='pb-2 text-sm' href="">Returns</a>
<a className='pb-2 text-sm' href="">Sizing</a>
  </div>

  <div className='shop flex flex-col p-5'>
    <p className='font-bold pb-3'>Shop</p>
<a className='pb-2 text-sm ' href="">AI Products</a>
<a className='pb-2 text-sm ' href="">Bedroom</a>
<a className='pb-2 text-sm' href="">Dinning Room</a>

  </div>

  <div className='Legal stuff flex flex-col p-5'>
<p className=' font-bold pb-3'>Legal stuff</p>
<a className='pb-2 text-sm' href="">Shipping & Delivery</a>
<a className='pb-2 text-sm' href="">Terms & Condtions</a>
<a className='pb-2 text-sm' href="">Privacy & Policy</a>
  </div>

</div>

<div className='text-sm  text-darkgreen pl-5 pb-5 '>Copyright @2024 INWOOD.ALL Rights Reserved</div>

    </div>
  )
}

export default Footer

