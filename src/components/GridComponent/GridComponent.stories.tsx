import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { data } from './Datasource';
import  GridComponent  from './GridComponent';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/GridComponent',
  component: GridComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof GridComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GridComponent> = (args) => <GridComponent {...args} />;

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   label: 'Primary',
// };

export const JordGridComponent = Template.bind({});
JordGridComponent.args = {
  data: data,
};
