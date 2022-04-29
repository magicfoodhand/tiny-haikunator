export const defaultAdjectives : string[]

export const defaultNouns: string[]

export const randomNumber: (max: number) => number

export const toChars: (value: number, characters?: string) => string

type HaikunateProps = {
    maxValue: number,
    adjectives: string[],
    nouns: string[],
    useChars: boolean
}

declare const haikunate : (props?: HaikunateProps) => string

export default haikunate