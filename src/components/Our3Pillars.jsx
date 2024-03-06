import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./../utilities/firebase";
import { OUR_3_PILLARS_DOCUMENT, APO_WEBSITE_COLLECTION } from '../constants/index.js'

const Our3Pillars = () => {
    const [pillars, setPillars] = useState({})
    const [copy, setCopy] = useState({})
    const [activePillar, setActivePillar] = useState("")

    useEffect(() => {
        const logFirebase = async () => {
            const docRef = doc(db, APO_WEBSITE_COLLECTION, OUR_3_PILLARS_DOCUMENT);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                const temp = {
                    "leadership": {
                        "imageUrl": data.leadership_image_url,
                        "text": data.leadership_text,
                    },
                    "friendship": {
                        "imageUrl": data.friendship_image_url,
                        "text": data.friendship_text,
                    },
                    "service": {
                        "imageUrl": data.service_image_url,
                        "text": data.service_text,
                    }
                }
                setPillars(temp);
                setCopy(temp['leadership']);
                setActivePillar('leadership');
            } else {
                console.log("No such document!");
            }
        };
        logFirebase();
    }, []);


    function handleClick(pillar) {
        setCopy(pillars[pillar])
        setActivePillar(pillar)
    }

    return <>
        <h1 className="text-4xl my-6 text-[#0F3B8E]">Our 3 Pillars</h1>
        <div className="grid-column bg-[#E9EFFD] p-12">
            <div className="flex">
                <button onClick={() => handleClick('leadership')} className={`text-2xl mr-6 mb-6 ${activePillar === 'leadership' ? 'text-[#0F3B8E] underline' : 'text-[#3c78ea]'} hover:text-[#0F3B8E]`}>Leadership</button>
                <button onClick={() => handleClick('friendship')} className={`text-2xl mr-6 mb-6 ${activePillar === 'friendship' ? 'text-[#0F3B8E] underline' : 'text-[#3c78ea]'} hover:text-[#0F3B8E]`}>Friendship</button>
                <button onClick={() => handleClick('service')} className={`text-2xl mr-6 mb-6 ${activePillar === 'service' ? 'text-[#0F3B8E] underline' : 'text-[#3c78ea]'} hover:text-[#0F3B8E]`}>Service</button>
            </div>
            <div className="flex">
                <p className="mr-10">{copy.text}
                </p>
                <img className="object-cover h-64 w-100" src={copy.imageUrl} alt="APO Leadership"/>
            </div>
        </div>
    </>;
}

export default Our3Pillars;

// hover:text-[#0F3B8E]