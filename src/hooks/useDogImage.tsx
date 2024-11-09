import { useEffect, useState } from "react";

const useDogImage = (imgX: number = 100, imgY: number = 100) => {
    const [dogImage, setDogImage] = useState(`https://placehold.co/${imgX}x${imgY}`);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://dog.ceo/api/breeds/image/random");
                const data = await response.json();
                setDogImage(data.message);
            } catch (error) {
                console.error("Error fetching dog image:", error);
            }
        };

        fetchData();
    }, []);

    return dogImage;
};

export default useDogImage;