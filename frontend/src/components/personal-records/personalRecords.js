import React, { useEffect } from "react"
import styled from "styled-components"
import useGlobal from "../../store"

import Pr from "./pr"
import SectionTitle from "../../components/sectionTitle"

const PersonalRecordsStyled = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1440px;
    padding: 0 32px;
    box-sizing: border-box;

    #pr-list {
        display: flex;
        justify-content: space-between;
    }
`

export default function PersonalRecords({ isInverted }) {
    const [globalState, globalActions] = useGlobal()
    const { prs } = globalState
    useEffect(() => {
        globalActions.prContent.getPRs()
    }, [])
    return (
        <PersonalRecordsStyled>
            <SectionTitle isInverted title="My PRs" />
            <section id="pr-list">
                {prs.data &&
                    prs.data.map((pr, index) => {
                        return <Pr pr={pr} key={index} />
                    })}
            </section>
        </PersonalRecordsStyled>
    )
}
