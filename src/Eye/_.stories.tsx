import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Eye } from "./index";

export default {
    title: "Svg/Eye",
    component: Eye,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Eye {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
