"use client";
import { useEffect } from "react";

export default function PageHead({ PageMeta }) {
  useEffect(() => {
    if (PageMeta?.title) {
      document.title = PageMeta.title;
    }
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", PageMeta.description || "");
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = PageMeta.description || "";
      document.head.appendChild(newMeta);
    }
  }, [PageMeta]);

  return null;
}
