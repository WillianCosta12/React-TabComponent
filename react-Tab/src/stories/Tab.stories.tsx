import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Tab } from '../components/tab'
import '../App.css'

export default {
  title: 'Tab/Tabs',
  component: Tab,
} as ComponentMeta<typeof Tab>

const Template: ComponentStory<typeof Tab> = (args) => <Tab {...args} />;

export const Tab0 = Template.bind({})
Tab0.args ={
  ids:[
    "Tab01",
    "Tab02",
    "Tab03",
    "Tab04"
  ],
  contents: [
    "Esse é o texto do Primeiro Tab",
    "Esse é o texto do Segundo Tab",
    "Esse é o texto do Terceiro Tab",
    "Esse é o texto do Quarto Tab"
  ],
}
