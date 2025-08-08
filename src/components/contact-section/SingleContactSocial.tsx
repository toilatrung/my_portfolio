import React from 'react';

interface SingleContactSocialProps {
  Icon: React.ElementType;
  Link: string;
}

const SingleContactSocial = ({ Icon, Link }: SingleContactSocialProps) => {
  return (
    <div>
      <a href={Link} className="cursor-pointer" aria-label="Social link">
        <Icon className="text-2xl" />
      </a>
    </div>
  );
};

export default SingleContactSocial;
