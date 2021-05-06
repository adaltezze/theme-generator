import { create } from '../core/generator.js';
import { linearGradient } from '../core/utils.js';

export const gradients = create('gradients', {
  gradient1: linearGradient({ direction: '90deg', colors: ['#70b62c', '#dbdb00'] }),
  gradient2: linearGradient({ direction: '90deg', colors: ['#ffffff', '#ffffff'] }),
});
