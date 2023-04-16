export async function verifyAuth(token: string, host: string) {
      const response = await fetch(`http://${host}/api/verify-client`, {
        method: "POST",
        body: JSON.stringify({ token }),
      });
      const decodedUser = await response.json();
  
      return decodedUser;
  }
  