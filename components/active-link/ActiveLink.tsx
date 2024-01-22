"use client";

import Link from 'next/link';
import React from 'react';
import style from './ActiveLink.module.css'; // Asegúrate de que la ruta sea correcta
import { usePathname } from 'next/navigation';

interface Props {
    path: string;
    text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
    const pathName = usePathname();
    console.log(pathName);
    return (
        <Link href={path}
            className={`${style.link} ${(pathName === path) && style['active-link']}`}>{text}
        </Link>
    );
};
