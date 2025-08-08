import EmailIcon from '../../assets/infor-icon/408162.png'
import PhoneIcon from '../../assets/infor-icon/408149.png'
import LocationIcon from '../../assets/infor-icon/408155.png'
import SingleInfor from './SingleInfor'

const ContactInfor = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfor text="trungtrinhquang.work2303@gmail.com" Image={EmailIcon} />
      <SingleInfor text="0815386234" Image={PhoneIcon} />
      <SingleInfor text="Truong Dinh Street, Hanoi, Vietnam" Image={LocationIcon} />
    </div>
  );
};

export default ContactInfor;