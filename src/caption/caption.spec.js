/**
 * @package     Joomla.Tests
 * @subpackage  JavaScript Tests
 *
 * @copyright   Copyright (C) 2005 - 2017 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 *
 * @since       3.6.3
 * @version     1.0.0
 */
describe('JCaption applied to single image', () => {
	// Set up the script
	beforeAll(() => {
		fixture.setBase('node_modules/joomla-javascript-tests/src/caption')
		html_fixture = fixture.load('fixtures/fixture.html');
		window.fix = html_fixture[0];
	});

	afterAll(() => {
		fixture.cleanup();
	});

	describe('JCaption applied to single image', () => {
		beforeAll(() => {
			new Joomla.JCaption('#single img.test');
		});
		it('Should have caption as "Joomla Title 1" under image', () => {
			expect(fix.querySelector('#single').querySelector('p').innerHTML === 'Joomla Title 1').toBe(true);
		});
	});

	describe('JCaption applied for multiple images', () => {
		beforeAll(() => {
			new Joomla.JCaption('#multiple img.test');
		});
		it('Should have caption "Joomla Title 1" under image 1', () => {
			expect(fix.querySelector('#multiple').querySelectorAll('p')[0].innerHTML === 'Joomla Title 1').toBe(true);
		});

		it('Should have caption as "Joomla Title 2" under image 2', () => {
			expect(fix.querySelector('#multiple').querySelectorAll('p')[1].innerHTML === 'Joomla Title 2').toBe(true);
		});
	});

	describe('JCaption with empty title attribute value', () => {
		beforeAll(() => {
			new Joomla.JCaption('#empty img.test');
		});
		it('Should not have a <p> element inside the image container', () => {
			expect(fix.querySelector('#empty').querySelector('p') !== HTMLElement).toBe(true);
		});
	});

	describe('JCaption with additional options', () => {
		beforeAll(() => {
			new Joomla.JCaption('#options img.test');
		});

		it('Should have 2 elements with class right', () => {
			expect(fix.querySelector('#options').querySelectorAll('.right').length).toEqual(2);
		});

		it('Should have container width as 100 when element width attribute is set to 100', () => {
			expect(fix.querySelector('img#width-attr').parentNode.style.width === '100px').toBe(true);
		});

		it('Should have container width as 90 when element style is set to width: 90px', () => {
			expect(fix.querySelector('img#width-style').parentNode.style.width === '90px').toBe(true);
		});

		it('Should have float: right in container CSS when element attribute align is set to right', () => {
			expect(fix.querySelector('img#align-attr').parentNode.style.float === 'right').toBe(true);
		});

		it('Should have float: right in container CSS when element style is set to float: right', () => {
			expect(fix.querySelector('img#align-style').parentNode.style.float === 'right').toBe(true);
		});
	});

	describe('JCaption with no additional options', () => {
		beforeAll(() => {
			new Joomla.JCaption('#no-options');
			console.log('element', fix)
		});


		it('Should have container CSS {float: none}', () => {
			const element = fix.querySelector('#no-options');
			expect(element.parentNode.style.float === 'none').toBe(true);
		});
	});
});
