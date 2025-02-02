import { Code } from '@/domain/code';
import { Component } from '@angular/core';

@Component({
    selector: 'normalize-doc',
    standalone: false,
    template: `
        <app-docsectiontext>
            <p>Normalize is another utility to reset CSS of the standard elements. While importing the CSS file, assign it to a layer and define the layer order with primeNG coming after the normalized layer.</p>
            <app-code [code]="code" selector="normalize-demo" [hideToggleCode]="true" [hideCodeSandbox]="true" [hideStackBlitz]="true"></app-code>
        </app-docsectiontext>
    `
})
export class NormalizeDoc {
    code: Code = {
        basic: `@layer normalize, primeng;

@import "normalize.css" layer(normalize-reset);`
    };
}
