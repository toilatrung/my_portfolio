interface SingleInforProps {
  text: string;
  Image: string;
}

const SingleInfor = ({ text, Image }: SingleInforProps) => {
  return (
    <div className="flex gap-4 items-center justify-start">
      <img src={Image} alt={text} className="w-6 h-6" />
      <p>{text}</p>
    </div>
  );
};

export default SingleInfor;