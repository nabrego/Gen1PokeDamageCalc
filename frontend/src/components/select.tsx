import React from 'react'
import Select from 'react-select'

interface optionType {
    value: string;
    label: string;
}

const options: optionType[] = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const MyComponent: React.FC = () => (
  <Select options={options} />
)

export default MyComponent;