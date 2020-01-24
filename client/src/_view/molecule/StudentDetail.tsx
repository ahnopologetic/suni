import React from 'react'
import styled from 'styled-components'
import { Subtitle1, Icon, Colors } from '@class101/ui'
import { RowBlock } from '../atom'

type Props = {
    name: string;
    grade: number;
    schedule?: string[];
    state?: string;
    description?: string;
    lastPart?: string;
}

export const StudentDetail = ({ name, grade, schedule, state, description, lastPart }: Props) => {
    return (
        <Container data-test-id='student-detail'>
            <Subtitle1>{name}</Subtitle1>
            <Subtitle1>{grade}학년</Subtitle1>
            <RowBlock>
                {schedule?.map((day, key) => <ScheduleBlock key={key}>{day}</ScheduleBlock>)}
            </RowBlock>
            {/* <IconContainer>
                <Icon.ChevronDown />
            </IconContainer> */}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const ScheduleBlock = styled.div`
    width: 30px;
    height: 28px;
    font-size: 20px;
    display: flex;
    background-color: #dde0e2;
    align-items: center;
    justify-content: center;
    margin: 0 2px;
    border-radius: .3rem;
    background-color: ${Colors.gray200};
`