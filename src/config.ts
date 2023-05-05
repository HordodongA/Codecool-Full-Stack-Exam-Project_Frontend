// Google login URL
const url = "https://accounts.google.com/o/oauth2/v2/auth"
const client_id = "231875441502-e9o5b1ivucareb2r4bplgqpf7326cpe7.apps.googleusercontent.com"
const redirect_URI = 'http://localhost:5173/callback'
const scope = 'profile%20email%20openid'
const response_type = 'code'

export const fullUrl = `${url}?client_id=${client_id}&redirect_uri=${redirect_URI}&scope=${scope}&response_type=${response_type}&prompt=consent%20select_account`

// Landlord backend server URL
export const landlordBackendUrl = "http://localhost:3003"

// OpenApi (Swagger) 3.0 documentation URL
export const landlordApiDocsUrl = "http://localhost:3003/api/docs"

// Backend readme.md GitHub URL
export const landlordBackendReadmeUrl = "https://github.com/HordodongA/Codecool-Full-Stack-Exam-Project_Backend/blob/main/readme.md"
