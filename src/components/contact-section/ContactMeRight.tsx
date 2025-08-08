import ContactInfor from "./ContactInfor"
import ContactSocial from "./ContactSocial"

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
        <img src="../public/images/email-image.png" alt="Contact Me" className="max-w-[300px]"/>
        <ContactInfor />
        <ContactSocial />
    </div>
  )
}

export default ContactMeRight