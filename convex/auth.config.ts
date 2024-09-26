export default {
  providers: [
    {
      // clerk JWT templates issuer 필드 값과 claims aud 값 할당
      domain: "https://relaxing-colt-54.clerk.accounts.dev",
      applicationID: "convex",
    },
  ],
};
