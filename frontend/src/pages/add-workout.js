import React, { useState, useEffect } from "react"
import axios from "axios"
import styled from "styled-components"
import Layout from "../components/layout"
import SectionTitle from "../components/sectionTitle"
import Seo from "../components/seo"

const AddWorkoutStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 109px;

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        max-width: 1440px;

        h2 {
            align-self: flex-start;
            margin: 32px 0 16px;
        }

        form {
            display: flex;
            flex-direction: column;
            width: 100%;

            fieldset,
            input,
            textarea {
                margin-bottom: 16px;
                padding: 8px;
                box-sizing: border-box;
            }

            fieldset {
                padding: 32px;
            }

            input[type="text"] {
                height: 40px;
            }

            textarea {
                height: 100px;
            }
        }
    }

    button {
        display: block;
        height: 40px;
        margin-top: 16px;
        margin-bottom: 16px;
        padding: 8px;
        border: 2px solid #000;
        background-color: #000;
        box-sizing: border-box;
        color: #fff;
        text-transform: uppercase;
        cursor: pointer;
        clear: left;

        &:hover {
            background-color: #333;
        }
    }

    .success-message {
        align-self: flex-start;
        margin-bottom: 16px;
    }

    #create-another__button {
        align-self: flex-start;
        margin-bottom: 32px;
    }
`

const AddWorkout = () => {
    const [formData, setFormData] = useState({})
    const [formIsValid, setFormIsValid] = useState(false)
    const [movementArray, setMovementArray] = useState([])
    const [movementNumber, setMovementNumber] = useState(1)
    const [movementInputArray, setMovementInputArray] = useState([])
    const [wodCreated, setWODCreated] = useState(false)

    const addMovement = e => {
        e.preventDefault()

        setMovementNumber(movementNumber + 1)
    }

    const validateForm = e => {
        e.preventDefault()

        for (let i = 1; i < movementNumber + 1; i++) {
            let movement = document.querySelector(
                `input[name=movement-${i}]`
            ).value

            setMovementArray(movementArray => [...movementArray, movement])

            if (i == movementNumber) {
                console.log("made it")
                setFormData({ ...formData, movementList: movementArray })
                setFormIsValid(true)
            }
        }
    }

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    useEffect(() => {
        const newMovementInput = (
            <input
                className="movement__input"
                type="text"
                name={`movement-${movementNumber}`}
                key={movementNumber}
                placeholder="Movement"
            />
        )
        setMovementInputArray(movementInputArray => [
            ...movementInputArray,
            newMovementInput,
        ])
    }, [movementNumber])

    useEffect(() => {
        setFormData({ ...formData, movementList: movementArray })
    }, [movementArray])

    useEffect(() => {
        if (
            formIsValid &&
            formData.movementList &&
            formData.movementList.length > 0
        ) {
            axios
                .post(`${process.env.API_BASE_URL}/wods`, formData)
                .then(response => {
                    console.log(response)
                    if (response.status == 201) {
                        setWODCreated(true)
                        setFormData({})
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }, [formData, formIsValid])

    return (
        <Layout>
            <AddWorkoutStyled>
                <Seo title="Add Workout"></Seo>
                <section>
                    <SectionTitle
                        title={!wodCreated ? "Add New WOD" : "Success"}
                    />
                    {!wodCreated ? (
                        <form>
                            <input
                                type="text"
                                name="coachedBy"
                                placeholder="Coach's Name"
                                onChange={e => handleChange(e)}
                            />
                            <input
                                type="text"
                                name="date"
                                placeholder="Date of Workout"
                                onChange={e => handleChange(e)}
                            />
                            <input
                                type="text"
                                name="description"
                                placeholder="Workout Description"
                                onChange={e => handleChange(e)}
                            />
                            <textarea
                                type="text"
                                name="instructions"
                                placeholder="Workout Instructions"
                                onChange={e => handleChange(e)}
                            />
                            <fieldset>
                                <legend>Is Hero WOD</legend>
                                <label htmlFor="not-hero-wod">No</label>
                                <input
                                    id="not-hero-wod"
                                    type="radio"
                                    name="isHeroWOD"
                                    value="false"
                                    onChange={e => handleChange(e)}
                                />
                                <label htmlFor="is-hero-wod">Yes</label>
                                <input
                                    id="is-hero-wod"
                                    type="radio"
                                    name="isHeroWOD"
                                    value="true"
                                    onChange={e => handleChange(e)}
                                />
                            </fieldset>
                            <fieldset>
                                <legend>Movement List</legend>
                                {movementInputArray &&
                                    movementInputArray.map(
                                        (movementInput, index) => {
                                            return movementInput
                                        }
                                    )}
                                <button
                                    type="button"
                                    onClick={e => addMovement(e)}
                                >
                                    Add Movement
                                </button>
                            </fieldset>
                            <input
                                type="text"
                                name="name"
                                placeholder="Workout Name"
                                onChange={e => handleChange(e)}
                            />
                            <textarea
                                type="text"
                                name="reflection"
                                placeholder="Workout Reflection"
                                onChange={e => handleChange(e)}
                            />
                            <input
                                type="text"
                                name="results"
                                placeholder="Results"
                                onChange={e => handleChange(e)}
                            />
                            <input
                                type="text"
                                name="type"
                                placeholder="Workout Type"
                                onChange={e => handleChange(e)}
                            />
                            <button onClick={e => validateForm(e)}>
                                Submit
                            </button>
                        </form>
                    ) : (
                        <>
                            <p className="success-message">
                                WOD successfully created!
                            </p>
                            <button
                                id="create-another__button"
                                onClick={() => setWODCreated(false)}
                            >
                                Create Another
                            </button>
                        </>
                    )}
                </section>
            </AddWorkoutStyled>
        </Layout>
    )
}

export default AddWorkout
