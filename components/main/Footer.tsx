import React from "react";
import {
  RxGithubLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

const Footer = () => {
  return (
    <footer className="w-full h-full bg-transparent shadow-lg">
            <div className="w-full h-full flex flex-col items-center justify-around flex-wrap">
                <div className="min-w-[200px] h-auto flex flex-row items-center justify-start">
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxTwitterLogo />
                        <span className="text-[15px] ml-[6px]">Twitter</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxLinkedinLogo />
                        <span className="text-[15px] ml-[6px]">Linkedin</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Github</span>    
                    </p>
                </div>
            </div>
            <div className=" text-[15px] text-center">
                &copy; WebChain Dev 2023 Inc. All rights reserved
            </div>
    </footer>
  )
}

export default Footer