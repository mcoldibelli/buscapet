import { useEffect, useState } from "react";

const usePetImage = (imgX: number = 100, imgY: number = 100, type: 'dog' | 'cat' = 'dog') => {
    const [petImage, setPetImage] = useState(`https://placehold.co/${imgX}x${imgY}`);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                let data;

                if (type === 'dog') {
                    response = await fetch("https://dog.ceo/api/breeds/image/random");
                    data = await response.json();
                    setPetImage(data.message);
                } else {
                    response = await fetch("https://api.thecatapi.com/v1/images/search");
                    data = await response.json();
                    setPetImage(data[0].url);
                }
            } catch (error) {
                console.error("Error fetching pet image:", error);
            }
        };

        fetchData();
    }, [type]);

    return petImage;
};

export default usePetImage;