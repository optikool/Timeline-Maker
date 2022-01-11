import { storiesOf, moduleMetadata } from "@storybook/angular";
import { HeaderComponent } from "./header.component";
import { Router } from '@angular/router';
import { MaterialsModule } from "../../../core/materials/materials.module";

let routerMock = {
    events: () => {},
    navigate:  () => {}
  };

storiesOf('Header Component', module).addDecorator(moduleMetadata({
    declarations: [HeaderComponent],
    imports: [MaterialsModule],
    providers: [{ provide: Router, useValue: routerMock }]
})).add('Header has been done', () => {
    return {
        template: '<app-header></app-header>',
    }
});
