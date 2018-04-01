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
describe('JCaption applied to single image', () => {
	// Set up the script
	beforeAll(() => {
		fixture.setBase('node_modules/joomla-javascript-tests/src/joomla-switcher')
		html_fixture = fixture.load('fixtures/fixture.html');
		window.fix = html_fixture[0];
	});

	afterAll(() => {
		fixture.cleanup();
	});

	describe('Joomla switcher default true', () => {
		it('Should have the true value selected', () => {
			expect(fix.querySelector('#single').querySelector('p').innerHTML === 'Joomla Title 1').toBe(true);
		});
	});
});
