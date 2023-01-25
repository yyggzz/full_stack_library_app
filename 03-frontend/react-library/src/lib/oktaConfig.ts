export const oktaConfig = {
  clientId: "0oa83hq266WY2DB9i5d7",
  issuer: "https://dev-51872630.okta.com/oauth2/default",
  redirectUri: "http://localhost:3000/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
