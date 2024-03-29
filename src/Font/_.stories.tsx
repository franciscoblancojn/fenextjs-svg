import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Font } from "./index";

export default {
    title: "Svg/Font",
    component: Font,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Font {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
