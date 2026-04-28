<?php
/**
 * Halton Marine – One-Time Deployment Helper
 * ============================================
 * Upload this file to your public_html/public/ directory,
 * visit it ONCE in your browser, then DELETE it immediately.
 *
 * Example: https://haltonmarinedredging.com/deploy-helper.php
 *
 * SECURITY: This script is protected by a secret token.
 * Set DEPLOY_SECRET below to a random string, then visit:
 * https://haltonmarinedredging.com/deploy-helper.php?secret=YOUR_SECRET
 */

define('DEPLOY_SECRET', 'CHANGE_THIS_TO_A_RANDOM_STRING');

// ── Auth check ────────────────────────────────────────────────────────────────
if (($_GET['secret'] ?? '') !== DEPLOY_SECRET) {
    http_response_code(403);
    die('<h1>403 Forbidden</h1><p>Provide the correct ?secret= parameter.</p>');
}

// ── Bootstrap Laravel ─────────────────────────────────────────────────────────
$basePath = dirname(__DIR__);  // one level up from public/
require $basePath . '/vendor/autoload.php';

$app = require_once $basePath . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);

// ── Run commands ──────────────────────────────────────────────────────────────
$commands = [
    ['php artisan migrate --force',          'migrate',          []],
    ['php artisan storage:link --force',     'storage:link',     ['--force' => true]],
    ['php artisan config:cache',             'config:cache',     []],
    ['php artisan route:cache',              'route:cache',      []],
    ['php artisan view:cache',               'view:cache',       []],
];

?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Deploy Helper – Halton Marine</title>
    <style>
        body { font-family: monospace; background: #0f172a; color: #e2e8f0; padding: 2rem; }
        h1   { color: #38bdf8; }
        .ok  { color: #4ade80; }
        .err { color: #f87171; }
        pre  { background: #1e293b; padding: 1rem; border-radius: .5rem; overflow-x: auto; }
        .warn { background: #7c2d12; color: #fca5a5; padding: 1rem; border-radius: .5rem; margin-top: 2rem; }
    </style>
</head>
<body>
<h1>🚀 Halton Marine – Deployment Helper</h1>
<p>Running Laravel setup commands…</p>

<?php foreach ($commands as [$label, $artisan, $params]): ?>
    <h3>&gt; <?= htmlspecialchars($label) ?></h3>
    <pre><?php
        $output = new \Symfony\Component\Console\Output\BufferedOutput();
        try {
            $exit = $kernel->call($artisan, $params, $output);
            $text = htmlspecialchars($output->fetch() ?: '(no output)');
            echo $exit === 0
                ? "<span class='ok'>✓ Success</span>\n{$text}"
                : "<span class='err'>✗ Exit code {$exit}</span>\n{$text}";
        } catch (\Throwable $e) {
            echo "<span class='err'>✗ Error: " . htmlspecialchars($e->getMessage()) . "</span>";
        }
    ?></pre>
<?php endforeach; ?>

<div class="warn">
    ⚠️ <strong>DELETE this file immediately!</strong><br>
    <code>public/deploy-helper.php</code> must be removed from your server now that it has been used.
</div>
</body>
</html>
<?php $kernel->terminate(new \Symfony\Component\Http\Foundation\Request(), new \Symfony\Component\Http\Foundation\Response()); ?>
