import { getResume } from "@/lib/resume";
export async function GET() {
  const resume = await getResume();
  return new Response(resume.markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": 'attachment; filename="Tobias-van-Dorp.md"',
    },
  });
}
