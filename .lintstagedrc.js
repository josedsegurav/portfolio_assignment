import { relative } from 'path'

const buildEslintCommand = (filenames) =>
  `eslint --config eslint.config.mjs --fix ${filenames
    .map((f) => `"${relative(process.cwd(), f)}"`)
    .join(' ')}`

export default {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, 'prettier --write'],
}
