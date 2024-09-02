import React, { useEffect, useState } from 'react';
import './styles.css';

export const Loader = () => {
    return (
        <>

            <svg role="img" aria-label="title" viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'>
                <circle className='spin' cx='400' cy='400' fill='none'
                    r='110' stroke-width='19' stroke='#E387FF'
                    stroke-dasharray='286 1400'
                    stroke-linecap='round' />
            </svg>

        </>
    );
}
