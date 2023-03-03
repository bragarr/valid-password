
# Valid password

Given a continuous word, and a set of rules, API checks if the password is valid based on the required rules.

Possible rules:

|x| => Variable defined to represent the value that a specific rule should attend

* minSize: It has at least |x| characters;

* minUppercase: It has at least |x| uppercase characters;

* minLowercase: It has at least |x| lowercase characters;

* minDigit: It has at least |x| digits (0-9);

* minSpecialChars: It has at least |x| special characters (Special characters are the
characters from the following string: "!@#$%^&*()-+\/{}[ ]" );

* noRepeted: have no characters repeated in sequence (i.e. "aab" violates this
condition, but "tab" does not);


## Run Locally

Clone the project

```bash
  git clone https://github.com/bragarr/valid-password
```

Go to the project directory

```bash
  cd valid-password
```

Install dependencies

```bash
  npm install or yarn add
```

Start the server

```bash
  npm start or yarn start
```


## Running Tests

To run tests, run the following command

```bash
  npm test or yarn test
```


## Usage/Examples

URL: http://localhost:3000/verify

Method: POST
```javascript
{
  "password": "TesteSenhaForte!123&",
  "rules": [
    {"rule": "minSize","value": 8},
    {"rule": "minSpecialChars","value": 2},
    {"rule": "noRepeted","value": 0},
    {"rule": "minDigit","value": 4}
  ]
}
```
if all rules are fulfilled the response is following JSON format, with keys "verify"(returning true) and "noMatch" (returning empty array)

```javascript
{
  "verify": true,
  "noMatch": []
}

```

Otherwise the response is following JSON format, with keys "verify"(returning false) and "noMatch" (returning an array with the rules that were not fulfilled)

```javascript
{
  "verify": false,
  "noMatch": ["minDigit"]
}

```


## Tech Stack

**Server:** Node, Express, Nodemon

