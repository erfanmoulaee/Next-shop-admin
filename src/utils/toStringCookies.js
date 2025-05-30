export async function toStringCookies(cookiesPromise) {
  const cookies = await cookiesPromise;
  let strCookie = "";
  cookies.getAll().forEach((item) => {
    strCookie += `${item?.name}=${item?.value}; `;
  });
  return strCookie;
}
