import ContactMeLeft from './ContactMeLeft'
import ContactMeRight from './ContactMeRight'

const ContactMeMain = () => {
  return (
    <div id='contact' className='max-w-[1200px] mx-auto items-center justify-center px-4'>
        <h2 className='text-6xl text-yellow text-center mb-10'>
            Contact Me
        </h2>
        <div className='flex justify-between gap-24 bg-cyan p-8 rounded-2xl lg:flex-row sm:flex-col'>
            <ContactMeLeft />
            <ContactMeRight />
        </div>
    </div>
  )
}

export default ContactMeMain