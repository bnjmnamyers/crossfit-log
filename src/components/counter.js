import React, { useState, useEffect } from "react"
import styled from "styled-components"
import moment from "moment"

const CounterStyled = styled.section``

export default function Counter() {
    const [counter, setCounter] = useState()

    const dateDifference = () => {
        var bDt = moment("2020-12-28", "YYYY-MM-DD HH:mm:ss")
        var eDt = moment(new Date(), "YYYY-MM-DD HH:mm:ss")
        var diff = moment.preciseDiff(bDt, eDt)
        return diff
    }
    useEffect(() => {
        // dateDifference()
        const timer = setTimeout(() => {
            setCounter(dateDifference())
        }, 1000)

        return () => clearTimeout(timer)
    })
    return (
        <CounterStyled>
            <p>{counter}</p>
        </CounterStyled>
    )
}
