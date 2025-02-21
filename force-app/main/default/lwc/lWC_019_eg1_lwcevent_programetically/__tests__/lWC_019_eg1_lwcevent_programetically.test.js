import { createElement } from 'lwc';
import LWC_019_eg1_lwcevent_programetically from 'c/lWC_019_eg1_lwcevent_programetically';

describe('c-l-w-c-019-eg1-lwcevent-programetically', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-l-w-c-019-eg1-lwcevent-programetically', {
            is: LWC_019_eg1_lwcevent_programetically
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});