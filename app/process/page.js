"use client";

import { useState } from "react";

export default function ProcessPage() {
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("image", file);

    const genRes = await fetch("/api/generate", {
      method: "POST",
      body: formData,
    });

    const genData = await genRes.json();
    const id = genData.id;

    const checkStatus = async () => {
      const statusRes = await fetch("/api/status", {
        method: "POST",
        body: JSON.stringify({ id }),
      });

      const statusData = await statusRes.json();

      if (statusData.status === "succeeded") {
        setVideoUrl(statusData.output[0]);
        setLoading(false);
      } else {
        setTimeout(checkStatus, 3000);
      }
    };

    checkStatus();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Melovix Motion – پردازش ویدیو</h1>

      {!videoUrl && (
        <input type="file" accept="image/*" onChange={handleUpload} />
      )}

      {loading && <p>در حال ساخت ویدیو… لطفاً صبر کن</p>}

      {videoUrl && (
        <video
          src={videoUrl}
          controls
          autoPlay
          style={{ width: "100%", marginTop: 20 }}
        />
      )}
    </div>
  );
  }
