import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./../utilities/firebase";
import { useState } from "react";
import { WHAT_IS_APO_DOCUMENT, APO_WEBSITE_COLLECTION } from '../constants/index.js'


const WhatIsAPO = () => {
  const [image, setImage] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    const logFirebase = async () => {
      const docRef = doc(db, APO_WEBSITE_COLLECTION, WHAT_IS_APO_DOCUMENT);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setImage(data.image)
        setText(data.text)
      } else {
        console.log("No such document!");
      }
    };
    logFirebase();
  }, []);

  return (
    <>
      <h1 className="text-4xl my-6 text-[#0F3B8E] font-serif">What is APO</h1>
      <div className="flex">
        <img
          className="mr-6 object-cover h-64 w-100"
          src={image}
          alt="APO logo"
        />
        <p className="text-lg text-[#0F3B8E]">
          {text}
        </p>
      </div>
    </>
  );
};

export default WhatIsAPO;
