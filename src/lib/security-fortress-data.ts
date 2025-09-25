
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
        explanation: 'Using `.textContent` instead of `.innerHTML` ensures the input is treated as plain text, not HTML. This prevents the browser from executing any scripts embedded in the query string.',
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
        id: '5',
        title: 'Command Injection',
        category: 'Command Injection',
        difficulty: 'Advanced',
        xp: 80,
        description: 'User-supplied data is used to construct a command that is executed by the operating system. An attacker can inject malicious commands.',
        vulnerableCode: `// Python
import os
filename = request.args.get('filename')
os.system("cat " + filename)`,
        language: 'python',
        options: [
            {
                id: '5a',
                code: `filename = request.args.get('filename')
# Use a library function that doesn't spawn a shell
with open(filename, 'r') as f:
    data = f.read()`
            },
            {
                id: '5b',
                code: `filename = request.args.get('filename')
# Sanitize the input
filename = filename.replace(";", "").replace("&", "")
os.system("cat " + filename)`
            },
            {
                id: '5c',
                code: `filename = request.args.get('filename')
os.system("cat '" + filename + "'")`
            }
        ],
        correctOptionId: '5a',
        explanation: 'Avoid executing system commands with user input. Use language-specific, safe library functions to perform the intended action, like reading a file.'
    },
    {
        id: '6',
        title: 'Path Traversal',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'An application uses user-supplied input to construct a path to a file or directory. An attacker can use "dot-dot-slash" sequences (`../`) to access restricted files.',
        vulnerableCode: `// Java
String filename = request.getParameter("filename");
File file = new File("/var/www/data/" + filename);
file.getCanonicalPath(); // and read the file`,
        language: 'java',
        options: [
            {
                id: '6a',
                code: `String filename = request.getParameter("filename");
filename = filename.replace("../", "");
File file = new File("/var/www/data/" + filename);`
            },
            {
                id: '6b',
                code: `String filename = request.getParameter("filename");
File dataDir = new File("/var/www/data/");
File requestedFile = new File(dataDir, filename);
// Check if the file's canonical path is within the intended directory
if (requestedFile.getCanonicalPath().startsWith(dataDir.getCanonicalPath())) {
    // Proceed
}`
            }
        ],
        correctOptionId: '6b',
        explanation: 'The most robust fix is to resolve the canonical path of the requested file and ensure it still resides within the intended base directory. Simple string replacement is often insufficient.'
    },
    {
        id: '7',
        title: 'Insecure File Upload',
        category: 'IDOR',
        difficulty: 'Advanced',
        xp: 85,
        description: 'The application allows users to upload files but does not properly validate the file type, allowing an attacker to upload a web shell (e.g., a `.php` file).',
        vulnerableCode: `// PHP
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
// No validation is performed before moving the file
move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file);`,
        language: 'php',
        options: [
            {
                id: '7a',
                code: `$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png") {
  echo "Sorry, only JPG & PNG files are allowed.";
} else {
  move_uploaded_file(...);
}`
            },
            {
                id: '7b',
                code: `// Rename the file to have a safe extension
$new_name = uniqid() . ".dat";
move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $new_name);`
            },
            {
                id: '7c',
                code: `// Both A and B are good, but combining them is best.
// Whitelist extensions AND rename the file to something not user-controlled.`
            }
        ],
        correctOptionId: '7c',
        explanation: 'A multi-layered defense is best: 1) Validate the file extension against a whitelist of allowed types. 2) For even more security, rename the uploaded file on the server to prevent direct execution if the extension check fails.'
    },
    {
        id: '8',
        title: 'Cross-Site Request Forgery (CSRF)',
        category: 'CSRF',
        difficulty: 'Advanced',
        xp: 90,
        description: 'A form that performs a state-changing action (like changing a password) lacks a mechanism to verify that the request was intentionally submitted by the user.',
        vulnerableCode: `// HTML Form
<form action="/change-password" method="POST">
  <input type="password" name="new_password">
  <button type="submit">Change Password</button>
</form>`,
        language: 'javascript',
        options: [
            {
                id: '8a',
                code: `// Change from POST to GET
<form action="/change-password" method="GET">
...
</form>`
            },
            {
                id: '8b',
                code: `// Add a hidden, unpredictable anti-CSRF token
<form action="/change-password" method="POST">
  <input type="hidden" name="csrf_token" value="{{ server_generated_token }}">
  ...
</form>
// Server must validate this token.`
            },
            {
                id: '8c',
                code: `// Add a captcha to the form`
            }
        ],
        correctOptionId: '8b',
        explanation: 'The standard defense against CSRF is the Synchronizer Token Pattern. The server generates a unique, unpredictable token for each user session and requires it to be included in any state-changing request.'
    },
    {
        id: '9',
        title: 'Hardcoded Secrets',
        category: 'IDOR',
        difficulty: 'Beginner',
        xp: 30,
        description: 'A secret key or password is hardcoded directly into the source code, making it visible to anyone with access to the codebase.',
        vulnerableCode: `// Java
String apiKey = "ak_123_very_secret_key_456";
// ... connect to API using apiKey ...`,
        language: 'java',
        options: [
            {
                id: '9a',
                code: `// Load the secret from an environment variable or secure config store
String apiKey = System.getenv("API_KEY");`
            },
            {
                id: '9b',
                code: `// Obfuscate the key
String apiKey = new String(new char[]{'a','k','_','1',...});`
            },
            {
                id: '9c',
                code: `// Move the key to a different file
String apiKey = loadKeyFromFile("secrets.txt");`
            }
        ],
        correctOptionId: '9a',
        explanation: 'Secrets should never be stored in source code. The best practice is to load them from environment variables or a dedicated secrets management service.'
    },
    {
        id: '10',
        title: 'DOM-based XSS',
        category: 'XSS',
        difficulty: 'Advanced',
        xp: 75,
        description: 'The client-side script reads data from the URL and uses it to modify the DOM in an unsafe way, leading to XSS.',
        vulnerableCode: `// JavaScript
const name = new URL(window.location).searchParams.get("name");
const unsafeHtml = "<h1>Welcome, " + name + "</h1>";
document.body.innerHTML += unsafeHtml;`,
        language: 'javascript',
        options: [
            {
                id: '10a',
                code: `const name = new URL(window.location).searchParams.get("name");
const h1 = document.createElement("h1");
h1.textContent = "Welcome, " + name;
document.body.appendChild(h1);`
            },
            {
                id: '10b',
                code: `const name = new URL(window.location).searchParams.get("name");
const safeName = name.replace(/</g, '&lt;');
const unsafeHtml = "<h1>Welcome, " + safeName + "</h1>";
document.body.innerHTML += unsafeHtml;`
            },
            {
                id: '10c',
                code: `// It's safe because it's client-side only`
            }
        ],
        correctOptionId: '10a',
        explanation: 'Creating DOM nodes programmatically (`createElement`) and setting their content with `.textContent` is the safest way to avoid DOM-based XSS. It ensures the data is never parsed as HTML.'
    },
    {
        id: '11',
        title: 'Insecure Deserialization',
        category: 'IDOR',
        difficulty: 'Advanced',
        xp: 90,
        description: 'An application deserializes untrusted data without sufficient validation, which can lead to remote code execution.',
        vulnerableCode: `// Python (using Pickle)
import pickle, base64
data = base64.b64decode(request.cookies.get('session_data'))
user_obj = pickle.loads(data)`,
        language: 'python',
        options: [
            {
                id: '11a',
                code: `// Use a safer serialization format like JSON
import json
data = request.cookies.get('session_data')
user_obj = json.loads(data)`
            },
            {
                id: '11b',
                code: `// Check the cookie before decoding
if 'os.system' not in data:
    user_obj = pickle.loads(data)`
            },
            {
                id: '11c',
                code: `// It is safe because the data is Base64 encoded`
            }
        ],
        correctOptionId: '11a',
        explanation: 'Never deserialize data from untrusted sources with unsafe serializers like Pickle. Use a safe, data-only format like JSON instead.'
    },
    {
        id: '12',
        title: 'Broken Authentication - Weak Password Hashing',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 65,
        description: 'The application stores user passwords using a weak or non-existent hashing algorithm, making them easy to crack if the database is compromised.',
        vulnerableCode: `// PHP
// Storing a new user's password
$password = $_POST['password'];
$hashed_password = md5($password);
// save to database...`,
        language: 'php',
        options: [
            {
                id: '12a',
                code: `$hashed_password = sha1($password);`
            },
            {
                id: '12b',
                code: `$hashed_password = strrev($password);`
            },
            {
                id: '12c',
                code: `// Use a modern, strong, and salted hashing algorithm
$hashed_password = password_hash($password, PASSWORD_BCRYPT);`
            }
        ],
        correctOptionId: '12c',
        explanation: 'MD5 and SHA1 are considered broken for password hashing. Use a modern, slow, and salted hashing algorithm like Bcrypt, Scrypt, or Argon2. PHP\'s `password_hash` function handles this securely.'
    },
    {
        id: '13',
        title: 'XML External Entity (XXE) Injection',
        category: 'IDOR',
        difficulty: 'Advanced',
        xp: 85,
        description: 'An XML parser is configured to process external entities from an untrusted source, which can be used to read local files or perform network requests.',
        vulnerableCode: `// Java
DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
DocumentBuilder builder = factory.newDocumentBuilder();
// User-provided XML is parsed
Document doc = builder.parse(new InputSource(new StringReader(xml_string)));`,
        language: 'java',
        options: [
            {
                id: '13a',
                code: `// Disallow DTDs and external entities
factory.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);
factory.setFeature("http://xml.org/sax/features/external-general-entities", false);
factory.setFeature("http://xml.org/sax/features/external-parameter-entities", false);`
            },
            {
                id: '13b',
                code: `// Validate XML against a schema before parsing`
            },
            {
                id: '13c',
                code: `// Check the XML string for the string "ENTITY"
if (!xml_string.contains("ENTITY")) {
    builder.parse(...);
}`
            }
        ],
        correctOptionId: '13a',
        explanation: 'To prevent XXE, the XML parser must be explicitly configured to disallow Document Type Definitions (DTDs) and the processing of external entities.'
    },
    {
        id: '14',
        title: 'Insecure Randomness',
        category: 'CSRF',
        difficulty: 'Intermediate',
        xp: 55,
        description: 'A predictable random number generator is used for a security-sensitive purpose, such as generating session tokens or password reset codes.',
        vulnerableCode: `// JavaScript (Node.js)
function generateResetToken() {
    // Math.random() is not cryptographically secure
    return Math.floor(Math.random() * 1000000);
}`,
        language: 'javascript',
        options: [
            {
                id: '14a',
                code: `function generateResetToken() {
    return new Date().getTime(); // Use timestamp
}`
            },
            {
                id: '14b',
                code: `import crypto from 'crypto';
function generateResetToken() {
    return crypto.randomBytes(32).toString('hex');
}`
            },
            {
                id: '14c',
                code: `function generateResetToken() {
    // More complex, but still not secure
    return Math.random() * Math.random();
}`
            }
        ],
        correctOptionId: '14b',
        explanation: 'For security-sensitive operations, always use a cryptographically secure pseudo-random number generator (CSPRNG), such as `crypto.randomBytes` in Node.js or `secrets` in Python.'
    },
    {
        id: '15',
        title: 'Timing Attack on String Comparison',
        category: 'IDOR',
        difficulty: 'Expert',
        xp: 95,
        description: 'A standard string comparison function is used to check a secret value (like an API key). It returns early on the first mismatch, allowing an attacker to determine the secret character-by-character by measuring response times.',
        vulnerableCode: `// Python
def check_api_key(provided_key):
    return provided_key == "secret_key_123"`,
        language: 'python',
        options: [
            {
                id: '15a',
                code: `import time
def check_api_key(provided_key):
    time.sleep(0.1) // Add a delay
    return provided_key == "secret_key_123"`
            },
            {
                id: '15b',
                code: `import hmac
def check_api_key(provided_key):
    # Use a constant-time comparison function
    return hmac.compare_digest(provided_key, "secret_key_123")`
            },
            {
                id: '15c',
                code: `def check_api_key(provided_key):
    try:
        return provided_key == "secret_key_123"
    except:
        return False`
            }
        ],
        correctOptionId: '15b',
        explanation: 'To mitigate timing attacks, you must use a "constant-time" comparison function. These functions take the same amount of time to execute regardless of how many characters are correct. Most languages provide one in their standard crypto or security libraries.'
    },
    {
        id: '16',
        title: 'Use of Components with Known Vulnerabilities',
        category: 'IDOR',
        difficulty: 'Beginner',
        xp: 30,
        description: 'The project is using an old version of a popular library (e.g., jQuery 1.8) that has known security vulnerabilities.',
        vulnerableCode: `// HTML
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>`,
        language: 'javascript',
        options: [
            {
                id: '16a',
                code: `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>`
            },
            {
                id: '16b',
                code: `// Just remove jQuery`
            },
            {
                id: '16c',
                code: `// No fix needed, minor versions are not important`
            }
        ],
        correctOptionId: '16a',
        explanation: 'Always keep your dependencies and libraries up to date. Regularly check for and apply security patches to protect your application from known vulnerabilities.'
    },
    {
        id: '17',
        title: 'Server-Side Request Forgery (SSRF)',
        category: 'CSRF',
        difficulty: 'Advanced',
        xp: 90,
        description: 'An application takes a URL from a user and fetches its contents, but does not validate the URL. An attacker can cause the application to make requests to internal, private services.',
        vulnerableCode: `// Python (Flask)
@app.route('/fetch')
def fetch_url():
    url = request.args.get('url')
    # The application fetches whatever URL the user provides
    response = requests.get(url)
    return response.text`,
        language: 'python',
        options: [
            {
                id: '17a',
                code: `// Whitelist allowed domains
ALLOWED_DOMAINS = ['example.com', 'api.example.com']
parsed_url = urlparse(url)
if parsed_url.hostname in ALLOWED_DOMAINS:
    response = requests.get(url)
    return response.text`
            },
            {
                id: '17b',
                code: `// Blacklist internal IP addresses
if "127.0.0.1" in url or "localhost" in url:
    return "Forbidden", 403`
            },
            {
                id: '17c',
                code: `// Both A and B are good, but whitelisting is stronger.
// A whitelist of allowed URLs/domains is the most secure approach.`
            }
        ],
        correctOptionId: '17c',
        explanation: 'The strongest defense against SSRF is to maintain a whitelist of allowed domains and IP addresses. Blacklisting is often incomplete and can be bypassed.'
    },
    {
        id: '18',
        title: 'Missing Security Headers',
        category: 'CSRF',
        difficulty: 'Intermediate',
        xp: 50,
        description: 'The web application is not setting important HTTP security headers like `Content-Security-Policy` or `Strict-Transport-Security`.',
        vulnerableCode: `// JavaScript (Node.js/Express)
app.get('/', (req, res) => {
    res.send('<h1>Hello!</h1>');
});`,
        language: 'javascript',
        options: [
            {
                id: '18a',
                code: `app.get('/', (req, res) => {
    // Add HSTS to enforce HTTPS
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    res.send('<h1>Hello!</h1>');
});`
            },
            {
                id: '18b',
                code: `app.get('/', (req, res) => {
    // Add a basic CSP to prevent loading untrusted scripts
    res.setHeader('Content-Security-Policy', "script-src 'self'");
    res.send('<h1>Hello!</h1>');
});`
            },
            {
                id: '18c',
                code: `// All of the above, and more, are good practices.
// Using a library like 'helmet' for Express is often the easiest way.`
            }
        ],
        correctOptionId: '18c',
        explanation: 'Modern web applications should set multiple security headers (HSTS, CSP, X-Frame-Options, etc.) to defend against various attacks. Using a dedicated library often simplifies this process.'
    },
    {
        id: '19',
        title: 'SQL Injection (Numeric)',
        category: 'SQL Injection',
        difficulty: 'Beginner',
        xp: 55,
        description: 'Even when the input is expected to be a number, directly inserting it into a SQL query can still be dangerous.',
        vulnerableCode: `// PHP
$id = $_GET['id'];
$sql = "SELECT * FROM products WHERE id = $id";`,
        language: 'php',
        options: [
            {
                id: '19a',
                code: `$id = (int)$_GET['id'];
$sql = "SELECT * FROM products WHERE id = $id";`
            },
            {
                id: '19b',
                code: `$id = $_GET['id'];
$stmt = $pdo->prepare("SELECT * FROM products WHERE id = :id");
$stmt->execute(['id' => $id]);`
            },
            {
                id: '19c',
                code: `// Both A and B are valid fixes, but B (prepared statements) is the universally correct approach for all inputs.`
            }
        ],
        correctOptionId: '19c',
        explanation: 'While casting to an integer (`(int)`) can prevent string-based injection in this specific case, the fundamentally correct and universally safe solution is to always use parameterized queries (prepared statements).'
    },
    {
        id: '20',
        title: 'Open Redirect',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'An application redirects a user to a URL specified in a query parameter without validation, allowing attackers to redirect users to malicious sites.',
        vulnerableCode: `// Python (Flask)
@app.route('/redirect')
def redirect_to_url():
    redirect_url = request.args.get('url')
    return redirect(redirect_url)`,
        language: 'python',
        options: [
            {
                id: '20a',
                code: `def redirect_to_url():
    redirect_url = request.args.get('url')
    # Validate against a whitelist of allowed domains
    if is_safe_url(redirect_url):
        return redirect(redirect_url)
    else:
        return redirect("/")`
            },
            {
                id: '20b',
                code: `def redirect_to_url():
    redirect_url = request.args.get('url')
    # Just make sure it starts with http
    if redirect_url.startswith('http'):
        return redirect(redirect_url)`
            }
        ],
        correctOptionId: '20a',
        explanation: 'Never redirect to a user-supplied URL without validating it against a whitelist of known, safe destinations. Checking for just `http` is not enough, as it could be `http://malicious-site.com`.'
    }
];
