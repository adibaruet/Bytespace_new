import { Container } from "@/components/ui/Container";

const marks = [
  <svg key="0" viewBox="0 0 24 24" className="h-6 w-6"><circle cx="12" cy="12" r="10" fill="currentColor" opacity=".25"/><path d="M2 14c4-3 6 2 10 0s6-4 10-1v9H2Z" fill="currentColor"/></svg>,
  <svg key="1" viewBox="0 0 24 24" className="h-6 w-6"><circle cx="12" cy="12" r="4" fill="currentColor"/>{Array.from({length:12}).map((_,i)=>(<rect key={i} x="11.2" y="0.5" width="1.6" height="5" rx=".8" fill="currentColor" transform={`rotate(${i*30} 12 12)`}/>))}</svg>,
  <svg key="2" viewBox="0 0 24 24" className="h-6 w-6"><circle cx="12" cy="12" r="10" fill="currentColor"/><path d="M13 5l-5 8h3l-1 6 5-8h-3Z" fill="#fff"/></svg>,
  <svg key="3" viewBox="0 0 24 24" className="h-6 w-6"><circle cx="12" cy="12" r="10" fill="currentColor"/><path d="m7 7 10 10M17 7 7 17" stroke="#fff" strokeWidth="2.4" strokeLinecap="round"/><circle cx="12" cy="12" r="2.6" fill="#fff"/></svg>,
  <svg key="4" viewBox="0 0 24 24" className="h-6 w-6"><circle cx="12" cy="12" r="10" fill="currentColor" opacity=".35"/>{Array.from({length:9}).map((_,i)=>(<line key={i} x1={3+i*2.2} y1="3" x2={3+i*2.2} y2="21" stroke="currentColor" strokeWidth=".9"/>))}</svg>,
];

/** Social-proof strip of partner marks between the hero and the course grid. */
export function LogoStrip() {
  return (
    <section className="bg-ink-50 py-10">
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 sm:justify-between">
          {marks.map((mark, i) => (
            <li key={i} className="flex items-center gap-2 text-ink-400">
              {mark}
              <span className="text-h-xs font-semibold tracking-tight">Logoipsum</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
