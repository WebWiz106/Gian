import React from "react";
import { IoPerson } from "react-icons/io5";

const page = () => {

  return (
    <div className="h-full ">
      <div className="w-full flex justify-end shadow-lg shadow-black h-9 mb-3 p-6 items-center">
        <span><IoPerson style={{ height: "35px", width: "35px" }} /></span>
      </div>
      <div className="flex gird grid-cols-2 gap-4">
        <div className="w-3/4 h-20 p-3 gap-4">
          <div className="grid grid-cols-2 p-3 gap-4">
            <div className="w-full h-20 rounded-md" style={{ backgroundColor: "#FF8E2E" }}></div>
            <div className="w-full h-20 rounded-md" style={{ backgroundColor: "#FF8E2E" }}></div>
            <div className="w-full h-20 rounded-md" style={{ backgroundColor: "#FF8E2E" }}></div>
            <div className="w-full h-20 rounded-md" style={{ backgroundColor: "#FF8E2E" }}></div>
          </div>
          <div>
            <div className="w-full flex justify-center gap-4">
              <span className="font-medium text-orange-400 flex justify-center hover:bg-black hover:text-white rounded-lg p-2 w-24">Week</span>
              <span className="font-medium text-orange-400 flex justify-center hover:bg-black hover:text-white rounded-lg p-2 w-24">Month</span>
              <span className="font-medium text-orange-400 flex justify-center hover:bg-black hover:text-white rounded-lg p-2 w-24">Year</span>
            </div>
          </div>
          <div className="w-full mt-3">
            <p className="w-full flex justify-center bg-black text-white p-2">Apps</p>
            <div className="w-full flex">
              <div className="w-1/3 flex justify-center border-r-2 border-black h-10 items-center" style={{backgroundColor:"#D9D9D9"}}>
                <p>Blogs App</p>
              </div>
              <div className="w-1/3 flex justify-center border-r-2 border-black items-center" style={{backgroundColor:"#D9D9D9"}}>
                <p>Launched on <span style={{color:"#FF8E2E"}}>01-12-2023</span></p>
              </div>
              <div className="w-1/3 flex justify-center items-center" style={{backgroundColor:"#D9D9D9"}}>
                <p><span style={{color:"#FF8E2E"}}>23</span> Clients using this app</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 flex flex-col item-center p-2 gap-4">
          <div className="flex flex-col justify-center border border-black border-solid">
            <p className="bg-black text-white w-full flex justify-center p-2">Clients</p>
            <span className="h-48" style={{ backgroundColor: "#D9D9D9" }}></span>
          </div>
          <div className="flex flex-col justify-center border border-black border-solid">
            <p className="bg-black text-white w-full flex justify-center p-2">Members</p>
            <span className="h-48" style={{ backgroundColor: "#D9D9D9" }}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
