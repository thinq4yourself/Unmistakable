<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'database_name_here');

/** MySQL database username */
define('DB_USER', 'username_here');

/** MySQL database password */
define('DB_PASSWORD', 'password_here');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '31Kn[L5m+jp%/pJ V$ZX+:cbx(T3hQ(-/}|j0;AaOXot]5)g}V$!MN-MZ|JY;}0G');
define('SECURE_AUTH_KEY',  '>F?9s_va8|ye1FAx@-__^k}ky$+YfkOwL$V.Q[X`<+lrrh?Ynu= l;YpuT]u[VUe');
define('LOGGED_IN_KEY',    '2G3Pj9D[MVf8KhoGtED%cQEMs~/[k6O!=ZMkFpL,N4;Q#AE,HP%1(vJ-SI+UJ!}#');
define('NONCE_KEY',        '<5o;;=Xd)(nROA|=M#7 KqbJ|+u4~a+k|Ye)6t.pX%I<30-D9jg`5Yr4L^`UY8S&');
define('AUTH_SALT',        'h!q8Z >o|2-aDiegK@]Ieiu<11Jv,-!s1>9E_`O$.-eo)|8o82nZ&p]d[]b?din_');
define('SECURE_AUTH_SALT', 'I[Yyrs$C(iVF}&Xs^NZzD*D}QnDE,fzZ9W^+!A|%$CXroO lcS@{gW`}`HRV-pU-');
define('LOGGED_IN_SALT',   ')5yFXbYJfLPJ0R3lyQ1cGZk-6(X3u8/r.#I<{WP+iHW_Ia[^a0sXt.9?kxWS;w:^');
define('NONCE_SALT',       'Oz@r8*(*Wb*7l?&zMM,yIU<rCgjF$zR`7^0 /kwnx_{zjj&1~n@1~`URO)Zmty=y');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
