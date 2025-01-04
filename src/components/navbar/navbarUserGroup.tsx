import React from 'react';
import Image from 'next/image';

interface navbarUserGroupInterface {
    userImage: string;
    userName: string;
    userRole?: string;
    className?: string;
}

const NavbarUserGroup: React.FC<navbarUserGroupInterface> = ({ userImage, userName, userRole, className}) => {
  return (
    <div className="flex justify-between gap-2">
        <div className="flex flex-col gap-2">
            <p> {userName} </p>
            <p> {userRole} </p>
        </div>

        <div className="rounded-full">
            <Image src={userImage} width={20} height={20} alt="profile-image"/>
        </div>

    </div>
  )
}

export default NavbarUserGroup