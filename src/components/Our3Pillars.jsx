import { useState } from "react";

const PILLARS = {
    "leadership": {
        "image": "https://static1.squarespace.com/static/5e0ebeb743524e391e0c522c/t/5e1e38437abcac1fe3edacc3/1579038791636/apo.jpg?format=300w",
        "text": "APO LEADERSHIP dolor sit amet, consectetur adipiscing elit. Praesent orci nibh, porta vel finibus sed, feugiat ac magna. In hac habitasse platea dictumst. Maecenas elit nisl, porta congue rhoncus non, lacinia a elit. Morbi quis imperdiet ligula, nec iaculis eros. In hac habitasse platea dictumst. Vestibulum tincidunt, arcu ac consequat mattis, sapien orci facilisis diam, eu venenatis ligula tortor auctor ipsum. Suspendisse cursus tortor ac faucibus hendrerit. Nulla dictum quam a magna eleifend bibendum."    
    },
    "friendship": {
        "image": "https://static1.squarespace.com/static/5e0ebeb743524e391e0c522c/t/5e1e38437abcac1fe3edacc3/1579038791636/apo.jpg?format=300w",
        "text": "APO FRIENDSHIP dolor sit amet, consectetur adipiscing elit. Praesent orci nibh, porta vel finibus sed, feugiat ac magna. In hac habitasse platea dictumst. Maecenas elit nisl, porta congue rhoncus non, lacinia a elit. Morbi quis imperdiet ligula, nec iaculis eros. In hac habitasse platea dictumst. Vestibulum tincidunt, arcu ac consequat mattis, sapien orci facilisis diam, eu venenatis ligula tortor auctor ipsum. Suspendisse cursus tortor ac faucibus hendrerit. Nulla dictum quam a magna eleifend bibendum."    
    },
    "service": {
        "image": "https://static1.squarespace.com/static/5e0ebeb743524e391e0c522c/t/5e1e38437abcac1fe3edacc3/1579038791636/apo.jpg?format=300w",
        "text": "APO SERVICE dolor sit amet, consectetur adipiscing elit. Praesent orci nibh, porta vel finibus sed, feugiat ac magna. In hac habitasse platea dictumst. Maecenas elit nisl, porta congue rhoncus non, lacinia a elit. Morbi quis imperdiet ligula, nec iaculis eros. In hac habitasse platea dictumst. Vestibulum tincidunt, arcu ac consequat mattis, sapien orci facilisis diam, eu venenatis ligula tortor auctor ipsum. Suspendisse cursus tortor ac faucibus hendrerit. Nulla dictum quam a magna eleifend bibendum."    
    }
}

const Our3Pillars = () => {
    const [copy, setCopy] = useState(PILLARS['leadership']);

    function handleClick(pillar) {
        setCopy(PILLARS[pillar])
    }

    return <>
        <h1 className="text-4xl my-6 text-[#0F3B8E]">Our 3 Pillars</h1>
        <div className="grid-column bg-[#E9EFFD] p-12">
            <div className="flex">
                <button onClick={() => handleClick('leadership')} className="text-2xl mr-6 mb-6 text-[#0F3B8E]">Leadership</button>
                <button onClick={() => handleClick('friendship')} className="text-2xl mr-6 mb-6 text-[#0F3B8E]">Friendship</button>
                <button onClick={() => handleClick('service')} className="text-2xl mr-6 mb-6 text-[#0F3B8E]">Service</button>
            </div>
            <div className="flex">
                <p className="mr-10">{copy.text}
                </p>
                <img className="object-cover h-64 w-100" src={copy.image} alt="APO Leadership"/>
            </div>
        </div>
    </>;
}

export default Our3Pillars;