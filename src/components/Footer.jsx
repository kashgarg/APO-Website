import Socials from './Socials';

const Footer = () => {
    return <>
    <div className="flex justify-center bg-gradient-to-r from-[#C1D5F9] to-[#F9EDB0]">
        <div className='grid-column'>
            <img className='mt-4 mb-3' style={{width:"130px", height: "auto", margin: "0 auto", display:"block", padding:"10px 0px"}} src="/assets/apo_logo.svg" alt="apo_logo" />
            <Socials />
            <p className='flex justify-center text-[#0F3B8E] mt-2 mb-8'>All rights reserved</p>
        </div>
    </div>
    </>
}

export default Footer