'use client';
import NavBar from "@/components/NavBar";
import Link from 'next/link';
import dynamic from "next/dynamic";
import React, { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import type { PDFDocumentProxy } from 'pdfjs-dist';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

export default function Resume() {
  return (
    <>
      <main className="flex flex-col h-screen">
        <NavBar />
        <div className="flex flex-col h-full ml-10">
          <div className="flex w-screen">
            <p className="text-left text-5xl mt-10">Resume</p>
          </div>
          <div className="flex w-screen flex-row h-full mt-10">
            <div className="w-1/2 justify-center items-center flex">
              <Document file='SWE_Resume_Alex_Wong.pdf' className="max-w-fit"
                onLoadError={(e) => console.log(e)}>
                <Page pageNumber={1} />
              </Document>
            </div>
            <div className="w-1/2 justify-center items-center flex">
              <Link href="https://drive.google.com/file/d/1U0gREIClQzks2gcbAwI8__d5PX7_kVCm/view?usp=sharing"
                className="bg-slate-700 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded-full">
                Download my resume here
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
