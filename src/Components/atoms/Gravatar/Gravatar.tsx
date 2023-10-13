import { HTMLProps } from 'react';

export interface AvatarProps extends HTMLProps<HTMLElement>{
   firstname: string,
   lastname: string,
   background: string,
   size: number
   className: string
}

const Gravatar = ({
    firstname,
    lastname,
    background,
    size,
    className
}: AvatarProps): JSX.Element => {
    return (
        <>
            <img className={className} src={`https://ui-avatars.com/api/?name=${firstname}+${lastname}&background=${background}&color=ffffff&size=${size}&rounded=true&bold=${true}`} alt="avatar"/>
        </>
    );
};

export default Gravatar;