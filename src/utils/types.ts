export interface LostFoundCardProps {
    name: string;
    location: string;
    status: string;
    imageUrl: string;
}

export interface HighlightedCardProps {
    name: string;
    keeper: string;
    history: string;
}

export interface LoginModalProps {
    closeModal: () => void
}

export interface FormData {
    species: Species;
    gender: Gender;
    name: string;
    photo: File | null;
    additionalInfo: string;
    reference: string;
}

export type PetImageProps = {
    imgX?: number;
    imgY?: number;
    type: Species;
}

export type Species = 'Dog' | 'Cat';
export type Gender = 'Female' | 'Male';