"use client";
import React, { useState } from "react";
import Button from "../Uiux/Button";
import firebtn from "../../../../public/icons/firebtnicon.svg";
import { useRouter } from "next/navigation";
const Maincontactform = () => {
  const [nameerror, setNameError] = useState("");
  const [emailerror, setEmailError] = useState("");
  const [messageerror, setmessageError] = useState("");
  const [thankyou, setthankyou] = useState(false);
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });

    formdata.name === ""
      ? setNameError("")
      : formdata.email === ""
        ? setEmailError("")
        : formdata.message === "" ? setmessageError("") : null;
  };
 const router = useRouter()
  const errorhandle = () => {
    if (formdata.name === "") {
      setNameError("Enter Your name First");
    } else if (formdata.email === "") {
      setEmailError("Enter Your Email Here");
    } else if (!formdata.email.includes("@" && ".")) {
      setEmailError("Enter Your Vaild Email , @ , .");
    } else if (formdata.message === "") {
      setEmailError("");
      setmessageError("Enter Your Message");
    } else {
      null;
    }
  };
  const handlesubmit = async () => {
    errorhandle();

    if (formdata.name && formdata.email && formdata.message) {
      try {
        const res = await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formdata.name,
            email: formdata.email,
            message: formdata.message
          })
        });

        const data = await res.json();

        if (data.ok) {
          // e.preventDefault()
          router.push('/thank-you');
          setFormdata({
            name: "",
            email: "",
            message: ""
          });
        } else {
          console.error("Email error:", data.error);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      }
    }
  };

  const handelthanku = () => {

    setthankyou(false);
  };
  return (
    <div className="max-w-[820px] bg-white p-3   lg:p-6 rounded-[38px] lg:rounded-[58px] w-full">
      {/* <form action=""> */}
      <div>
        {thankyou
          ? <div className="min-h-[475px]  p-4 lg:p-10 border-2 border-[#00000033] rounded-[44px]">
              <div className=" text-xl md:text-2xl lg:text-3xl xl:text-5xl leading-7 md:leading-8 lg:leading-10 xl:leading-14 null  font-medium text-primary">
                 Your From has been submited, We will connect with you shorly.       
                 <br />
                 <br />
                 <p className="font-semibold text-center  text-xl md:text-2xl lg:text-3xl xl:text-6xl leading-7 md:leading-8 lg:leading-10 xl:leading-18">Thank You !</p>          
              </div>
            </div>
          : <div className="font_ternary px-2 py-5  lg:px-10  lg:py-10 border-2 border-[#00000033] rounded-3xl lg:rounded-[44px]">
              <div className="">
                <div className="text-lg lg:text-[21px] text-secondary font-[350]">
                  Your Name
                </div>
                <input
                  type="text"
                  name="name"
                  id=""
                  value={formdata.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  className={`outline-none border-[3px] border-[#D8D8FF80] border-solid text-base lg:text-lg text-primary px-3 md:px-6 py-2 rounded-[10px] md:rounded-[40px] w-full bg-[#D8D8FF80] mt-4`}
                  data-np-intersection-state="visible"
                />
                {nameerror === ""
                  ? null
                  : <span className="text-red-500 text-[14px]">
                      {nameerror}
                    </span>}
              </div>
              <div className="pt-6">
                <div className="text-lg lg:text-[21px] text-secondary font-[350]">
                  Email Here
                </div>
                <input
                  type="email"
                  name="email"
                  id=""
                  value={formdata.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  className="outline-none border-[3px] border-[#D8D8FF80] border-solid text-base lg:text-lg text-primary px-3 md:px-6 py-2 rounded-[10px] md:rounded-[40px] w-full bg-[#D8D8FF80] mt-4"
                  data-np-intersection-state="visible"
                />
                {emailerror === ""
                  ? null
                  : <span className="text-red-500 text-[14px]">
                      {emailerror}
                    </span>}
              </div>
              <div className="pt-6">
                <div className="text-lg lg:text-[21px] text-secondary font-[350]">
                  Message Here
                </div>
                <textarea
                  name="message"
                  id=""
                  value={formdata.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="outline-none border-[3px] border-[#D8D8FF80] border-solid text-base lg:text-lg text-primary px-3 md:px-6 py-2 rounded-[10px] md:rounded-[40px] w-full bg-[#D8D8FF80] mt-4 min-h-[100px]"
                  data-np-intersection-state="visible"
                />
                {messageerror === ""
                  ? null
                  : <span className="text-red-500 text-[14px]">
                      {messageerror}
                    </span>}
              </div>
            </div>}

        <div className="py-8 md:py-12 mt-6 bg-[#D8D8FF80] flex justify-center text rounded-[44px]">
          {thankyou
            ? <div onClick={handelthanku}>
                <Button
                  btn_name="Back To From"
                  icon={firebtn.src}
                  border_color={"border-primary"}
                  btn_bg="bg-primary"
                  text_color="text-white"
                />
              </div>
            : <div onClick={handlesubmit}>
                <Button
                  btn_name="Submit"
                  icon={firebtn.src}
                  border_color={"border-primary"}
                  btn_bg="bg-primary"
                  text_color="text-white"
                />
              </div>}
        </div>
      </div>

      {/* </form> */}
    </div>
  );
};

export default Maincontactform;
