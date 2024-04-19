"use client";
import { useState } from "react";
import Image from "next/image";
import careerImage from "../../../public/images/about/now-hiring-new-business-launch-plan-concept.jpg"
import Link from "next/link";

const Career = () => {

  //   const host ="http://localhost:8000/api/applycareer";

  //   const body= {
  //     "fullName": "John Doe",
  //     "email": "johndoe@gamil.com",
  //     "phone": "1234567890",
  //     "position": "Software Engineer",
  //     "skill": ["JavaScript", "Node.js", "MongoDB", "React"],
  //     "currentCTC": "50000",
  //     "expectedCTC": "60000",
  //     "experience": "5 years",
  //     "resume": "image url",
  //     "isReviewed": true,
  //     "isSelected": false
  // }

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    currentCTC: "",
    expectedCTC: "",
    skills: "",
    resume: "",
    education: "",
    college: "",
    experience: "",
    internship: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = () => {
    // Here you can perform any action with the form data, like sending it to a server
    console.log(formData);
    // Reset form after submission
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      position: "",
      currentCTC: "",
      expectedCTC: "",
      skills: "",
      resume: "",
      education: "",
      college: "",
      experience: "",
      internship: "",
    });
  };

  return (
    <div className=" pb-8 pt-20 lg:pb-[70px] lg:pt-[120px]">
      <div className=" max-w-[1280px] mx-auto max-md:px-[16px]">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5 max-md:gap-5">
          <div className="flex flex-col  max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 max-md:px-0 mt-3 text-lgmax-md:mt-10 max-md:max-w-full">
              <div className="text-6xl tracking-wider max-md:max-w-full max-md:text-4xl">
                Join the team{" "}
              </div>
              <div className="mt-5 leading-7 max-md:mt-5 max-md:max-w-full max-md:text-justify">
                Visioncraft is an employee-centred company that looks after every
                employee, gives autonomy to make choices, supports
                self-development and career growth. Our development team is always
                in search of talented individuals to join our employee-centred
                culture.
                <br />
                <br />
                Navigate below to see our current open positions!
              </div>
              <div className="flex gap-2.5 self-start px-5 py-3 mt-10 font-medium text-white bg-blue-700 rounded-[29px]">
                <Link href="#contactform" className="grow">Open positions</Link>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2292f024f1faa3d8a9e6b0f250ec3b3be05fdfed7187f2824bf58de9d08750c1?"
                  className="shrink-0 w-6 aspect-square"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center ml-5  max-md:ml-0 max-md:w-full max-h-[400px] max-md:h-[100%] ">
            {/* <div className="flex justify-center items-center px-16 w-full shadow-sm bg-blend-screen aspect-square bg-violet-800 bg-opacity-20 max-md:px-5 max-md:mt-10"> */}
            <Image
              loading="lazy"
              src={careerImage}
              className="aspect-square h-[100%] object-cover"
            />
            {/* </div> */}
          </div>
        </div>

        <div id="contactform" className="mt-20 max-md:mt-10 ">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[65%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-5 max-md:px-0 max-md:mt-10 max-md:max-w-full">
                <div className=" text-5xl font-bold tracking-wide leading-[70.4px] text-neutral-700 max-md:max-w-full">
                  Contact us
                </div>
                <div className="mt-5 text-base tracking-wide leading-7 text-zinc-500 max-md:mt-10 max-md:max-w-full">
                  Need an experienced and skilled hand with custom IT projects?{" "}
                  <br />
                  Fill out the form to get a free consultation.
                </div>
                <div className="mt-14 text-base tracking-wide leading-6 text-neutral-400 max-md:mt-10 max-md:max-w-full">
                  Your Comoany Name
                </div>
                <div className="shrink-0 mt-3 h-px bg-zinc-500 max-md:max-w-full" />
                <div className="mt-16 text-base tracking-wide leading-6 text-neutral-400 max-md:mt-10 max-md:max-w-full">
                  Nature of Bussiness
                </div>
                <div className="shrink-0 mt-3 h-px bg-zinc-500 max-md:max-w-full" />
                <div className="flex gap-5 pt-3 mt-12 text-base tracking-wide leading-6 whitespace-nowrap text-neutral-400 max-md:flex-col max-md:mt-10">
                  <div className="flex flex-col justify-center pb-7 w-full">
                    <div className="">Adress</div>
                    <div className="shrink-0 mt-3 h-px bg-zinc-500" />
                  </div>
                  <div className="flex flex-col justify-center pb-7 w-full">
                    <div className="">Postcode</div>
                    <div className="shrink-0 mt-3 h-px bg-zinc-500" />
                  </div>
                </div>
                <div className="mt-5 text-base tracking-wide leading-6 text-neutral-400 max-md:max-w-full">
                  Contact name
                </div>
                <div className="shrink-0 mt-3 h-px bg-zinc-500 max-md:max-w-full" />
                <div className="mt-16 text-base tracking-wide leading-6 text-neutral-400 max-md:mt-10 max-md:max-w-full">
                  Contact Phone
                </div>
                <div className="shrink-0 mt-3 h-px bg-zinc-500 max-md:max-w-full" />
                <div className="mt-16 text-base tracking-wide leading-6 text-neutral-400 max-md:mt-10 max-md:max-w-full">
                  email@gmail
                </div>
                <div className="shrink-0 mt-3 h-px bg-zinc-500 max-md:max-w-full" />
                <div className="mt-4 text-xs tracking-wide leading-4 text-red-700 max-md:max-w-full">
                  Please, enter valid email address
                </div>
                <div className="mt-9 text-base tracking-wide leading-6 text-neutral-400 max-md:max-w-full">
                  Linkedin
                </div>
                <div className="shrink-0 mt-3 h-px bg-zinc-500 max-md:max-w-full" />
                <div className="mt-16 text-base tracking-wide leading-6 text-neutral-400 max-md:mt-10 max-md:max-w-full">
                  Let’s talk about your idea
                </div>
                <div className="shrink-0 mt-3 h-px bg-zinc-500 max-md:max-w-full" />
                <div className="flex justify-center items-center px-4 py-10 mt-16 text-sm tracking-wide leading-6 border border-dashed border-neutral-400 text-neutral-400 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 justify-between">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f440347c849c5017309b81cd4820fe345e2391fbbe5ef88418acc84e7753583?"
                      className="shrink-0 w-6 aspect-square"
                    />
                    <div>Upload Additional file</div>
                  </div>
                </div>
                <div className="mt-3 text-xs tracking-wide leading-4 text-neutral-400 max-md:max-w-full">
                  Attach file. File size of your documents should not exceed 10MB
                </div>
                <div className="justify-center items-center p-4 mt-10 text-sm font-medium tracking-wide leading-6 text-center text-white uppercase whitespace-nowrap  bg-blue-700 max-md:px-5 max-md:max-w-full">
                  Submit
                </div>
                <div className="flex items-start gap-2 py-3  mt-4 rounded max-md:flex-nowrap break-words ">
                  <div className="flex flex-col justify-center p-1">
                    <div className="shrink-0 w-4 h-4 bg-white rounded-sm border border-solid border-neutral-700" />
                  </div>
                  <div className="text-sm tracking-wide leading-6 text-neutral-700 max-md:max-w-full">
                    I want to protect my data by signing an NDA
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch px-5 max-md:px-0 my-auto max-md:mt-10">
                <div className="text-base font-bold tracking-wide leading-6 text-neutral-700">
                  Offices
                </div>
                <div className="mt-8 text-base tracking-wide leading-7 text-neutral-700">
                  United States
                  <br />
                  500 5th Avenue Suite 400, NY 10110
                </div>
                <div className="mt-6 text-base tracking-wide leading-7 text-neutral-700">
                  United Kingdom
                  <br />
                  High St, Bromley BR1 1DN
                </div>
                <div className="mt-6 text-base tracking-wide leading-7 text-neutral-700">
                  France
                  <br />
                  80 avenue des Terroirs de France, Paris
                </div>
                <div className="mt-20 text-base font-bold tracking-wide leading-6 text-neutral-700 max-md:mt-10">
                  For Quick Inquiries
                </div>
                <div className="flex gap-2 mt-8 text-base tracking-wide leading-6 text-neutral-700">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e75924baf1c129d2798ed20bcba1ab2504224e437b9549a31088ce58624df87?"
                    className="shrink-0 my-auto aspect-[1.43] w-[23px]"
                  />
                  <div>+44 7777777777</div>
                </div>
                <div className="flex gap-2 mt-6 text-base tracking-wide leading-6 text-neutral-700">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="shrink-0 my-auto aspect-[1.43] w-[23px]"
                  />
                  <div>+1 3333333330</div>
                </div>
                <div className="mt-20 text-base font-bold tracking-wide leading-6 text-neutral-700 max-md:mt-10">
                  Would you like to join our newsletter?
                </div>
                <div className="flex gap-5 justify-between items-start mt-9">
                  <div className="flex flex-col justify-center pb-7 mt-3 text-base tracking-wide leading-6 whitespace-nowrap text-neutral-400 w-full">
                    <div className="mx-4 max-md:mx-2.5 ">Email</div>
                    <div className="shrink-0 mt-3 h-px bg-zinc-500" />
                  </div>
                  <div className="flex justify-center items-center p-4  bg-blue-700 max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7dd9512f82f68999a826aa38a8e8ec380eed8f24b4b9c8059089f24dd3e8b70?"
                      className="aspect-square w-[18px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="hidden mx-auto max-w-lg">
        <form className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="fullName"
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="phone"
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="position"
            >
              Position
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="position"
              type="text"
              placeholder="Position"
              value={formData.position}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="currentCTC"
            >
              Current CTC
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="currentCTC"
              type="text"
              placeholder="Current CTC"
              value={formData.currentCTC}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="expectedCTC"
            >
              Expected CTC
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="expectedCTC"
              type="text"
              placeholder="Expected CTC"
              value={formData.expectedCTC}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="skills"
            >
              Skills
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="skills"
              type="text"
              placeholder="Skills (comma separated)"
              value={formData.skills}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="resume"
            >
              Resume
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="resume"
              type="file"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="education"
            >
              Education
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="education"
              type="text"
              placeholder="Education"
              value={formData.education}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="college"
            >
              College
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="college"
              type="text"
              placeholder="College"
              value={formData.college}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="experience"
            >
              Experience
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="experience"
              type="text"
              placeholder="Experience"
              value={formData.experience}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="internship"
            >
              Internship
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="internship"
              type="text"
              placeholder="Internship"
              value={formData.internship}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Career;
