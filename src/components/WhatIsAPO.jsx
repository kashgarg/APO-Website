import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
// import { getFirestore } from "firebase/firestore";
import { db } from "./../utilities/firebase";
import { useState } from "react";



const WhatIsAPO = () => {
  const [image, setImage] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    const logFirebase = async () => {
      const docRef = doc(db, 'APO Website', "What is APO");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const data = docSnap.data();
        setImage(data.image)
        setText(data.text)
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    logFirebase();
  }, []);

  return (
    <>
      <h1 className="text-4xl my-6 text-[#0F3B8E]">What is APO</h1>
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
