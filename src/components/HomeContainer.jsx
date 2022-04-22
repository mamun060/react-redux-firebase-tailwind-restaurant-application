import React from 'react'
import delivary from '../img/delivery.png';
import heroBg from '../img/heroBg.png'
import { heroData } from '../utils/data';

function HomeContainer() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-ful' id='home'>

            <div className='py-2 flex-1 flex flex-col items-start justify-start gap-6'>
               <div className='flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full'>
                    <p className='text-base text-orange-500 font-semibold'>Bike Delivary</p>
                    <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
                        <img src={delivary} alt="" />
                    </div>
               </div>

               <p className='text-[2.5rem] md:text-[3rem] font-bold tracking-wide text-headingColor'>The Fastest Delivary in {""}
               <span className=' text-orange-600 text-[2rem] lg:text-[3rem]'>Your City</span>
                </p>
                <p className='text-base text-textColor text-center md:text-left'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nam non impedit officiis dignissimos, at a optio magni 
                    dolorem ipsam distinctio sapiente, sit deserunt, explicabo 
                    maiores minima! Sequi delectus aliquam perspiciatis dolor 
                    impedit, facere enim saepe cumque deserunt, 
                    ipsum repellendus est vitae, sapiente possimus quos voluptatem?
                    Nam reiciendis doloremque quibusdam rem!
                </p>

                <button type='button' className=' bg-gradient-to-tr from-orange-400 to-orange-500 md:w-auto w-full 
                px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'>Order Now</button>
            </div>

            <div className='py-2 flex-1 flex items-center relative'>
                <img src={heroBg} alt="" className=' ml-auto h-420 w-full lg:w-auto lg:h-650' />
                <div className=' w-full h-full absolute top-0 left-0 flex items-center justify-center py-4 lg:px-16 gap-4 flex-wrap'>
                 { heroData && heroData.map((n, idx)=>( 
                    <div key={idx} className=' lg:w-190 p-4 bg-cardOverlay drop-shadow-lg backdrop-blur-md rounded-3xl flex flex-col items-center justify-center '>
                        <img src={n.imageSrc} className=' w-20 lg:w-40 -mt-10 lg:-mt-20 ' alt="I1" />
                        <p className=' text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4 '>{n?.name}</p>
                        <p className=' text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3'>{n?.desp}</p>
                        <p className=' text-sm font-semibold text-headingColor '>
                            <span className=' text-xs text-red-600'>$</span>{n?.price}
                        </p>
                    </div>
                 ))}
                </div>
            </div>

        </section>
  )
}

export default HomeContainer