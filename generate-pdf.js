const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
const PDFMerger = require("pdf-merger-js");

(async () => {
  const pages = [
    "https://docs.apiculus.com/docs/intro",
    "https://docs.apiculus.com/docs/LoggingIn",
    "https://docs.apiculus.com/docs/ResettingPassword",
    "https://docs.apiculus.com/docs/category/introduction",
    "https://docs.apiculus.com/docs/Introduction/BuildingBlocks",
    "https://docs.apiculus.com/docs/Introduction/BillingConcepts",
    "https://docs.apiculus.com/docs/Introduction/SupportedPaymentGateways",
    "https://docs.apiculus.com/docs/Introduction/SupportedSMSGateways",
    "https://docs.apiculus.com/docs/Introduction/AccessCentral"
  ];

  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true
  });

  const merger = new PDFMerger();

  for (const url of pages) {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle0" });

    // Remove links (convert to plain text)
    await page.evaluate(() => {
      document.querySelectorAll("a").forEach((a) => {
        const span = document.createElement("span");
        span.textContent = a.textContent;
        a.replaceWith(span);
      });
    });

    const pdfPath = path.join(__dirname, `temp-${url.replace(/\W+/g, "_")}.pdf`);
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

  // Clean up temporary PDFs
  fs.readdirSync(__dirname).forEach(file => {
    if (file.startsWith("temp-") && file.endsWith(".pdf")) {
      fs.unlinkSync(path.join(__dirname, file));
    }
  });

  console.log("✅ PDF generated: final-help-docs.pdf");
})();
