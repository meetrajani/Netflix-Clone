export async function signup(req, res) {
  try {
    const { email, password, username } = req.body;
  } catch (error) {}
}

export async function login(req, res) {
  res.send("Signup route");
}

export async function logout(req, res) {
  res.send("Signup route");
}
