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
    margin-top: 80px;

    #pr-list {
        display: flex;
        justify-content: space-between;
    }
`

export default function PersonalRecords({ prData }) {
    const [globalState, globalActions] = useGlobal()
    const { prs } = globalState
    useEffect(() => {
        globalActions.prContent.getPRs()
    }, [])
    console.log(globalState.prs.data)
    return (
        <PersonalRecordsStyled>
            <SectionTitle title="My PRs" />
            <section id="pr-list">
                {prs.data &&
                    prs.data.map((pr, index) => {
                        return <Pr pr={pr} key={index} />
                    })}
            </section>
        </PersonalRecordsStyled>
    )
}
