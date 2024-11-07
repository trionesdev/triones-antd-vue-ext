import { defineComponent } from 'vue';

export const AppToolbar = defineComponent({
  name: 'AppToolbar',
  props: {
    title: {
      type: String,
      required: false,
    },
  },
  setup(_, { slots }: { slots: Readonly<any> }) {
    return () => <div>AppToolbar
      {slots.default?.()}
    </div>;
  },
});
