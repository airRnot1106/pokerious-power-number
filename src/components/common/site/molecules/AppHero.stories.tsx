import { AppHero } from '@/components/common/site/molecules/AppHero';

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';

export default {
  component: AppHero,
} as ComponentMeta<typeof AppHero>;

export const Default: ComponentStoryObj<typeof AppHero> = {};
