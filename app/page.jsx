export default function Home() {
  const classes = [
    "고1 A반",
    "고1 B반",
    "고2 A반",
    "고3 실전반"
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0a0a",
        color: "white",
        display: "flex",
        fontFamily: "Arial, sans-serif"
      }}
    >
      {/* 사이드바 */}
      <div
        style={{
          width: "280px",
          backgroundColor: "#111",
          padding: "30px",
          borderRight: "1px solid #333"
        }}
      >
        <h1 style={{ color: "#d4af37", fontSize: "28px" }}>
          MATH ADMIN
        </h1>
        <p style={{ color: "#999", marginBottom: "40px" }}>
          민경우의 관리 시스템
        </p>

        {[
          "학생관리",
          "문자관리",
          "시험관리",
          "달력관리",
          "설정"
        ].map((menu, index) => (
          <div
            key={index}
            style={{
              padding: "14px",
              marginBottom: "12px",
              borderRadius: "12px",
              backgroundColor: "#1a1a1a",
              cursor: "pointer"
            }}
          >
            {menu}
          </div>
        ))}
      </div>

      {/* 메인 */}
      <div style={{ flex: 1, padding: "40px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>
          학생 관리
        </h2>
        <p style={{ color: "#aaa", marginBottom: "30px" }}>
          반별 학생 및 출석 현황 관리
        </p>

        {/* 통계 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            marginBottom: "40px"
          }}
        >
          {[
            ["총 학생 수", "128명"],
            ["오늘 결석", "7명"],
            ["활성 반", "12개"]
          ].map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#151515",
                padding: "25px",
                borderRadius: "16px",
                border: "1px solid #333"
              }}
            >
              <p style={{ color: "#999" }}>{item[0]}</p>
              <h3 style={{ fontSize: "28px", marginTop: "10px" }}>
                {item[1]}
              </h3>
            </div>
          ))}
        </div>

        {/* 반 목록 */}
        <h3 style={{ marginBottom: "20px", fontSize: "24px" }}>
          반 목록
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px"
          }}
        >
          {classes.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#151515",
                padding: "24px",
                borderRadius: "16px",
                border: "1px solid #333",
                cursor: "pointer"
              }}
            >
              <h4 style={{ fontSize: "20px" }}>{item}</h4>
              <p style={{ color: "#999", marginTop: "8px" }}>
                학생 목록 보기
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
