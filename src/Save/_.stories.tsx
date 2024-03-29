import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Save } from "./index";

export default {
    title: "Svg/Save",
    component: Save,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Save {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
