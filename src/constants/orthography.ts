import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'b',
  'd',
  'dl',
  'dz',
  'g',
  'gg',
  "'",
  't',
  'tl',
  'ts',
  'k',
  'kk',
  "t'",
  "tl'",
  "ts'",
  "k'",
  "ḵk'",
  'm',
  'n',
 'l',
  'z',
  'y',
  'gh',
  'nh',
  'ł',
  's',
  'yh',
  'h',
  'j',
  'ch',
  "ch'",
  'sh',
  
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
