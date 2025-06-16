// const API_BASE_URL = "https://localhost:7169/api/UserAuth";

// export const registerUser = async (name: string, email: string, password: string) => {
//     const response = await fetch(`${API_BASE_URL}/Register`, { 
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ Name: name, Email: email, Password: password }), 
//     });

//     if (!response.ok) {
//         const errorText = await response.text(); // Get response details
//         throw new Error(`Registration failed: ${errorText}`);
//     }

//     return await response.json();
// };


// export const loginUser = async (email: string, password: string) => {
//     const response = await fetch(`${API_BASE_URL}/Login`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//     });

//     if (!response.ok) throw new Error("Login failed");

//     return await response.json(); // Returns { token: "..." }
// };