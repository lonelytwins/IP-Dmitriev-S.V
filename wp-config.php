<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать файл в "wp-config.php"
 * и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки базы данных
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры базы данных: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'LendingSH' );

/** Имя пользователя базы данных */
define( 'DB_USER', 'root' );

/** Пароль к базе данных */
define( 'DB_PASSWORD', '' );

/** Имя сервера базы данных */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу. Можно сгенерировать их с помощью
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}.
 *
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными.
 * Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '3t$Tbo4Is)~W/F+o{|xqPo~(f33kIr?/hL7tkd5}.}AvHE,)RuE+Ly7NVX[xTu-}' );
define( 'SECURE_AUTH_KEY',  'KPRT)RNF!>6zctZf>6WHdaT~[,9hY&WMu-ZKRW2kl#B q>VeUyqmm7s`wS:)b(K`' );
define( 'LOGGED_IN_KEY',    'B)+w>x!D!G+[D.`[-0c$a-|Epu[~7F#%h#g/T,t`?.S/s`}#{We_Z-LnD4o8-&rB' );
define( 'NONCE_KEY',        'Qz^MJw>X{`@U{@9KhSS0(rtoQKoMHxWsszvtDbryn&!Rq{j0=X:r6|4V:U8U+p(%' );
define( 'AUTH_SALT',        '$V1Pu*y}FpqA-,ui|R]{g*Wj9b4-mE&>BTj5=pE%_g66B= _GwPQPT2-xTrp~IX;' );
define( 'SECURE_AUTH_SALT', 'H^O -X/6ziBn*vl a/2}MfZ9=g`7XvZ/E(k[~CYs )b1/kj9,o&7.YXDxs<_i<z}' );
define( 'LOGGED_IN_SALT',   '_tSr_- 1X]3I/,g+ew,Q$jK73I-VCk8#`bX81I883TEe#h;.fL}+G]E#A_}KH~8.' );
define( 'NONCE_SALT',       'o3O)S@f=%Ak[`:TIl6+UF/8Zhlio(VaD=OB>LxJp&`~P?Ff_Nm@~QNxSwGQ!m-<s' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Произвольные значения добавляйте между этой строкой и надписью "дальше не редактируем". */



/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
