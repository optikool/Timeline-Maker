import { storiesOf, moduleMetadata } from "@storybook/angular";
import { FooterComponent } from "./footer.component";
import { MaterialsModule } from "src/app/materials/materials.module";

storiesOf('Footer Component', module).addDecorator(moduleMetadata({
    declarations: [FooterComponent],
    imports: [MaterialsModule],
    providers: []
}))
.add('Default Footer View', () => {
    return {
        template: '<app-footer></app-footer>',
    }
});