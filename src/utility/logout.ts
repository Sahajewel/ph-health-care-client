export const logout = async () => {
  await fetch(`/api/logout`, { method: "POST" });
  window.location.href = "/";
};
