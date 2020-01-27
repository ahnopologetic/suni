import React, { useState, useCallback, useReducer, useEffect } from 'react'
import { Headline3, FormGroup, Input, Select } from '@class101/ui'
import { ModalWithButton } from '../_view/molecule/ModalWithButton';
import { Student } from '../_types/student';

type Props = {
    studentInfo: Student;
    updateStudentInfo: React.Dispatch<React.SetStateAction<Student>>
}
export const StudentRegister: React.FC<Props> = React.memo(({ studentInfo, updateStudentInfo }) => {
    const useStudentInputReducer = useCallback((action: string, payload: any) => {
        switch (action) {
            case 'name':
                updateStudentInfo(value => { value.name = payload; return value; })
                break;
            case 'description':
                updateStudentInfo(value => { value.description = payload; return value; })
                break;
            case 'school':
                updateStudentInfo(value => { value.school = payload; return value; })
                break;
            case 'state':
                updateStudentInfo(value => { value.state = payload; return value; })
                break;
            case 'grade':
                updateStudentInfo(value => { value.grade = payload; return value; })
                break;
            default:
                break;
        }
    }, [])
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, action: string) => {
        useStudentInputReducer(action, e.target.value)
    }, [])
    return (
        <>
            {/* {studentInfo} */}
            <p>
                <Headline3>학생을 등록해주세요</Headline3>
            </p>
            <FormGroup label='학생 이름'>
                <Input
                    placeholder="학생의 이름을 입력해주세요"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { handleChange(e, 'name') }}
                />
            </FormGroup>
            <FormGroup label='학생 설명'>
                <Input placeholder="설명을 입력해주세요"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, 'description')}
                />
            </FormGroup>
            <FormGroup label='학년'>
                <Select
                    placeholder="학생의 학년을 입력해주세요"
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange(e, 'grade')}
                    options={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',]}
                />
            </FormGroup>
            <FormGroup label='학생 학교'>
                <Input
                    placeholder="학생의 학교를 입력해주세요"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, 'school')}
                />
            </FormGroup>
            <FormGroup label='학생 상태'>
                <Select
                    placeholder="학생의 상태를 입력해주세요"
                    value={studentInfo.state}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { handleChange(e, 'state') }}
                    options={['active', 'inactive']}
                />
            </FormGroup>
        </>
    )
});

export const StudentRegisterModal = () => {
    const [studentInfoPayload, updateStudentInfo] = useState<Student>({ name: '', grade: '' });
    const handleSubmit = useCallback(async () => {
        const res = await fetch('/api/student', { method: 'POST', body: JSON.stringify(studentInfoPayload) });
        console.log(res);
    }, [])
    return (
        <ModalWithButton hasSubmit hasCancel handleSubmit={handleSubmit}>
            학생을 등록해보세요
            <StudentRegister studentInfo={studentInfoPayload} updateStudentInfo={updateStudentInfo} />
        </ModalWithButton>
    )
}