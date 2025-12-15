export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0f0f0f, #1c1c1c)",
        color: "white",
        fontFamily: "sans-serif",
        direction: "rtl",
        textAlign: "center",
        padding: "20px"
      }}
    >
      <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
        ملوویکس موشن
      </h1>

      <p style={{ fontSize: "20px", opacity: 0.8, marginBottom: "40px" }}>
        تبدیل عکس به ویدیو با هوش مصنوعی – نسخه آزمایشی
      </p>

      <button
        style={{
          padding: "14px 32px",
          fontSize: "18px",
          borderRadius: "12px",
          border: "none",
          cursor: "pointer",
          background: "#ff006e",
          color: "white",
          transition: "0.3s"
        }}
      >
        آپلود تصویر
      </button>
    </main>
  );
          }
