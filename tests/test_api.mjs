// tests/test_api.mjs
import fs from "fs/promises";
import path from "path";

const createdRecords = [];

async function runTests() {
  console.log("=== RUNNING GLORIOUS ACADEMY TEST SUITE ===");

  const baseUrl = "http://localhost:3000";

  // Test 1: Healthcheck / Home page renders
  console.log("\n[Test 1] Testing Homepage rendering...");
  const homeRes = await fetch(`${baseUrl}/`);
  if (homeRes.status === 200) {
    console.log("✓ Homepage returned HTTP 200 OK");
  } else {
    throw new Error(`Homepage returned status ${homeRes.status}`);
  }

  // Test 2: Valid Admissions Enquiry Submission
  console.log("\n[Test 2] Submitting valid admissions enquiry...");
  const validEnquiry = {
    studentName: "Aditya Deshmukh",
    mobileNumber: "+91 9876543210",
    email: "aditya@example.com",
    preferredCourse: "JEE (Main & Advanced) Preparation",
    preferredCentre: "Warora Naka, Chandrapur",
    currentClass: "Class 10 to 11 Moving",
    message: "Interested in the 2-Year Integrated Classroom Program.",
    consentContact: true,
    consentPrivacy: true,
  };

  const enqRes = await fetch(`${baseUrl}/api/enquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(validEnquiry),
  });

  const enqData = await enqRes.json();
  if (enqData.referenceId) createdRecords.push(["enquiries.json", enqData.referenceId]);
  if (enqRes.status === 201 && enqData.success && enqData.referenceId.startsWith("GA-")) {
    console.log(`✓ Admissions enquiry saved successfully. Generated Reference ID: ${enqData.referenceId}`);
  } else {
    throw new Error(`Admissions enquiry failed: ${JSON.stringify(enqData)}`);
  }

  // Test 3: Durable file storage check
  console.log("\n[Test 3] Verifying durable storage file in data/enquiries.json...");
  const enquiriesFilePath = path.join(process.cwd(), "data", "enquiries.json");
  const storedData = JSON.parse(await fs.readFile(enquiriesFilePath, "utf-8"));
  const found = storedData.find((r) => r.referenceId === enqData.referenceId);
  if (found && found.studentName === "Aditya Deshmukh") {
    console.log("✓ Record verified in persistent JSON storage file.");
  } else {
    throw new Error("Record was not persisted in data/enquiries.json");
  }

  // Test 4: Spam Honeypot Detection
  console.log("\n[Test 4] Submitting spam request with honeypot filled...");
  const spamEnquiry = {
    studentName: "Bot Spammer",
    mobileNumber: "9999999999",
    preferredCourse: "NEET",
    consentContact: true,
    consentPrivacy: true,
    website_hp: "I am a bot",
  };

  const spamRes = await fetch(`${baseUrl}/api/enquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(spamEnquiry),
  });

  if (spamRes.status === 400) {
    console.log("✓ Spam detected and rejected with HTTP 400");
  } else {
    throw new Error(`Expected 400 for bot submission, received: ${spamRes.status}`);
  }

  // Test 5: Validation Failure on Invalid Mobile
  console.log("\n[Test 5] Submitting invalid mobile number...");
  const invalidMobileEnquiry = {
    studentName: "Test Student",
    mobileNumber: "12345",
    preferredCourse: "NEET",
    consentContact: true,
    consentPrivacy: true,
  };

  const invalidRes = await fetch(`${baseUrl}/api/enquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(invalidMobileEnquiry),
  });

  if (invalidRes.status === 422) {
    console.log("✓ Invalid phone rejected with HTTP 422 Validation Error");
  } else {
    throw new Error(`Expected 422 for invalid phone, received: ${invalidRes.status}`);
  }

  // Test 6: General Contact Submission
  console.log("\n[Test 6] Submitting contact message...");
  const contactSubmission = {
    name: "Sunita Kulkarni",
    phone: "9822334455",
    email: "sunita@example.com",
    subject: "Class 10 State Board Syllabus",
    message: "Could you please share details on weekend batch options?",
    consentPrivacy: true,
  };

  const contactRes = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contactSubmission),
  });

  const contactData = await contactRes.json();
  if (contactData.referenceId) createdRecords.push(["contacts.json", contactData.referenceId]);
  if (contactRes.status === 201 && contactData.success && contactData.referenceId.startsWith("GAC-")) {
    console.log(`✓ Contact message saved with Reference ID: ${contactData.referenceId}`);
  } else {
    throw new Error(`Contact submission failed: ${JSON.stringify(contactData)}`);
  }

  // Test 7: GET request disallowed on enquiry API (privacy protection)
  console.log("\n[Test 7] Checking enquiry privacy protection (disallowed GET)...");
  const getEnqRes = await fetch(`${baseUrl}/api/enquiries`);
  if (getEnqRes.status === 405) {
    console.log("✓ Enquiry listing disallowed publicly with HTTP 405 Method Not Allowed");
  } else {
    throw new Error(`Expected 405 for GET /api/enquiries, received ${getEnqRes.status}`);
  }

  console.log("\n============================================");
  console.log("ALL 7 SYSTEM TESTS PASSED SUCCESSFULLY! ✓✓✓");
  console.log("============================================");
}

try {
  await runTests();
} catch (err) {
  console.error("Test failed:", err);
  process.exitCode = 1;
} finally {
  // Remove only records created by this run, preserving existing submissions.
  for (const [filename, referenceId] of createdRecords) {
    const filepath = path.join(process.cwd(), "data", filename);
    const records = JSON.parse(await fs.readFile(filepath, "utf-8"));
    await fs.writeFile(filepath, JSON.stringify(records.filter(record => record.referenceId !== referenceId), null, 2));
  }
}
