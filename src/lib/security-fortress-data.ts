

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
        id: '5',
        title: 'Command Injection',
        category: 'IDOR',
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
        explanation: 'The most robust fix is to resolve the canonical path of the requested file and ensure it still resides within the intended base directory. Simple string replacement is often insufficient.',
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
        explanation: 'A multi-layered defense is best: 1) Validate the file extension against a whitelist of allowed types. 2) For even more security, rename the uploaded file on the server to prevent direct execution if the extension check fails.',
    },
    {
        id: '8',
        title: 'Cross-Site Request Forgery (CSRF)',
        category: 'CSRF',
        difficulty: 'Advanced',
        xp: 90,
        description: 'A form that performs a state-changing action (like changing a password) lacks a mechanism to verify that the request was intentionally submitted by the user.',
        vulnerableCode: `<form action="/change-password" method="POST">
  <input type="password" name="new_password">
  <button type="submit">Change Password</button>
</form>`,
        language: 'javascript',
        options: [
            {
                id: '8a',
                code: `<form action="/change-password" method="GET">
...
</form>`
            },
            {
                id: '8b',
                code: `<form action="/change-password" method="POST">
  <input type="hidden" name="csrf_token" value="{{ server_generated_token }}">
  ...
</form>
// Server must validate this token.`
            },
            {
                id: '8c',
                code: `<form ...>
  <script>
    // Use JavaScript to confirm the action
    if (!confirm('Are you sure?')) { event.preventDefault(); }
  </script>
  ...
</form>`
            }
        ],
        correctOptionId: '8b',
        explanation: 'The standard defense against CSRF is the Synchronizer Token Pattern. The server generates a unique, unpredictable token for each user session and requires it to be included in any state-changing request.',
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
        explanation: 'Secrets should never be stored in source code. The best practice is to load them from environment variables or a dedicated secrets management service.',
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
        explanation: 'Creating DOM nodes programmatically (`createElement`) and setting their content with `.textContent` is the safest way to avoid DOM-based XSS. It ensures the data is never parsed as HTML.',
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
        explanation: 'Never deserialize data from untrusted sources with unsafe serializers like Pickle. Use a safe, data-only format like JSON instead.',
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
        explanation: 'MD5 and SHA1 are considered broken for password hashing. Use a modern, slow, and salted hashing algorithm like Bcrypt, Scrypt, or Argon2. PHP\'s `password_hash` function handles this securely.',
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
        difficulty: 'Advanced',
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
        explanation: 'Never trust user input for redirection targets. Always validate the provided URL against a strict whitelist of known, safe destinations before issuing a redirect.',
    },
    {
        id: '21',
        title: 'Prototype Pollution',
        category: 'IDOR',
        difficulty: 'Advanced',
        xp: 90,
        description: 'A recursive merge function unsafely merges objects, allowing an attacker to modify the `Object.prototype`.',
        vulnerableCode: `// JavaScript
function merge(target, source) {
  for (let key in source) {
    if (key === '__proto__') continue;
    if (typeof source[key] === 'object') {
      merge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
}`,
        language: 'javascript',
        options: [
            {
                id: '21a',
                code: `// The code is safe because it checks for '__proto__'.`
            },
            {
                id: '21b',
                code: `function merge(target, source) {
  for (let key in source) {
    // Block constructor and prototype properties
    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      continue;
    }
    // ...
  }
}`
            }
        ],
        correctOptionId: '21b',
        explanation: 'An attacker can use other properties like `constructor` and `prototype` to pollute the object. All of these must be blocked during a merge.',
    },
    {
        id: '22',
        title: 'Blind SQL Injection',
        category: 'SQL Injection',
        difficulty: 'Advanced',
        xp: 95,
        description: 'The application does not return data from the database directly, but an attacker can still infer information by observing the application\'s different responses to queries.',
        vulnerableCode: `// PHP
$id = $_GET['id'];
$sql = "SELECT tracking_id FROM tracking WHERE id = '$id'";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
    echo "Tracking ID found.";
} else {
    echo "Tracking ID not found.";
}`,
        language: 'php',
        options: [
            {
                id: '22a',
                code: `// Add a delay to make timing attacks harder
sleep(1);
if (mysqli_num_rows($result) > 0) { ... }`
            },
            {
                id: '22b',
                code: `// The fix is the same as regular SQLi: use prepared statements.
$stmt = $pdo->prepare("SELECT tracking_id FROM tracking WHERE id = :id");
$stmt->execute(['id' => $id]);`
            },
        ],
        correctOptionId: '22b',
        explanation: 'Even if no data is shown, the query structure is still vulnerable. Prepared statements prevent the user input from being interpreted as a command, fixing all forms of SQLi.',
    },
    {
        id: '23',
        title: 'Insecure CORS Configuration',
        category: 'CSRF',
        difficulty: 'Intermediate',
        xp: 65,
        description: 'The server\'s Cross-Origin Resource Sharing (CORS) policy reflects any origin, allowing any malicious website to make requests to it.',
        vulnerableCode: `// JavaScript (Node.js/Express)
app.use((req, res, next) => {
  const origin = req.headers.origin;
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});`,
        language: 'javascript',
        options: [
            {
                id: '23a',
                code: `// Explicitly whitelist trusted domains
const whitelist = ['https://trusted.com', 'https://another.trusted.com'];
const origin = req.headers.origin;
if (whitelist.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
}`
            },
            {
                id: '23b',
                code: `// Allow all origins
res.setHeader('Access-Control-Allow-Origin', '*');`
            },
        ],
        correctOptionId: '23a',
        explanation: 'Never reflect the origin header. Always use a strict whitelist of trusted domains for your CORS policy, especially when allowing credentials.',
    },
    {
        id: '24',
        title: 'Logging Sensitive Data',
        category: 'IDOR',
        difficulty: 'Beginner',
        xp: 40,
        description: 'The application logs sensitive information, such as passwords or API keys, to a file or console. If logs are compromised, the secrets are exposed.',
        vulnerableCode: `// Python
def login(username, password):
    # ... authentication logic ...
    logging.info(f"User {username} attempted to log in with password {password}")`,
        language: 'python',
        options: [
            {
                id: '24a',
                code: `// Only log the username
logging.info(f"User {username} attempted to log in.")`
            },
            {
                id: '24b',
                code: `// Encrypt the log files`
            },
            {
                id: '24c',
                code: `// Log a hashed version of the password
logging.info(f"User {username} attempted to log in with password hash {hash(password)}")`
            }
        ],
        correctOptionId: '24a',
        explanation: 'The most direct fix is to never log sensitive data in the first place. Filter or remove secrets from logs before they are written.'
    },
    {
        id: '25',
        title: 'Unsafe Regular Expression',
        category: 'CSRF',
        difficulty: 'Advanced',
        xp: 80,
        description: 'A poorly written regular expression is susceptible to a Regular Expression Denial of Service (ReDoS) attack, where a specially crafted input can cause catastrophic backtracking.',
        vulnerableCode: `// JavaScript
// Vulnerable to ReDoS: (a+)+
const regex = /^(a+)+$/;
regex.test("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!");`,
        language: 'javascript',
        options: [
            {
                id: '25a',
                code: `// Make the nested quantifier possessive
const regex = /^(a++)+$/;`
            },
            {
                id: '25b',
                code: `// Avoid nested quantifiers
const regex = /^a+$/;`
            }
        ],
        correctOptionId: '25b',
        explanation: 'The vulnerability comes from nested quantifiers (`+`, `*`) on the same group. Refactoring the regex to avoid this pattern, such as `/^a+$/`, removes the "evil" backtracking issue.'
    },
    {
        id: '26',
        title: 'Missing `HttpOnly` Cookie Flag',
        category: 'XSS',
        difficulty: 'Intermediate',
        xp: 55,
        description: 'A session cookie is set without the `HttpOnly` flag, making it accessible to client-side JavaScript. If an XSS vulnerability exists, an attacker can steal the cookie.',
        vulnerableCode: `// PHP
$session_id = generate_session_id();
// The cookie can be read by JavaScript
setcookie("session_id", $session_id);`,
        language: 'php',
        options: [
            {
                id: '26a',
                code: `// Set the HttpOnly flag to true
setcookie("session_id", $session_id, ['httponly' => true]);`
            },
            {
                id: '26b',
                code: `// Encrypt the cookie value
$encrypted_id = encrypt($session_id);
setcookie("session_id", $encrypted_id);`
            }
        ],
        correctOptionId: '26a',
        explanation: 'The `HttpOnly` flag instructs the browser not to allow scripts (like JavaScript) to access the cookie. This is a crucial defense-in-depth measure against session hijacking via XSS.'
    },
    {
        id: '27',
        title: 'Mass Assignment',
        category: 'IDOR',
        difficulty: 'Advanced',
        xp: 75,
        description: 'The application automatically binds user-provided parameters to object properties. An attacker can set internal properties, like `isAdmin`, that they are not supposed to control.',
        vulnerableCode: `// Python (simplified example)
class User:
    def __init__(self, is_admin=False):
        self.is_admin = is_admin

// In an update function:
user = get_current_user()
for key, value in request.form.items():
    setattr(user, key, value) // Attacker sends 'is_admin=True'`,
        language: 'python',
        options: [
            {
                id: '27a',
                code: `// Use a "whitelist" of allowed fields to update
ALLOWED_FIELDS = ['name', 'email']
for key, value in request.form.items():
    if key in ALLOWED_FIELDS:
        setattr(user, key, value)`
            },
            {
                id: '27b',
                code: `// Use a "blacklist" to block sensitive fields
BLACKLISTED_FIELDS = ['is_admin', 'id']
for key, value in request.form.items():
    if key not in BLACKLISTED_FIELDS:
        setattr(user, key, value)`
            }
        ],
        correctOptionId: '27a',
        explanation: 'Whitelisting is safer than blacklisting. Explicitly define which fields are allowed to be updated from user input. This prevents attackers from setting unexpected or sensitive properties.'
    },
    {
        id: '28',
        title: 'Clickjacking',
        category: 'CSRF',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'The application does not prevent other sites from embedding it in an `<iframe>`. An attacker can create a transparent iframe over a legitimate-looking site to trick users into clicking buttons on the embedded site.',
        vulnerableCode: `// No specific code, this is a configuration issue.
// The server does not send an X-Frame-Options header.`,
        language: 'javascript',
        options: [
            {
                id: '28a',
                code: `// In server response headers, add:
X-Frame-Options: DENY`
            },
            {
                id: '28b',
                code: `// In server response headers, add:
X-Frame-Options: ALLOW-FROM https://trusted-site.com`
            },
            {
                id: '28c',
                code: `// Both of the above are valid. 'DENY' is the most restrictive and safest option if you don't need framing. 'SAMEORIGIN' is another common, secure option.`
            }
        ],
        correctOptionId: '28c',
        explanation: 'The `X-Frame-Options` HTTP response header can be used to indicate whether or not a browser should be allowed to render a page in a `<frame>`, `<iframe>`, `<embed>` or `<object>`. `DENY` is the most secure setting.'
    },
    {
        id: '29',
        title: 'Unvalidated Redirects and Forwards',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 65,
        description: 'An application redirects to a URL specified in a parameter without validation. This can be used to redirect users to malicious phishing sites.',
        vulnerableCode: `// Java (Servlet)
String redirectUrl = request.getParameter("returnTo");
response.sendRedirect(redirectUrl); // Redirects to any URL`,
        language: 'java',
        options: [
            {
                id: '29a',
                code: `// Validate the URL against a whitelist of allowed domains
if (isUrlWhitelisted(redirectUrl)) {
    response.sendRedirect(redirectUrl);
} else {
    response.sendRedirect("/"); // Redirect to a safe default
}`
            },
            {
                id: '29b',
                code: `// Just URL-encode the parameter
String encodedUrl = URLEncoder.encode(redirectUrl, "UTF-8");
response.sendRedirect(encodedUrl);`
            }
        ],
        correctOptionId: '29a',
        explanation: 'Never trust user input for redirection targets. Always validate the provided URL against a strict whitelist of known, safe destinations before issuing a redirect.'
    },
    {
        id: '30',
        title: 'Reliance on Untrusted Inputs in a Security Decision',
        category: 'IDOR',
        difficulty: 'Advanced',
        xp: 80,
        description: 'An application uses a hidden form field or a non-session cookie value to determine a user\'s access level.',
        vulnerableCode: `// HTML Form
<input type="hidden" name="role" value="user">
// PHP Server-side
if ($_POST['role'] == 'admin') {
    // Perform admin action
}`,
        language: 'php',
        options: [
            {
                id: '30a',
                code: `// Make the hidden field disabled
<input type="hidden" name="role" value="user" disabled>`
            },
            {
                id: '30b',
                code: `// Do not trust the input. Base security decisions on server-side session data.
session_start();
if ($_SESSION['role'] == 'admin') {
    // Perform admin action
}`
            }
        ],
        correctOptionId: '30b',
        explanation: 'Security decisions must always be based on trusted, server-side information, such as data stored in a secure session. Any input from the client (hidden fields, cookies, parameters) can be easily manipulated.'
    },
    {
        id: '31',
        title: 'Missing `SameSite` Cookie Attribute',
        category: 'CSRF',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'A session cookie is set without the `SameSite` attribute, making the application vulnerable to certain types of Cross-Site Request Forgery (CSRF) attacks.',
        vulnerableCode: `// PHP
// Cookie is sent with cross-site requests
setcookie("session", $id);`,
        language: 'php',
        options: [
            {
                id: '31a',
                code: `// Set SameSite to 'Strict' or 'Lax'
setcookie("session", $id, ['samesite' => 'Lax']);`
            },
            {
                id: '31b',
                code: `// The browser sets a default value, so no change is needed.`
            }
        ],
        correctOptionId: '31a',
        explanation: 'The `SameSite` cookie attribute mitigates CSRF by controlling whether cookies are sent with cross-origin requests. Setting it to `Lax` or `Strict` is a critical defense.'
    },
    {
        id: '32',
        title: 'ReDoS via Inefficient Regex',
        category: 'CSRF',
        difficulty: 'Advanced',
        xp: 85,
        description: 'A regular expression uses "evil" patterns like `(a|a)*` or nested quantifiers that can cause exponential backtracking on certain inputs, leading to a denial-of-service.',
        vulnerableCode: `// JavaScript
const regex = /^([a-z]+)*$/;
// A long string of 'a's followed by a '!' will cause catastrophic backtracking.
regex.test('aaaaaaaaaaaaaaaaaaaaaaaaaa!');`,
        language: 'javascript',
        options: [
            {
                id: '32a',
                code: `// The regex is fine, the input string is the problem.`
            },
            {
                id: '32b',
                code: `// Refactor the regex to be more efficient and avoid nested quantifiers.
const regex = /^[a-z]*$/;`
            }
        ],
        correctOptionId: '32b',
        explanation: 'Vulnerable regular expressions often contain nested quantifiers or alternations with overlapping patterns. Simplifying the expression to `^[a-z]*$` eliminates the "evil" pattern and prevents ReDoS.'
    },
    {
        id: '33',
        title: 'Verbose Error Messages',
        category: 'IDOR',
        difficulty: 'Beginner',
        xp: 40,
        description: 'The application reveals detailed internal error messages to the user, such as stack traces or database errors, which can leak sensitive information about the system.',
        vulnerableCode: `// Java
try {
    // ... database operation fails ...
} catch (SQLException e) {
    // Sending detailed error to client is bad!
    out.println(e.getMessage());
}`,
        language: 'java',
        options: [
            {
                id: '33a',
                code: `// Log the detailed error on the server and show a generic error to the user.
LOG.error("DB error", e);
out.println("An unexpected error occurred. Please try again later.");`
            },
            {
                id: '33b',
                code: `// Catch a more specific exception.`
            }
        ],
        correctOptionId: '33a',
        explanation: 'Detailed error messages should be logged on the server for debugging, but never shown to the end-user. Users should see generic, non-informative error messages.'
    },
    {
        id: '34',
        title: 'Integer Overflow',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'An arithmetic operation on an integer exceeds its maximum value, causing it to "wrap around" and become a small or negative number, which can lead to unexpected behavior.',
        vulnerableCode: `// Java
// User provides a large value for 'amount'
int currentBalance = 100;
int newBalance = currentBalance + amount;
if (newBalance > currentBalance) { // This check can be bypassed by overflow
    // proceed with transaction
}`,
        language: 'java',
        options: [
            {
                id: '34a',
                code: `// Use a larger data type that is less likely to overflow
long newBalance = (long)currentBalance + amount;`
            },
            {
                id: '34b',
                code: `// Perform checks before the operation
if (amount > 0 && currentBalance > Integer.MAX_VALUE - amount) {
    throw new ArithmeticException("Overflow!");
}`
            },
            {
                id: '34c',
                code: `// Both A and B are valid strategies. B is more robust for checking, while A is simpler if the type is large enough.`
            }
        ],
        correctOptionId: '34c',
        explanation: 'Integer overflows can be prevented by either using larger data types (like `long`) or by performing pre-condition checks to ensure the operation will not exceed the data type\'s maximum value.'
    },
    {
        id: '35',
        title: 'Missing `Secure` Cookie Flag',
        category: 'CSRF',
        difficulty: 'Intermediate',
        xp: 55,
        description: 'A sensitive cookie is set without the `Secure` flag, meaning the browser could send it over an unencrypted HTTP connection.',
        vulnerableCode: `// JavaScript (Node.js/Express)
// Assume the site is served over HTTPS
res.cookie('sessionID', '12345', { httpOnly: true });`,
        language: 'javascript',
        options: [
            {
                id: '35a',
                code: `// Add the 'secure: true' flag
res.cookie('sessionID', '12345', { httpOnly: true, secure: true });`
            },
            {
                id: '35b',
                code: `// The cookie is already secure because the site uses HTTPS.`
            }
        ],
        correctOptionId: '35a',
        explanation: 'The `Secure` flag on a cookie tells the browser to only send it over encrypted (HTTPS) connections. This is crucial for protecting session cookies from being intercepted on an insecure network.'
    },
    {
        id: '36',
        title: 'Information Leakage Through Query Strings',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 50,
        description: 'The application passes sensitive data, like session tokens or API keys, directly in URL query parameters.',
        vulnerableCode: `// HTML link
<a href="/user/profile?session_token=abcdef12345">My Profile</a>`,
        language: 'javascript',
        options: [
            {
                id: '36a',
                code: `// Encrypt the query parameter
<a href="/user/profile?token=ENCRYPTED_TOKEN">My Profile</a>`
            },
            {
                id: '36b',
                code: `// Transmit sensitive data in a secure HTTP header or a server-side session cookie, not in the URL.
<a href="/user/profile">My Profile</a>`
            }
        ],
        correctOptionId: '36b',
        explanation: 'URLs can be logged in browser history, web server logs, and proxy logs. Sensitive data should be transmitted in more secure ways, like in HTTP headers or managed through server-side sessions.'
    },
    {
        id: '37',
        title: 'Deserialization of Untrusted Data (Java)',
        category: 'IDOR',
        difficulty: 'Advanced',
        xp: 90,
        description: 'A Java application reads and deserializes an object from an untrusted network stream, which can lead to remote code execution.',
        vulnerableCode: `// Java
public User readUser(Socket socket) throws Exception {
    ObjectInputStream ois = new ObjectInputStream(socket.getInputStream());
    // Deserializing untrusted data is dangerous!
    User user = (User) ois.readObject();
    return user;
}`,
        language: 'java',
        options: [
            {
                id: '37a',
                code: `// Use a safe data format like JSON with a library like Jackson or GSON instead of native Java serialization.`
            },
            {
                id: '37b',
                code: `// Wrap the input stream in a try-with-resources block.`
            }
        ],
        correctOptionId: '37a',
        explanation: 'Native Java serialization is known to be dangerous when used with untrusted data. A better approach is to use a safe, data-only format like JSON to exchange information.'
    },
    {
        id: '38',
        title: 'User Enumeration',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 55,
        description: 'The login page gives different responses for "user not found" versus "invalid password", allowing an attacker to determine valid usernames.',
        vulnerableCode: `// Python (simplified)
def login(username, password):
    user = find_user(username)
    if not user:
        return "Error: User not found." // Exposes valid usernames
    if not check_password(user, password):
        return "Error: Invalid password."`,
        language: 'python',
        options: [
            {
                id: '38a',
                code: `def login(username, password):
    user = find_user(username)
    # Return the same generic error message in both cases.
    if not user or not check_password(user, password):
        return "Error: Invalid username or password."`
            },
            {
                id: '38b',
                code: `// Rate limit login attempts to slow down attackers.`
            }
        ],
        correctOptionId: '38a',
        explanation: 'To prevent user enumeration, the application should return the exact same generic error message whether the username is invalid or the password is correct. This prevents an attacker from being able to distinguish between the two cases.'
    },
    {
        id: '39',
        title: 'SQL Injection with `LIKE` Clause',
        category: 'SQL Injection',
        difficulty: 'Intermediate',
        xp: 65,
        description: 'User input is used in a `LIKE` clause, but the wildcard characters (`%`, `_`) are not escaped, allowing an attacker to retrieve all records.',
        vulnerableCode: `// Python
search_term = request.args.get('q')
# Attacker can enter '%' to match all products
query = f"SELECT * FROM products WHERE name LIKE '%{search_term}%'"`
,
        language: 'python',
        options: [
            {
                id: '39a',
                code: `// Still use prepared statements, and manually add wildcards in the application code.
query = "SELECT * FROM products WHERE name LIKE ?"
term = "%" + search_term + "%"
cursor.execute(query, (term,))`
            },
            {
                id: '39b',
                code: `// Just remove the wildcard characters
search_term = search_term.replace('%', '').replace('_', '')
query = f"SELECT * FROM products WHERE name LIKE '%{search_term}%'"`
            }
        ],
        correctOptionId: '39a',
        explanation: 'Prepared statements should still be used. The wildcards (`%`) should be concatenated with the user input in the application code before being passed as a parameter to the query.'
    },
    {
        id: '40',
        title: 'Directory Listing Enabled',
        category: 'IDOR',
        difficulty: 'Beginner',
        xp: 35,
        description: 'The web server is configured to show a listing of all files in a directory if a default index page (like `index.html`) is not present.',
        vulnerableCode: `// This is a server configuration issue, not code.
// E.g., in Apache: Options +Indexes`,
        language: 'javascript',
        options: [
            {
                id: '40a',
                code: `// In Apache config, disable indexes.
Options -Indexes`
            },
            {
                id: '40b',
                code: `// Add an empty index.html file to every directory.`
            },
            {
                id: '40c',
                code: `// Both A and B are valid solutions. A is a more robust server-wide configuration.`
            }
        ],
        correctOptionId: '40c',
        explanation: 'Disabling directory listing at the server configuration level is the most secure and comprehensive fix. This prevents accidental information disclosure if an index file is missed.'
    },
    {
        id: '41',
        title: 'Improper Asset Management (Dotfiles)',
        category: 'IDOR',
        difficulty: 'Beginner',
        xp: 45,
        description: 'A `.git` directory or other sensitive dotfiles (`.env`, `.DS_Store`) are publicly accessible in the web root, exposing source code, credentials, or system information.',
        vulnerableCode: `// Server misconfiguration.
// A user can navigate to https://example.com/.git/config`,
        language: 'javascript',
        options: [
            {
                id: '41a',
                code: `// Configure the web server (e.g., Nginx, Apache) to deny access to all dotfiles.
location ~ /\\.(?!well-known) {
    deny all;
}`
            },
            {
                id: '41b',
                code: `// Ensure the deployment process does not copy these files to the web root.`
            },
            {
                id: '41c',
                code: `// Both A and B should be implemented as a layered defense.`
            }
        ],
        correctOptionId: '41c',
        explanation: 'A proper deployment process should not include sensitive files in the final artifact. Additionally, the web server should be configured with deny rules as a fallback to prevent access to any dotfiles that might be accidentally exposed.'
    },
    {
        id: '42',
        title: 'XSS in `<a>` href Attribute',
        category: 'XSS',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'A user-controlled URL is placed directly into the `href` attribute of an anchor tag, allowing an attacker to use the `javascript:` protocol to execute script.',
        vulnerableCode: `// User provides a URL like "javascript:alert('XSS')"
const userWebsite = "javascript:alert('XSS')";
const link = \`<a href="\${userWebsite}">My Website</a>\`;
document.body.innerHTML = link;`,
        language: 'javascript',
        options: [
            {
                id: '42a',
                code: `// Validate that the URL starts with http:// or https://
if (userWebsite.startsWith('http')) {
    // ... create link
}`
            },
            {
                id: '42b',
                code: `// URL-encode the user input
const encodedUrl = encodeURIComponent(userWebsite);
const link = \`<a href="\${encodedUrl}">My Website</a>\`;`
            }
        ],
        correctOptionId: '42a',
        explanation: 'Before placing user-provided URLs into `href` attributes, you must validate the URL\'s protocol. A simple and effective method is to ensure the URL begins with a safe protocol like `http://` or `https://`.'
    },
    {
        id: '43',
        title: 'Lack of Rate Limiting',
        category: 'CSRF',
        difficulty: 'Intermediate',
        xp: 55,
        description: 'An API endpoint, such as login or password reset, has no rate limiting, allowing an attacker to perform rapid brute-force attacks.',
        vulnerableCode: `// JavaScript (Node.js/Express)
app.post('/login', (req, res) => {
    // ... authentication logic ...
});`,
        language: 'javascript',
        options: [
            {
                id: '43a',
                code: `// Add a delay to every login attempt
app.post('/login', (req, res) => {
    setTimeout(() => { /* auth logic */ }, 500);
});`
            },
            {
                id: '43b',
                code: `// Implement rate limiting middleware based on IP address or username.
// For example, using a library like 'express-rate-limit'.
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/login', limiter);`
            }
        ],
        correctOptionId: '43b',
        explanation: 'Proper rate limiting is implemented by tracking the number of requests from a specific IP address or user over a time window and temporarily blocking them if they exceed a threshold.'
    },
    {
        id: '44',
        title: 'Weak Session ID',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 65,
        description: 'The application generates session IDs using a weak, predictable method, such as simply incrementing a number.',
        vulnerableCode: `// PHP (conceptual)
$last_user_id = get_last_user_id_from_db();
$new_session_id = $last_user_id + 1;
setcookie('session', $new_session_id);`,
        language: 'php',
        options: [
            {
                id: '44a',
                code: `// Use the language's built-in, cryptographically secure session management functions.
session_start();
$_SESSION['user_id'] = $user_id;`
            },
            {
                id: '44b',
                code: `// Generate a more complex, but still predictable ID
$new_session_id = time() + $user_id;`
            }
        ],
        correctOptionId: '44a',
        explanation: 'Never create your own session ID generation scheme. Always use the secure, battle-tested session management functions provided by your language or framework, which generate long, random, unpredictable IDs.'
    },
    {
        id: '45',
        title: 'Second-Order SQL Injection',
        category: 'SQL Injection',
        difficulty: 'Advanced',
        xp: 100,
        description: 'An application takes user input, stores it in the database, and later uses that stored data in a different, unsafe query.',
        vulnerableCode: `// Step 1: User signs up with a malicious username like "admin' --"
// This username is safely stored in the DB using prepared statements.

// Step 2: An admin later changes this user's email.
$username = $_POST['username']; // The malicious username is retrieved
$new_email = $_POST['email'];
// The retrieved username is used unsafely in a new query!
$sql = "UPDATE users SET email = '$new_email' WHERE username = '$username'";`,
        language: 'php',
        options: [
            {
                id: '45a',
                code: `// The problem is in Step 1. The username should be validated on signup.`
            },
            {
                id: '45b',
                code: `// The problem is in Step 2. ALL queries that use external data must use prepared statements, even if the data was previously stored in your own database.
$stmt = $pdo->prepare("UPDATE users SET email = :email WHERE username = :username");
$stmt->execute(['email' => $new_email, 'username' => $username]);`
            }
        ],
        correctOptionId: '45b',
        explanation: 'Data that was once user input should always be treated as untrusted, even if it comes from your own database. Every single SQL query that incorporates external data must use prepared statements to be safe.'
    },
    {
        id: '46',
        title: 'Regular Expression Injection',
        category: 'CSRF',
        difficulty: 'Advanced',
        xp: 80,
        description: 'A user-provided pattern is used to construct a regular expression without proper escaping. An attacker can create a pattern that matches unintended data or causes a ReDoS.',
        vulnerableCode: `// JavaScript
let userPattern = request.query.pattern; // e.g., an attacker provides "."
let regex = new RegExp("^" + userPattern + "$");
// If userPattern is ".", the regex becomes /^.$/ which matches any single character.`,
        language: 'javascript',
        options: [
            {
                id: '46a',
                code: `// This is the fixed version
function escapeRegex(string) {
    // This escapes special characters by adding a backslash before them.
    return string.replace(/[.*+?^${}()|[\\]\\]/g, '\\\\$&');
}
let regex = new RegExp("^" + escapeRegex(userPattern) + "$");`
            },
            {
                id: '46b',
                code: `// The code is fine, RegExp automatically escapes patterns.`
            }
        ],
        correctOptionId: '46a',
        explanation: 'When building a regular expression from user input, you must escape any special regex metacharacters within the input to ensure they are treated as literal characters.'
    }
];
