"use client";
import { useEffect } from "react";

const LoadingOverlay = () => {

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-svh flex flex-col gap-6 items-center justify-center z-50 bg-cvut-black/30 text-cvut-white backdrop-blur-xs">
            <p className="body-l">Váš požadavek se zpracovává, prosím vyčkejte... </p>
            <span className="loader h-20 w-20 border-[8px]"></span>
        </div>
    )
}

export default LoadingOverlay;