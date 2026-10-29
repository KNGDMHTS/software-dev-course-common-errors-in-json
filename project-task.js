/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

const validBookingJSON = `
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15", 
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson", 
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null, 
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"] 
  }
}
`;

//Fixes
//"CheckInDate had a missing comma, JSON couldn't tell that was the end of an element. Added comma to fix.
//Alice Johnson's "Name" key was missing double quotes, JSON expects all keys to be double quoted. Added to fix.
//Bob Smith's "Age" was undefined, a value JSON does not recognize. Changed to "Null".
//"Amenities had a trailing comma, JSON doesn't expect extra commas. Removed to fix.

// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?
*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?
    Reading the JSON closely and remembering the rules of JSON.

2️⃣ How did you confirm that your corrected JSON file was valid?
    Ran the JSON through the linter.

3️⃣ Which errors were the most difficult to spot? Why?
    CheckInDate's missing comma was easy to gloss over because of the line break, easy to miss it at the end of a line.

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)
    Start by running the JSON structure through verification, or use VS to highlight code.
   
*/
