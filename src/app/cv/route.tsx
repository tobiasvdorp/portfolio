import { renderToBuffer } from "@react-pdf/renderer";
import { cacheLife } from "next/cache";
import { ResumePdf } from "@/components/resume/pdf";
import { getResume } from "@/lib/resume";
async function getResumePdf() {
  "use cache";
  cacheLife("max");
  const resume = await getResume();
  return new Uint8Array(await renderToBuffer(<ResumePdf resume={resume} />));
}
export async function GET() {
  const pdf = await getResumePdf();
  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Tobias-van-Dorp-CV.pdf"',
    },
  });
}
