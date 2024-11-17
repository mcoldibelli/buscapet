import { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { useNavigate } from 'react-router-dom';
import { FormData } from '../utils/types';

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    position: relative;
    height: 700px;
    max-width: 550px;
    margin: auto;
    background-color: ${theme.colors.primary};
    color: white;
    border-radius: 0.75rem;
    padding: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid white;
        padding: 1rem;
        border-radius: 0.5rem;
    }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const StepNavigation = styled.div`
  display: flex;
  justify-content: center;
  height: 5rem;

  button {
    background-color: gray;
    border: none;
    padding: 0.75rem 2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    font-weight: 600;
    height: 3rem;
    color: white;

    &:not(:last-child) {
      margin-right: 1rem;
    }

    &:disabled {
      background-color: ${theme.colors.secondary};
      cursor: not-allowed;
    }
  }
`;

const ImageSelection = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid white;
    margin: 0 1rem;
    cursor: pointer;

    &.active {
      border-color: ${theme.colors.secondary};
    }
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1.5rem;

  label {
    color: white;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  select,
  input,
  textarea {
    width: 100%;
    padding: 0.75rem;
    border-radius: 0.5rem;
    border: none;
    font-size: 1rem;
  }

  select,
  input {
    background-color: white;
    color: black;
  }

  textarea {
    background-color: white;
    color: black;
    height: 6rem;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  background-color: ${theme.colors.secondary};
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.colors.secondary};
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

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
