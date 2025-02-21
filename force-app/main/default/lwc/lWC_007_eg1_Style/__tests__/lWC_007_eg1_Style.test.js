import { createElement } from 'lwc';
import LWC_007_eg1_Style from 'c/lWC_007_eg1_Style';

describe('c-l-w-c-007-eg1-style', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-l-w-c-007-eg1-style', {
            is: LWC_007_eg1_Style
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});