import { storiesOf, moduleMetadata } from "@storybook/angular";
import { FooterComponent } from "./footer.component";
import { CoreModule } from "../../../core/core.module";

storiesOf('Footer Component', module).addDecorator(moduleMetadata({
    declarations: [FooterComponent],
    imports: [CoreModule],
    providers: []
}))
.add('Default Footer View', () => {
    const isNew = true;

    return {
        template: `
            <app-footer
                [isNew]='isNew'></app-footer>`,
    }
});
