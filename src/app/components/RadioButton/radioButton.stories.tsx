import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { RadioButton } from './radioButton'
import { Label } from '../Label'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Component/RadioButton',
  component: RadioButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof RadioButton>
export default meta
type Story = StoryObj<typeof meta>

export const RadioButtonDisabled: Story = {
  args: {
    name: 'example',
    value: 'option1',
    checked: false,
    disabled: true,
  },
  render: (args) => (
    <>
      <RadioButton {...args} id="radio-disabled" />
      <Label for="radio-disabled" label="option1" disabled>
        Large Radio Button
      </Label>
    </>
  ),
}

export const RadioButtonChecked: Story = {
  args: {
    name: 'example',
    value: 'option2',
    checked: true,
  },
  render: (args) => (
    <>
      <RadioButton {...args} id="radio-checked" />
      <Label for="radio-checked" label="option2">
        Large Radio Button
      </Label>
    </>
  ),
}
