export const defaultAdjectives : string[]

export const defaultNouns: string[]

export const randomNumber: (max: number) => number

const haikunate : (props: {
    maxValue: number,
    adjectives: string[],
    nouns: string[]
}) => string

export default haikunate