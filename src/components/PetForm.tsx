import { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const FormWrapper = styled.div`
    position: relative;
    top: 2%;
    max-width: 600px;
    margin: 0 auto;
    
    background-color: ${theme.colors.primary};
    color: white;
    
    border-radius: 0.75rem;
    
    padding: 2rem;
    height: 48rem;
    
    display: flex;
    flex-direction: column;
    text-align: center;
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
    margin-bottom: 2rem;
`;

const StepNavigation = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;

    button {
        background-color: ${theme.colors.secondary};
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
            background-color: gray;
        }
    }
`;

const ImageSelection = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;

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

    select, input, textarea {
        width: 100%;
        padding: 0.75rem;
        border-radius: 0.5rem;
        border: none;
        font-size: 1rem;
    }

    select, input {
        background-color: white;
        color: black;
    }

    textarea {
        background-color: white;
        color: black;
        height: 6rem;
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
    }
`;

export default function PetForm() {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep((prevStep) => prevStep + 1);
    const prevStep = () => setStep((prevStep) => prevStep - 1);

    const renderStepContent = () => {
        switch (step) {
            case 1:
                return (
                    <>
                        <ImageSelection>
                            <img src="dog_login.png" alt="Perdi" className="active" />
                            <img src="cat_login.png" alt="Encontrei" />
                        </ImageSelection>

                        <FormGroup>
                            <label htmlFor="species-input">Espécie *</label>
                            <select id="species-input">
                                <option value="1">Cachorro</option>
                                <option value="2">Gato</option>
                            </select>
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="gender-input">Gênero *</label>
                            <select id="gender-input">
                                <option value="1">Fêmea</option>
                                <option value="2">Macho</option>
                            </select>
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="pet-name-input">Nome do Pet</label>
                            <input id="pet-name-input" type="text" placeholder="Nome do Pet" />
                        </FormGroup>

                        <SubmitButton onClick={nextStep}>Avançar</SubmitButton>
                    </>
                );
            case 2:
                return (
                    <>
                        <p>A foto anexada será utilizada nos posts do site, utilize preferencialmente uma imagem onde o animal apareça em evidência.</p>
                        <FormGroup>
                            <label htmlFor="photo-upload">Anexar foto *</label>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <input type="file" id="photo-upload" />
                                <SubmitButton style={{ marginLeft: '1rem' }}>Enviar</SubmitButton>
                            </div>
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="extra-info">Informações adicionais</label>
                            <textarea id="extra-info" placeholder="O pet possui alguma característica marcante?"></textarea>
                        </FormGroup>

                        <SubmitButton onClick={nextStep}>Avançar</SubmitButton>
                    </>
                );
            case 3:
                return (
                    <>
                        {/* <FormGroup>
                            <label htmlFor="state-input">Estado *</label>
                            <select id="state-input">
                                <option value="1">SP</option>
                                <option value="2">RJ</option>
                            </select>
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="city-input">Cidade *</label>
                            <select id="city-input">
                                <option value="1">São Paulo</option>
                                <option value="2">Rio de Janeiro</option>
                            </select>
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="neighborhood-input">Bairro *</label>
                            <input id="neighborhood-input" type="text" placeholder="Nome do Bairro" />
                        </FormGroup> */}

                        <FormGroup>
                            <label htmlFor="reference-input">Ponto de Referência</label>
                            <input id="reference-input" type="text" placeholder="Onde o pet foi visto pela última vez?" />
                        </FormGroup>

                        <div>
           
                        </div>


                        <SubmitButton onClick={() => alert('Formulário enviado!')}>Finalizar</SubmitButton>
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
                <button onClick={prevStep} disabled={step === 1}>Situação</button>
                <button onClick={nextStep} disabled={step === 3}>Informações</button>
                <button onClick={nextStep} disabled={step === 3}>Contato</button>
            </StepNavigation>

            <form>
                {renderStepContent()}
            </form>
        </FormWrapper>
    );
}
