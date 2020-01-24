import React from 'react'
import { Headline3, Subtitle1, Icon } from '@class101/ui'
import styled from 'styled-components'
import { RowBlock } from '../atom'
import { ScheduleBlock } from './StudentDetail'

type Props = {
    name: string;
    grade: number;
    schedule?: string[];
    state?: string;
}
export const StudentPreview = React.memo(({ name, grade, schedule, state }: Props) => {
    return (
        <Container data-test-id='student-preview'>
            <Subtitle1>{name}</Subtitle1>
            <Subtitle1>{grade}학년</Subtitle1>
            <StyledRowBlock>
                {schedule?.map((day, key) => <ScheduleBlock key={key}>{day}</ScheduleBlock>)}
            </StyledRowBlock>
            <IconContainer>
                <Icon.ChevronRight />
            </IconContainer>
        </Container>
    )
})

const Container = styled.div`
    display: flex;
    width: 100%;
`

const StyledRowBlock = styled(RowBlock)`
    font-size: 20px;
`


const IconContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
`