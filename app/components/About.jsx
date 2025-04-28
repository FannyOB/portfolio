import { assets, infoList ,toolsData} from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const About = ({isDarkMode}) => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    >
      <motion.h4
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className='text-center mb-2 text-lg font-Ovo'>
        Introduction</motion.h4>

      <motion.h2 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className='text-center text-5xl font-Ovo'>
        About me</motion.h2>

        <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='flex w-full flex-col items-center gap-16 my-12'>
            {/* Section texte centrée */}
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className='max-w-3xl mx-auto'>
                <p className='font-Ovo text-justify leading-relaxed'>
                    I am an experienced full stack developer. I have experience working with a variety of technologies.
                    In my past i worked in pharmaceutical industry, my multiple skills allowed me to succeed in my professional retraining as a web developer.
                    Throughout my study, I have had the privilege of collaborating with prestigious organizations such as Axway.<br/>
                    Actually I work as a freelance developer with an agency who works with many clients in various industries.
                    For me it's a great opportunity, because I have the possibility to work on different projects and to learn new technologies.
                    I am always looking to learn new things and improve my skills as a developer.
                </p>
            </motion.div>

            {/* Section infos et outils */}
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className='w-full'>
                <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12'>
                    {infoList.map(({icon, iconDark, title, description},
                    index) => (
                        <motion.li
                        whileHover={{ scale: 1.05 }}
                        className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover
                        hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                        key={index}>
                            <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-2'/>
                            <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                            <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                        </motion.li>
                    ))}
                </motion.ul>

                <div className='max-w-4xl mx-auto'>
                    <motion.h4 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                    className='my-6 text-gray-700 font-Ovo dark:text-white/80 text-center'>
                        Tools I use
                    </motion.h4>

                    <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                    className='flex items-center justify-center gap-3 sm:gap-5 flex-wrap'>
                        {toolsData.map((tool, index) =>(
                            <motion.li 
                            whileHover={{ scale: 1.1 }}
                            className='flex items-center justify-center w-12 sm:-14 
                            aspect-square border border-gray-400 
                            rounded-lg cursor-pointer hover:-translate-y-1 duration-500' 
                            key={index}>
                                <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About
