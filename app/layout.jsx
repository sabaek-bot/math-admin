export const metadata = {
  title: "MATH ADMIN",
  description: "민경우의 관리 시스템"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
