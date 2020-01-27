export type Student = {
    name: string;
    description?: string;
    grade: number | string;
    school?: string;
    state?: StudentState
}

export type StudentState = 'active' | 'inactive';