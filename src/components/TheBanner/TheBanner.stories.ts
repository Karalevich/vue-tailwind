import type { Meta, StoryObj } from '@storybook/vue3';
import { fn } from '@storybook/test';
import TheBanner from '@/components/TheBanner.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/Banner',
  component: TheBanner,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof TheBanner>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {
    title: 'Title',
    tag: 'Tag',
    imageSrc: "/public/images/img-2.jpg",
    author: 'Author',
    date: '2021-01-01',
    authorImage: "https://randomuser.me/api/portraits/women/7.jpg",
    class: "relative mb-4 inline-block h-96 w-full overflow-hidden rounded bg-indigo-300 lg:w-1/3"
  },
  render: (args) => ({
    components: { TheBanner },
    setup() {
      return { args };
    },
    template: '<TheBanner v-bind="args" :class="args.class" />',
  }),
};

