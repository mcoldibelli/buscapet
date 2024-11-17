import { useForm } from "react-hook-form"
import { CloseButton, FormGroup, FormWrapper, ImageSelection, LocationContainer, ModalOverlay, SubmitButton, Title } from "./PetForm.style"
import { API_URL } from '../../utils/constants';
import { useState } from "react";
import { LoginModalProps } from "../../utils/types";
import axios from 'axios';

export default function PetForm({ closeModal }: LoginModalProps) {
    const { register, handleSubmit } = useForm();
    const [species, setSpecies] = useState('Dog');

    const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();
    const handleOverlayClick = () => closeModal();
    const handleSpeciesChange = (event:any) => { setSpecies(event.target.value)};

    const onSubmit = async (data:any) => {
        try {
            const formData = new FormData();
    
            const postData = {
                species: species,
                petName: data.petName,
                description: data.description,
                status: data.status,
                state: data.state,
                city: data.city,
                neighborhood: data.neighborhood,
                street: data.street
            };
            formData.append('data', new Blob([JSON.stringify(postData)], { type: 'application/json' }));
            formData.append('image', data.imageName[0]);
            
            const response = await axios.post(`${API_URL}/post`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
    
            if (!response.data) {
                throw new Error('Network response was not ok');
            }
    
            console.log('Form submitted:', response.data);
            alert('Formulário enviado com sucesso!');
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Erro ao enviar formulário. Tente novamente.');
        }
    };

    return (
        <ModalOverlay onClick={handleOverlayClick}>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <FormWrapper onSubmit={handleSubmit(onSubmit)} onClick={stopPropagation}>
                <Title>O que aconteceu com o Pet?</Title>
                <ImageSelection><img
                        src={species === 'Dog' ? 'dog_login.png' : 'cat_login.png'}
                        alt={species}
                        className="active"/>
                </ImageSelection>

                <FormGroup>
                    <label htmlFor="status">O pet está/foi*</label>
                    <select {...register("status", { required: true })}>
                        <option value="Perdido">Perdido</option>
                        <option value="Achado">Achado</option>
                    </select>

                    <label htmlFor="species">Espécie*</label>
                    <select value={species} onChange={handleSpeciesChange}>
                        <option value="Dog">Cachorro</option>
                        <option value="Cat">Gato</option>
                    </select>

                    <label htmlFor="imageName">Imagem do pet*</label>
                    <input type="file" {...register("imageName", { required: true })} multiple={false}>
                    </input>

                    <label htmlFor="location">Localização</label>
                    <LocationContainer>
                        <input type="text" placeholder="Insira a cidade" {...register("city", { required: false })} />
                        <input type="text" placeholder="Insira o bairro" {...register("neighborhood", { required: false, maxLength: 100 })} />
                        <input type="text" placeholder="Insira o estado" {...register("state", { required: false, maxLength: 50 })} />
                    </LocationContainer>

                    <label htmlFor="description">Outras informações</label>
                    <input type="textarea" placeholder="Insira qualquer informação adicional" {...register("description", {maxLength: 500})} />
                </FormGroup>
                <SubmitButton type="submit" />
            </FormWrapper>
        </ModalOverlay>
    )
}