import React from "react";
import SubTitle from "./SubTitle";

const Skills = () => {
  return (
    <div
      className="container mx-auto 
    
     flex flex-col justify-center items-center gap-12
      mb-10 sm:mb-0`
    "
    >
      <SubTitle title="Skills" />
      <main className="grid grid-cols-1 lg:grid-cols-2 ">
       
        <section
          className="flex flex-col justify-center items-center mr-4
        gap-2"
        >
          <div className="flex justify-start items-center gap-2">
            <span className="w-20 text-sm"> Photoshop</span>
            <div className="w-40 h-4 bg-slate-700 dark:bg-white rounded-lg">
              <span className="block w-36 h-4  bg-gradient-to-r from-green-300 via-indigo-600-300 to-blue-300  dark:bg-slate-700 dark:bg-white0"></span>
            </div>
          </div>
          <div className="flex justify-start items-center gap-2">
            <span className="w-20 text-sm"> Premiere</span>
            <div className="w-40 h-4 bg-slate-700 dark:bg-white rounded-lg">
              <span className="block w-36 h-4  bg-gradient-to-r from-green-300 via-indigo-600-300 to-blue-300  dark:bg-slate-700 dark:bg-white0"></span>
            </div>
          </div>
          <div className="flex justify-start items-center gap-2">
            <span className="w-20 text-sm"> Illustrator</span>
            <div className="w-40 h-4 bg-slate-700 dark:bg-white rounded-lg">
              <span className="block w-32 h-4  bg-gradient-to-r from-green-300 via-indigo-600-300 to-blue-300  dark:bg-slate-700 dark:bg-white0"></span>
            </div>
            
          </div>
          <div className="flex justify-start items-center gap-2">
            <span className="w-20 text-sm"> After Effect</span>
            <div className="w-40 h-4 bg-slate-700 dark:bg-white rounded-lg">
              <span className="block w-32 h-4  bg-gradient-to-r from-green-300 via-indigo-600-300 to-blue-300  dark:bg-slate-700 dark:bg-white0"></span>
            </div>
            
          </div>
          
       
        </section>
        <section
          className="flex flex-col justify-center items-center mr-4
        gap-2"
        >
          <div className="flex justify-start items-center gap-2">
            <span className="w-20 text-sm">Office</span>
            <div className="w-40 h-4 bg-slate-700 dark:bg-white rounded-lg">
              <span className="block w-36 h-4  bg-gradient-to-r from-green-300 via-indigo-600-300 to-blue-300  dark:bg-slate-700 dark:bg-white0"></span>
            </div>
          </div>
          <div className="flex justify-start items-center gap-2">
            <span className="w-20 text-sm">Creativity</span>
            <div className="w-40 h-4 bg-slate-700 dark:bg-white rounded-lg">
              <span className="block w-[130px] h-4  bg-gradient-to-r from-green-300 via-indigo-600-300 to-blue-300  dark:bg-slate-700 dark:bg-white0"></span>
            </div>
          </div>
          <div className="flex justify-start items-center gap-2">
            <span className="w-20 text-sm">Soft Skills</span>
            <div className="w-40 h-4 bg-slate-700 dark:bg-white rounded-lg">
              <span className="block w-36 h-4  bg-gradient-to-r from-green-300 via-indigo-600-300 to-blue-300  dark:bg-slate-700 dark:bg-white0"></span>
            </div>
            
          </div>
          <div className="flex justify-start items-center gap-2">
            <span className="w-20 text-sm">English</span>
            <div className="w-40 h-4 bg-slate-700 dark:bg-white rounded-lg">
              <span className="block w-32 h-4  bg-gradient-to-r from-green-300 via-indigo-600-300 to-blue-300  dark:bg-slate-700 dark:bg-white0"></span>
            </div>
            
          </div>
          
       
        </section>
      </main>
    </div>
  );
};

export default Skills;
