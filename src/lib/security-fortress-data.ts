

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
        explanation: 'Never redirect to a user-supplied URL without validating it against a whitelist of known, safe destinations. Checking for just `http` is not enough, as it could be `http://malicious-site.com`.',
    },
    {
        id: '21',
        title: 'Unsanitized Rich Text Editor',
        category: 'XSS',
        difficulty: 'Intermediate',
        xp: 70,
        description: 'A rich text (WYSIWYG) editor allows users to submit HTML content, which is then rendered on the page, creating a Stored XSS vulnerability.',
        vulnerableCode: `// JavaScript
const userContent = getRichTextEditorContent(); // e.g., "<b>Bold</b><img src='x' onerror='alert(1)'>"
document.getElementById('display').innerHTML = userContent;`,
        language: 'javascript',
        options: [
            {
                id: '21a',
                code: `// Strip all HTML tags
const sanitizedContent = userContent.replace(/<[^>]*>/g, "");
document.getElementById('display').innerHTML = sanitizedContent;`
            },
            {
                id: '21b',
                code: `// Use a purpose-built HTML sanitizer library
const sanitizedContent = DOMPurify.sanitize(userContent);
document.getElementById('display').innerHTML = sanitizedContent;`
            },
            {
                id: '21c',
                code: `// Only allow bold and italic tags
const sanitizedContent = userContent.replace(/<(?!b>|\\/b>|i>|\\/i>)[^>]*>/g, "");
document.getElementById('display').innerHTML = sanitizedContent;`
            }
        ],
        correctOptionId: '21b',
        explanation: 'HTML sanitization is complex. Writing your own regex is likely to have bypasses. The safest approach is to use a well-vetted, mature library like DOMPurify to clean the HTML based on a whitelist of allowed tags and attributes.'
    },
    {
        id: '22',
        title: 'Blind SQL Injection (Time-based)',
        category: 'SQL Injection',
        difficulty: 'Advanced',
        xp: 95,
        description: 'An attacker can determine information about the database by injecting commands that cause a time delay, observing how long the server takes to respond.',
        vulnerableCode: `// PHP
$id = $_GET['id'];
// Query is vulnerable, but results are not shown to the user
$sql = "SELECT tracking_id FROM tracking WHERE id = '$id'";
// ... database executes query ...
// A generic "OK" response is sent`,
        language: 'php',
        options: [
            {
                id: '22a',
                code: `// Time-based attacks are too slow to be practical, no fix needed.`
            },
            {
                id: '22b',
                code: `// The fix is the same as regular SQLi: use prepared statements.
$stmt = $pdo->prepare("SELECT tracking_id FROM tracking WHERE id = :id");
$stmt->execute(['id' => $id]);`
            },
            {
                id: '22c',
                code: `// Add a timeout to the database connection.
$pdo->setAttribute(PDO::ATTR_TIMEOUT, 1);`
            }
        ],
        correctOptionId: '22b',
        explanation: 'Even if the results of a query are not displayed, it can still be vulnerable. The fundamental solution to all types of SQL injection is to use parameterized queries, which separate code from data.'
    },
    {
        id: '23',
        title: 'Missing `HttpOnly` Cookie Flag',
        category: 'XSS',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'A session cookie is set without the `HttpOnly` flag, making it accessible to client-side JavaScript. If an XSS vulnerability exists, an attacker can steal the session cookie.',
        vulnerableCode: `// JavaScript (Node.js/Express with cookie-parser)
res.cookie('sessionId', 'abc12345');`,
        language: 'javascript',
        options: [
            {
                id: '23a',
                code: `// Encrypt the cookie value
const encryptedSession = encrypt('abc12345');
res.cookie('sessionId', encryptedSession);`
            },
            {
                id: '23b',
                code: `// Set the HttpOnly flag to prevent JS access
res.cookie('sessionId', 'abc12345', { httpOnly: true, secure: true });`
            },
            {
                id: '23c',
                code: `// Use a shorter cookie name
res.cookie('sid', 'abc12345');`
            }
        ],
        correctOptionId: '23b',
        explanation: 'Session cookies should always be set with the `HttpOnly` flag to prevent them from being accessed by JavaScript. The `Secure` flag should also be used to ensure they are only sent over HTTPS.'
    },
    {
        id: '24',
        title: 'Verbose Error Messages',
        category: 'IDOR',
        difficulty: 'Beginner',
        xp: 35,
        description: 'The application exposes detailed error messages, stack traces, or database errors to the user, which can reveal sensitive information about the system architecture.',
        vulnerableCode: `// Python (Flask)
@app.errorhandler(500)
def handle_error(error):
    # Exposing the full stack trace to the user
    return str(error), 500`,
        language: 'python',
        options: [
            {
                id: '24a',
                code: `@app.errorhandler(500)
def handle_error(error):
    # Log the detailed error for developers
    app.logger.error(error)
    # Return a generic error message to the user
    return "An internal server error occurred.", 500`
            },
            {
                id: '24b',
                code: `@app.errorhandler(500)
def handle_error(error):
    # Show a friendly but still detailed error
    return f"Error in {error.module}: {error.message}", 500`
            }
        ],
        correctOptionId: '24a',
        explanation: 'Detailed errors should be logged on the server for developers to debug, but users should only see a generic, non-informative error message. This prevents attackers from gathering information about your stack.'
    },
    {
        id: '25',
        title: 'JavaScript `eval()` Injection',
        category: 'Command Injection',
        difficulty: 'Advanced',
        xp: 80,
        description: 'The `eval()` function is used to execute a string of JavaScript code constructed from user input, allowing for arbitrary code execution.',
        vulnerableCode: `// JavaScript
let operation = urlParams.get('op'); // e.g., "2+2"
let result = eval(operation);`,
        language: 'javascript',
        options: [
            {
                id: '25a',
                code: `// It's a calculator, this is necessary. No fix.`
            },
            {
                id: '25b',
                code: `// Avoid eval(). Parse the input and use safe functions.
const parts = operation.match(/(\\d+)([+-\\*\\/])(\\d+)/);
if(parts) {
  const [_, a, op, b] = parts;
  // Safely perform the calculation...
}`
            },
            {
                id: '25c',
                code: `// Sanitize the input for dangerous characters
operation = operation.replace('alert', '').replace('document', '');
let result = eval(operation);`
            }
        ],
        correctOptionId: '25b',
        explanation: 'Avoid `eval()` at all costs when dealing with user input. The safe alternative is to parse the input and use controlled, safe functions to achieve the desired outcome, without executing arbitrary code.'
    },
    {
        id: '26',
        title: 'PHP Loose Comparison',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 55,
        description: 'Using `==` in PHP can lead to unexpected type juggling. An attacker might bypass an authentication check if a string like "0e123" is compared to the number 0.',
        vulnerableCode: `// PHP
$user_input = $_GET['password'];
$secret_pin = 0;
if ($user_input == $secret_pin) {
    // Access granted
}`,
        language: 'php',
        options: [
            {
                id: '26a',
                code: `// Use strict comparison to avoid type juggling
if ($user_input === $secret_pin) {
    // Access granted
}`
            },
            {
                id: '26b',
                code: `if (intval($user_input) == $secret_pin) {
    // Access granted
}`
            }
        ],
        correctOptionId: '26a',
        explanation: 'Always use strict comparison (`===`) in PHP when comparing values, especially when one of them is user input, to prevent unexpected type juggling that can lead to security bypasses.'
    },
    {
        id: '27',
        title: 'Clickjacking',
        category: 'CSRF',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'The application does not prevent other sites from embedding it in an `<iframe>`. An attacker can create a transparent `iframe` over a malicious site to trick users into clicking buttons on the embedded site.',
        vulnerableCode: `// No specific code, this is a configuration issue.
// The web server is not sending the correct HTTP headers.`,
        language: 'javascript',
        options: [
            {
                id: '27a',
                code: `// Fix by setting the X-Frame-Options header
// In Node.js/Express:
res.setHeader('X-Frame-Options', 'DENY');`
            },
            {
                id: '27b',
                code: `// Fix with JavaScript frame-busting
if (window.top !== window.self) {
    window.top.location = window.self.location;
}`
            },
            {
                id: '27c',
                code: `// Both A and B are valid defenses, but the HTTP header is the more robust and recommended modern approach.`
            }
        ],
        correctOptionId: '27c',
        explanation: 'The primary defense against clickjacking is to send the `X-Frame-Options` HTTP header. `DENY` prevents any framing, while `SAMEORIGIN` allows framing only by pages from the same origin.'
    },
    {
        id: '28',
        title: 'OS Command Injection with Backticks',
        category: 'Command Injection',
        difficulty: 'Advanced',
        xp: 85,
        description: 'In many languages (like PHP and Perl), backticks (``) are used to execute shell commands. Using user input inside them is extremely dangerous.',
        vulnerableCode: `// PHP
$filename = $_GET['file'];
$output = \`ls -l $filename\`;
echo "<pre>$output</pre>";`,
        language: 'php',
        options: [
            {
                id: '28a',
                code: `// Use a safe function to list directory contents
$dir_contents = scandir(dirname($filename));`
            },
            {
                id: '28b',
                code: `// Use escapeshellarg to sanitize the input
$filename = escapeshellarg($_GET['file']);
$output = \`ls -l $filename\`;`
            },
            {
                id: '28c',
                code: `// Using escapeshellarg is good, but avoiding shell execution entirely is better. The safest option is to use native language functions (like 'scandir') if available.`
            }
        ],
        correctOptionId: '28c',
        explanation: 'While sanitizing input for shell commands is a valid defense, the best practice is to avoid calling shell commands with user input whenever possible. Use built-in language functions to perform the task instead.'
    },
    {
        id: '29',
        title: 'Python `eval` vulnerability',
        category: 'Command Injection',
        difficulty: 'Advanced',
        xp: 80,
        description: 'Using `eval()` on user input is a massive security hole that allows for arbitrary code execution.',
        vulnerableCode: `// Python
user_input = input("Enter calculation: ")
result = eval(user_input)`,
        language: 'python',
        options: [
            {
                id: '29a',
                code: `// Use ast.literal_eval for safe evaluation of Python literals
import ast
result = ast.literal_eval(user_input)`
            },
            {
                id: '29b',
                code: `// Blacklist dangerous keywords
if "__" in user_input:
    print("Error")
else:
    result = eval(user_input)`
            }
        ],
        correctOptionId: '29a',
        explanation: '`ast.literal_eval` provides a safe way to evaluate strings containing Python literals (strings, numbers, tuples, lists, dicts, booleans, and None) without the risk of executing arbitrary code.'
    },
    {
        id: '30',
        title: 'Insecure Cookie `Secure` Flag',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 50,
        description: 'A session cookie is set without the `Secure` flag, meaning it can be sent over unencrypted HTTP connections.',
        vulnerableCode: `// Java (Servlet)
Cookie sessionCookie = new Cookie("SESSIONID", "abc12345");
response.addCookie(sessionCookie);`,
        language: 'java',
        options: [
            {
                id: '30a',
                code: `// The secure flag must be set for sensitive cookies
Cookie sessionCookie = new Cookie("SESSIONID", "abc12345");
sessionCookie.setSecure(true);
response.addCookie(sessionCookie);`
            },
            {
                id: '30b',
                code: `// This is only a problem if the site doesn't use HTTPS.`
            },
            {
                id: '30c',
                code: `// Set the cookie path to be more restrictive
sessionCookie.setPath("/app");`
            }
        ],
        correctOptionId: '30a',
        explanation: 'For any sensitive cookie (like a session ID), the `Secure` flag must be set. This ensures the browser will only send the cookie over an encrypted HTTPS connection, preventing it from being intercepted on an insecure network.'
    },
    {
        id: '31',
        title: 'Deserialization of Untrusted Data (Java)',
        category: 'IDOR',
        difficulty: 'Advanced',
        xp: 90,
        description: 'Accepting serialized Java objects from an untrusted source can lead to Remote Code Execution, as a malicious payload can be crafted.',
        vulnerableCode: `// Java
protected void doPost(HttpServletRequest request, HttpServletResponse response) {
    try {
        ObjectInputStream in = new ObjectInputStream(request.getInputStream());
        User user = (User) in.readObject();
        // ... process user object ...
    } catch (Exception e) {
        // handle error
    }
}`,
        language: 'java',
        options: [
            {
                id: '31a',
                code: `// Use a safe data format like JSON instead of Java serialization
ObjectMapper mapper = new ObjectMapper();
User user = mapper.readValue(request.getInputStream(), User.class);`
            },
            {
                id: '31b',
                code: `// Check the object type after deserialization
User user = (User) in.readObject();
if (!(user instanceof User)) {
    throw new SecurityException("Invalid object type");
}`
            },
            {
                id: '31c',
                code: `// No fix needed if the User class is simple.`
            }
        ],
        correctOptionId: '31a',
        explanation: 'Java serialization is notoriously unsafe for untrusted data. The best practice is to switch to a safe, data-only format like JSON and use a library like Jackson or Gson for deserialization.'
    },
    {
        id: '32',
        title: 'Insecure Regular Expression',
        category: 'CSRF',
        difficulty: 'Advanced',
        xp: 75,
        description: 'A poorly written regular expression can be vulnerable to a ReDoS (Regular Expression Denial of Service) attack, where a specially crafted input string causes exponential backtracking.',
        vulnerableCode: `// JavaScript
// Vulnerable to ReDoS: (a+)+
const regex = /^(a+)+$/;
regex.test("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!");`,
        language: 'javascript',
        options: [
            {
                id: '32a',
                code: `// Make the nested quantifier possessive to prevent backtracking
const regex = /^(a++)+$/;`
            },
            {
                id: '32b',
                code: `// Rewrite the regex to avoid nested quantifiers
const regex = /^a+$/;`
            },
            {
                id: '32c',
                code: `// Limit the length of the input string before testing
if (input.length < 100) {
    regex.test(input);
}`
            }
        ],
        correctOptionId: '32b',
        explanation: 'The vulnerability is caused by "nested quantifiers" (`a+` inside `()+`). The safest fix is to rewrite the expression to avoid this pattern entirely. A simple `^a+$` accomplishes the same goal without the ReDoS risk.'
    },
    {
        id: '33',
        title: 'Directory Listing Enabled',
        category: 'IDOR',
        difficulty: 'Beginner',
        xp: 30,
        description: 'If a web server does not find an index file (like index.html) in a directory, it might be configured to show a listing of all files in that directory, potentially exposing sensitive information.',
        vulnerableCode: `// This is a server configuration issue, not code.
// Example: Apache config
<Directory /var/www/html>
    Options Indexes FollowSymLinks
</Directory>`,
        language: 'javascript',
        options: [
            {
                id: '33a',
                code: `// Remove the 'Indexes' option from the server configuration
<Directory /var/www/html>
    Options FollowSymLinks
</Directory>`
            },
            {
                id: '33b',
                code: `// Add an empty index.html file to every directory.`
            },
            {
                id: '33c',
                code: `// Both A and B are valid solutions. Disabling indexes is the proper server-level fix.`
            }
        ],
        correctOptionId: '33c',
        explanation: 'The best fix is to disable directory listing at the server configuration level. Adding an empty index file also works as a quick fix but must be done for every directory.'
    },
    {
        id: '34',
        title: 'Missing `SameSite` Cookie Attribute',
        category: 'CSRF',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'A cookie without the `SameSite` attribute will be sent with cross-site requests, which is the foundation for CSRF attacks.',
        vulnerableCode: `// JavaScript (Node.js/Express)
res.cookie('sessionId', 'abc12345', { httpOnly: true, secure: true });`,
        language: 'javascript',
        options: [
            {
                id: '34a',
                code: `// The SameSite attribute defaults to Lax in modern browsers, so no fix is needed.`
            },
            {
                id: '34b',
                code: `// Explicitly set SameSite to 'Strict' or 'Lax'
res.cookie('sessionId', 'abc12345', { 
    httpOnly: true, 
    secure: true, 
    sameSite: 'Strict' 
});`
            }
        ],
        correctOptionId: '34b',
        explanation: 'While modern browsers default to `SameSite=Lax`, it is best practice to explicitly set the attribute for sensitive cookies. `Strict` provides the strongest protection, while `Lax` provides a balance between security and usability.'
    },
    {
        id: '35',
        title: 'Unsafe `target="_blank"`',
        category: 'XSS',
        difficulty: 'Beginner',
        xp: 40,
        description: 'Links with `target="_blank"` can be a security risk. The newly opened page gains access to the originating page\'s `window` object via `window.opener`, allowing it to redirect the original page to a malicious site.',
        vulnerableCode: `<a href="https://example.com" target="_blank">Visit Example</a>`,
        language: 'javascript',
        options: [
            {
                id: '35a',
                code: `// This is not a security risk.`
            },
            {
                id: '35b',
                code: `<a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit Example</a>`
            }
        ],
        correctOptionId: '35b',
        explanation: 'To mitigate this vulnerability, always add `rel="noopener noreferrer"` to any links that use `target="_blank"`. This prevents the new page from accessing `window.opener`.'
    },
    {
        id: '36',
        title: 'Second-Order SQL Injection',
        category: 'SQL Injection',
        difficulty: 'Advanced',
        xp: 90,
        description: 'An attacker\'s input is stored safely in the database, but it is later used in an unsafe way in a different part of the application.',
        vulnerableCode: `// 1. User signs up, username is stored safely (e.g., with prepared statements)
// Attacker's username: admin' -- 

// 2. Later, an admin panel builds a query unsafely with the stored username
$username = $user_from_db['username'];
$sql = "UPDATE users SET is_admin=1 WHERE username = '$username'";`,
        language: 'php',
        options: [
            {
                id: '36a',
                code: `// The vulnerability is in the admin panel query. It must also use prepared statements.`
            },
            {
                id: '36b',
                code: `// Sanitize the username on input to remove quotes.
$username = str_replace("'", "", $_POST['username']);`
            }
        ],
        correctOptionId: '36a',
        explanation: 'This highlights that *every* query that uses external data must be parameterized. Just because data was stored safely once does not mean it is safe to use in a dynamically constructed query later.'
    },
    {
        id: '37',
        title: 'Prototype Pollution',
        category: 'IDOR',
        difficulty: 'Advanced',
        xp: 95,
        description: 'An attacker is able to modify `Object.prototype` through an unsafe recursive merge or object property definition, affecting all objects in the application.',
        vulnerableCode: `// Unsafe recursive merge function
function merge(target, source) {
    for (let key in source) {
        if (key === '__proto__') { continue; } // Naive check
        if (typeof target[key] === 'object' && typeof source[key] === 'object') {
            merge(target[key], source[key]);
        } else {
            target[key] = source[key];
        }
    }
}`,
        language: 'javascript',
        options: [
            {
                id: '37a',
                code: `// This check is sufficient to prevent prototype pollution.`
            },
            {
                id: '37b',
                code: `// A better approach is to prevent merging properties named '__proto__', 'constructor', or 'prototype'. 
// Or, even better, create a new object without a prototype using Object.create(null).`
            }
        ],
        correctOptionId: '37b',
        explanation: 'A simple check for `__proto__` is not enough. An attacker could use `constructor.prototype` to achieve the same result. The best defenses involve robust validation of keys or creating prototype-less objects for data storage.'
    },
    {
        id: '38',
        title: 'Insecure Password Reset',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 70,
        description: 'A password reset function reveals whether an email address exists in the system, allowing an attacker to enumerate valid user emails.',
        vulnerableCode: `// PHP
$email = $_POST['email'];
if (user_exists($email)) {
    // send reset email...
    echo "Password reset email sent.";
} else {
    echo "Error: Email not found.";
}`,
        language: 'php',
        options: [
            {
                id: '38a',
                code: `// This behavior is fine.`
            },
            {
                id: '38b',
                code: `// Always return a generic message, regardless of whether the email exists.
// Log the attempt on the server side.
echo "If an account with that email exists, a reset link has been sent.";`
            }
        ],
        correctOptionId: '38b',
        explanation: 'Authentication and password reset functions should not reveal whether an account exists. This prevents username/email enumeration. Always return a generic success message.'
    },
    {
        id: '39',
        title: 'HTTP Parameter Pollution (HPP)',
        category: 'IDOR',
        difficulty: 'Advanced',
        xp: 75,
        description: 'An attacker sends multiple HTTP parameters with the same name. If the application only reads the last one, it can be used to override legitimate parameter values.',
        vulnerableCode: `// URL: /transfer?to=bob&amount=100&to=attacker
// Express.js code:
app.get('/transfer', (req, res) => {
    // req.query.to will be "attacker"
    const recipient = req.query.to; 
    // ... transfer logic ...
});`,
        language: 'javascript',
        options: [
            {
                id: '39a',
                code: `// Express handles this automatically, this is not a risk.`
            },
            {
                id: '39b',
                code: `// The application should check if the parameter was supplied more than once.
// If so, it should reject the request.
if (Array.isArray(req.query.to)) {
    return res.status(400).send("Parameter pollution detected");
}`
            }
        ],
        correctOptionId: '39b',
        explanation: 'Web frameworks handle duplicate parameters differently. An application should be aware of this and explicitly check for and reject requests where sensitive parameters are provided more than once.'
    },
    {
        id: '40',
        title: 'Mass Assignment Vulnerability',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 70,
        description: 'An application binds user input directly to an object, allowing an attacker to update fields they should not have access to, like an `isAdmin` flag.',
        vulnerableCode: `// Python (with a hypothetical ORM)
user_data = request.json
user = get_user_by_id(user_id)
# Unsafely updates all fields provided by the user
user.update(user_data)`,
        language: 'python',
        options: [
            {
                id: '40a',
                code: `// Only update fields from a whitelist
allowed_fields = ['first_name', 'last_name']
for field in allowed_fields:
    if field in user_data:
        setattr(user, field, user_data[field])`
            },
            {
                id: '40b',
                code: `// Blacklist sensitive fields
if 'is_admin' in user_data:
    del user_data['is_admin']
user.update(user_data)`
            },
            {
                id: '40c',
                code: `// Both are valid, but whitelisting (A) is generally safer than blacklisting (B).`
            }
        ],
        correctOptionId: '40c',
        explanation: 'Whitelisting allowed fields is safer because it denies by default. A blacklist approach might miss a new sensitive field added in the future. The best approach is to use a Data Transfer Object (DTO) that only contains the fields a user is allowed to edit.'
    },
    {
        id: '41',
        title: 'Unchecked `postMessage` Origin',
        category: 'XSS',
        difficulty: 'Intermediate',
        xp: 65,
        description: 'A web page listens for messages via `window.postMessage` but does not verify the origin of the message, allowing any website to send it malicious data.',
        vulnerableCode: `// JavaScript in your web page
window.addEventListener('message', (event) => {
    // Unsafe: doesn't check event.origin
    eval(event.data);
});`,
        language: 'javascript',
        options: [
            {
                id: '41a',
                code: `window.addEventListener('message', (event) => {
    // Always validate the origin of the message
    if (event.origin !== 'https://trusted-site.com') {
        return;
    }
    // Process event.data safely...
});`
            },
            {
                id: '41b',
                code: `window.addEventListener('message', (event) => {
    // Just check that data is not empty
    if (event.data) {
        eval(event.data);
    }
});`
            }
        ],
        correctOptionId: '41a',
        explanation: 'When using `postMessage`, you must always verify the `event.origin` to ensure the message is coming from a trusted source before processing its data.'
    },
    {
        id: '42',
        title: 'SQL Injection with `LIKE` Clause',
        category: 'SQL Injection',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'User input is used in a `LIKE` clause, but wildcard characters (`%`, `_`) are not escaped, allowing an attacker to bypass filters or retrieve all data.',
        vulnerableCode: `// Python
search_term = request.args.get('search')
# Unsafe concatenation
query = f"SELECT * FROM products WHERE name LIKE '%{search_term}%'"`,
        language: 'python',
        options: [
            {
                id: '42a',
                code: `// Use prepared statements, passing the wildcard-wrapped term as a parameter.
query = "SELECT * FROM products WHERE name LIKE ?"
params = (f"%{search_term}%",)
# ... execute with params`
            },
            {
                id: '42b',
                code: `// Escape the wildcards manually
safe_term = search_term.replace('%', '\\%').replace('_', '\\_')
query = f"SELECT * FROM products WHERE name LIKE '%{safe_term}%'"`
            },
            {
                id: '42c',
                code: `// A is the best practice. B is a valid defense but error-prone.`
            }
        ],
        correctOptionId: '42c',
        explanation: 'As with all SQL injection, prepared statements are the correct solution. Let the database driver handle the proper quoting and escaping of the data.'
    },
    {
        id: '43',
        title: 'Log Injection',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 55,
        description: 'User input is written directly to a log file without sanitization. An attacker can inject newline characters (`\\n`) to forge log entries.',
        vulnerableCode: `// Java
String username = request.getParameter("username");
log.info("Login failed for user: " + username);`,
        language: 'java',
        options: [
            {
                id: '43a',
                code: `// Sanitize the input by removing newlines and other control characters
username = username.replaceAll("[\\n\\r]", "_");
log.info("Login failed for user: " + username);`
            },
            {
                id: '43b',
                code: `// Use a logging framework that automatically handles this.`
            },
            {
                id: '43c',
                code: `// A is correct. Most modern logging frameworks do not automatically sanitize for this, so manual cleaning or a specific security wrapper is required.`
            }
        ],
        correctOptionId: '43c',
        explanation: 'To prevent log injection, all user-controllable data written to logs should be sanitized to remove carriage returns, newlines, and other control characters.'
    },
    {
        id: '44',
        title: 'Insecure Temporary File',
        category: 'IDOR',
        difficulty: 'Beginner',
        xp: 40,
        description: 'The application creates a temporary file in a shared directory (`/tmp`) with a predictable name. An attacker could potentially predict the filename and pre-create it to hijack data or control the application.',
        vulnerableCode: `// Python
# Predictable filename
temp_file = open("/tmp/app_temp_file.dat", "w")
temp_file.write("secret data")`,
        language: 'python',
        options: [
            {
                id: '44a',
                code: `// Use the tempfile module to securely create temporary files
import tempfile
with tempfile.NamedTemporaryFile(delete=False) as temp_file:
    temp_file.write(b"secret data")`
            },
            {
                id: '44b',
                code: `import os, time
# Add a timestamp to the name
filename = f"/tmp/app_temp_file_{time.time()}.dat"
temp_file = open(filename, "w")`
            }
        ],
        correctOptionId: '44a',
        explanation: 'Always use your programming language\'s built-in library for creating temporary files (like `tempfile` in Python or `Files.createTempFile` in Java). These libraries are designed to create files with random, unpredictable names in a secure manner.'
    },
    {
        id: '45',
        title: 'Missing Braces in `if` Statement',
        category: 'CSRF',
        difficulty: 'Beginner',
        xp: 30,
        description: 'In languages like C++, Java, and JavaScript, an `if` statement without curly braces `{}` only controls the single next statement. This can lead to critical security checks being bypassed.',
        vulnerableCode: `// C++
if (user->is_authorized())
    check_permissions(); // only this line is conditional
    execute_critical_action(); // this line ALWAYS executes!`,
        language: 'cpp',
        options: [
            {
                id: '45a',
                code: `// Indentation fixes the problem.`
            },
            {
                id: '45b',
                code: `// Always use curly braces for 'if' statements, even for a single line.
if (user->is_authorized()) {
    check_permissions();
    execute_critical_action();
}`
            }
        ],
        correctOptionId: '45b',
        explanation: 'This is a common source of bugs and vulnerabilities. Best practice is to always use curly braces `{}` for the body of `if`, `else`, `for`, and `while` statements to avoid ambiguity.'
    },
    {
        id: '46',
        title: 'Regex Injection',
        category: 'Command Injection',
        difficulty: 'Advanced',
        xp: 85,
        description: 'User input is used directly to construct a regular expression. An attacker can provide input that changes the logic of the regex, potentially causing a ReDoS attack or bypassing validation.',
        vulnerableCode: `// JavaScript
let userPattern = new URLSearchParams(window.location.search).get("pattern");
// Unsafe: userPattern can contain special regex characters
let regex = new RegExp("^" + userPattern + "$");`,
        language: 'javascript',
        options: [
            {
                id: '46a',
                code: `// Escape special regex characters from the user input before creating the RegExp.
function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\\]\\/]/g, '\\\\$&');
}
let regex = new RegExp("^" + escapeRegex(userPattern) + "$");`
            },
            {
                id: '46b',
                code: `// This is not a vulnerability.`
            }
        ],
        correctOptionId: '46a',
        explanation: 'When building a regular expression from user input, you must escape any special regex characters within that input to ensure they are treated as literal characters and not as part of the regex logic.'
    },
    {
        id: '47',
        title: 'XML Bomb (Billion Laughs Attack)',
        category: 'IDOR',
        difficulty: 'Advanced',
        xp: 80,
        description: 'An XML parser that allows entity expansion can be forced to consume huge amounts of memory and CPU by parsing a small, malicious XML file that defines nested entities.',
        vulnerableCode: `<!-- Malicious XML file -->
<?xml version="1.0"?>
<!DOCTYPE lolz [
  <!ENTITY lol "lol">
  <!ENTITY lol2 "&lol;&lol;&lol;...">
  <!ENTITY lol3 "&lol2;&lol2;&lol2;...">
  ...
]>
<lolz>&lol9;</lolz>`,
        language: 'java',
        options: [
            {
                id: '47a',
                code: `// The fix is the same as for XXE: disable DTDs.
DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
factory.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);`
            },
            {
                id: '47b',
                code: `// Limit the size of the incoming XML file.`
            }
        ],
        correctOptionId: '47a',
        explanation: 'Disabling Document Type Definitions (DTDs) is the most effective way to prevent both XXE and XML Bomb attacks, as both rely on features defined within the `DOCTYPE` block.'
    },
    {
        id: '48',
        title: 'Integer Overflow',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'An arithmetic operation results in a number that is too large for its data type, causing it to "wrap around" to a small or negative number. This can bypass security checks.',
        vulnerableCode: `// Java
public void purchase(int quantity, int price) {
    int totalCost = quantity * price; // This can overflow
    if (user.getBalance() >= totalCost) {
        // process payment
    }
}`,
        language: 'java',
        options: [
            {
                id: '48a',
                code: `// Use a larger data type, like 'long', for the calculation.
long totalCost = (long) quantity * price;`
            },
            {
                id: '48b',
                code: `// Check for overflow before multiplication
if (price > 0 && quantity > Integer.MAX_VALUE / price) {
    // handle overflow error
} else {
    int totalCost = quantity * price;
}`
            },
            {
                id: '48c',
                code: `// Both A and B are valid solutions. Using a larger data type is often simpler, while manual checks provide more control.`
            }
        ],
        correctOptionId: '48c',
        explanation: 'To prevent integer overflow, you must either use a data type large enough to hold the result (like `long` or `BigInteger`) or perform checks before the operation to see if an overflow would occur.'
    },
    {
        id: '49',
        title: 'Deserialization of JSON with `__proto__`',
        category: 'IDOR',
        difficulty: 'Advanced',
        xp: 90,
        description: 'Even when using JSON, an attacker can craft a payload with a `__proto__` key to attempt a Prototype Pollution attack in JavaScript.',
        vulnerableCode: `// JavaScript (Node.js)
let user_data = JSON.parse('{"__proto__": {"isAdmin": true}}');
let new_obj = {};
Object.assign(new_obj, user_data);
// Now, {}.isAdmin might be true!`,
        language: 'javascript',
        options: [
            {
                id: '49a',
                code: `// Use Object.create(null) to create objects without a prototype.
let new_obj = Object.create(null);`
            },
            {
                id: '49b',
                code: `// Before merging, explicitly delete any potentially harmful keys.
delete user_data.__proto__;`
            },
            {
                id: '49c',
                code: `// Both A and B are good defenses. Modern libraries also have protections against this.`
            }
        ],
        correctOptionId: '49c',
        explanation: 'Prototype Pollution is a serious risk in JavaScript. Key defenses include creating prototype-less objects for data, freezing `Object.prototype`, and carefully validating keys before merging objects.'
    },
    {
        id: '50',
        title: 'Weak Session ID',
        category: 'CSRF',
        difficulty: 'Intermediate',
        xp: 65,
        description: 'The application generates session IDs using a simple, predictable pattern (e.g., just incrementing a user ID), allowing an attacker to guess other users\' session IDs.',
        vulnerableCode: `// Pseudocode
function createSession(userId) {
    // Predictable session ID
    const sessionId = "session-" + userId; 
    setCookie("SESSIONID", sessionId);
}`,
        language: 'javascript',
        options: [
            {
                id: '50a',
                code: `// Use a cryptographically secure random string for the session ID.
const sessionId = crypto.randomBytes(32).toString('hex');`
            },
            {
                id: '50b',
                code: `// Base64 encode the user ID to make it look random.
const sessionId = btoa("session-" + userId);`
            }
        ],
        correctOptionId: '50a',
        explanation: 'Session IDs must be long, unpredictable, and generated by a cryptographically secure random number generator to prevent attackers from guessing them.'
    },
    {
        id: '51',
        title: 'SQL Injection with ORDER BY',
        category: 'SQL Injection',
        difficulty: 'Intermediate',
        xp: 65,
        description: 'User input is used in an `ORDER BY` clause. Since this part of the query cannot be parameterized, it requires a different approach to prevent injection.',
        vulnerableCode: `// Python
sort_column = request.args.get('sort')
# Unsafe: an attacker could inject a subquery
query = f"SELECT * FROM products ORDER BY {sort_column}"`,
        language: 'python',
        options: [
            {
                id: '51a',
                code: `// Use prepared statements (this won't work for ORDER BY)
query = "SELECT * FROM products ORDER BY ?"
# ... execute query with sort_column as parameter ...`
            },
            {
                id: '51b',
                code: `// Validate the user input against a whitelist of allowed column names.
allowed_columns = ["name", "price", "category"]
if sort_column in allowed_columns:
    query = f"SELECT * FROM products ORDER BY {sort_column}"
else:
    # Handle error or use a default sort
    query = "SELECT * FROM products ORDER BY name"`
            }
        ],
        correctOptionId: '51b',
        explanation: 'Since `ORDER BY` and other structural parts of a SQL query cannot be parameterized, the correct defense is to validate the user-provided value against a strict whitelist of allowed values before inserting it into the query string.'
    },
    {
        id: '52',
        title: 'Zip Slip Vulnerability',
        category: 'IDOR',
        difficulty: 'Advanced',
        xp: 85,
        description: 'An application extracts a user-provided zip file without validating the paths of the files inside. The zip file can contain path traversal sequences (`../`) to write files outside the intended destination directory.',
        vulnerableCode: `// Java
ZipInputStream zis = new ZipInputStream(request.getInputStream());
ZipEntry zipEntry = zis.getNextEntry();
while (zipEntry != null) {
    File newFile = new File(destinationDir, zipEntry.getName());
    // Potentially writes outside destinationDir
    FileOutputStream fos = new FileOutputStream(newFile);
    // ... write file contents ...
    zipEntry = zis.getNextEntry();
}`,
        language: 'java',
        options: [
            {
                id: '52a',
                code: `// Before writing, check if the file's canonical path starts with the destination directory's path.
File newFile = new File(destinationDir, zipEntry.getName());
String destDirPath = destinationDir.getCanonicalPath();
String newFilePath = newFile.getCanonicalPath();
if (!newFilePath.startsWith(destDirPath + File.separator)) {
    throw new IOException("Entry is outside of the target dir: " + zipEntry.getName());
}
// ... proceed to write file ...`
            },
            {
                id: '52b',
                code: `// Sanitize the entry name by removing ".."
String safeName = zipEntry.getName().replace("../", "");
File newFile = new File(destinationDir, safeName);`
            }
        ],
        correctOptionId: '52a',
        explanation: 'The most reliable way to prevent Zip Slip is to resolve the canonical path of the extracted file and verify that it still resides within the intended destination directory. Simply replacing `../` is not sufficient as attackers can use other encodings or techniques to bypass it.'
    },
    {
        id: '53',
        title: 'Authentication Bypass via SQL Injection',
        category: 'SQL Injection',
        difficulty: 'Intermediate',
        xp: 75,
        description: 'A login form is vulnerable to SQL injection, allowing an attacker to bypass authentication by providing a specially crafted username.',
        vulnerableCode: `// PHP
$username = $_POST['username'];
$password = $_POST['password'];
$sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
// If query returns a row, user is logged in.`,
        language: 'php',
        options: [
            {
                id: '53a',
                code: `// Attacker provides username: admin' -- 
// The query becomes: SELECT * FROM users WHERE username = 'admin' -- ' AND password = '...'
// The -- comments out the rest of the query.`
            },
            {
                id: '53b',
                code: `// Use prepared statements to prevent injection.
$stmt = $pdo->prepare("SELECT * FROM users WHERE username = :user AND password = :pass");
$stmt->execute(['user' => $username, 'pass' => $password]);`
            },
            {
                id: '53c',
                code: `// Both A describes the attack, and B is the correct fix.`
            }
        ],
        correctOptionId: '53c',
        explanation: 'This is a classic SQL injection example. An attacker can use a username like `admin\\\' -- ` to comment out the password check, effectively logging in as the admin user. The fix, as always, is to use parameterized queries.'
    },
    {
        id: '54',
        title: 'Using `dangerouslySetInnerHTML` in React',
        category: 'XSS',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'React\'s `dangerouslySetInnerHTML` prop is used to render raw HTML. If the content comes from a user, it creates an XSS vulnerability.',
        vulnerableCode: `// React JSX
function UserBio({ bioHtml }) {
  // Unsafe if bioHtml is user-controlled
  return <div dangerouslySetInnerHTML={{ __html: bioHtml }} />;
}`,
        language: 'javascript',
        options: [
            {
                id: '54a',
                code: `// The name is a warning. If you trust the source, it's fine.`
            },
            {
                id: '54b',
                code: `// The HTML should be sanitized before being passed to the component.
import DOMPurify from 'dompurify';
const sanitizedBio = DOMPurify.sanitize(bioHtml);
return <div dangerouslySetInnerHTML={{ __html: sanitizedBio }} />;`
            }
        ],
        correctOptionId: '54b',
        explanation: 'React names this prop `dangerouslySetInnerHTML` for a reason. You should never pass untrusted, user-provided content to it without first cleaning it with a robust HTML sanitization library like DOMPurify.'
    },
    {
        id: '55',
        title: 'Missing `Content-Type` Header',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 50,
        description: 'An API endpoint that expects JSON does not validate the `Content-Type` header. This can lead to unexpected behavior or security issues if an attacker sends data in a different format.',
        vulnerableCode: `// JavaScript (Node.js/Express)
app.post('/api/data', (req, res) => {
  // Assumes req.body is JSON, but doesn't check
  const name = req.body.name;
  // ...
});`,
        language: 'javascript',
        options: [
            {
                id: '55a',
                code: `// Add a middleware to check the Content-Type header.
app.post('/api/data', (req, res, next) => {
  if (req.headers['content-type'] !== 'application/json') {
    return res.status(415).send('Unsupported Media Type');
  }
  next();
}, (req, res) => {
  // ...
});`
            },
            {
                id: '55b',
                code: `// Most modern frameworks handle this automatically, so it's not a concern.`
            }
        ],
        correctOptionId: '55a',
        explanation: 'For endpoints that expect a specific data format like JSON, it is a security best practice to validate the `Content-Type` header and reject any requests that do not match.'
    },
    {
        id: '56',
        title: 'Information Exposure Through Debugging Endpoint',
        category: 'IDOR',
        difficulty: 'Beginner',
        xp: 45,
        description: 'A debugging endpoint is left enabled in a production environment, exposing sensitive system information to anyone who knows the URL.',
        vulnerableCode: `// Python (Flask)
// This endpoint should not be in production
@app.route('/debug/info')
def debug_info():
    return jsonify(get_system_info())`,
        language: 'python',
        options: [
            {
                id: '56a',
                code: `// Protect the endpoint with an admin password.
@app.route('/debug/info')
@admin_required
def debug_info(): ...`
            },
            {
                id: '56b',
                code: `// Remove the endpoint entirely from the production build.
// Use build flags or environment variables to conditionally compile/enable it.
if app.config['DEBUG']:
    @app.route('/debug/info')
    def debug_info(): ...`
            },
            {
                id: '56c',
                code: `// Both are valid. B is the most common practice for disabling debug features in production.`
            }
        ],
        correctOptionId: '56c',
        explanation: 'Debugging endpoints and features should never be exposed in a production environment. The best way to manage this is to use environment variables or build flags to ensure they are completely disabled or removed from the production codebase.'
    },
    {
        id: '57',
        title: 'Use of Weak Ciphers',
        category: 'CSRF',
        difficulty: 'Advanced',
        xp: 75,
        description: 'An SSL/TLS server is configured to support old, weak cipher suites (like those using DES or RC4), making encrypted communication vulnerable to decryption.',
        vulnerableCode: `// Server Configuration (e.g., Nginx)
ssl_ciphers 'ALL:!ADH:!EXPORT:!DES:!RC4:+HIGH';`,
        language: 'javascript',
        options: [
            {
                id: '57a',
                code: `// Use a modern, recommended cipher suite configuration.
ssl_ciphers 'EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH';`
            },
            {
                id: '57b',
                code: `// The server and client will negotiate the strongest available cipher, so this is not a major risk.`
            }
        ],
        correctOptionId: '57a',
        explanation: 'Server administrators must explicitly disable weak protocols (like SSLv3, TLS 1.0/1.1) and weak cipher suites. They should configure the server to only support strong, modern ciphers to protect data in transit.'
    },
    {
        id: '58',
        title: 'Password in GET Request',
        category: 'IDOR',
        difficulty: 'Beginner',
        xp: 35,
        description: 'A login form submits the user\'s password in the query string of a GET request, which is insecure.',
        vulnerableCode: `// HTML
<form action="/login" method="GET">
  <input name="username">
  <input type="password" name="password">
  <button>Login</button>
</form>`,
        language: 'javascript',
        options: [
            {
                id: '58a',
                code: `// This is bad because passwords will be stored in server logs, browser history, and network device logs.`
            },
            {
                id: '58b',
                code: `// Change the form method to POST to send data in the request body.
<form action="/login" method="POST">
  ...
</form>`
            },
            {
                id: '58c',
                code: `// Both A describes the problem, and B is the correct fix.`
            }
        ],
        correctOptionId: '58c',
        explanation: 'Sensitive information like passwords must never be sent in the URL. Always use the POST method for login forms and other sensitive data submissions.'
    },
    {
        id: '59',
        title: 'Unvalidated File Deletion',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 65,
        description: 'An application allows deleting files based on user input, but does not properly validate the path, allowing an attacker to delete arbitrary files on the server using Path Traversal.',
        vulnerableCode: `// PHP
$file_to_delete = $_GET['filename'];
// Allows deleting files like '../../../../etc/passwd'
unlink('/var/www/uploads/' . $file_to_delete);`,
        language: 'php',
        options: [
            {
                id: '59a',
                code: `// Use a whitelist of deletable files.`
            },
            {
                id: '59b',
                code: `// Ensure the resolved file path is within the intended directory.
$base_dir = realpath('/var/www/uploads');
$file_path = realpath('/var/www/uploads/' . $file_to_delete);
if (strpos($file_path, $base_dir) === 0) {
    unlink($file_path);
}`
            },
            {
                id: '59c',
                code: `// Both are valid strategies. B is more flexible if the list of files is dynamic.`
            }
        ],
        correctOptionId: '59c',
        explanation: 'Similar to reading files, writing or deleting files based on user input is very dangerous. You must validate that the target file path is within the allowed directory to prevent an attacker from modifying or deleting important system files.'
    },
    {
        id: '60',
        title: 'Insecure Object Reference - Guessable IDs',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'The application uses simple, sequential integer IDs for resources (e.g., /users/1, /users/2). An attacker can easily guess other IDs to try and access other users\' data.',
        vulnerableCode: `// The problem is in the design, not a single code snippet.
// The application relies on IDs like 1, 2, 3... for accessing resources.`,
        language: 'javascript',
        options: [
            {
                id: '60a',
                code: `// This is not a vulnerability if authorization checks are in place.`
            },
            {
                id: '60b',
                code: `// Replace sequential integer IDs with non-guessable identifiers like UUIDs or CUIDs.
// e.g., /users/a7b2c9d8-e1f2-4c3d-8b9a-0e1f2c3d4e5f`
            },
            {
                id: '60c',
                code: `// Both are true. While strong authorization is the primary defense (see IDOR challenge), using non-guessable IDs adds an important layer of security (Defense in Depth).`
            }
        ],
        correctOptionId: '60c',
        explanation: 'Even with proper authorization checks, using guessable IDs makes your application easier to attack. A defense-in-depth approach recommends using long, random, non-sequential identifiers (like UUIDs) for resources to make enumeration much harder.'
    },
    {
        id: '61',
        title: 'SQL Injection with UNION',
        category: 'SQL Injection',
        difficulty: 'Advanced',
        xp: 85,
        description: 'An attacker uses a `UNION` statement in an SQL injection to combine results from a legitimate query with results from a different table, like the `users` table.',
        vulnerableCode: `// URL: /products?category=' UNION SELECT username, password FROM users --
// PHP Code:
$category = $_GET['category'];
$sql = "SELECT name, description FROM products WHERE category = '$category'";
// Attacker extracts usernames and passwords`,
        language: 'php',
        options: [
            {
                id: '61a',
                code: `// The number of columns in the UNION must match the original query.`
            },
            {
                id: '61b',
                code: `// The fix is always to use prepared statements.
$stmt = $pdo->prepare("SELECT name, description FROM products WHERE category = :cat");
$stmt->execute(['cat' => $category]);`
            },
            {
                id: '61c',
                code: `// Both A is a constraint of the attack, and B is the correct fix.`
            }
        ],
        correctOptionId: '61c',
        explanation: 'The `UNION` operator is a powerful tool for attackers to extract data from other tables in the database. The number and data types of the selected columns must be compatible between the original query and the injected one. Prepared statements prevent this by not allowing the query structure to be modified by user input.'
    },
    {
        id: '62',
        title: 'Reflected File Download',
        category: 'IDOR',
        difficulty: 'Advanced',
        xp: 90,
        description: 'An application reflects user input in the response of a file download. An attacker can craft a URL that, when clicked, downloads a file from the trusted domain with malicious content, tricking the user into running it.',
        vulnerableCode: `// Python (Flask)
@app.route('/export')
def export_data():
    data = request.args.get('data')
    # User input is directly put into the file response
    response = make_response(data)
    response.headers["Content-Disposition"] = "attachment; filename=export.csv"
    return response`,
        language: 'python',
        options: [
            {
                id: '62a',
                code: `// The filename should not be user-controlled, and the response should have a Content-Type that is not executable.
response.headers["Content-Type"] = "text/plain";`
            },
            {
                id: '62b',
                code: `// The application should not reflect user-controlled data directly into a file download. Data should be generated server-side.`
            }
        ],
        correctOptionId: '62b',
        explanation: 'This is a social engineering attack. The application should never generate a file download whose content is directly and fully controlled by a request parameter. Any exported data should be generated based on server-side state, not user input.'
    },
    {
        id: '63',
        title: 'Insecure `eval()` with JSON',
        category: 'Command Injection',
        difficulty: 'Intermediate',
        xp: 65,
        description: 'Before `JSON.parse` was standard, developers sometimes used `eval()` to parse JSON strings. This is extremely dangerous as it will execute any JavaScript code, not just parse data.',
        vulnerableCode: `// Old JavaScript code
var jsonString = '{"name":"John", "age":30}'; // imagine this comes from a server
var user = eval('(' + jsonString + ')');`,
        language: 'javascript',
        options: [
            {
                id: '63a',
                code: `// Use the built-in, safe JSON parser.
var user = JSON.parse(jsonString);`
            },
            {
                id: '63b',
                code: `// This is safe because parentheses are used.`
            }
        ],
        correctOptionId: '63a',
        explanation: 'Using `eval()` to parse JSON is a major security vulnerability. Always use `JSON.parse()`, which is specifically designed for this purpose and will not execute code.'
    },
    {
        id: '64',
        title: 'Missing `autocomplete="new-password"`',
        category: 'IDOR',
        difficulty: 'Beginner',
        xp: 40,
        description: 'On password change and registration forms, the browser\'s autocomplete feature might suggest and save the user\'s current password, which is not desired.',
        vulnerableCode: `<form action="/register">
  <label>Password:</label>
  <input type="password" name="password">
  <label>Confirm Password:</label>
  <input type="password" name="password_confirm">
</form>`,
        language: 'javascript',
        options: [
            {
                id: '64a',
                code: `<input type="password" name="password" autocomplete="off">`
            },
            {
                id: '64b',
                code: `// Use "new-password" to hint to browsers that this is a field for setting a new password.
<input type="password" name="password" autocomplete="new-password">`
            }
        ],
        correctOptionId: '64b',
        explanation: 'To prevent browsers from autofilling a user\'s current password into a "new password" or "confirm password" field, set `autocomplete="new-password"` on those input fields.'
    },
    {
        id: '65',
        title: 'PHP Type Juggling with `in_array`',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'The `in_array` function in PHP uses loose comparison (`==`) by default. If the "needle" is a string and the "haystack" contains numbers, it can lead to unexpected true results.',
        vulnerableCode: `// PHP
$allowed_ids = [1, 2, 3];
$user_id = "1-malicious"; // User provides this
if (in_array($user_id, $allowed_ids)) {
    // Access granted because '1-malicious' == 1 is true in PHP
}`,
        language: 'php',
        options: [
            {
                id: '65a',
                code: `// Use strict comparison by passing 'true' as the third argument.
if (in_array($user_id, $allowed_ids, true)) {
    // Access is correctly denied
}`
            },
            {
                id: '65b',
                code: `// Cast the user input to an integer first.
if (in_array((int)$user_id, $allowed_ids)) { ... }`
            }
        ],
        correctOptionId: '65a',
        explanation: 'When using `in_array` for security checks, always set the third parameter to `true` to enforce strict type checking and prevent vulnerabilities caused by PHP\'s type juggling.'
    }
];

// for (let i = 21; i <= 70; i++) {
//   securityFortressChallenges.push({
//     id: `${i}`,
//     title: `Placeholder Challenge ${i}`,
//     category: 'XSS',
//     difficulty: 'Beginner',
//     xp: 30,
//     description: 'This is a placeholder description for the challenge.',
//     vulnerableCode: `// Placeholder vulnerable code for challenge ${i}`,
//     language: 'javascript',
//     options: [
//       { id: `${i}a`, code: `// Option A for challenge ${i}` },
//       { id: `${i}b`, code: `// Correct option B for challenge ${i}` },
//     ],
//     correctOptionId: `${i}b`,
//     explanation: `This is the placeholder explanation for why option B is correct for challenge ${i}.`,
//   });
// }
