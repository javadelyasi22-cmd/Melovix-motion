"use client";

import { useSearchParams } from "next/navigation";

export default function ProcessPage() {
  const params = useSearchParams();
  const fileName = params.get("file");

  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
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
      <div>
        <h1 style={{ fontSize: "28px", opacity: 0.9 }}>
          در حال پردازش تصویر…
        </h1>
        {fileName && (
          <p style={{ marginTop: "20px", opacity: 0.7 }}>
            فایل انتخاب‌شده: {fileName}
          </p>
        )}
      </div>
    </main>
  );
}
