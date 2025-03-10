
import React from 'react'

const Footer = () => {
    return (
        <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5' >
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions </p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>
            <div className="flex gap-4 ">
                <div className="social-icon">
                    <a className='w-1/2 h-1/2' href="https://github.com/Srijan76-code?tab=repositories" target='_blank' >
                        <img src="/assets/github.svg" alt="github" />
                    </a>

                </div>
                <div className="social-icon">
                    <a className='w-1/2 h-1/2' target='_blank' href="https://www.linkedin.com/in/srijan-patel-46a548323/">
                        <img src="/assets/linkedin.svg" alt="linkedin" />
                    </a>

                </div>




            </div>
        </section>

    )
}

export default Footer
