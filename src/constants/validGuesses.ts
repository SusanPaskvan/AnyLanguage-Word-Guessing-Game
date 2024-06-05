import { CONFIG } from './config'

export const VALIDGUESSES = [
  'lesdo',
  'leedo',
  'heldo',
  'telel',
  'baabe',
  'ggooh',
  'odenh',
  'hodee',
  'anjoḵ',
  'yegge',
  'ehone',
  'neeyo',
  'sozaa',
  'kkun\'',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
