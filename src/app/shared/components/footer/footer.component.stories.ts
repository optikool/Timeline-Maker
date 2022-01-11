import { moduleMetadata, Meta, Story } from "@storybook/angular";
import { FooterComponent } from "./footer.component";
import { CoreModule } from "../../../core/core.module";
import { MaterialsModule } from "../../..//core/materials/materials.module";

export default {
  title: 'App/Shared/Footer',
  component: FooterComponent,
  decorators: [
    moduleMetadata({
      declarations: [FooterComponent],
      imports: [CoreModule, MaterialsModule],
    }),
  ]
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Primary= Template.bind({});
Primary.args = {
  isNew: true,
  isDisabled: false
};

export const Secondary= Template.bind({});
Secondary.args = {
  isNew: false,
  isDisabled: true
};
