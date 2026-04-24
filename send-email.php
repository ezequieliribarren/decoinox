<?php
// Habilitar CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Si es una solicitud OPTIONS, retornar OK
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Solo aceptar POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit();
}

// Obtener datos del formulario
$data = json_decode(file_get_contents('php://input'), true);

// Validar datos
if (!$data || !isset($data['consult_name'], $data['user_email'], $data['consult_tel'], $data['consult_message'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Datos incompletos']);
    exit();
}

$nombre = htmlspecialchars(trim($data['consult_name']));
$email = filter_var(trim($data['user_email']), FILTER_VALIDATE_EMAIL);
$telefono = htmlspecialchars(trim($data['consult_tel']));
$mensaje = htmlspecialchars(trim($data['consult_message']));

// Validar email
if (!$email) {
    http_response_code(400);
    echo json_encode(['error' => 'Email inválido']);
    exit();
}

// Email destino
$destinatario = 'info@solucionesinox.com.ar';
$remitente = 'info@solucionesinox.com.ar';

// Asunto
$asunto = 'Nuevo mensaje de contacto - ' . $nombre;

// Cuerpo del email
$cuerpo = "Tienes un nuevo mensaje de contacto:\n\n";
$cuerpo .= "Nombre: " . $nombre . "\n";
$cuerpo .= "Email: " . $email . "\n";
$cuerpo .= "Teléfono: " . $telefono . "\n";
$cuerpo .= "Mensaje:\n" . $mensaje . "\n";

// Headers del email
// En hosting compartido conviene enviar desde el mismo dominio y usar Reply-To para el cliente.
$headers = "From: Decoinox <" . $remitente . ">\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Enviar email
$enviado = mail($destinatario, $asunto, $cuerpo, $headers);

if ($enviado) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Email enviado correctamente']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Error al enviar el email']);
}
?>
