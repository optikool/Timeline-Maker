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

export const ButtonEnabled= Template.bind({});
ButtonEnabled.args = {
  isNew: true,
  isDisabled: false,
  createUpdate: 'Create'
};

export const ButtonDisabled= Template.bind({});
ButtonDisabled.args = {
  isNew: false,
  isDisabled: true,
  createUpdate: 'Update'
};
