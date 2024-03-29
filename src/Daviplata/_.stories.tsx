import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Daviplata } from "./index";

export default {
    title: "Svg/Daviplata",
    component: Daviplata,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Daviplata {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
