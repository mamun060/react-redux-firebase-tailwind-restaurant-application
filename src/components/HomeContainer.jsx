import React from 'react'
import delivary from '../img/delivery.png';
import heroBg from '../img/heroBg.png'

function HomeContainer() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>

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

            <div className='py-2 flex-1 flex items-center'>
                <img src={heroBg} alt="" className=' ml-auto h-420 w-full lg:w-auto lg:h-650' />
                <div className=' w-full h-full absolute flex items-center justify-center'></div>
            </div>

        </section>
  )
}

export default HomeContainer