import React, { useEffect, useRef, useState } from "react";
import { useThree } from "@react-three/fiber";
import { Vector3 } from "three";

export default function PlantMarker({ position, label, onClick }) {
  const { camera, gl } = useThree();
  const [screenPos, setScreenPos] = useState({ x: -9999, y: -9999, visible: false });

  useEffect(() => {
    const v = new Vector3(...position);
    const update = () => {
      const width = gl.domElement.clientWidth;
      const height = gl.domElement.clientHeight;
      const proj = v.clone().project(camera);
      const x = (proj.x + 1) / 2 * width;
      const y = (-proj.y + 1) / 2 * height;
      const visible = proj.z < 1; // roughly in front
      setScreenPos({ x, y, visible });
    };
    update();
    // also update on resize / frame
    window.addEventListener("resize", update);
    const id = gl.setAnimationLoop(() => update());
    return () => {
      window.removeEventListener("resize", update);
      gl.setAnimationLoop(null);
    };
  }, [position, camera, gl]);

  if (!screenPos.visible) return null;

  return (
    <div className="marker" style={{ left: screenPos.x + "px", top: screenPos.y + "px" }}>
      <div className="pin" onClick={onClick} title={label}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C8 2 5 5 5 9c0 7 7 12 7 12s7-5 7-12c0-4-3-7-7-7z" stroke="#1f8a4d" strokeWidth="1.2" fill="#fff"/>
          <circle cx="12" cy="9" r="2.2" fill="#1f8a4d"/>
        </svg>
      </div>
      <div style={{ background: "var(--panel-bg)", padding: "6px 10px", borderRadius: 12, marginTop: 8 }}>{label}</div>
    </div>
  );
}
