<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'Dfzjh)j`%S_SC%CuT|yql~M*j(`e|n+xT!_O.c+5zwyy>t[/ Kvqgywuha4,?#ri' );
define( 'SECURE_AUTH_KEY',   '~SOPe62B)d[`%Su5(q!>Pbe1A%*K`1B#MaLj!bc4O(*{OH5TWK{ECJyUvv@$6BSs' );
define( 'LOGGED_IN_KEY',     'frRln,PitKvjQX!DK^<)!w/),]MIGwF)[?4-W* gRASHFdc>AOt;p2W]&kzq!W=^' );
define( 'NONCE_KEY',         '+V~wM&gxP||&#vV?z[/>SAU!ba %Dwm{dTnf]x4*l+)Uj2,C}*)64s)XpZKft<)~' );
define( 'AUTH_SALT',         'lD/%z}O<^,kp/.g7iy_*Qn|-7$&=SpYh<X?=HHIQM]rmA6e^Z(+`+*,=h3z+!#+q' );
define( 'SECURE_AUTH_SALT',  '`?3,>32IlTMyORHS,2hVb~r<S-!Z+qSPAi)ubE$cKr@e_Ub/8II#a_rA{m6olW5G' );
define( 'LOGGED_IN_SALT',    'hSl2<V=2y;1~4s8z6%fUlD65[:zvH:iK.xpTJNXo+WyGg3fdyRz-}iH_@7fOS0xZ' );
define( 'NONCE_SALT',        '{x8ilhfIf0thXmE`P^SL81Ypb(cJzK,U6XUD^$/olRG(RGLMfK%8Fuky&k1>b[;^' );
define( 'WP_CACHE_KEY_SALT', 'I9%#m!(__Wc%{,@O_6yr oC,JN#Nh)EMQY7(RacCREo{%6#fNa!xLS/FMR,0us8s' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
