/**
 * @package     Joomla.Tests
 * @subpackage  JavaScript Tests
 *
 * @copyright   Copyright (C) 2005 - 2017 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 *
 * @since       4.0.0
 * @version     1.0.0
 */
describe('Joomla switcher tests', () => {
	// Set up the script
	beforeAll(() => {
		fixture.setBase('node_modules/joomla-javascript-tests/src/joomla-switcher')
		html_fixture = fixture.load('fixtures/fixture.html');
		window.fix = html_fixture[0];
	});

	afterAll(() => {
		fixture.cleanup();
	});

	describe('Joomla switcher first option preselected', () => {
		it('Should have a constructor name: JoomlaSwitcherElement', () => {
			const switcher = fix.querySelector('joomla-field-switcher');
			expect(switcher.constructor.name).toBe('JoomlaSwitcherElement');
		});

		it('Joomla switcher have 5 spans inside', () => {
			console.log(fix)
			const switcher = fix.querySelector('joomla-field-switcher');
			const spans = [].slice.call(switcher.querySelectorAll('span'));
			expect(spans.length).toBe(5);
		});

		it('Joomla switcher have 1st span with aria-checked true', () => {
			const switcher = fix.querySelector('joomla-field-switcher');
			const span = switcher.querySelector('span.switcher');
			expect(span.getAttribute('aria-checked')).toBe('true');
		});

		it('Joomla switcher have 1st span to have class active', () => {
			const switcher = fix.querySelector('joomla-field-switcher');
			const span = switcher.querySelector('span.switcher-label-0');
			expect(span.classList.contains('active')).toBe(true);
		});

		it('Joomla switcher have 2nd span not to have class active', () => {
			const switcher = fix.querySelector('joomla-field-switcher');
			const span = switcher.querySelector('span.switcher-label-1');
			expect(span.classList.contains('active')).toBe(false);
		});

		it('Joomla switcher on click change state', () => {
			const clickable = fix.querySelector('input#sw1');
			const switcher = fix.querySelector('joomla-field-switcher');
			const span0 = switcher.querySelector('span.switcher-label-0');
			const span1 = switcher.querySelector('span.switcher-label-1');
			const spanA = switcher.querySelector('span.switcher');
			clickable.click();
			expect(spanA.getAttribute('aria-checked')).toBe('true');
			expect(span0.classList.contains('active')).toBe(false);
			expect(span1.classList.contains('active')).toBe(true);
		});
	});

});
