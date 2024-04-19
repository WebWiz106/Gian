"use client";
import { useState } from "react";
import Image from "next/image";
import careerImage from "../../../public/images/about/abou.jpg";
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
    <div className="bg-gray-1  pb-8 pt-20 text-dark dark:bg-dark-2  dark:text-white lg:pb-[70px] lg:pt-[120px]">
      <div className=" mx-auto max-w-[1280px] max-md:px-[16px]">
        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1 max-md:gap-5">
          <div className="flex flex-col  max-md:ml-0 max-md:w-full">
            <div className="mt-3 flex grow flex-col px-5 text-lg text-neutral-950 max-md:mt-10 max-md:max-w-full max-md:px-0">
              <h1 className="text-6xl  tracking-wider  text-dark dark:text-white max-md:max-w-full max-md:text-4xl">
                Join the team
              </h1>
              <h1 className="mt-5 leading-7 text-dark dark:text-white max-md:mt-5 max-md:max-w-full  max-md:text-justify">
                Visioncraft is an employee-centred company that looks after
                every employee, gives autonomy to make choices, supports
                self-development and career growth. Our development team is
                always in search of talented individuals to join our
                employee-centred culture.
                <br />
                <br />
                Navigate below to see our current open positions!
              </h1>
              <div className="mt-10 flex gap-2.5 self-start rounded-[29px] bg-blue-700 px-5 py-3 font-medium text-white">
                <Link href="#contactform" className="grow">
                  Open positions
                </Link>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2292f024f1faa3d8a9e6b0f250ec3b3be05fdfed7187f2824bf58de9d08750c1?"
                  className="aspect-square w-6 shrink-0"
                />
              </div>
            </div>
          </div>
          <div className="ml-5 flex max-h-[400px] items-center  justify-center max-md:ml-0 max-md:h-[100%] max-md:w-full ">
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
            <div className="flex w-[65%] flex-col max-md:ml-0 max-md:w-full">
              <div className="flex grow flex-col px-5 max-md:mt-10 max-md:max-w-full max-md:px-0">
                <h className="  text-5xl font-bold  leading-[70.4px] tracking-wide  dark:text-white max-md:max-w-full">
                  Contact us
                </h>
                <div className="mt-5 text-base leading-7 tracking-wide text-zinc-500 max-md:mt-10 max-md:max-w-full">
                  Need an experienced and skilled hand with custom IT projects?{" "}
                  <br />
                  Fill out the form to get a free consultation.
                </div>
                <input
                  type="text"
                  className="mt-14 bg-transparent text-base leading-6 tracking-wide outline-none    max-md:mt-10 max-md:max-w-full"
                  placeholder="Full name"
                />

                <div className="mt-3 h-px shrink-0 bg-zinc-500 max-md:max-w-full" />
                <input
                  type="email"
                  className="mt-16 bg-transparent text-base leading-6  tracking-wide outline-none  max-md:mt-10 max-md:max-w-full"
                  placeholder="email@example.com"
                />

                <div className="mt-3 h-px shrink-0 bg-zinc-500 max-md:max-w-full" />
                <div className="mt-12 flex gap-5 whitespace-nowrap pt-3 text-base leading-6 tracking-wide    max-md:mt-10 max-md:flex-col">
                  <div className="flex w-full flex-col justify-center pb-7">
                    <input
                      placeholder="Address"
                      className=" bg-transparent outline-none"
                    />
                    <div className="mt-3 h-px shrink-0 bg-zinc-500" />
                  </div>
                  <div className="flex w-full flex-col justify-center pb-7">
                    <input
                      placeholder="Postal Code"
                      className=" bg-transparent outline-none"
                    />
                    <div className="mt-3 h-px shrink-0 bg-zinc-500" />
                  </div>
                </div>

                <input
                  type="text"
                  className="mt-16 bg-transparent   text-base leading-6 tracking-wide    outline-none  max-md:mt-10 max-md:max-w-full"
                  placeholder="Contact Phone"
                />
                <div className="mt-3 h-px shrink-0 bg-zinc-500 max-md:max-w-full" />
                <input
                  type="text"
                  className="mt-16 bg-transparent   text-base leading-6 tracking-wide    outline-none  max-md:mt-10 max-md:max-w-full"
                  placeholder="email@gmail.com"
                />

                <div className="mt-3 h-px shrink-0 bg-zinc-500 max-md:max-w-full" />
                <div className="mt-4 text-xs leading-4 tracking-wide text-red-700 max-md:max-w-full">
                  Please, enter valid email address
                </div>
                <div className="mt-9 text-base leading-6 tracking-wide    max-md:max-w-full">
                  Linkedin
                </div>
                <div className="mt-3 h-px shrink-0 bg-zinc-500 max-md:max-w-full" />
                <div className="mt-16 text-base leading-6 tracking-wide    max-md:mt-10 max-md:max-w-full">
                  Let’s talk about your idea
                </div>
                <div className="mt-3 h-px shrink-0 bg-zinc-500 max-md:max-w-full" />
                <div className="mt-16 flex items-center justify-center border border-dashed border-neutral-400 px-4 py-10 text-sm leading-6 tracking-wide    max-md:mt-10 max-md:max-w-full max-md:px-5">
                  <div className="flex justify-between gap-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f440347c849c5017309b81cd4820fe345e2391fbbe5ef88418acc84e7753583?"
                      className="aspect-square w-6 shrink-0"
                    />
                    <div>Upload Additional file</div>
                  </div>
                </div>
                <div className="mt-3 text-xs leading-4 tracking-wide    max-md:max-w-full">
                  Attach file. File size of your documents should not exceed
                  10MB
                </div>
                <div className="mt-10 items-center justify-center whitespace-nowrap bg-blue-700 p-4 text-center text-sm font-medium uppercase leading-6 tracking-wide  text-white max-md:max-w-full max-md:px-5">
                  Submit
                </div>
                <div className="mt-4 flex items-start gap-2  break-words rounded py-3 max-md:flex-nowrap ">
                  <div className="flex flex-col justify-center p-1">
                    <div className="h-4 w-4 shrink-0 rounded-sm border border-solid border-neutral-700 bg-white" />
                  </div>
                  <div className="text-sm leading-6 tracking-wide text-neutral-700 max-md:max-w-full">
                    I want to protect my data by signing an NDA
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-5 flex w-[35%] flex-col max-md:ml-0 max-md:w-full">
              <div className="my-auto flex flex-col self-stretch px-5 max-md:mt-10 max-md:px-0">
                <div className="text-base font-bold leading-6 tracking-wide  ">
                  Offices
                </div>
                <div className="mt-8 text-base leading-7 tracking-wide  ">
                  United States
                  <br />
                  500 5th Avenue Suite 400, NY 10110
                </div>
                <div className="mt-6 text-base leading-7 tracking-wide  ">
                  United Kingdom
                  <br />
                  High St, Bromley BR1 1DN
                </div>
                <div className="mt-6 text-base leading-7 tracking-wide  ">
                  France
                  <br />
                  80 avenue des Terroirs de France, Paris
                </div>
                <div className="mt-20 text-base font-bold leading-6 tracking-wide   max-md:mt-10">
                  For Quick Inquiries
                </div>
                <div className="mt-8 flex gap-2 text-base leading-6 tracking-wide  ">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e75924baf1c129d2798ed20bcba1ab2504224e437b9549a31088ce58624df87?"
                    className="my-auto aspect-[1.43] w-[23px] shrink-0"
                  />
                  <div>+44 7777777777</div>
                </div>
                <div className="mt-6 flex gap-2 text-base leading-6 tracking-wide  ">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="my-auto aspect-[1.43] w-[23px] shrink-0"
                  />
                  <div>+1 3333333330</div>
                </div>
                <div className="mt-20 text-base font-bold leading-6 tracking-wide   max-md:mt-10">
                  Would you like to join our newsletter?
                </div>
                <div className="mt-9 flex items-start justify-between gap-5">
                  <div className="mt-3 flex w-full flex-col justify-center whitespace-nowrap pb-7 text-base leading-6 tracking-wide   ">
                    <div className="mx-4 max-md:mx-2.5 ">Email</div>
                    <div className="mt-3 h-px shrink-0 bg-zinc-500" />
                  </div>
                  <div className="flex items-center justify-center bg-blue-700  p-4 max-md:px-5">
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
      <div className="mx-auto hidden max-w-lg">
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
