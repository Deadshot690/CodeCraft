

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
        category: 'SQL Injection',
        difficulty: 'Advanced',
        xp: 80,
        description: 'User-provided filename is used directly in a system command, which could allow an attacker to execute arbitrary commands.',
        vulnerableCode: `// Python
import os
def get_file_size(filename):
    os.system("ls -l " + filename)
`,
        language: 'python',
        options: [
            { id: '5a', code: `def get_file_size(filename):
    # Use built-in libraries that don't invoke a shell
    return os.path.getsize(filename)` },
            { id: '5b', code: `def get_file_size(filename):
    # Sanitize the input by removing special characters
    safe_filename = filename.replace(";", "").replace("&", "")
    os.system("ls -l " + safe_filename)` },
            { id: '5c', code: `def get_file_size(filename):
    # Use command parameters safely
    import subprocess
    subprocess.run(["ls", "-l", filename])` }
        ],
        correctOptionId: '5c',
        explanation: 'Using `subprocess.run` (or similar functions in other languages) with an array of arguments is the safest way to call external commands. This avoids shell interpretation of the input, preventing an attacker from injecting additional commands.',
    },
    {
        id: '6',
        title: 'Cross-Site Request Forgery (CSRF)',
        category: 'CSRF',
        difficulty: 'Advanced',
        xp: 75,
        description: 'A web application accepts a state-changing request (e.g., changing a user\'s email) without verifying that the request was intentionally sent by the user.',
        vulnerableCode: `// JavaScript (Node.js/Express)
app.post('/update-email', (req, res) => {
  // Assumes user is logged in via session cookie
  const newEmail = req.body.email;
  req.user.email = newEmail;
  db.users.save(req.user);
  res.send('Email updated!');
});`,
        language: 'javascript',
        options: [
            { id: '6a', code: `// Check the Referer header to ensure the request came from your own site.
if (req.headers.referer.includes('yourdomain.com')) {
    // ... process request
}` },
            { id: '6b', code: `// Implement an Anti-CSRF Token
// 1. On page load, generate a unique, secret token and embed it in the form.
// 2. On submission, verify that the token from the form matches the one stored in the user's session.
if (req.body.csrf_token === req.session.csrf_token) {
    // ... process request
}` },
            { id: '6c', code: `// Only allow POST requests for state changes.
// The current code already does this, so it is secure.` }
        ],
        correctOptionId: '6b',
        explanation: 'The most robust defense against CSRF is the Synchronizer Token Pattern. A unique, unpredictable token is required for each state-changing request, which an attacker cannot guess.',
    },
    {
        id: '7',
        title: 'XML External Entity (XXE) Injection',
        category: 'SQL Injection',
        difficulty: 'Advanced',
        xp: 85,
        description: 'An XML parser is configured to process external entities, which can be exploited to read local files or perform network requests.',
        vulnerableCode: `// Java
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
// ...
DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
DocumentBuilder builder = factory.newDocumentBuilder();
Document doc = builder.parse(new InputSource(new StringReader(xmlInput)));`,
        language: 'java',
        options: [
            { id: '7a', code: `// Disable external entity processing
DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
factory.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);
factory.setFeature("http://xml.org/sax/features/external-general-entities", false);
factory.setFeature("http://xml.org/sax/features/external-parameter-entities", false);` },
            { id: '7b', code: `// Sanitize the XML input string before parsing
xmlInput = xmlInput.replace("!ENTITY", "");` },
            { id: '7c', code: `// Use a modern XML parser, which are secure by default.` }
        ],
        correctOptionId: '7a',
        explanation: 'The safest way to prevent XXE is to explicitly disable DTDs (Document Type Definitions) and external entity processing in the XML parser configuration.',
    },
    {
        id: '8',
        title: 'Insecure Deserialization',
        category: 'SQL Injection',
        difficulty: 'Advanced',
        xp: 90,
        description: 'User-provided data is deserialized without validation, potentially leading to remote code execution if the data contains a malicious payload.',
        vulnerableCode: `// Python (using pickle)
import pickle
import base64

def process_data(data):
    user_object = pickle.loads(base64.b64decode(data))
    # ... do something with user_object`,
        language: 'python',
        options: [
            { id: '8a', code: `// Use a safer data format like JSON for data exchange
import json
def process_data(data):
    user_dict = json.loads(data)
    # ... do something with user_dict` },
            { id: '8b', code: `// Sign the data before serialization and verify the signature before deserialization.` },
            { id: '8c', code: `// Keep the pickle library updated to the latest version.` }
        ],
        correctOptionId: '8a',
        explanation: 'Never deserialize data from untrusted sources. The safest approach is to use a simple, human-readable data format like JSON and avoid complex object serialization altogether.',
    },
    {
        id: '9',
        title: 'Path Traversal',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 65,
        description: 'An attacker uses `../` sequences to access files outside of the intended directory.',
        vulnerableCode: `// PHP
$file = $_GET['filename'];
include('/var/www/html/templates/' . $file);`,
        language: 'php',
        options: [
            { id: '9a', code: `$file = str_replace('../', '', $_GET['filename']);
include('/var/www/html/templates/' . $file);` },
            { id: '9b', code: `$file = $_GET['filename'];
$base_path = '/var/www/html/templates/';
$real_path = realpath($base_path . $file);
if (strpos($real_path, $base_path) === 0) {
    include($real_path);
}` },
            { id: '9c', code: `// Only allow alphanumeric filenames
if (ctype_alnum($file)) {
    include('/var/www/html/templates/' . $file);
}` }
        ],
        correctOptionId: '9b',
        explanation: 'The most reliable fix is to resolve the absolute path of the user-provided file (`realpath`) and then verify that this path is still within the intended base directory.',
    },
    {
        id: '10',
        title: 'Weak Password Hashing',
        category: 'CSRF',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'Passwords are hashed using an outdated and fast hashing algorithm like MD5 or SHA1, making them vulnerable to brute-force attacks.',
        vulnerableCode: `// Python
import hashlib
def hash_password(password):
    return hashlib.sha1(password.encode()).hexdigest()`,
        language: 'python',
        options: [
            { id: '10a', code: `// Use a modern, slow, and salted hashing algorithm like Argon2 or bcrypt.
import bcrypt
def hash_password(password):
    salt = bcrypt.gensalt()
    return bcrypt.hashpw(password.encode(), salt)` },
            { id: '10b', code: `// Use a stronger hash like SHA256.
import hashlib
def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()` },
            { id: '10c', code: `// Add a "pepper" (a secret key) before hashing.
def hash_password(password):
    pepper = "SECRET_KEY"
    return hashlib.sha1((password + pepper).encode()).hexdigest()` }
        ],
        correctOptionId: '10a',
        explanation: 'Modern password security requires using algorithms designed to be slow and computationally expensive, such as Argon2, scrypt, or bcrypt. These algorithms incorporate a salt automatically and make offline brute-force attacks much more difficult.',
    },
    {
        id: '11',
        title: 'Unvalidated Redirects and Forwards',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'A web application redirects to a URL specified in a query parameter without validating it, allowing attackers to redirect users to malicious sites.',
        vulnerableCode: `// JavaScript (Node.js/Express)
app.get('/redirect', (req, res) => {
  const target = req.query.url;
  res.redirect(target);
});`,
        language: 'javascript',
        options: [
            { id: '11a', code: `// Whitelist allowed redirect targets.
const allowedDomains = ['example.com', 'help.example.com'];
const targetUrl = new URL(req.query.url);
if (allowedDomains.includes(targetUrl.hostname)) {
    res.redirect(req.query.url);
}` },
            { id: '11b', code: `// Ensure the URL starts with HTTPS.
if (req.query.url.startsWith('https://')) {
    res.redirect(req.query.url);
}` },
            { id: '11c', code: `// Encode the URL before redirecting.
const target = encodeURIComponent(req.query.url);
res.redirect(target);` }
        ],
        correctOptionId: '11a',
        explanation: 'The safest approach is to maintain a whitelist of allowed URLs or domains and only redirect if the user-provided target matches an entry on the list. Relying on partial string matching (like `startsWith`) can often be bypassed.',
    },
    {
        id: '12',
        title: 'Verbose Error Messages',
        category: 'CSRF',
        difficulty: 'Beginner',
        xp: 40,
        description: 'The application reveals detailed technical information (like stack traces or database errors) to the user, which can help an attacker.',
        vulnerableCode: `// Java (Servlet)
try {
    // ... database operation fails ...
} catch (SQLException e) {
    out.println("<h1>Database Error</h1>");
    e.printStackTrace(out); // Leaks stack trace to user
}`,
        language: 'java',
        options: [
            { id: '12a', code: `// Show a generic error message and log the details on the server.
} catch (SQLException e) {
    // Log the full exception for developers
    log.error("Database error occurred", e);
    // Show a generic, safe message to the user
    out.println("<h1>Error</h1><p>An unexpected error occurred. Please try again later.</p>");
}` },
            { id: '12b', code: `// Catch the specific exception but do nothing.
} catch (SQLException e) {
    // Suppress the error
}` },
            { id: '12c', code: `// Wrap the exception in a generic one.
} catch (SQLException e) {
    throw new RuntimeException("An error occurred");
}` }
        ],
        correctOptionId: '12a',
        explanation: 'Sensitive error details should never be sent to the client. The best practice is to log the detailed error server-side for debugging and present the user with a generic, non-informative error message.',
    },
    {
        id: '13',
        title: 'DOM-based XSS',
        category: 'XSS',
        difficulty: 'Advanced',
        xp: 75,
        description: 'Client-side JavaScript reads data from a part of the DOM (e.g., `location.hash`) and writes it back into the page unsafely.',
        vulnerableCode: `// JavaScript
// URL: https://example.com#<img src=x onerror=alert(1)>
window.addEventListener('hashchange', () => {
  const content = window.location.hash.substring(1);
  document.getElementById('content').innerHTML = content;
});`,
        language: 'javascript',
        options: [
            { id: '13a', code: `// Avoid using innerHTML. Set the text content instead.
const content = window.location.hash.substring(1);
document.getElementById('content').textContent = decodeURIComponent(content);` },
            { id: '13b', code: `// Use a library to sanitize the HTML before writing it.
const content = window.location.hash.substring(1);
const sanitized = DOMPurify.sanitize(content);
document.getElementById('content').innerHTML = sanitized;` },
            { id: '13c', code: 'Both A and B are valid solutions depending on the requirements.' }
        ],
        correctOptionId: '13c',
        explanation: 'Both options are valid fixes. If the goal is to display the content as plain text, using `.textContent` (Option A) is simplest and safest. If the goal is to allow some safe HTML but block scripts, using a sanitizer library like DOMPurify (Option B) is the correct approach.',
    },
    {
        id: '14',
        title: 'Prototype Pollution',
        category: 'CSRF',
        difficulty: 'Expert',
        xp: 95,
        description: 'An attacker modifies `Object.prototype`, adding properties that then appear on all objects in the application, leading to potential denial of service or remote code execution.',
        vulnerableCode: `// JavaScript (merging objects recursively)
function merge(target, source) {
  for (let key in source) {
    if (key in source && key in target) {
      merge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
}`,
        language: 'javascript',
        options: [
            { id: '14a', code: `// Add a check to prevent modification of __proto__
for (let key in source) {
    if (key === '__proto__') {
        continue;
    }
    // ... rest of the logic
}` },
            { id: '14b', code: `// Use Object.freeze on Object.prototype at the start of the application.
Object.freeze(Object.prototype);` },
            { id: '14c', code: 'Both A and B are valid and recommended mitigation strategies.' }
        ],
        correctOptionId: '14c',
        explanation: 'Prototype Pollution is dangerous. Blacklisting keys like `__proto__` during merges helps prevent it, but freezing `Object.prototype` provides a more robust, application-wide defense against any accidental or malicious modifications.',
    },
    {
        id: '15',
        title: 'Timing Attack',
        category: 'IDOR',
        difficulty: 'Advanced',
        xp: 75,
        description: 'String comparison is not constant-time, allowing an attacker to guess a secret (like a token) character by character by measuring server response times.',
        vulnerableCode: `// Python
def check_token(user_token, secret_token):
    if len(user_token) != len(secret_token):
        return False
    for i in range(len(user_token)):
        if user_token[i] != secret_token[i]:
            return False
    return True`,
        language: 'python',
        options: [
            { id: '15a', code: `// Use a constant-time comparison function.
import hmac
def check_token(user_token, secret_token):
    return hmac.compare_digest(user_token, secret_token)` },
            { id: '15b', code: `// Hash the tokens before comparing them.
import hashlib
def check_token(user_token, secret_token):
    return hashlib.sha256(user_token).hexdigest() == hashlib.sha256(secret_token).hexdigest()` },
            { id: '15c', code: `def check_token(user_token, secret_token):
    return user_token == secret_token` }
        ],
        correctOptionId: '15a',
        explanation: 'Normal string comparison (`==`) short-circuits, returning `False` as soon as a difference is found. This timing difference can be exploited. Cryptographic libraries provide constant-time comparison functions (like `hmac.compare_digest`) that take the same amount of time regardless of where the strings differ.',
    },
    {
        id: '16',
        title: 'Insecure Randomness',
        category: 'CSRF',
        difficulty: 'Intermediate',
        xp: 55,
        description: 'A predictable random number generator is used for a security-sensitive purpose, like generating a password reset token.',
        vulnerableCode: `// JavaScript (Node.js)
function generateResetToken() {
    // Math.random() is not cryptographically secure
    return Math.floor(Math.random() * 1000000).toString();
}`,
        language: 'javascript',
        options: [
            { id: '16a', code: `// Use the built-in crypto module for generating secure random numbers.
import { randomBytes } from 'crypto';
function generateResetToken() {
    return randomBytes(16).toString('hex');
}` },
            { id: '16b', code: `// Seed the random number generator with the current time.
function generateResetToken() {
    const seed = new Date().getTime();
    return Math.floor(Math.random(seed) * 1000000).toString();
}` },
            { id: '16c', code: `// Generate a more complex token using Math.random().
function generateResetToken() {
    return Math.random().toString(36).substring(2);
}` }
        ],
        correctOptionId: '16a',
        explanation: 'For any security purpose (session IDs, tokens, etc.), you must use a cryptographically secure pseudorandom number generator (CSPRNG). Most languages provide one in their standard library (e.g., `crypto` in Node.js, `secrets` in Python).',
    },
    {
        id: '17',
        title: 'Clickjacking',
        category: 'CSRF',
        difficulty: 'Intermediate',
        xp: 50,
        description: 'A web page can be embedded in a malicious iframe, tricking a user into clicking on something they didn\'t intend to.',
        vulnerableCode: `// No specific code, this is a configuration issue.
// The web server does not set any anti-clickjacking headers.`,
        language: 'javascript',
        options: [
            { id: '17a', code: `// Set the X-Frame-Options header on the server response.
// This prevents the page from being embedded in iframes on other domains.
response.setHeader('X-Frame-Options', 'SAMEORIGIN');` },
            { id: '17b', code: `// Use JavaScript to detect if the page is in an iframe and break out.
if (window.top !== window.self) {
    window.top.location = window.self.location;
}` },
            { id: '17c', code: 'Both A and B are valid, but A is the modern and preferred method.' }
        ],
        correctOptionId: '17c',
        explanation: 'The `X-Frame-Options` HTTP header is the most effective defense against clickjacking. While the JavaScript frame-busting script (Option B) can work, it can sometimes be bypassed. Using the HTTP header is the standard and most reliable solution.',
    },
    {
        id: '18',
        title: 'Insecure File Upload',
        category: 'IDOR',
        difficulty: 'Advanced',
        xp: 80,
        description: 'A file upload endpoint does not properly validate the file type or name, allowing an attacker to upload a web shell or other malicious file.',
        vulnerableCode: `// PHP
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file);`,
        language: 'php',
        options: [
            { id: '18a', code: `// Validate file extension against a whitelist.
$allowed_types = ['jpg', 'png', 'gif'];
$ext = pathinfo($_FILES["fileToUpload"]["name"], PATHINFO_EXTENSION);
if (!in_array($ext, $allowed_types)) {
    // reject file
}` },
            { id: '18b', code: `// Generate a new, random filename for the uploaded file.
$ext = pathinfo($_FILES["fileToUpload"]["name"], PATHINFO_EXTENSION);
$new_name = bin2hex(random_bytes(16)) . '.' . $ext;
$target_file = $target_dir . $new_name;
move_uploaded_file(...)` },
            { id: '18c', code: 'Both A and B are essential parts of a secure file upload mechanism.' }
        ],
        correctOptionId: '18c',
        explanation: 'A secure file upload requires multiple layers of defense. You must validate the file type based on a strict whitelist (Option A), and you should never trust the user-provided filename. Generating a new, random filename (Option B) prevents path traversal and other attacks.',
    },
    {
        id: '19',
        title: 'Broken Authentication - Weak Password Policy',
        category: 'CSRF',
        difficulty: 'Beginner',
        xp: 45,
        description: 'The application allows users to set extremely simple and short passwords.',
        vulnerableCode: `// JavaScript
function isPasswordValid(password) {
    return password.length > 0;
}`,
        language: 'javascript',
        options: [
            { id: '19a', code: `// Enforce minimum length and complexity requirements.
function isPasswordValid(password) {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\\d/.test(password);
    return password.length >= 8 && hasUpperCase && hasLowerCase && hasNumbers;
}` },
            { id: '19b', code: `// Check the password against a dictionary of common passwords.` },
            { id: '19c', code: `// Both A and B are important for a strong password policy.
// In a real application, you'd also want to use a service like Have I Been Pwned.` }
        ],
        correctOptionId: '19c',
        explanation: 'A strong password policy is multi-faceted. It requires enforcing complexity and length rules (A) and checking against lists of known compromised or common passwords (B).',
    },
    {
        id: '20',
        title: 'Missing `HttpOnly` Cookie Flag',
        category: 'XSS',
        difficulty: 'Intermediate',
        xp: 55,
        description: 'A session cookie is set without the `HttpOnly` flag, making it accessible to client-side JavaScript and vulnerable to theft via XSS.',
        vulnerableCode: `// JavaScript (Node.js/Express)
res.cookie('sessionId', '...some-secret-value...');`,
        language: 'javascript',
        options: [
            { id: '20a', code: `// Add the HttpOnly and Secure flags to the cookie.
res.cookie('sessionId', '...some-secret-value...', {
    httpOnly: true, // Prevents JS access
    secure: true    // Ensures cookie is sent only over HTTPS
});` },
            { id: '20b', code: `// Encrypt the cookie value before sending it to the client.` },
            { id: '20c', code: `// Store the session ID in localStorage instead of a cookie.` }
        ],
        correctOptionId: '20a',
        explanation: 'The `HttpOnly` flag is a critical security measure that tells the browser to prevent client-side scripts from accessing the cookie. This makes it impossible for an XSS attack to steal the session cookie.',
    },
    {
        id: '21',
        title: 'Regular Expression Denial of Service (ReDoS)',
        category: 'IDOR',
        difficulty: 'Advanced',
        xp: 85,
        description: 'A poorly written regular expression can take an extremely long time to process certain inputs, leading to a denial of service.',
        vulnerableCode: `// JavaScript
// The regex (a+)+ is vulnerable to "catastrophic backtracking".
const regex = new RegExp('(a+)+$');
regex.test('aaaaaaaaaaaaaaaaaaaaaaaaa!'); // Malicious input`,
        language: 'javascript',
        options: [
            { id: '21a', code: `// Rewrite the regex to avoid nested quantifiers and backtracking.
const regex = new RegExp('a+$');` },
            { id: '21b', code: `// Set a timeout on the regex execution.
// (Note: JavaScript does not have a built-in regex timeout).` },
            { id: '21c', code: 'Both A and B are valid approaches, but A is the most direct fix.' }
        ],
        correctOptionId: '21a',
        explanation: 'The vulnerability comes from nested quantifiers (`(a+)+`) which create an exponential number of paths for the regex engine to try on certain inputs. Rewriting the regex to be more specific and avoid this "catastrophic backtracking" is the correct solution.',
    },
    {
        id: '22',
        title: 'Insecure Content-Type Header',
        category: 'XSS',
        difficulty: 'Intermediate',
        xp: 50,
        description: 'An API endpoint returns JSON but sets the Content-Type header to `text/html`, which could cause browsers to misinterpret the content and lead to XSS.',
        vulnerableCode: `// PHP
header('Content-Type: text/html');
echo '{"message": "<script>alert(1)</script>"}';`,
        language: 'php',
        options: [
            { id: '22a', code: `// Set the correct Content-Type for JSON responses.
header('Content-Type: application/json');
echo '{"message": "..."}';` },
            { id: '22b', code: `// Also add the 'X-Content-Type-Options: nosniff' header.
header('Content-Type: application/json');
header('X-Content-Type-Options: nosniff');
echo '{"message": "..."}';` },
            { id: '22c', code: `// Escape the HTML within the JSON string.
header('Content-Type: text/html');
echo '{"message": "&lt;script&gt;...&lt;/script&gt;"}';` }
        ],
        correctOptionId: '22b',
        explanation: 'Setting the correct `Content-Type: application/json` is crucial. Additionally, the `X-Content-Type-Options: nosniff` header prevents browsers from trying to guess the content type, adding another layer of defense against content sniffing attacks.',
    },
    {
        id: '23',
        title: 'Improper Asset Management',
        category: 'IDOR',
        difficulty: 'Beginner',
        xp: 40,
        description: 'Sensitive files, such as `.git` directories or configuration files like `.env`, are publicly accessible on the web server.',
        vulnerableCode: `// Web Server Configuration (e.g., Nginx)
server {
    listen 80;
    server_name example.com;
    root /var/www/html;
    
    # All files in the root are served by default.
    # Attacker can access http://example.com/.git/config
}`,
        language: 'javascript', // Using JS as a placeholder for config files
        options: [
            { id: '23a', code: `// Configure the web server to deny access to sensitive files and directories.
location ~ /\\.git {
    deny all;
}
location ~ /\\.env {
    deny all;
}` },
            { id: '23b', code: `// Use a robots.txt file to tell search engines not to index these files.` },
            { id: '23c', code: `// Rename the .git directory to something else.` }
        ],
        correctOptionId: '23a',
        explanation: 'The only secure way to protect sensitive files is to configure the web server to explicitly deny all requests for them. `robots.txt` only prevents well-behaved bots, not attackers, and renaming files is just security by obscurity.',
    },
    {
        id: '24',
        title: 'Missing `rel="noopener"`',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 45,
        description: 'A link with `target="_blank"` is missing `rel="noopener"`, allowing the newly opened page to potentially control the original page via the `window.opener` object.',
        vulnerableCode: `<a href="https://example.com" target="_blank">Visit Example</a>`,
        language: 'javascript', // HTML fits best here
        options: [
            { id: '24a', code: `<a href="..." target="_blank" rel="noopener noreferrer">Visit Example</a>` },
            { id: '24b', code: `// Use JavaScript to open the window instead.
window.open("https://example.com");` },
            { id: '24c', code: `// This is not a real vulnerability in modern browsers.` }
        ],
        correctOptionId: '24a',
        explanation: 'To prevent the new page from accessing `window.opener`, you must add `rel="noopener"` to any link that uses `target="_blank"`. Adding `noreferrer` is also good practice as it prevents the new page from knowing where the user came from.',
    },
    {
        id: '25',
        title: 'Cleartext Submission of Password',
        category: 'CSRF',
        difficulty: 'Beginner',
        xp: 45,
        description: 'A login form is submitted over HTTP, not HTTPS. An attacker on the same network could sniff the password.',
        vulnerableCode: `<form action="http://example.com/login" method="post">
    <input type="password" name="password">
</form>`,
        language: 'javascript',
        options: [
            { id: '25a', code: `// Use client-side JavaScript to hash the password before sending.` },
            { id: '25b', code: `// Use HTTPS for the entire site, including the form action.
<form action="https://example.com/login" method="post">` },
            { id: '25c', code: `// Use the POST method instead of GET.` }
        ],
        correctOptionId: '25b',
        explanation: 'The only way to protect data in transit is to use TLS (HTTPS). This encrypts the entire HTTP request, including headers and body, preventing eavesdropping. Client-side hashing is not a substitute for TLS.',
    },
    {
        id: '26',
        title: 'Deserialization of Untrusted Data (PHP)',
        category: 'SQL Injection',
        difficulty: 'Advanced',
        xp: 90,
        description: 'The `unserialize()` function in PHP is used on user-provided data from a cookie, which can lead to object injection and remote code execution.',
        vulnerableCode: `// PHP
$user_data = unserialize($_COOKIE['user_data']);`,
        language: 'php',
        options: [
            { id: '26a', code: `// Never unserialize untrusted data. Use JSON for data exchange.
$user_data = json_decode($_COOKIE['user_data'], true);` },
            { id: '26b', code: `// Base64 encode the data to make it safe.
$user_data = unserialize(base64_decode($_COOKIE['user_data']));` },
            { id: '26c', code: `// Check for bad characters before unserializing.
if (strpos($_COOKIE['user_data'], 'O:') === false) {
    $user_data = unserialize($_COOKIE['user_data']);
}` }
        ],
        correctOptionId: '26a',
        explanation: 'PHP object deserialization is extremely dangerous when used on untrusted input. The safest alternative is to use a simple, serialization-safe format like JSON.',
    },
    {
        id: '27',
        title: 'Open Redirect',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'An application redirects to a user-controlled URL without proper validation.',
        vulnerableCode: `// Python (Flask)
from flask import request, redirect
@app.route('/redirect')
def do_redirect():
    url = request.args.get('url')
    return redirect(url)`,
        language: 'python',
        options: [
            { id: '27a', code: `// Whitelist the allowed domains.
from urllib.parse import urlparse
def do_redirect():
    url = request.args.get('url')
    parsed_url = urlparse(url)
    if parsed_url.hostname in ['example.com', 'trusted.com']:
        return redirect(url)
    return "Invalid redirect"` },
            { id: '27b', code: `// Check if the URL starts with a slash.
def do_redirect():
    url = request.args.get('url')
    if url.startswith('/'):
        return redirect(url)
    return "Invalid redirect"` },
            { id: '27c', code: 'A and B are both good strategies that should be used together.' }
        ],
        correctOptionId: '27c',
        explanation: 'A robust defense against open redirects involves multiple checks. You should validate that the URL is on an allow-list of domains (A) OR that it is a local redirect (B). Combining these provides strong protection.',
    },
    {
        id: '28',
        title: 'Missing Content Security Policy (CSP)',
        category: 'XSS',
        difficulty: 'Advanced',
        xp: 70,
        description: 'The website does not send a Content-Security-Policy header, leaving it more vulnerable to XSS attacks by allowing scripts from any source.',
        vulnerableCode: `// This is a server configuration issue, not code in a file.
// The server sends no CSP header.`,
        language: 'javascript',
        options: [
            { id: '28a', code: `// Add a strict Content-Security-Policy header to the server response.
// This example only allows scripts from the same origin.
Content-Security-Policy: script-src 'self';` },
            { id: '28b', code: `// Set a policy that blocks all scripts.
Content-Security-Policy: script-src 'none';` },
            { id: '28c', code: `// Use a JavaScript library to manually check script tags before they load.` }
        ],
        correctOptionId: '28a',
        explanation: 'CSP is a powerful browser-level defense that gives you fine-grained control over what resources (scripts, styles, images) are allowed to load. A strict policy that whitelists trusted sources is a crucial layer of defense against XSS.',
    },
    {
        id: '29',
        title: 'Use of Hardcoded Credentials',
        category: 'CSRF',
        difficulty: 'Beginner',
        xp: 45,
        description: 'A secret key or password is hardcoded directly in the source code, making it visible to anyone who has access to the code.',
        vulnerableCode: `// Java
String dbPassword = "MySuperSecretPassword123!";
Connection conn = DriverManager.getConnection(DB_URL, "user", dbPassword);`,
        language: 'java',
        options: [
            { id: '29a', code: `// Store secrets in environment variables or a secure secret management system.
String dbPassword = System.getenv("DB_PASSWORD");
Connection conn = ...` },
            { id: '29b', code: `// Obfuscate the password in the code.
String dbPassword = new String(Base64.getDecoder().decode("TXlTdXBl..."));` },
            { id: '29c', code: `// Store the password in a separate configuration file.` }
        ],
        correctOptionId: '29a',
        explanation: 'Hardcoding secrets is a major security risk. The industry standard is to externalize configuration and secrets. They should be injected into the application at runtime via environment variables or a dedicated secrets management service (like HashiCorp Vault or AWS Secrets Manager).',
    },
    {
        id: '30',
        title: 'Broken Access Control - Missing Role Check',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'An endpoint for administrative functions checks if a user is logged in, but fails to check if they have the `admin` role.',
        vulnerableCode: `// JavaScript (Node.js/Express Middleware)
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}
app.get('/admin', ensureAuthenticated, (req, res) => { /* admin stuff */ });`,
        language: 'javascript',
        options: [
            { id: '30a', code: `// Create a separate middleware to check for the admin role.
function ensureAdmin(req, res, next) {
    if (req.user && req.user.role === 'admin') {
        return next();
    }
    res.status(403).send('Forbidden');
}
app.get('/admin', ensureAuthenticated, ensureAdmin, (req, res) => { /* ... */ });` },
            { id: '30b', code: `// Obfuscate the admin URL.
app.get('/admin-asjdfh32r9y', ensureAuthenticated, ...);` },
            { id: '30c', code: `// Add a check inside the route handler.
app.get('/admin', ensureAuthenticated, (req, res) => {
    if (req.user.role === 'admin') { /* admin stuff */ }
    else { res.status(403); }
});` }
        ],
        correctOptionId: '30a',
        explanation: 'Authentication (who you are) and authorization (what you can do) are separate concerns. Using dedicated middleware for role checks makes the authorization logic clear, reusable, and less prone to errors.',
    },
    {
        id: '31',
        title: 'Blind SQL Injection',
        category: 'SQL Injection',
        difficulty: 'Expert',
        xp: 95,
        description: 'The application does not return data from the database, but a query vulnerability can be exploited based on whether the query returns true or false (e.g., by observing a time delay).',
        vulnerableCode: `// PHP
$id = $_GET['id'];
$query = "SELECT id FROM articles WHERE id = $id AND published = 1";
$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) {
    // Show article
} else {
    // Show "not found"
}`,
        language: 'php',
        options: [
            { id: '31a', code: `// Even when not displaying data, always use parameterized queries.
$id = $_GET['id'];
$stmt = $conn->prepare("SELECT id FROM articles WHERE id = ? AND published = 1");
$stmt->bind_param("s", $id);
$stmt->execute();` },
            { id: '31b', code: `// Cast the input to an integer to prevent string manipulation.
$id = (int)$_GET['id'];
$query = "SELECT id FROM articles WHERE id = $id AND published = 1";` },
            { id: '31c', code: `// Add a sleep function to normalize response times.
sleep(1);
// ... proceed with query` }
        ],
        correctOptionId: '31a',
        explanation: 'The vulnerability is still SQL injection, even if it is "blind". The defense is the same: use parameterized queries to separate code from data. This prevents the user input from being interpreted as part of the SQL command, regardless of what the application does with the query result.',
    },
    {
        id: '32',
        title: 'XML Bomb (Billion Laughs Attack)',
        category: 'IDOR',
        difficulty: 'Advanced',
        xp: 80,
        description: 'An XML parser that expands entities can be tricked into consuming huge amounts of memory by parsing a small XML file with nested entities.',
        vulnerableCode: `<!-- A malicious XML input -->
<!DOCTYPE lolz [
  <!ENTITY lol "lol">
  <!ENTITY lol2 "&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;">
  <!ENTITY lol3 "&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;">
  ...and so on...
]>
<lolz>&lol9;</lolz>`,
        language: 'javascript', // XML
        options: [
            { id: '32a', code: `// Set limits on the XML parser for entity expansion.
// For example, in Java's DocumentBuilderFactory:
factory.setAttribute(XMLConstants.ACCESS_EXTERNAL_DTD, "");
factory.setAttribute(XMLConstants.ACCESS_EXTERNAL_SCHEMA, "");` },
            { id: '32b', code: `// Completely disable DTDs (Document Type Definitions) in the XML parser.
factory.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);` },
            { id: '32c', code: `// Limit the file size of the uploaded XML.` }
        ],
        correctOptionId: '32b',
        explanation: 'While other options can help, the most effective way to prevent entity-based attacks like the "Billion Laughs" attack is to completely disable the processing of DTDs, which is where entities are defined.',
    },
    {
        id: '33',
        title: 'Session Fixation',
        category: 'CSRF',
        difficulty: 'Advanced',
        xp: 70,
        description: 'An attacker tricks a user into using a session ID known to the attacker. After the user logs in, the attacker can use the same session ID to impersonate the user.',
        vulnerableCode: `// Web framework logic
// 1. User visits http://example.com?sessionId=ATTACKER_ID
// 2. Application uses this session ID.
// 3. User logs in.
// 4. Attacker can now use sessionId=ATTACKER_ID to access the logged-in session.`,
        language: 'javascript',
        options: [
            { id: '33a', code: `// Regenerate the session ID immediately after a successful login.
// Most modern web frameworks do this automatically.
session.regenerate();` },
            { id: '33b', code: `// Do not accept session IDs from query parameters.` },
            { id: '33c', code: 'Both A and B are crucial for preventing session fixation.' }
        ],
        correctOptionId: '33c',
        explanation: 'The primary defense is to create a completely new session ID after a privilege level change, such as logging in (A). Additionally, session IDs should never be accepted from URL parameters, only from secure cookies (B).',
    },
    {
        id: '34',
        title: 'Mass Assignment',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 65,
        description: 'A web framework allows binding HTTP request parameters directly to object properties. An attacker sends extra parameters (e.g., `isAdmin=true`) to escalate privileges.',
        vulnerableCode: `// A vulnerable controller in a framework like Ruby on Rails
def update
  @user = User.find(params[:id])
  // params[:user] could contain {'name': 'eve', 'isAdmin': 'true'}
  if @user.update(params[:user])
    # ...
  end
end`,
        language: 'python', // Ruby
        options: [
            { id: '34a', code: `// Use a "strong parameters" or "whitelist" approach to only allow specific fields to be updated from the request.
def user_params
  params.require(:user).permit(:name, :email) # but not :isAdmin
end

if @user.update(user_params) ...` },
            { id: '34b', code: `// Set sensitive properties like 'isAdmin' as read-only in the model.` },
            { id: '34c', code: 'Both A and B are effective strategies.' }
        ],
        correctOptionId: '34c',
        explanation: 'Mass assignment vulnerabilities are best solved by using an allow-list (`permit` in this Rails example) to specify exactly which attributes are updatable from user input (A). Making sensitive model attributes read-only (B) provides an additional layer of defense.',
    }
];
