import { RiCursorFill } from "react-icons/ri";

const NavbarBtn = () => {
  const email = 'trungtrinhquang.work2303@gmail.com';
  const subject = encodeURIComponent(
    "JOB OFFER LETTER - Hanoi, [Date] - [Job Title]"
  );
  const body = encodeURIComponent(
  "Dear [Candidate's Full Name],\n\n" +
  "We are pleased to inform you that [Company Name] would like to formally offer you the position of [Job Title] at our company.\n\n" +
  "Details of the offer are as follows:\n\n" +
  "- Position: [Job Title]\n" +
  "- Department: [Department Name]\n" +
  "- Start Date: [Start Date – DD/MM/YYYY]\n" +
  "- Work Location: [Office Address or Remote]\n" +
  "- Direct Supervisor: [Name and Title of Manager]\n" +
  "- Probation Period: [Duration, if applicable]\n\n" +
  "Compensation and Benefits:\n\n" +
  "- Salary: [Monthly/Annual Salary Amount]\n" +
  "- Bonuses and Allowances: [e.g., 13th-month bonus, lunch/travel allowance, etc.]\n" +
  "- Working Hours: [e.g., 8:00 AM – 5:00 PM, Monday to Friday]\n" +
  "- Other Benefits: [e.g., annual leave, company trips, training programs, insurance]\n\n" +
  "We believe that your skills and experience will be a valuable asset to our team, and we look forward to working with you.\n\n" +
  "Please confirm your acceptance of this offer by replying to this email before [Reply Deadline – DD/MM/YYYY]. Upon your confirmation, we will proceed with sending you the official contract and onboarding instructions.\n\n" +
  "If you have any questions or need further information, feel free to contact us via email or phone below.\n\n" +
  "Sincerely,\n" +
  "[Your Full Name]\n" +
  "[Your Job Title]\n" +
  "[Company Name]\n" +
  "[Your Email] – [Your Phone Number]"
  );

  return (
    <a
      href={`mailto:${email}?subject=${subject}&body=${body}`}
      className='
      flex items-center gap-2
      px-4 py-2
      text-xl font-jersey15 text-yellow
      bg-cyan border-4 border-black
      shadow-[4px_4px_0px_#1e1917,inset_0_0_0_2px_#f1e1d9]
      hover:bg-lightCyan
      active:bg-darkCyan active:translate-x-1 active:translate-y-1 active:shadow-none
      transition-colors duration-150'
    >
      Hire Me
      <div className="sm:hidden md:block">
        <RiCursorFill />
      </div>
    </a>
  );
};

export default NavbarBtn;