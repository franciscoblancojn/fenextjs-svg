import React from 'react'
import { Story, Meta } from "@storybook/react";

import { Cancel } from "./index";

export default {
    title: "Svg/Cancel",
    component: Cancel,
} as Meta;

const TemplateIndex: Story<{ className?: string }> = (args) => (
    <Cancel {...args}/>
);

export const Index = TemplateIndex.bind({});
Index.args = {};
