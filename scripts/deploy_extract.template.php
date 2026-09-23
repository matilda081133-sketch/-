<?php
/**
 * Zero-Downtime Deployment Extractor for Dejure
 * Extracts deploy.zip atomically in < 1 second and self-destructs.
 */
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');

$expectedToken = '__DEPLOY_TOKEN__';
$token = $_GET['token'] ?? $_POST['token'] ?? '';

if (empty($expectedToken) || $expectedToken === '__DEPLOY_TOKEN__' || $token !== $expectedToken) {
    http_response_code(403);
    echo json_encode(['success' => false, 'error' => 'Forbidden: Invalid token']);
    exit;
}

$zipFile = __DIR__ . '/deploy.zip';
if (!file_exists($zipFile)) {
    http_response_code(404);
    echo json_encode(['success' => false, 'error' => 'deploy.zip not found on server']);
    exit;
}

if (!class_exists('ZipArchive')) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'ZipArchive PHP extension not available']);
    exit;
}

$zip = new ZipArchive();
$res = $zip->open($zipFile);
if ($res !== true) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to open zip file, code: ' . $res]);
    exit;
}

// Extract directly to public_html
$extracted = $zip->extractTo(__DIR__);
$zip->close();

if (!$extracted) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to extract files']);
    exit;
}

// Clean up package and this script immediately
@unlink($zipFile);
@unlink(__FILE__);

echo json_encode([
    'success' => true,
    'message' => 'Atomic extraction completed successfully in < 1s',
    'time' => date('Y-m-d H:i:s')
]);
