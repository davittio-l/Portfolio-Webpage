fetch("https://lms2rcmkpk.execute-api.us-east-2.amazonaws.com/live", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Colten Bayles",
      email: "colten@example.com",
      message: "Testing the contact form!",
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log("Success:", data))
    .catch((err) => console.error("Error:", err));
  