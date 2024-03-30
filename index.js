import micro, {randomNumber, toChars} from 'micro-haikunator'

// Inspired by https://github.com/usmanbashir/haikunator

/**
 * @constant {string[]}
 */
export const defaultAdjectives = ["autumn", "hidden", "bitter", "misty", "silent", "empty", "dry", "dark", "summer",
  "icy", "delicate", "quiet", "white", "cool", "spring", "winter", "patient",
  "twilight", "dawn", "crimson", "wispy", "weathered", "blue", "billowing",
  "broken", "cold", "damp", "falling", "frosty", "green", "long", "late", "lingering",
  "bold", "little", "morning", "muddy", "old", "red", "rough", "still", "small",
  "sparkling", "thrumming", "shy", "wandering", "withered", "wild", "black",
  "young", "holy", "solitary", "fragrant", "aged", "snowy", "proud", "floral",
  "restless", "divine", "polished", "ancient", "purple", "lively", "nameless",]

/**
 * @constant {string[]}
 */
export const defaultNouns = ["waterfall", "river", "breeze", "moon", "rain", "wind", "sea", "morning",
  "snow", "lake", "sunset", "pine", "shadow", "leaf", "dawn", "glitter", "forest",
  "hill", "cloud", "meadow", "sun", "glade", "bird", "brook", "butterfly",
  "bush", "dew", "dust", "field", "fire", "flower", "firefly", "feather", "grass",
  "haze", "mountain", "night", "pond", "darkness", "snowflake", "silence",
  "sound", "sky", "shape", "surf", "thunder", "violet", "water", "wildflower",
  "wave", "water", "resonance", "sun", "log", "dream", "cherry", "tree", "fog",
  "frost", "voice", "paper", "frog", "smoke", "star",]

/**
 * Generate a random haikunated name, `< adjective >-< noun >-< number | string >`, from options
 * @param {HaikunateProps} options 
 * @returns string
 */
const haikunate = ({
  maxValue = 10_000,
  adjectives = defaultAdjectives,
  nouns = defaultNouns,
  useChars = false
} = {}) =>
  micro({maxValue, adjectives, nouns, useChars})
    
export { randomNumber, toChars }
export default haikunate