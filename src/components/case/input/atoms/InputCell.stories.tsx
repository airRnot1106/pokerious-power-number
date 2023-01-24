import { InputCell } from '@/components/case/input/atoms/InputCell';

import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';

export default { component: InputCell } as ComponentMeta<typeof InputCell>;

export const Blank: ComponentStoryObj<typeof InputCell> = {
  args: {
    indices: [0, 0],
    placeholder: '0',
    value: '',
  },
};

export const _1: ComponentStoryObj<typeof InputCell> = {
  args: {
    indices: [0, 0],
    placeholder: '0',
    value: '1',
  },
};

export const _99: ComponentStoryObj<typeof InputCell> = {
  args: {
    indices: [0, 0],
    placeholder: '0',
    value: '99',
  },
};

export const Disabled: ComponentStoryObj<typeof InputCell> = {
  args: {
    indices: [0, 0],
    placeholder: '0',
    value: '',
    isDisabled: true,
  },
};
