import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import PDFMerger from 'pdf-merger-js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

(async () => {
  const baseUrl = "https://docs.apiculus.com"; // Base URL
  const pages = [
    { route: "/docs/intro", title: "Introduction" },
    { route: "/docs/LoggingIn", title: "Logging In" },
    { route: "/docs/ResettingPassword", title: "Resetting Password" },
    { route: "/docs/category/introduction", title: "Introduction Category" },
    { route: "/docs/Introduction/BuildingBlocks", title: "Building Blocks" },
    { route: "/docs/Introduction/BillingConcepts", title: "Billing Concepts" },
    { route: "/docs/Introduction/SupportedPaymentGateways", title: "Supported Payment Gateways" },
    { route: "/docs/Introduction/SupportedSMSGateways", title: "Supported SMS Gateways" },
    { route: "/docs/Introduction/AccessCentral", title: "Access Central" }
    // Add more as needed
  ];

  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', // Adjust path if needed
    headless: true
  });
  const merger = new PDFMerger();

  // Create a TOC page at the beginning of the PDF
  const tocPage = await browser.newPage();
  const tocContent = `
  <style>
    body {
      font-family: Arial, sans-serif;
    }
  </style>
  <h1 align=center>Apiculus - Help Documentation</h1>
    <h2 align=center>Table of Contents</h1>
    <ul>
      ${pages.map(page => `<li>${page.title}</li>`).join('')}
    </ul>
  `;
  await tocPage.setContent(tocContent, { waitUntil: "domcontentloaded" });
  const tocPdfPath = path.join(__dirname, 'toc-page.pdf');
  await tocPage.pdf({
    path: tocPdfPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: "20mm",
      bottom: "20mm",
      left: "15mm",
      right: "15mm",
    }
  });
  await tocPage.close();

  // Add TOC page first
  await merger.add(tocPdfPath);

  // Now process each page
  for (const { route, title } of pages) {
    const url = `${baseUrl}${route}`; // Correct concatenation
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle0" });

    // 🧹 Remove links, hide print button, hide breadcrumbs, and hide "Skip to main content" text
    await page.evaluate(() => {
      // Remove links
      document.querySelectorAll("a").forEach((a) => {
        const span = document.createElement("span");
        span.textContent = a.textContent;
        a.replaceWith(span);
      });

      // Hide the print button using CSS
      const style = document.createElement('style');
      style.textContent = `
        .printButton_LMtU {
          display: none !important;
        }

        /* Hide breadcrumbs */
        .breadcrumbs {
          display: none !important;
        }

        /* Hide "Skip to main content" link (updated selector based on your input) */
        div[role="region"][aria-label="Skip to main content"], 
        a.skipToContent_fXgn {
          display: none !important;
        }
      `;
      document.head.appendChild(style);
    });

    const pdfPath = path.join(__dirname, `temp-${route.replace(/\W+/g, "_")}.pdf`);
    await page.pdf({
      path: pdfPath,
      format: "A4",
      printBackground: true,
      margin: {
        top: "20mm",
        bottom: "20mm",
        left: "15mm",
        right: "15mm",
      },
    });

    merger.add(pdfPath);
    await page.close();
  }

  await merger.save("final-help-docs.pdf");
  await browser.close();

  // Clean up temp files
  fs.readdirSync(__dirname).forEach(file => {
    if (file.startsWith("temp-") && file.endsWith(".pdf")) {
      fs.unlinkSync(path.join(__dirname, file));
    }
    if (file === 'toc-page.pdf') {
      fs.unlinkSync(path.join(__dirname, file));
    }
  });

  console.log("✅ PDF generated with Table of Contents at the beginning: final-help-docs.pdf");
})();
