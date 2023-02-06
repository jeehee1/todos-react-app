export async function getUserInfo(token) {
  const response = await fetch(
    "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyD5zLNBnsLuWNzLSZ5JCfD_tJ-Q_Q1yzII",
    {
      method: "POST",
      body: JSON.stringify({ idToken: token }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error({ errorMessage: "Authnetication filed." });
  }
  const data = await response.json();

  return data.users[0].localId;
}
