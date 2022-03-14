export const defaultAdjectives : string[]

export const defaultNouns: string[]

export const randomNumber: (max: number) => number

type HaikunateProps = {
    maxValue: number,
    adjectives: string[],
    nouns: string[]
}

declare const haikunate : (props?: HaikunateProps) => string

export default haikunate