import { storiesOf, moduleMetadata } from "@storybook/angular";
import { HeaderComponent } from "./header.component";
import { Router, RouterEvent } from '@angular/router';
import { MaterialsModule } from "src/app/materials/materials.module";

let routerMock = {
    events: () => {},
    navigate:  () => {}
  };

storiesOf('Header', module).addDecorator(moduleMetadata({
    declarations: [HeaderComponent],
    imports: [MaterialsModule],
    providers: [{ provide: Router, useValue: routerMock }]
})).add('Header has been done', () => {
    return {
        template: '<app-header></app-header>',
    }
});