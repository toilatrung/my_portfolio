import SingleContactSocial from "./SingleContactSocial"
import { TfiLinkedin } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
        <SingleContactSocial Link='https://www.linkedin.com/in/tr%E1%BB%8Bnh-quang-trung-a72a87221/' Icon={TfiLinkedin}/>
        <SingleContactSocial Link='https://github.com/toilatrung' Icon={FaGithub}/>
        <SingleContactSocial Link='https://www.behance.net/trnhquangtrung' Icon={FaBehance}/>
    </div>
  )
}

export default ContactSocial