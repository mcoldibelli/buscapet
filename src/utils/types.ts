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

export interface IFormData {
    species: Species;
    status: Status;
    petName: string;
    imageName: File | null;
    description: string;
    city: string;
    neighborhood: string;
    state: string;
}

export type PetImageProps = {
    imgX?: number;
    imgY?: number;
    type: Species;
}

export type Species = 'Dog' | 'Cat';
export type Status = 'Lost' | 'Found';