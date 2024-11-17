import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormData } from '../../utils/types';
import { FormGroup, FormWrapper, ImageSelection, StepNavigation, SubmitButton, Title } from './PetForm.style';

export default function PetForm() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        species: 'Dog',
        gender: 'Male',
        name: '',
        photo: null,
        additionalInfo: '',
        reference: '',
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setFormData((prev) => ({
            ...prev,
            photo: file,
        }));
    };

    const nextStep = () => setStep((prevStep) => prevStep + 1);
    const prevStep = () => setStep((prevStep) => Math.max(prevStep - 1, 1));

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            // API call
            console.log('Form submitted:', formData);
            navigate("/");
            alert('Formulário enviado com sucesso!');
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Erro ao enviar formulário. Tente novamente.');
        }
    };

    const renderStepContent = () => {
        switch (step) {
            case 1:
                return (
                    <>
                        <ImageSelection>
                            <img
                                src={formData.species === 'Dog' ? 'dog_login.png' : 'cat_login.png'}
                                alt={formData.species}
                                className="active"
                            />
                        </ImageSelection>

                        <FormGroup>
                            <label htmlFor="species">Espécie *</label>
                            <select
                                id="species"
                                name="species"
                                value={formData.species}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="Dog">Cachorro</option>
                                <option value="Cat">Gato</option>
                            </select>
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="gender">Gênero *</label>
                            <select
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="Female">Fêmea</option>
                                <option value="Male">Macho</option>
                            </select>
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="name">Nome do Pet</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Nome do Pet"
                            />
                        </FormGroup>

                        <SubmitButton type="button" onClick={nextStep}>
                            Avançar
                        </SubmitButton>
                    </>
                );
            case 2:
                return (
                    <>
                        <p>
                            A foto anexada será utilizada nos posts do site, utilize preferencialmente uma imagem onde o
                            animal apareça em evidência.
                        </p>
                        <FormGroup>
                            <label htmlFor="photo">Anexar foto *</label>
                            <input
                                type="file"
                                id="photo"
                                name="photo"
                                accept="image/*"
                                onChange={handleFileUpload}
                                required
                            />
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="additionalInfo">Informações adicionais</label>
                            <textarea
                                id="additionalInfo"
                                name="additionalInfo"
                                value={formData.additionalInfo}
                                onChange={handleInputChange}
                                placeholder="O pet possui alguma característica marcante?"
                            />
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="reference">Ponto de Referência</label>
                            <input
                                id="reference"
                                name="reference"
                                type="text"
                                value={formData.reference}
                                onChange={handleInputChange}
                                placeholder="Onde o pet foi visto pela última vez?"
                            />
                        </FormGroup>

                        <SubmitButton type="submit">Finalizar</SubmitButton>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <FormWrapper>
            <Title>O que aconteceu com o Pet?</Title>

            <StepNavigation>
                <button type="button" onClick={prevStep} disabled={step === 1}>
                    Situação
                </button>
                <button type="button" onClick={nextStep} disabled={step === 2}>
                    Informações
                </button>
            </StepNavigation>

            <form onSubmit={handleSubmit}>{renderStepContent()}</form>
        </FormWrapper>
    );
}
