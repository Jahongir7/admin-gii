import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Login } from './login.component';
import '@styles/index.css';
import { GlobalWrapper } from '@main';

export default {
  title: 'Auth/Login',
  component: Login,
} as ComponentMeta<typeof Login>

const Template: ComponentStory<typeof Login> = (args) => (
  <GlobalWrapper>
    <Login {...args} />
  </GlobalWrapper>
);

export const LoginInitial = Template.bind({});
LoginInitial.args = {
}