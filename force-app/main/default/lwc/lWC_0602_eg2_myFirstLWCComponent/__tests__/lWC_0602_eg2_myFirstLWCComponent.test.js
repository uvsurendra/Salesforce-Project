import { createElement } from 'lwc';
import LWC_0602_eg2_myFirstLWCComponent from 'c/lWC_0602_eg2_myFirtstLWCComponent';

describe('c-l-w-c-0602-eg2-my-firtst-lwc-component', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-l-w-c-0602-eg2-my-firtst-lwc-component', {
            is: LWC_0602_eg2_myFirtstLWCComponent
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});