<?php

namespace Joomla;

use Composer\Script\Event;
use Composer\Installer\PackageEvent;

/**
 * Class JavaScriptTesting
 * @package Joomla
 *
 * @since   __DEPLOY_VERSION__
 */
class JavaScriptTesting
{
	/**
	 * Set up the Joomla JavaScript Testing
	 *
	 * @param   Event  $event  Event
	 *
	 * @since   __DEPLOY_VERSION__
	 */
	public static function setup(Event $event)
	{
		// TODO Get it out of composer
		$rootDirectory = getcwd();

		copy(dirname(__DIR__) . '/karma.conf.js' , $rootDirectory);
	}
}
